part of sudoku;

class Game {
  final StreamController _redrawController = StreamController.broadcast();
  Stream get redraw => _redrawController.stream;

  final Controller _controller;

  // Used to combine auto calculated candidates with user disabled ones
  late List<List<Set<int>>> _autoCandidates;
  late List<List<Set<int>>> _userCandidates;
  List<List<Set<int>>> get candidates => _autoCandidates.copy(withMerge: _userCandidates);

  // original puzzle values merged with user selected ones
  late List<List<int?>> _puzzle;
  late List<List<int?>> _entries;
  List<List<int?>> get values => _puzzle.copy(withMerge: _entries);
  bool setByPuzzle(int column, int row) => _puzzle[column][row] != null;

  late Map<int, Map<int, Map<int, Finding>>> _findings;
  Map<int, Finding> found(int column, int row) => _findings[column]?[row] ?? {};

  late EntryMode _mode = EntryMode.value;
  EntryMode get mode => _mode;

  int? _column;
  int? get column => _column;

  int? _row;
  int? get row => _row;

  int? get cube => getCube(_column, _row);

  bool get hasCursor => _column != null && _row != null;

  Game({required Controller controller}) : _controller = controller {
    _controller.input.listen(_handleInput);
    _initPuzzle();

    hardPuzzle.forEach(_handleInput);
  }

  _redraw() => _redrawController.add(_puzzle);

  void _handleInput(Input input) {
    switch (input.runtimeType) {
      case ResetInput:
        _initPuzzle();
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
  }

  void _initPuzzle() {
    _column = null;
    _row = null;
    _mode = EntryMode.puzzle;
    _puzzle = emptyPuzzle();
    _entries = emptyPuzzle();
    _autoCandidates = fullCandidates();
    _userCandidates = fullCandidates();
    _redraw();
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
    _updateFoundValues();
  }

  void _handleCursor(CursorInput cursorInput) {
    if (cursorInput.move != null) {
      _column = cursorInput.move!.nextColumn(_column);
      _row = cursorInput.move!.nextRow(_row);
    } else {
      _column = cursorInput.column;
      _row = cursorInput.row;
    }
    _redraw();
  }

  void _handleToggle(ToggleInput toggleInput) {
    if (hasCursor) {
      _toggleCell(_column!, _row!, toggleInput.value, _mode);
    }
  }

  void _toggleCell(int column, int row, int? value, EntryMode mode) {
    if (mode == EntryMode.puzzle) {
      _puzzle = _puzzle.copy()..toggle(column, row, value);
      _updateAutoCandidates();
    } else if (mode == EntryMode.value) {
      _entries = _entries.copy()..toggle(column, row, value);
      _updateAutoCandidates();
    } else if (mode == EntryMode.candidate) {
      _userCandidates = _userCandidates.copy()..toggle(column, row, value);
    }
    _updateFoundValues();
  }

  void _updateAutoCandidates() {
    _autoCandidates = findCandidates(values);
  }

  void _updateFoundValues() {
    _findings = findValues(values, candidates);

    if (_mode != EntryMode.puzzle && _findings.isNotEmpty) {
      final c = _findings.keys.first;
      final r = _findings[c]!.keys.first;
      final v = _findings[c]![r]!.keys.first;
      _clearFoundCell(c, r, v);
    }

    _redraw();
  }

  Future _clearFoundCell(int c, int r, int? v) async {
    await Future.delayed(Duration(milliseconds: 100));
    _toggleCell(c, r, v, EntryMode.value);
  }
}
