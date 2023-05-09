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

  int? _column;
  int? get column => _column;

  int? _row;
  int? get row => _row;

  int? get box => getBox(_column, _row);

  bool get hasCursor => _column != null && _row != null;

  Game({required Controller controller}) : _controller = controller {
    _controller.input.listen(_handleInput);
    _initPuzzle();

    evilPuzzle.forEach(_handleInput);
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
  }

  void _initPuzzle() {
    _column = null;
    _row = null;
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
      _updateAutoCandidates();
      _updateFoundValues(auto: false);
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
    _updateAutoCandidates();
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
      _entries.add(_entries.last.copy()..toggle(column, row, value));
      _history.add(mode);
      _updateAutoCandidates();
    } else if (mode == EntryMode.candidate) {
      _userCandidates.add(_userCandidates.last.copy()..toggle(column, row, value));
      _history.add(mode);
    }
    _updateFoundValues();
  }

  void _updateAutoCandidates() {
    _autoCandidates = findCandidates(values);
  }

  void _updateFoundValues({bool auto = true}) {
    _findings = findValues(values, candidates);
    _invalid = validate(values);

    if (auto && _mode != EntryMode.puzzle && _findings.isNotEmpty) {
      final c = _findings.keys.first;
      final r = _findings[c]!.keys.first;
      final v = _findings[c]![r]!.keys.first;
      _clearFoundCell(c, r, v);
    }

    _redraw();
  }

  Future _clearFoundCell(int c, int r, int? v) async {
    await Future.delayed(Duration(milliseconds: 50));
    _toggleCell(c, r, v, EntryMode.value);
  }
}
