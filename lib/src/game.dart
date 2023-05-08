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
  }
}
