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

  late Map<int, Map<int, bool>> _invalid;
  bool isValid(int column, int row) => !(_invalid.containsKey(column) && _invalid[column]!.containsKey(row));

  late EntryMode _mode = EntryMode.value;
  EntryMode get mode => _mode;

  int? _y;
  int? get column => _y;

  int? _x;
  int? get row => _x;

  int? get box => getBox(_y, _x);

  bool get hasCursor => _y != null && _x != null;

  Game({required Controller controller}) : _controller = controller {
    _controller.input.listen(_handleInput);
    _initPuzzle();

    expertPuzzle.forEach(_handleInput);
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
    }
    _redraw();
  }

  void _initPuzzle() {
    _y = null;
    _x = null;
    _mode = EntryMode.puzzle;
    _puzzle = emptyPuzzle();
    _entries = [emptyPuzzle()];
    _autoCandidates = fullCandidates();
    _userCandidates = [fullCandidates()];
    _history = [];
    _invalid = {};
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
      _calculate(auto: false);
    }
  }

  void _handleEntryMode(EntryModeInput entryModeInput) {
    // For saving off a puzzle for reentry on init
    // if (_mode == EntryMode.puzzle && _mode != entryModeInput.entryMode) {
    //   print("Puzzle START -------------");
    //   values.scan((column, row) {
    //     if (values[column][row] != null) {
    //       print("Input.cursor(column: $column, row: $row),");
    //       print("Input.toggle(value: ${values[column][row]}),");
    //     }
    //   });
    //   print("Puzzle END ---------------");
    // }

    _mode = entryModeInput.entryMode;
    if (_mode != EntryMode.puzzle) {
      _calculate();
    }
  }

  // either move is set, or y & x, or y & x are null which clears the cursor
  void _handleCursor(CursorInput cursorInput) {
    if (cursorInput.move != null) {
      _y = cursorInput.move!.nextY(_y);
      _x = cursorInput.move!.nextX(_x);
    } else {
      _y = cursorInput.column;
      _x = cursorInput.row;
    }
  }

  void _handleToggle(ToggleInput toggleInput) {
    if (hasCursor) {
      _toggleCell(_y!, _x!, toggleInput.value, _mode);
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
      _calculate();
    }
    _redraw();
  }

  void _calculate({bool auto = true}) {
    _autoCandidates = findCandidates(values);
    _findings = findValues(values, candidates);
    _invalid = validate(values, candidates);

    var count = 0;
    scan((y, x) {
      if (values[y][x] != null) {
        count++;
      }
    });
    print('$count / 81');

    if (auto && _mode != EntryMode.puzzle && _findings.isNotEmpty && _invalid.isEmpty) {
      final fy = _findings.keys.first;
      final fx = _findings[fy]!.keys.first;
      final fv = _findings[fy]![fx]!.keys.first;
      final fm = _findings[fy]![fx]![fv]!.mode;

      if (fm == Finding.forcedOut) return;
      _clearFoundCell(fy, fx, fv, fm);
    }
  }

  Future _clearFoundCell(int cellY, int cellX, int value, EntryMode mode) async {
    await Future.delayed(Duration(milliseconds: 50));
    _toggleCell(cellY, cellX, value, mode);
  }
}
