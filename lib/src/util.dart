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

extension FindingX on Finding {
  String get className {
    switch (this) {
      case Finding.lastStanding:
        return 'last-standing';
    }
  }
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

// Box index used for quickly finding out if coordinates are in the same Box
int? getBox(int? column, int? row) => row != null && column != null ? row ~/ 3 + column ~/ 3 * 3 : null;

List<int?> _emptyNine() => List.filled(9, null);
List<List<int?>> emptyPuzzle() => List.generate(9, (_) => _emptyNine());

Set<int> _allNine() => possibleValues.toSet();
List<List<Set<int>>> fullCandidates() => List.generate(9, (_) => List.generate(9, (__) => _allNine()));
List<List<Set<int>>> emptyCandidates() => List.generate(9, (_) => List.generate(9, (__) => {}));

extension Griderate<T> on List<List<T>> {
  // iterate over all columns and rows in the 2D array
  void scan(Function(int column, int row) iterator) {
    for (int c = 0; c < length; c++) {
      for (int r = 0; r < this[c].length; r++) {
        iterator(c, r);
      }
    }
  }
}

extension PuzzleX on List<List<int?>> {
  // assume no intersections (if there are puzzle's value is trusted)
  List<List<int?>> copy({List<List<int?>>? withMerge}) {
    final puzzle = emptyPuzzle();
    puzzle.scan((c, r) => puzzle[c][r] = this[c][r] ?? withMerge?[c][r]);
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
      scan((c, r) {
        for (final value in possibleValues) {
          if (this[c][r].contains(value) && withMerge[c][r].contains(value)) {
            candidates[c][r].add(value);
          }
        }
      });
    } else {
      scan((c, r) => candidates[c][r] = this[c][r].toSet());
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

// find any values that conflict with
Map<int, Map<int, bool>> validate(List<List<int?>> values) {
  final invalid = <int, Map<int, bool>>{};
  values.scan((c, r) {
    final value = values[c][r];
    if (value != null) {
      var count = 1;
      validateDimention(Iterator iterator) {
        iterator(c, r, (column, row) {
          if (c != column || r != row) {
            if (value == values[column][row]) {
              count++;
            }
          }
        });
      }

      validateDimention(iterateColumn);
      validateDimention(iterateRow);
      validateDimention(iterateBox);

      if (count > 1) {
        invalid.putIfAbsent(c, () => <int, bool>{});
        invalid[c]![r] = false;
      }
    }
  });
  return invalid;
}

// remove value from candidates within associated row/column/cube
List<List<Set<int>>> findCandidates(List<List<int?>> values) {
  final candidates = fullCandidates();
  values.scan((c, r) {
    if (values[c][r] != null) {
      final value = values[c][r]!;
      candidates.scan((column, row) {
        if (column == c || row == r || getBox(column, row) == getBox(c, r)) {
          candidates[column][row].remove(value);
        }
      });
    }
  });
  return candidates;
}

// [column][row][candidate] = Finding
Map<int, Map<int, Map<int, Finding>>> findValues(List<List<int?>> values, List<List<Set<int>>> candidates) {
  final annotations = <int, Map<int, Map<int, Finding>>>{};

  candidates.scan((c, r) {
    if (values[c][r] != null) return;

    if (candidates[c][r].length == 1) {
      final lastStandingValue = candidates[c][r].first;
      annotations.putIfAbsent(c, () => <int, Map<int, Finding>>{});
      annotations[c]!.putIfAbsent(r, () => <int, Finding>{});
      annotations[c]![r]![lastStandingValue] = Finding.lastStanding;
    } else {
      var foundLastStandingValue = false;
      checkForLastStanding(Iterator dimensionIterator) {
        if (!foundLastStandingValue) {
          var remainingOptions = _allNine();
          dimensionIterator(c, r, (column, row) {
            final value = values[column][row];
            if (c != column || r != row) {
              if (value != null) {
                remainingOptions.remove(value);
              } else {
                remainingOptions.removeAll(candidates[column][row]);
              }
            }
          });
          if (remainingOptions.length == 1) {
            final lastStandingValue = remainingOptions.first;
            annotations.putIfAbsent(c, () => <int, Map<int, Finding>>{});
            annotations[c]!.putIfAbsent(r, () => <int, Finding>{});
            annotations[c]![r]![lastStandingValue] = Finding.lastStanding;
            foundLastStandingValue = true;
          }
        }
      }

      checkForLastStanding(iterateColumn);
      checkForLastStanding(iterateRow);
      checkForLastStanding(iterateBox);
    }
  });
  return annotations;
}

// where column row determine which dimensions to iterate
typedef Iterator = Function(int column, int row, Function(int, int) iterator);

void iterateColumn(int column, int row, Function(int, int) iterator) {
  for (int c = 0; c < 9; c++) {
    iterator((column + c) % 9, row);
  }
}

void iterateRow(int column, int row, Function(int, int) iterator) {
  for (int r = 0; r < 9; r++) {
    iterator(column, (row + r) % 9);
  }
}

const _emptyBox = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

void iterateBox(int column, int row, Function(int, int) iterator) {
  final ic = column ~/ 3;
  final ir = row ~/ 3;
  _emptyBox.scan((c, r) => iterator(ic * 3 + c, ir * 3 + r));
}
