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
  forcedOut, // this candidate can be removed as the value must exist in its row/column in a different cube
}

extension FindingX on Finding {
  String get className {
    switch (this) {
      case Finding.lastStanding:
        return 'last-standing';
      case Finding.forcedOut:
        return 'forced-out';
    }
  }

  EntryMode get mode {
    switch (this) {
      case Finding.lastStanding:
        return EntryMode.value;
      case Finding.forcedOut:
        return EntryMode.candidate;
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

extension PuzzleX on List<List<int?>> {
  // assume no intersections (if there are puzzle's value is trusted)
  List<List<int?>> copy({List<List<int?>>? withMerge}) {
    final puzzle = emptyPuzzle();
    scan((c, r) => puzzle[c][r] = this[c][r] ?? withMerge?[c][r]);
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

extension FindingsX on Map<int, Map<int, Map<int, Finding>>> {
  void combine(Map<int, Map<int, Map<int, Finding>>> other) {
    for (final cKey in other.keys) {
      putIfAbsent(cKey, () => <int, Map<int, Finding>>{});
      final rKeys = other[cKey]!.keys;
      for (final rKey in rKeys) {
        this[cKey]!.putIfAbsent(rKey, () => <int, Finding>{});
        final vKeys = other[cKey]![rKey]!.keys;
        for (final vKey in vKeys) {
          this[cKey]![rKey]![vKey] = other[cKey]![rKey]![vKey]!;
        }
      }
    }
  }
}

// find any values that conflict with
Map<int, Map<int, bool>> validate(List<List<int?>> values, List<List<Set<int>>> candidates) {
  final invalid = <int, Map<int, bool>>{};
  scan((c, r) {
    final value = values[c][r];

    if (value == null) {
      if (candidates[c][r].isEmpty) {
        invalid.putIfAbsent(c, () => <int, bool>{});
        invalid[c]![r] = true;
      }
    } else {
      var valueCount = 1;
      validateDimention(Iterator iterator) {
        iterator(c, r, (column, row) {
          if (c != column || r != row) {
            if (value == values[column][row]) {
              valueCount++;
            }
          }
        });
      }

      validateDimention(iterateColumn);
      validateDimention(iterateRow);
      validateDimention(iterateBox);

      if (valueCount > 1) {
        invalid.putIfAbsent(c, () => <int, bool>{});
        invalid[c]![r] = true;
      }
    }
  });
  return invalid;
}

// remove value from candidates within associated row/column/cube
List<List<Set<int>>> findCandidates(List<List<int?>> values) {
  final candidates = fullCandidates();
  scan((c, r) {
    if (values[c][r] != null) {
      final value = values[c][r]!;
      scan((column, row) {
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
  final findings = <int, Map<int, Map<int, Finding>>>{};

  findings.combine(findForcedOutCandidates(values, candidates));
  findings.combine(findLastStandingValues(values, candidates));

  return findings;
}

// find candidates that can only be in a single row or column in the box, remove it from other boxes in that same row/column
Map<int, Map<int, Map<int, Finding>>> findForcedOutCandidates(
  List<List<int?>> values,
  List<List<Set<int>>> candidates,
) {
  final findings = <int, Map<int, Map<int, Finding>>>{};

  // iterate each of the 9 boxes
  scan((c, r) {
    final bc = c * 3;
    final br = r * 3;

    final valueColumns = <int, Set<int>>{};
    final valueRows = <int, Set<int>>{};
    final columns = <int>{};
    final rows = <int>{};
    // within this box see if any candidate is in a single column or row
    iterateBox(bc, br, (column, row) {
      columns.add(column);
      rows.add(row);
      if (values[column][row] == null) {
        for (final candidate in candidates[column][row]) {
          valueColumns.putIfAbsent(candidate, () => <int>{});
          valueColumns[candidate]!.add(column);
          valueRows.putIfAbsent(candidate, () => <int>{});
          valueRows[candidate]!.add(row);
        }
      }
    });

    valueColumns.forEach((value, column) {
      if (column.length == 1) {
        iterateRow(column.first, valueRows[value]!.first, (vc, vr) {
          if (!rows.contains(vr) && candidates[vc][vr].contains(value)) {
            findings.putIfAbsent(vc, () => <int, Map<int, Finding>>{});
            findings[vc]!.putIfAbsent(vr, () => <int, Finding>{});
            findings[vc]![vr]![value] = Finding.forcedOut;
          }
        });
      }
    });

    valueRows.forEach((value, row) {
      if (row.length == 1) {
        iterateColumn(valueColumns[value]!.first, row.first, (vc, vr) {
          if (!columns.contains(vc) && candidates[vc][vr].contains(value)) {
            findings.putIfAbsent(vc, () => <int, Map<int, Finding>>{});
            findings[vc]!.putIfAbsent(vr, () => <int, Finding>{});
            findings[vc]![vr]![value] = Finding.forcedOut;
          }
        });
      }
    });
  }, size: 3);

  // if (findings.isNotEmpty) throw Exception('aha');

  return findings;
}

// remove options from the shared row/column/box, if only one remains that is [c][r]'s value
Map<int, Map<int, Map<int, Finding>>> findLastStandingValues(
  List<List<int?>> values,
  List<List<Set<int>>> candidates,
) {
  final findings = <int, Map<int, Map<int, Finding>>>{};

  scan((c, r) {
    if (values[c][r] != null) return;
    if (candidates[c][r].length == 1) {
      // if there's only one candidate for a given cell, and nothing's gone wrong so far, it must be the value right
      findings.putIfAbsent(c, () => <int, Map<int, Finding>>{});
      findings[c]!.putIfAbsent(r, () => <int, Finding>{});
      findings[c]![r]![candidates[c][r].first] = Finding.lastStanding;
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
            findings.putIfAbsent(c, () => <int, Map<int, Finding>>{});
            findings[c]!.putIfAbsent(r, () => <int, Finding>{});
            findings[c]![r]![remainingOptions.first] = Finding.lastStanding;
            foundLastStandingValue = true;
          }
        }
      }

      checkForLastStanding(iterateColumn);
      checkForLastStanding(iterateRow);
      checkForLastStanding(iterateBox);
    }
  });

  return findings;
}

// where column row determine which dimensions to iterate
typedef Iterator = Function(int column, int row, Function(int, int) iterator);

void scan(Function(int, int) iterator, {int size = 9}) {
  for (int c = 0; c < size; c++) {
    for (int r = 0; r < size; r++) {
      iterator(c, r);
    }
  }
}

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

void iterateBox(int column, int row, Function(int, int) iterator) {
  final ic = column ~/ 3;
  final ir = row ~/ 3;
  scan((c, r) => iterator(ic * 3 + c, ir * 3 + r), size: 3);
}
