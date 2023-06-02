part of sudoku;

class Game {
  final StreamController _redrawController = StreamController.broadcast();
  Stream get redraw => _redrawController.stream;

  final Controller _controller;

  // Used to combine auto calculated candidates with user disabled ones
  late List<List<Set<int>>> _autoCandidates;
  late List<List<List<Set<int>>>> _userCandidates; // historical: last is current
  List<List<Set<int>>> get candidates => _autoCandidates.copy(withMerge: _userCandidates.last);

  // original puzzle values merged with user selected ones
  late List<List<int?>> _puzzle;
  late List<List<List<int?>>> _entries; // historical: last is current
  List<List<int?>> get values => _puzzle.copy(withMerge: _entries.last);

  bool setByPuzzle(int column, int row) => _puzzle[column][row] != null;

  List<EntryMode> _history = [];

  late Map<int, Map<int, Map<int, Finding>>> _findings;
  Map<int, Finding> found(int column, int row) => _findings[column]?[row] ?? {};

  late Map<int, Map<int, bool>> _invalids;
  bool isValid(int column, int row) => !(_invalids.containsKey(column) && _invalids[column]!.containsKey(row));

  late EntryMode _mode = EntryMode.value;
  EntryMode get mode => _mode;

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

  final Set<int> _relatedY = {};
  final Set<int> _relatedX = {};
  final Set<int> _relatedB = {};
  bool related(int y, int x) =>
      (_relatedY.contains(y) || _relatedX.contains(x) || _relatedB.contains(getBox(y, x))) ||
      (_selectedValue != null && ((_puzzle[y][x] != null || _entries.last[y][x] != null)));

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
    parsedPuzzle(index, xWingPuzzles).forEach(_handleInput);
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
      case EntryModeInput:
        _handleEntryMode(input as EntryModeInput);
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
    _mode = EntryMode.puzzle;
    _puzzle = emptyPuzzle();
    _entries = [emptyPuzzle()];
    _autoCandidates = fullCandidates();
    _userCandidates = [fullCandidates()];
    _history = [];
    _invalids = {};
    _redraw();
  }

  void _handleRewind() {
    if (_history.isNotEmpty) {
      if (_history.last == EntryMode.value) {
        _entries.removeLast();
      } else if (_history.last == EntryMode.candidate) {
        _userCandidates.removeLast();
      }
      _history.removeLast();
      _calc();
    }
  }

  void _handleEntryMode(EntryModeInput entryModeInput) {
    // For saving off a puzzle for reentry on init
    // if (_mode == EntryMode.puzzle && _mode != entryModeInput.entryMode) {
    //   print("Puzzle START -------------");
    //   scanLine((y) {
    //     print("\"${values[y].map((v) => v ?? '0').join()}\",");
    //   });
    //   print("Puzzle END ---------------");
    // }

    _mode = entryModeInput.entryMode;
    if (_mode != EntryMode.puzzle) {
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

    _select(getValue(cursorY, cursorX));
    // print('[$_y][$_x][$_v]');
  }

  void _handleToggle(ToggleInput toggleInput) {
    if (!hasCursor) {
      _select(selectedValue != toggleInput.value ? toggleInput.value : null);
    }
    if (hasCursor) {
      _toggleCell(cursorY!, cursorX!, toggleInput.value, _mode);
      _select(toggleInput.value);
      _calc();
    }
  }

  void _select(int? value) {
    _selectedValue = value;
    final puzzle = values;
    _relatedY.clear();
    _relatedX.clear();
    _relatedB.clear();
    if (value != null) {
      scan((y, x) {
        if (puzzle[y][x] == value) {
          _relatedY.add(y);
          _relatedX.add(x);
          _relatedB.add(getBox(y, x)!);
        }
      });
    }
  }

  void _handleAuto({bool everything = false}) {
    if (_mode != EntryMode.puzzle && _findings.isNotEmpty && _invalids.isEmpty) {
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

  void _toggleCell(int cellY, int cellX, int? value, EntryMode mode) {
    if (mode == EntryMode.puzzle) {
      _puzzle = _puzzle.copy()..toggle(cellY, cellX, value);
    } else {
      if (mode == EntryMode.value) {
        _entries.add(_entries.last.copy()..toggle(cellY, cellX, value));
      } else if (mode == EntryMode.candidate) {
        _userCandidates.add(_userCandidates.last.copy()..toggle(cellY, cellX, value));
      }
      _history.add(mode);
    }
  }

  void _calc() {
    _autoCandidates = calcAutoCandidates(values);
    _findings = calcFindings(values, candidates); // ..debug();
    _invalids = calcInvalids(values, candidates);
  }
}
