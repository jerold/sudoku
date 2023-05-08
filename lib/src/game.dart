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

    final initialPuzzle = [
      Input.cursor(column: 0, row: 4),
      Input.toggle(value: 7),
      Input.cursor(column: 0, row: 5),
      Input.toggle(value: 6),
      Input.cursor(column: 0, row: 8),
      Input.toggle(value: 3),
      Input.cursor(column: 1, row: 4),
      Input.toggle(value: 8),
      Input.cursor(column: 2, row: 0),
      Input.toggle(value: 7),
      Input.cursor(column: 2, row: 1),
      Input.toggle(value: 3),
      Input.cursor(column: 2, row: 7),
      Input.toggle(value: 1),
      Input.cursor(column: 3, row: 1),
      Input.toggle(value: 9),
      Input.cursor(column: 3, row: 2),
      Input.toggle(value: 2),
      Input.cursor(column: 3, row: 6),
      Input.toggle(value: 4),
      Input.cursor(column: 4, row: 2),
      Input.toggle(value: 7),
      Input.cursor(column: 4, row: 4),
      Input.toggle(value: 6),
      Input.cursor(column: 4, row: 5),
      Input.toggle(value: 8),
      Input.cursor(column: 5, row: 4),
      Input.toggle(value: 4),
      Input.cursor(column: 5, row: 7),
      Input.toggle(value: 7),
      Input.cursor(column: 7, row: 3),
      Input.toggle(value: 2),
      Input.cursor(column: 7, row: 4),
      Input.toggle(value: 5),
      Input.cursor(column: 7, row: 5),
      Input.toggle(value: 7),
      Input.cursor(column: 7, row: 6),
      Input.toggle(value: 3),
      Input.cursor(column: 7, row: 8),
      Input.toggle(value: 6),
      Input.cursor(column: 8, row: 0),
      Input.toggle(value: 4),
      Input.cursor(column: 8, row: 7),
      Input.toggle(value: 5),
      Input.cursor(column: 8, row: 8),
      Input.toggle(value: 8),
      Input.entryMode(EntryMode.value),
    ];
    initialPuzzle.forEach(_handleInput);
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
    _redraw();
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
    if (_mode == EntryMode.puzzle && _mode != entryModeInput.entryMode) {
      print("Puzzle START -------------");
      values.scan((column, row) {
        if (values[column][row] != null) {
          print("Input.cursor(column: $column, row: $row),");
          print("Input.toggle(value: ${values[column][row]}),");
        }
      });
      print("Puzzle END ---------------");
    }
    _mode = entryModeInput.entryMode;
  }

  void _handleCursor(CursorInput cursorInput) {
    if (cursorInput.move != null) {
      _column = cursorInput.move!.nextColumn(_column);
      _row = cursorInput.move!.nextRow(_row);
    } else {
      _column = cursorInput.column;
      _row = cursorInput.row;
    }
  }

  void _handleToggle(ToggleInput toggleInput) {
    if (hasCursor) {
      if (_mode == EntryMode.puzzle) {
        _puzzle = _puzzle.copy()..toggle(_column!, _row!, toggleInput.value);
        _updateAutoCandidates();
      } else if (_mode == EntryMode.value) {
        _entries = _entries.copy()..toggle(_column!, _row!, toggleInput.value);
        _updateAutoCandidates();
      } else if (_mode == EntryMode.candidate) {
        _userCandidates = _userCandidates.copy()..toggle(_column!, _row!, toggleInput.value);
      }
    }
  }

  void _updateAutoCandidates() {
    _autoCandidates = considering(values);
    _findings = find(values, candidates);
  }
}
