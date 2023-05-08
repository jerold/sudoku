part of sudoku;

// indicate which direction to move the cursor
enum Move {
  up,
  down,
  left,
  right,
}

// indicate wether value or candidate will be toggled
enum EntryMode {
  value,
  candidate,
}

enum ToggleResult {
  insert,
  remove,
}

extension MoveX on Move {
  int nextColumn(int? column) {
    switch (this) {
      case Move.up:
        return column != null ? (column - 1) % 9 : 8;
      case Move.down:
        return column != null ? (column + 1) % 9 : 0;
      case Move.left:
        return column ?? 4;
      case Move.right:
        return column ?? 4;
    }
  }

  int nextRow(int? row) {
    switch (this) {
      case Move.up:
        return row ?? 4;
      case Move.down:
        return row ?? 4;
      case Move.left:
        return row != null ? (row - 1) % 9 : 8;
      case Move.right:
        return row != null ? (row + 1) % 9 : 0;
    }
  }
}

int? getCube(int? column, int? row) => row != null && column != null ? row ~/ 3 + column ~/ 3 * 3 : null;

List<int?> _emptyNine() => List.filled(9, null);
List<int?> _allNine() => List.generate(9, (index) => index + 1);

List<List<int?>> emptyPuzzle() => List.generate(9, (_) => _emptyNine());
List<List<List<int?>>> emptyCandidates() => List.generate(9, (_) => List.generate(9, (__) => _emptyNine()));
List<List<List<int?>>> newPuzzleCandidates() => List.generate(9, (_) => List.generate(9, (__) => _allNine()));

extension PuzzleX on List<List<int?>> {
  List<List<int?>> copy({List<List<int?>>? withMask}) {
    final puzzle = emptyPuzzle();
    for (int c = 0; c < 9; c++) {
      for (int r = 0; r < 9; r++) {
        puzzle[c][r] = withMask?[c][r] ?? this[c][r];
      }
    }
    return puzzle;
  }

  ToggleResult toggle(int column, int row, int? value) {
    if (this[column][row] == value) {
      this[column][row] = null;
      return ToggleResult.remove;
    }
    this[column][row] = value;
    return ToggleResult.insert;
  }
}

extension CandidateX on List<List<List<int?>>> {
  List<List<List<int?>>> copy() {
    final puzzle = emptyCandidates();
    for (int c = 0; c < 9; c++) {
      for (int r = 0; r < 9; r++) {
        puzzle[c][r] = this[c][r].toList();
      }
    }
    return puzzle;
  }

  ToggleResult toggle(int column, int row, int value) {
    if (this[column][row][value - 1] == value) {
      this[column][row][value - 1] = null;
      return ToggleResult.remove;
    }
    this[column][row][value - 1] = value;
    return ToggleResult.insert;
  }
}
