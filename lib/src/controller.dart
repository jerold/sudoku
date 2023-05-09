part of sudoku;

Map<int, Input> bindings = {
  // reinitialize board
  KeyCode.ESC: Input.reset(),
  // rewind value
  KeyCode.BACKSPACE: Input.rewind(),
  // finish editing puzzle
  KeyCode.ENTER: Input.entryMode(EntryMode.value),
  // move cursor with arrow
  KeyCode.UP: Input.cursor(move: Move.up),
  KeyCode.DOWN: Input.cursor(move: Move.down),
  KeyCode.LEFT: Input.cursor(move: Move.left),
  KeyCode.RIGHT: Input.cursor(move: Move.right),
  // move cursor with wasd
  KeyCode.W: Input.cursor(move: Move.up),
  KeyCode.S: Input.cursor(move: Move.down),
  KeyCode.A: Input.cursor(move: Move.left),
  KeyCode.D: Input.cursor(move: Move.right),
  // value keys 1-9
  49: Input.toggle(value: 1),
  50: Input.toggle(value: 2),
  51: Input.toggle(value: 3),
  52: Input.toggle(value: 4),
  53: Input.toggle(value: 5),
  54: Input.toggle(value: 6),
  55: Input.toggle(value: 7),
  56: Input.toggle(value: 8),
  57: Input.toggle(value: 9),
  // change to candidate editing
  67: Input.entryMode(EntryMode.candidate),
  86: Input.entryMode(EntryMode.value),
};

const keyIds = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
};

class Controller {
  final StreamController<Input> _inputController = StreamController<Input>.broadcast();
  Stream<Input> get input => _inputController.stream;

  Element get _boardElement => querySelector('#board')!;
  Element get _keyboardElement => querySelector('#keyboard')!;

  Controller() {
    document.body?.onKeyDown.listen(_onKeyDown);
    document.body?.onClick.listen(_onClickBody);

    querySelector('#clear')!.onClick.listen((MouseEvent e) => _onInput(e, Input.reset()));
    querySelector('#nominate')!.onClick.listen((MouseEvent e) => _onInput(e, Input.entryMode(EntryMode.value)));
    querySelector('#candidate')!.onClick.listen((MouseEvent e) => _onInput(e, Input.entryMode(EntryMode.candidate)));
    querySelector('#rewind')!.onClick.listen((MouseEvent e) => _onInput(e, Input.rewind()));

    // tile listeners
    var i = 0;
    final children = _boardElement.children;
    for (int c = 0; c < 9; c++) {
      for (int r = 0; r < 9; r++) {
        children[i].onClick.listen(_onClickTile(c, r));
        i++;
      }
    }

    // keyboard listeners
    for (final value in keyIds.keys) {
      _keyboardElement.querySelector('#${keyIds[value]!}')!.onClick.listen(_onClickKey(value));
    }
  }

  _onKeyDown(KeyboardEvent e) {
    final keyCode = e.keyCode;
    if (bindings.containsKey(keyCode)) {
      _inputController.add(bindings[keyCode]!);
    }
  }

  _onInput(MouseEvent e, Input input) {
    e.stopPropagation();
    e.preventDefault();
    _inputController.add(input);
  }

  _onClickTile(int c, int r) => (MouseEvent e) {
        e.stopPropagation();
        e.preventDefault();
        _inputController.add(Input.cursor(column: c, row: r));
      };

  _onClickKey(int value) => (MouseEvent e) {
        e.stopPropagation();
        e.preventDefault();
        _inputController.add(Input.toggle(value: value));
      };

  _onClickBody(MouseEvent e) {
    e.stopPropagation();
    e.preventDefault();
    _inputController.add(Input.cursor());
  }
}
