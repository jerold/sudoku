part of sudoku;

class Game {
  final StreamController _redrawController = StreamController.broadcast();
  Stream get redraw => _redrawController.stream;

  final Controller _controller;

  // Used to combine auto calculated candidates with user disabled ones
  late List<List<Set<int>>> _candidates;
  late List<List<List<Set<int>>>> _userCandidates; // historical: last is current
  List<List<Set<int>>> get candidates => _candidates.copy(withMerge: _userCandidates.last);

  // original puzzle values merged with user selected ones
  late List<List<int?>> _puzzle;
  late List<List<List<int?>>> _entries; // historical: last is current
  List<List<int?>> get values => _puzzle.copy(withMerge: _entries.last);

  bool setByPuzzle(int column, int row) => _puzzle[column][row] != null;

  List<Mode> _history = [];

  late Map<int, Map<int, Map<int, Finding>>> _findings;
  late List<Map<int, Map<int, Map<int, Finding>>>> _notes; // historical: last is current
  Map<int, Finding> found(int column, int row) => _findings[column]?[row] ?? _notes.last[column]?[row] ?? {};

  late Map<int, Map<int, bool>> _invalids;
  bool isValid(int column, int row) => !(_invalids.containsKey(column) && _invalids[column]!.containsKey(row));

  late Mode _mode = Mode.entry;
  Mode get mode => _mode;

  int? _cursorY;
  int? get cursorY => _cursorY;

  int? _cursorX;
  int? get cursorX => _cursorX;

  int? get cursorBox => getBox(cursorY, cursorX);

  int? _selectedValue;
  int? get selectedValue => _selectedValue;
  bool selected(int y, int x) =>
      (y == cursorY && x == cursorX) ||
      (_selectedValue != null && (_puzzle[y][x] == _selectedValue || _entries.last[y][x] == _selectedValue));

  // final Set<int> _relatedY = {};
  // final Set<int> _relatedX = {};
  // final Set<int> _relatedB = {};
  Map<int, Map<Dimension, Set<int>>> _info = {};
  Map<int, Map<Dimension, Map<int, Set<int>>>> _counts = {};
  bool oneOfTwo(int y, int x, int value) {
    return _counts[value]?.keys.any((dimension) {
          return _counts[value]![dimension]!.keys.any((key) {
            switch (dimension) {
              case Dimension.y:
                // return false;
                return _counts[value]![dimension]![y]?.length == 2;
              case Dimension.x:
                // return false;
                return _counts[value]![dimension]![x]?.length == 2;
              case Dimension.b:
                return _counts[value]![dimension]?[getBox(y, x)]?.length == 2;
            }
          });
        }) ==
        true;
  }

  bool related(int y, int x) =>
      (_selectedValue != null && _info.possible(y, x, _selectedValue!)) &&
      (_puzzle[y][x] == null && _entries.last[y][x] == null);
  // (_relatedY.contains(y) || _relatedX.contains(x) || _relatedB.contains(getBox(y, x))) ||
  // (_selectedValue != null && ((_puzzle[y][x] != null || _entries.last[y][x] != null)));

  bool get hasCursor => cursorY != null && cursorX != null;
  int? getValue(int? y, int? x) => y != null && x != null ? values[y][x] : null;

  Game({required Controller controller}) : _controller = controller {
    _controller.input.listen(_handleInput);
    _initPuzzle();

    final rand = Random();
    _loadPuzzle(rand.nextInt(evilPuzzles.length));
  }

  void _loadPuzzle(int index) {
    print('Puzzle($index)');
    _initPuzzle();
    parsedPuzzle(index, evilPuzzles).forEach(_handleInput);
  }

  _redraw() => _redrawController.add(_puzzle);

  void _handleInput(Input input) {
    switch (input.runtimeType) {
      case ResetInput:
        _initPuzzle();
        break;
      case RewindInput:
        _handleRewind();
        break;
      case ModeInput:
        _handleMode(input as ModeInput);
        break;
      case CursorInput:
        _handleCursor(input as CursorInput);
        break;
      case ToggleInput:
        _handleToggle(input as ToggleInput);
        break;
      case AutoInput:
        _handleAuto(everything: false);
        break;
    }
    _redraw();
  }

  void _initPuzzle() {
    _cursorY = null;
    _cursorX = null;
    _mode = Mode.puzzle;
    _puzzle = emptyPuzzle();
    _entries = [emptyPuzzle()];
    _candidates = fullCandidates();
    _userCandidates = [fullCandidates()];
    _notes = [{}];
    _history = [];
    _invalids = {};
    _info = {};
    _counts = {};
    _redraw();
  }

  void _handleRewind() {
    if (_history.isNotEmpty) {
      if (_history.last == Mode.entry) {
        _entries.removeLast();
      } else if (_history.last == Mode.candidate) {
        _userCandidates.removeLast();
      } else if (_history.last == Mode.note) {
        _notes.removeLast();
      }
      _history.removeLast();
      _calc();
    }
  }

  void _handleMode(ModeInput modeInput) {
    // For saving off a puzzle for reentry on init
    // if (_mode == Mode.puzzle && _mode != ModeInput.Mode) {
    //   print("Puzzle START -------------");
    //   scanLine((y) {
    //     print("\"${values[y].map((v) => v ?? '0').join()}\",");
    //   });
    //   print("Puzzle END ---------------");
    // }

    _mode = modeInput.mode;
    if (_mode != Mode.puzzle) {
      _calc();
    }
  }

  // either move is set, or y & x, or y & x are null which clears the cursor
  void _handleCursor(CursorInput cursorInput) {
    if (cursorInput.move != null) {
      _cursorY = cursorInput.move!.nextY(cursorY);
      _cursorX = cursorInput.move!.nextX(cursorX);
    } else {
      _cursorY = cursorInput.y;
      _cursorX = cursorInput.x;
    }

    if (hasCursor) {
      print('Cursor Values -------------------');
      final vals = <String>[];
      for (final value in possibleValues) {
        if (_counts[value]?[Dimension.y]?[_cursorY]?.isNotEmpty == true) {
          vals.add(value.toString());
        } else {
          vals.add(' ');
        }
      }
      print('  col values: ${vals.join(" ")}');
      vals.clear();
      for (final value in possibleValues) {
        if (_counts[value]?[Dimension.x]?[_cursorX]?.isNotEmpty == true) {
          vals.add(value.toString());
        } else {
          vals.add(' ');
        }
      }
      print('  row values: ${vals.join(" ")}');
      vals.clear();
      final b = getBox(_cursorY, _cursorX);
      for (final value in possibleValues) {
        if (_counts[value]?[Dimension.b]?[b]?.isNotEmpty == true) {
          vals.add(value.toString());
        } else {
          vals.add(' ');
        }
      }
      print('  box values: ${vals.join(" ")}');
    }

    _select(getValue(cursorY, cursorX));
    // print('[$_y][$_x][$_v]');
  }

  void _handleToggle(ToggleInput toggleInput) {
    if (!hasCursor) {
      _select(selectedValue != toggleInput.value ? toggleInput.value : null);
    }
    if (hasCursor) {
      _toggleCell(cursorY!, cursorX!, toggleInput.value, _mode);
      if (_mode != Mode.note) _select(toggleInput.value);
      _calc();
    }
  }

  void _select(int? value) {
    _selectedValue = value;
    // final puzzle = values;
    // _relatedY.clear();
    // _relatedX.clear();
    // _relatedB.clear();
    // if (value != null) {
    //   scan((y, x) {
    //     if (puzzle[y][x] == value) {
    //       _relatedY.add(y);
    //       _relatedX.add(x);
    //       _relatedB.add(getBox(y, x)!);
    //     }
    //   });
    // }
  }

  void _handleAuto({bool everything = false}) {
    if (_mode != Mode.puzzle && _findings.isNotEmpty && _invalids.isEmpty) {
      if (everything) {
        // recursively solve everything there is a strategy to solve
        for (final fy in _findings.keys) {
          for (final fx in _findings[fy]!.keys) {
            for (final fv in _findings[fy]![fx]!.keys) {
              final fm = _findings[fy]![fx]![fv]!.mode;
              _toggleCell(fy, fx, fv, fm);
            }
          }
        }
        _calc();
        _handleAuto(everything: everything);
      } else {
        // solve a single cell
        final fy = _findings.keys.first;
        final fx = _findings[fy]!.keys.first;
        final fv = _findings[fy]![fx]!.keys.first;
        final fm = _findings[fy]![fx]![fv]!.mode;
        _toggleCell(fy, fx, fv, fm);
        _calc();
      }
    }
  }

  void _toggleCell(int cellY, int cellX, int? value, Mode mode) {
    if (mode == Mode.puzzle) {
      _puzzle = _puzzle.copy()..toggle(cellY, cellX, value);
    } else {
      if (mode == Mode.entry) {
        _entries.add(_entries.last.copy()..toggle(cellY, cellX, value));
      } else if (mode == Mode.candidate) {
        _userCandidates.add(_userCandidates.last.copy()..toggle(cellY, cellX, value));
      } else if (mode == Mode.note) {
        _notes.add(_notes.last.copy()..toggle(cellY, cellX, value));
      }
      _history.add(mode);
    }
  }

  void _calc() {
    final v = values;
    _candidates = calcCandidates(v);

    final c = candidates;
    _info = calcInfo(v);
    _counts = calcCounts(v, _info);

    if (_mode != Mode.puzzle) {
      _findings = calcFindings(v, c, _info, _counts); // ..debug();
    }

    _invalids = calcInvalids(v, c);
  }
}
