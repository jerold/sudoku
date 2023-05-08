part of sudoku;

abstract class Input {
  factory Input.reset() => ResetInput();
  factory Input.cursor({int? column, int? row, Move? move}) => CursorInput(column, row, move);
  factory Input.toggle({int? value}) => ToggleInput(value);
}

class ResetInput implements Input {}

class CursorInput implements Input {
  CursorInput(this.column, this.row, this.move);
  final int? column, row;
  final Move? move;
}

class ToggleInput implements Input {
  ToggleInput(this.value);
  final int? value;
}

class ChangeModeInput implements Input {}
