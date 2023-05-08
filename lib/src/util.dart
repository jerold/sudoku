part of sudoku;

const Set<int> possibleValues = {1, 2, 3, 4, 5, 6, 7, 8, 9};

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

enum Finding {
  lastStanding, // this is the only remaining place for a value in its row/column/cube
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

// cube index used for quickly finding out if coordinates are in the same cube
int? getCube(int? column, int? row) => row != null && column != null ? row ~/ 3 + column ~/ 3 * 3 : null;

List<int?> _emptyNine() => List.filled(9, null);
List<List<int?>> emptyPuzzle() => List.generate(9, (_) => _emptyNine());

Set<int> _allNine() => possibleValues.toSet();
List<List<Set<int>>> fullCandidates() => List.generate(9, (_) => List.generate(9, (__) => _allNine()));
List<List<Set<int>>> emptyCandidates() => List.generate(9, (_) => List.generate(9, (__) => {}));

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

extension CandidateX on List<List<Set<int>>> {
  List<List<Set<int>>> copy({List<List<Set<int>>>? withMerge}) {
    final candidates = emptyCandidates();
    if (withMerge != null) {
      for (int c = 0; c < 9; c++) {
        for (int r = 0; r < 9; r++) {
          for (final value in possibleValues) {
            if (this[c][r].contains(value) && withMerge[c][r].contains(value)) {
              candidates[c][r].add(value);
            }
          }
        }
      }
    } else {
      for (int c = 0; c < 9; c++) {
        for (int r = 0; r < 9; r++) {
          candidates[c][r] = this[c][r].toSet();
        }
      }
    }
    return candidates;
  }

  // passing a null value will reset the candidates (in case user makes a mistake)
  void toggle(int column, int row, int? value) {
    if (value == null) this[column][row] = _allNine();
    if (this[column][row].contains(value!)) {
      this[column][row].remove(value);
    } else {
      this[column][row].add(value);
    }
  }
}

// remove value from candidates within associated row/column/cube
List<List<Set<int>>> considering(List<List<int?>> values) {
  final candidates = fullCandidates();
  for (int c = 0; c < 9; c++) {
    for (int r = 0; r < 9; r++) {
      if (values[c][r] != null) {
        final value = values[c][r]!;
        for (int vc = 0; vc < 9; vc++) {
          for (int vr = 0; vr < 9; vr++) {
            if (vc == c || vr == r || getCube(vc, vr) == getCube(c, r)) {
              candidates[vc][vr].remove(value);
            }
          }
        }
      }
    }
  }
  return candidates;
}

// [column][row][candidate] = Finding
Map<int, Map<int, Finding>> annotate(List<List<int?>> values, List<List<Set<int>>> candidates) {
  final annotations = <int, Map<int, Finding>>{};
  final checked = emptyCandidates();
  for (int c = 0; c < 9; c++) {
    for (int r = 0; r < 9; r++) {
      for (int i = 0; i < 9; i++) {
        if (candidates[c][r].contains(i) && !checked[c][r].contains(i)) {
          checked[c][r].add(i);
          final options = _allNine();
        }
      }
    }
  }
  return annotations;
}

void iterateRow(int column, int row, Function(int c, int r) iterator) {
  for (int r = 0; r < 9; r++) {
    iterator(column, (row + r) % 9);
  }
}

void iterateColumn(int column, int row, Function(int c, int r) iterator) {
  for (int c = 0; c < 9; c++) {
    iterator((column + c) % 9, row);
  }
}

void iterateCube(int column, int row, Function(int c, int r) iterator) {
  final ic = column ~/ 3;
  final ir = row ~/ 3;
  for (int c = 0; c < 3; c++) {
    for (int r = 0; r < 3; r++) {
      iterator(ic + c, ir + r);
    }
  }
}
