part of sudoku;

abstract class Input {
  factory Input.reset() => ResetInput();
  factory Input.rewind() => RewindInput();
  factory Input.entryMode(EntryMode mode) => EntryModeInput(mode);
  factory Input.cursor({int? column, int? row, Move? move}) => CursorInput(column, row, move);
  factory Input.toggle({int? value}) => ToggleInput(value);
  factory Input.auto() => AutoInput();
}

class ResetInput implements Input {}

class RewindInput implements Input {}

class EntryModeInput implements Input {
  EntryModeInput(this.entryMode);
  final EntryMode entryMode;
}

class CursorInput implements Input {
  CursorInput(this.column, this.row, this.move);
  final int? column, row;
  final Move? move;
}

class ToggleInput implements Input {
  ToggleInput(this.value);
  final int? value;
}

class AutoInput implements Input {}
