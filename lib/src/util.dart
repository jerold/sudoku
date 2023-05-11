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
  neededElsewhere, // this candidate can only by in one of a known set of cells, and this cell isn't one of them
}

extension FindingX on Finding {
  String get className {
    switch (this) {
      case Finding.lastStanding:
        return 'last-standing';
      case Finding.forcedOut:
        return 'forced-out';
      case Finding.neededElsewhere:
        return 'needed-elsewhere';
    }
  }

  EntryMode get mode {
    switch (this) {
      case Finding.lastStanding:
        return EntryMode.value;
      case Finding.forcedOut:
        return EntryMode.candidate;
      case Finding.neededElsewhere:
        return EntryMode.candidate;
    }
  }
}

extension MoveX on Move {
  int nextY(int? y) {
    switch (this) {
      case Move.up:
        return y != null ? (y - 1) % 9 : 8;
      case Move.down:
        return y != null ? (y + 1) % 9 : 0;
      case Move.left:
        return y ?? 4;
      case Move.right:
        return y ?? 4;
    }
  }

  int nextX(int? x) {
    switch (this) {
      case Move.up:
        return x ?? 4;
      case Move.down:
        return x ?? 4;
      case Move.left:
        return x != null ? (x - 1) % 9 : 8;
      case Move.right:
        return x != null ? (x + 1) % 9 : 0;
    }
  }
}

// Box index used for quickly finding out if coordinates are in the same Box
int? getBox(int? y, int? x) => x != null && y != null ? x ~/ 3 + y ~/ 3 * 3 : null;

List<int?> _emptyNine() => List.filled(9, null);
List<List<int?>> emptyPuzzle() => List.generate(9, (_) => _emptyNine());

Set<int> _allNine() => possibleValues.toSet();
List<List<Set<int>>> fullCandidates() => List.generate(9, (_) => List.generate(9, (__) => _allNine()));
List<List<Set<int>>> emptyCandidates() => List.generate(9, (_) => List.generate(9, (__) => {}));

extension PuzzleX on List<List<int?>> {
  // assume no intersections (if there are puzzle's value is trusted)
  List<List<int?>> copy({List<List<int?>>? withMerge}) {
    final puzzle = emptyPuzzle();
    scan((y, x) => puzzle[y][x] = this[y][x] ?? withMerge?[y][x]);
    return puzzle;
  }

  void toggle(int y, int x, int? value) {
    if (this[y][x] == value) {
      this[y][x] = null;
      return;
    }
    this[y][x] = value;
  }
}

extension CandidateX on List<List<Set<int>>> {
  List<List<Set<int>>> copy({List<List<Set<int>>>? withMerge}) {
    final candidates = emptyCandidates();
    if (withMerge != null) {
      scan((y, x) {
        for (final value in possibleValues) {
          if (this[y][x].contains(value) && withMerge[y][x].contains(value)) {
            candidates[y][x].add(value);
          }
        }
      });
    } else {
      scan((y, x) => candidates[y][x] = this[y][x].toSet());
    }
    return candidates;
  }

  // passing a null value will reset the candidates (in case user makes a mistake)
  void toggle(int y, int x, int? value) {
    if (value == null) this[y][x] = _allNine();
    if (this[y][x].contains(value!)) {
      this[y][x].remove(value);
    } else {
      this[y][x].add(value);
    }
  }
}

extension FindingsX on Map<int, Map<int, Map<int, Finding>>> {
  void combine(Map<int, Map<int, Map<int, Finding>>> other) {
    for (final y in other.keys) {
      putIfAbsent(y, () => <int, Map<int, Finding>>{});
      for (final x in other[y]!.keys) {
        this[y]!.putIfAbsent(x, () => <int, Finding>{});
        for (final value in other[y]![x]!.keys) {
          this[y]![x]![value] = other[y]![x]![value]!;
        }
      }
    }
  }
}

// find any values that conflict with
Map<int, Map<int, bool>> validate(List<List<int?>> values, List<List<Set<int>>> candidates) {
  final invalid = <int, Map<int, bool>>{};
  scan((y, x) {
    final value = values[y][x];

    if (value == null) {
      if (candidates[y][x].isEmpty) {
        invalid.putIfAbsent(y, () => <int, bool>{});
        invalid[y]![x] = true;
      }
    } else {
      var valueCount = 1;
      validateDimention(Iterator iterator) {
        iterator(y, x, (iy, ix) {
          if (y != iy || x != ix) {
            if (value == values[iy][ix]) {
              valueCount++;
            }
          }
        });
      }

      validateDimention(scanColumn);
      validateDimention(scanRow);
      validateDimention(scanBox);

      if (valueCount > 1) {
        invalid.putIfAbsent(y, () => <int, bool>{});
        invalid[y]![x] = true;
      }
    }
  });
  return invalid;
}

// remove value from candidates within associated row/column/cube
List<List<Set<int>>> findCandidates(List<List<int?>> values) {
  final candidates = fullCandidates();
  scan((y, x) {
    if (values[y][x] != null) {
      final value = values[y][x]!;
      scanColumn(y, x, (iy, ix) => candidates[iy][ix].remove(value));
      scanRow(y, x, (iy, ix) => candidates[iy][ix].remove(value));
      scanBox(y, x, (iy, ix) => candidates[iy][ix].remove(value));
    }
  });
  return candidates;
}

// [y][x][value/candidate] = Finding
Map<int, Map<int, Map<int, Finding>>> findValues(List<List<int?>> values, List<List<Set<int>>> candidates) {
  final findings = <int, Map<int, Map<int, Finding>>>{};

  findings.combine(findForcedOutCandidates(values, candidates));
  findings.combine(findLastStandingValues(values, candidates));
  findings.combine(findNeededElsewhereCandidates(values, candidates));

  return findings;
}

// if a the same n-sized Set appears as the only candidates of n cells, that Set's candidates must exist in only those cells
Map<int, Map<int, Map<int, Finding>>> findNeededElsewhereCandidates(
  List<List<int?>> values,
  List<List<Set<int>>> candidates,
) {
  final findings = <int, Map<int, Map<int, Finding>>>{};

  // TODO: figure out why puzzle 42 breaks this.
  for (int setSize = 2; setSize < 9; setSize++) {
    scanLine((i) {
      checkForNeededElsewhere(IthIterator ithIterator) {
        final setCounts = <String, int>{};
        final sets = <String, Set<int>>{};
        ithIterator(i, (y, x) {
          if (values[y][x] == null && candidates[y][x].length == setSize) {
            final setKey = candidates[y][x].toString();
            setCounts[setKey] = (setCounts[setKey] ?? 0) + 1;
            sets.putIfAbsent(setKey, () => candidates[y][x]);
          }
        });
        for (final setKey in setCounts.keys) {
          if (setCounts[setKey] == setSize) {
            final candidatesNeededElsewhere = sets[setKey]!;
            ithIterator(i, (y, x) {
              if (setKey != candidates[y][x].toString()) {
                for (final value in candidatesNeededElsewhere) {
                  if (candidates[y][x].contains(value)) {
                    findings.putIfAbsent(y, () => <int, Map<int, Finding>>{});
                    findings[y]!.putIfAbsent(x, () => <int, Finding>{});
                    findings[y]![x]![value] = Finding.neededElsewhere;
                  }
                }
              }
            });
          }
        }
      }

      // scan all rows/columns/boxes
      checkForNeededElsewhere(scanIthColumn);
      checkForNeededElsewhere(scanIthRow);
      checkForNeededElsewhere(scanIthBox);
    });
  }
  return findings;
}

// find candidates that can only be in a single row or column in the box, remove it from other boxes in that same row/column
Map<int, Map<int, Map<int, Finding>>> findForcedOutCandidates(
  List<List<int?>> values,
  List<List<Set<int>>> candidates,
) {
  final findings = <int, Map<int, Map<int, Finding>>>{};

  // iterate each of the 9 boxes
  scan((y, x) {
    final by = y * 3;
    final bx = x * 3;

    final valueYs = <int, Set<int>>{};
    final valueXs = <int, Set<int>>{};
    final scanYs = <int>{};
    final scanXs = <int>{};
    // within this box see if any candidate is in a single column or row
    scanBox(by, bx, (iy, ix) {
      scanYs.add(iy);
      scanXs.add(ix);
      if (values[iy][ix] == null) {
        for (final candidate in candidates[iy][ix]) {
          valueYs.putIfAbsent(candidate, () => <int>{});
          valueYs[candidate]!.add(iy);
          valueXs.putIfAbsent(candidate, () => <int>{});
          valueXs[candidate]!.add(ix);
        }
      }
    });

    valueYs.forEach((value, vy) {
      if (vy.length == 1) {
        scanRow(vy.first, valueXs[value]!.first, (iy, ix) {
          if (!scanXs.contains(ix) && candidates[iy][ix].contains(value)) {
            findings.putIfAbsent(iy, () => <int, Map<int, Finding>>{});
            findings[iy]!.putIfAbsent(ix, () => <int, Finding>{});
            findings[iy]![ix]![value] = Finding.forcedOut;
          }
        });
      }
    });

    valueXs.forEach((value, vx) {
      if (vx.length == 1) {
        scanColumn(valueYs[value]!.first, vx.first, (iy, ix) {
          if (!scanYs.contains(iy) && candidates[iy][ix].contains(value)) {
            findings.putIfAbsent(iy, () => <int, Map<int, Finding>>{});
            findings[iy]!.putIfAbsent(ix, () => <int, Finding>{});
            findings[iy]![ix]![value] = Finding.forcedOut;
          }
        });
      }
    });
  }, size: 3);

  return findings;
}

// remove options from the shared row/column/box, if only one remains that is [y][x]'s value
Map<int, Map<int, Map<int, Finding>>> findLastStandingValues(
  List<List<int?>> values,
  List<List<Set<int>>> candidates,
) {
  final findings = <int, Map<int, Map<int, Finding>>>{};

  scan((y, x) {
    if (values[y][x] != null) return;
    if (candidates[y][x].length == 1) {
      // if there's only one candidate for a given cell, and nothing's gone wrong so far, it must be the value right
      findings.putIfAbsent(y, () => <int, Map<int, Finding>>{});
      findings[y]!.putIfAbsent(x, () => <int, Finding>{});
      findings[y]![x]![candidates[y][x].first] = Finding.lastStanding;
    } else {
      var foundLastStandingValue = false;
      checkForLastStanding(Iterator iterator) {
        if (!foundLastStandingValue) {
          var remainingOptions = _allNine();
          iterator(y, x, (iy, ix) {
            final value = values[iy][ix];
            if (y != iy || x != ix) {
              if (value != null) {
                remainingOptions.remove(value);
              } else {
                remainingOptions.removeAll(candidates[iy][ix]);
              }
            }
          });
          if (remainingOptions.length == 1) {
            findings.putIfAbsent(y, () => <int, Map<int, Finding>>{});
            findings[y]!.putIfAbsent(x, () => <int, Finding>{});
            findings[y]![x]![remainingOptions.first] = Finding.lastStanding;
            foundLastStandingValue = true;
          }
        }
      }

      checkForLastStanding(scanColumn);
      checkForLastStanding(scanRow);
      checkForLastStanding(scanBox);
    }
  });

  return findings;
}

void scanLine(Function(int i) iterator, {int size = 9}) {
  for (int i = 0; i < size; i++) {
    iterator(i);
  }
}

void scan(Function(int y, int x) iterator, {int size = 9}) {
  scanLine((i) {
    scanLine((j) {
      iterator(i, j);
    }, size: size);
  }, size: size);
}

// operate on the indicated cell coordinates
typedef CellHandler = Function(int iy, int ix);

// where y & x determine which column/row/box within the puzzle to iterate
typedef Iterator = Function(int y, int x, CellHandler handler);

// scan vertically through the x'th column
void scanColumn(int y, int x, CellHandler handler) => scanLine((i) => handler((y + i) % 9, x));

// scan horizontally through the y'th row
void scanRow(int y, int x, CellHandler handler) => scanLine((i) => handler(y, (x + i) % 9));

// scan Left-to-right top-to-bottom the box containing cell [y][x]
void scanBox(int y, int x, CellHandler handler) {
  final oy = y ~/ 3;
  final ox = x ~/ 3;
  scan((i, j) => handler(oy * 3 + i, ox * 3 + j), size: 3);
}

const _boxOrigins = [
  [0, 0],
  [0, 3],
  [0, 6],
  [3, 0],
  [3, 3],
  [3, 6],
  [6, 0],
  [6, 3],
  [6, 6],
];

// where i determines which column/row/box within the puzzle to iterate
typedef IthIterator = Function(int i, CellHandler handler);

void scanIthColumn(int i, CellHandler handler) => scanLine((j) => handler(j, i));

void scanIthRow(int i, CellHandler handler) => scanLine((j) => handler(i, j));

void scanIthBox(int i, CellHandler handler) => scanLine((i) => handler(_boxOrigins[i][0], _boxOrigins[i][1]));
