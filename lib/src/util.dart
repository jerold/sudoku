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
  puzzle,
  value,
  candidate,
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
List<List<int?>> emptyPuzzle() => List.generate(9, (_) => _emptyNine());

List<bool> _allNine(bool set) => List.generate(9, (_) => set);
List<List<List<bool>>> allCandidates() => List.generate(9, (_) => List.generate(9, (__) => _allNine(true)));
List<List<List<bool>>> noneCandidates() => List.generate(9, (_) => List.generate(9, (__) => _allNine(false)));

extension PuzzleX on List<List<int?>> {
  // assume no intersections (if there are puzzle's value is trusted)
  List<List<int?>> copy({List<List<int?>>? withMerge}) {
    final puzzle = emptyPuzzle();
    for (int c = 0; c < 9; c++) {
      for (int r = 0; r < 9; r++) {
        puzzle[c][r] = this[c][r] ?? withMerge?[c][r];
      }
    }
    return puzzle;
  }

  void toggle(int column, int row, int? value) {
    if (this[column][row] == value) {
      this[column][row] = null;
      return;
    }
    this[column][row] = value;
  }
}

extension CandidateX on List<List<List<bool>>> {
  List<List<List<bool>>> copy({List<List<List<bool>>>? withMerge}) {
    final candidates = allCandidates();
    if (withMerge != null) {
      for (int c = 0; c < 9; c++) {
        for (int r = 0; r < 9; r++) {
          for (int i = 0; i < 9; i++) {
            candidates[c][r][i] = this[c][r][i] && withMerge[c][r][i];
          }
        }
      }
    } else {
      for (int c = 0; c < 9; c++) {
        for (int r = 0; r < 9; r++) {
          candidates[c][r] = this[c][r].toList();
        }
      }
    }
    return candidates;
  }

  // passing a null value will reset the candidates (in case user makes a mistake)
  void toggle(int column, int row, int? value) {
    if (value == null) this[column][row] = _allNine(true);
    this[column][row][value! - 1] = !this[column][row][value - 1];
  }
}

// remove value from candidates within associated row/column/cube
List<List<List<bool>>> considering(List<List<int?>> values) {
  final candidates = allCandidates();
  for (int c = 0; c < 9; c++) {
    for (int r = 0; r < 9; r++) {
      if (values[c][r] != null) {
        final value = values[c][r]!;
        for (int vc = 0; vc < 9; vc++) {
          for (int vr = 0; vr < 9; vr++) {
            if (vc == c || vr == r || getCube(vc, vr) == getCube(c, r)) {
              candidates[vc][vr][value - 1] = false;
            }
          }
        }
      }
    }
  }
  return candidates;
}
