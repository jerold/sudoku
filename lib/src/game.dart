part of sudoku;

class Game {
  final StreamController _redrawController = StreamController.broadcast();
  Stream get redraw => _redrawController.stream;

  final Controller _controller;

  // history of entered values (last is current)
  final List<List<List<int?>>> _values = [];

  // history of available candidated (last is current)
  final List<List<List<List<int?>>>> _candidates = [];
  List<List<List<int?>>> get candidates => _candidates.last;

  // original puzzle values
  late List<List<int?>> _puzzle;
  List<List<int?>> get puzzle => _puzzle.copy(withMask: _values.last);

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
      case CursorInput:
        _handleCursor(input as CursorInput);
        break;
      case ToggleInput:
        _handleToggle(input as ToggleInput);
        break;
    }
    print('_handleInput($input)');
    _redraw();
  }

  void _initPuzzle() {
    _column = null;
    _row = null;
    _mode = EntryMode.value;
    _puzzle = emptyPuzzle();
    _values
      ..clear()
      ..add(emptyPuzzle());
    _candidates
      ..clear()
      ..add(newPuzzleCandidates());
    _redraw();
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
      if (_mode == EntryMode.value) {
        _values.add(_values.last.copy()..toggle(_column!, _row!, toggleInput.value));
      }
    }
  }
}
