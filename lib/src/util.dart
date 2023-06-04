part of sudoku;

const Set<int> possibleValues = {1, 2, 3, 4, 5, 6, 7, 8, 9};

enum Dimension {
  b, // box
  y,
  x,
}

// indicate which direction to move the cursor
enum Move {
  up,
  down,
  left,
  right,
}

// indicate wether value or candidate will be toggled
enum Mode {
  puzzle,
  entry,
  candidate,
  note,
}

enum Finding {
  lastStanding, // this is the only remaining place for a value in its row/column/cube
  forcedOut, // this candidate can be removed as the value must exist in its row/column in a different cube
  neededElsewhere, // this candidate can only by in one of a known set of cells, and this cell isn't one of them
  xwing, // candidate can be removed as it is otherwise accounted for by cells in an xwing
  note, // this is a user note, nothing actionable
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
      case Finding.xwing:
        return 'xwing';
      case Finding.note:
        return 'user-note';
    }
  }

  Mode get mode {
    switch (this) {
      case Finding.lastStanding:
        return Mode.entry;
      case Finding.forcedOut:
        return Mode.candidate;
      case Finding.neededElsewhere:
        return Mode.candidate;
      case Finding.xwing:
        return Mode.candidate;
      case Finding.note:
        return Mode.note;
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
  Map<int, Map<int, Map<int, Finding>>> copy() {
    final copy = <int, Map<int, Map<int, Finding>>>{};
    for (final y in keys) {
      copy.putIfAbsent(y, () => <int, Map<int, Finding>>{});
      for (final x in this[y]!.keys) {
        copy[y]!.putIfAbsent(x, () => <int, Finding>{});
        for (final value in this[y]![x]!.keys) {
          copy[y]![x]![value] = this[y]![x]![value]!;
        }
      }
    }
    return copy;
  }

  // (only used for user notes) passing a null value will reset the candidates (in case user makes a mistake)
  void toggle(int y, int x, int? value) {
    if (value == null) {
      this[y]?[x]?.clear();
    } else if (this[y]?[x]?.containsKey(value) == true) {
      this[y]![x]!.remove(value);
    } else {
      putIfAbsent(y, () => <int, Map<int, Finding>>{});
      this[y]!.putIfAbsent(x, () => <int, Finding>{});
      this[y]![x]![value] = Finding.note;
    }
  }

  void addOther(Map<int, Map<int, Map<int, Finding>>> other) {
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

  void debug() {
    print('Findings:');
    for (final y in keys) {
      for (final x in this[y]!.keys) {
        for (final v in this[y]![x]!.keys) {
          print('[$y][$x][$v] = ${this[y]![x]![v]}');
        }
      }
    }
  }
}

// find any values that conflict with
Map<int, Map<int, bool>> calcInvalids(List<List<int?>> values, List<List<Set<int>>> candidates) {
  final invalid = <int, Map<int, bool>>{};
  scan((y, x) {
    final value = values[y][x];

    if (value == null) {
      // no remaining candidates for an empty cell, something has gone wrong
      if (candidates[y][x].isEmpty) {
        invalid.putIfAbsent(y, () => <int, bool>{});
        invalid[y]![x] = true;
      }
    } else {
      var valueCount = 1;
      // a value has been entered twice within the same row/xolumn/box
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

extension on Map<int, Map<Dimension, Set<int>>> {
  bool possible(int y, int x, int value) {
    return this[value]?[Dimension.y]?.contains(y) == true &&
        this[value]?[Dimension.x]?.contains(x) == true &&
        this[value]?[Dimension.b]?.contains(getBox(y, x)) == true;
  }
}

// [value][Dimension][index] = {remaining values for a given box/column/row}
Map<int, Map<Dimension, Set<int>>> calcInfo(List<List<int?>> values) {
  final info = <int, Map<Dimension, Set<int>>>{};

  // with this we can ask which boxes / rows / columns still need a given value
  scan((y, x) {
    final value = values[y][x];
    if (value != null) {
      info.putIfAbsent(value, () => <Dimension, Set<int>>{});
      info[value]!.putIfAbsent(Dimension.y, () => {...List<int>.generate(9, (i) => i)});
      info[value]!.putIfAbsent(Dimension.x, () => {...List<int>.generate(9, (i) => i)});
      info[value]!.putIfAbsent(Dimension.b, () => {...List<int>.generate(9, (i) => i)});
      info[value]![Dimension.y]!.remove(y);
      info[value]![Dimension.x]!.remove(x);
      info[value]![Dimension.b]!.remove(getBox(y, x)!);
    }
  });

  // clean out empty structures
  for (final value in info.keys) {
    info[value]!.removeWhere((_, remaining) => remaining.isEmpty);
  }
  info.removeWhere((_, dimensions) => dimensions.isEmpty);

  return info;
}

// [value][dimension][mainAxisIndex] = {crossAxisIndex}
Map<int, Map<Dimension, Map<int, Set<int>>>> calcCounts(
    List<List<int?>> values, Map<int, Map<Dimension, Set<int>>> info) {
  final counts = <int, Map<Dimension, Map<int, Set<int>>>>{};
  for (final value in info.keys) {
    for (final dimension in info[value]!.keys) {
      for (final i in info[value]![dimension]!) {
        var j = 0;
        iteratorForDimension(dimension)(i, (y, x) {
          if (values[y][x] == null && info.possible(y, x, value)) {
            counts.putIfAbsent(value, () => <Dimension, Map<int, Set<int>>>{});
            counts[value]!.putIfAbsent(dimension, () => <int, Set<int>>{});
            counts[value]![dimension]!.putIfAbsent(i, () => <int>{});
            counts[value]![dimension]![i]!.add(j);
          }
          j++;
        });
      }
    }
  }
  return counts;
}

extension on Map<int, Map<Dimension, Map<int, Set<int>>>> {
  // for the x-wing we only really need those items where the counts are 2
  Map<int, Map<Dimension, Map<int, Set<int>>>> onlyPairs() {
    final counts = <int, Map<Dimension, Map<int, Set<int>>>>{};

    for (final value in keys) {
      for (final dimension in this[value]!.keys) {
        for (final i in this[value]![dimension]!.keys) {
          if (this[value]![dimension]![i]!.length == 2) {
            counts.putIfAbsent(value, () => <Dimension, Map<int, Set<int>>>{});
            counts[value]!.putIfAbsent(dimension, () => <int, Set<int>>{});
            counts[value]![dimension]![i] = this[value]![dimension]![i]!.toSet();
          }
        }
      }
    }

    return counts;
  }
}

// only meant to be used on xwing sets (which are pairs)
extension on Set<int> {
  bool same(Set<int> other) =>
      (first == other.first && last == other.last) || (first == other.last && last == other.first);
}

// remove value from candidates within associated row/column/cube
List<List<Set<int>>> calcCandidates(List<List<int?>> values) {
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
Map<int, Map<int, Map<int, Finding>>> calcFindings(
  List<List<int?>> values,
  List<List<Set<int>>> candidates,
  Map<int, Map<Dimension, Set<int>>> info,
  Map<int, Map<Dimension, Map<int, Set<int>>>> counts,
) {
  final findings = <int, Map<int, Map<int, Finding>>>{};

  findings.addOther(findLastStandingValues(values, candidates));

  if (findings.isEmpty) {
    findings.addOther(findXWingCandidates(values, candidates, info, counts));
  }

  if (findings.isEmpty) {
    findings.addOther(findForcedOutCandidates(values, candidates));
  }

  if (findings.isEmpty) {
    findings.addOther(findNeededElsewhereCandidates(values, candidates));
  }

  return findings;
}

// find candidates disqualified because they conflict with other candidates which are part of an X-Wing
Map<int, Map<int, Map<int, Finding>>> findXWingCandidates(
  List<List<int?>> values,
  List<List<Set<int>>> candidates,
  Map<int, Map<Dimension, Set<int>>> info,
  Map<int, Map<Dimension, Map<int, Set<int>>>> counts,
) {
  final findings = <int, Map<int, Map<int, Finding>>>{};
  final pairs = counts.onlyPairs();

  // values that can only be in the same pair of 2 cells in a column in two different columns,
  // block that value from being an option in other columns for those cell's rows. (for rows as well)
  findCrossAxisXwings(Dimension dimension, IthIterator crossAxisIterator) {
    for (final value in pairs.keys) {
      if (pairs[value]![dimension] == null) return;
      final added = <int>{};
      for (final i1 in pairs[value]![dimension]!.keys) {
        final jPair = pairs[value]![dimension]![i1]!;
        for (final i2 in pairs[value]![dimension]!.keys) {
          if (i1 != i2 && !added.contains(i1) && !added.contains(i2) && jPair.same(pairs[value]![dimension]![i2]!)) {
            // this value must exist in 2 of the 4 corners defined by i and j square
            // scan the cross axis (main axis only had the 2) any other value candidates can be removed
            scanForPair(int x, int y) {
              final excludeYs = dimension == Dimension.y ? {i1, i2} : <int>{}; // if scanning y
              final excludeXs = dimension == Dimension.y ? <int>{} : {i1, i2};
              if (excludeYs.contains(y) || excludeXs.contains(x)) return;

              if (values[y][x] == null && candidates[y][x].contains(value)) {
                findings.putIfAbsent(y, () => <int, Map<int, Finding>>{});
                findings[y]!.putIfAbsent(x, () => <int, Finding>{});
                findings[y]![x]![value] = Finding.xwing;
              }
            }

            crossAxisIterator(jPair.first, scanForPair);
            crossAxisIterator(jPair.last, scanForPair);

            added.add(i1);
            added.add(i2);
          }
        }
      }
    }
  }

  findCrossAxisXwings(Dimension.y, scanXsForY);
  findCrossAxisXwings(Dimension.x, scanYsForX);

  return findings;
}

// if the same n-sized Set appears as the only candidates of n cells, that Set's candidates must exist in only those cells
Map<int, Map<int, Map<int, Finding>>> findNeededElsewhereCandidates(
  List<List<int?>> values,
  List<List<Set<int>>> candidates,
) {
  final findings = <int, Map<int, Map<int, Finding>>>{};

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
                  if (values[y][x] == null && candidates[y][x].contains(value)) {
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
      checkForNeededElsewhere(scanYsForX);
      checkForNeededElsewhere(scanXsForY);
      checkForNeededElsewhere(scanYXsForBox);
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

  scanLine((i) {
    // final by = y * 3;
    // final bx = x * 3;

    final valueYs = <int, Set<int>>{}; // value to Y's that value is in (is it in a single row)
    final valueXs = <int, Set<int>>{}; // value tp X's that value is in (is it in a single column)
    final scanYs = <int>{};
    final scanXs = <int>{};
    // within this box see if any candidate is in a single column or row
    scanYXsForBox(i, (iy, ix) {
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

    // go through each value and ask if it can only be in a single row within that box
    valueYs.forEach((value, vy) {
      if (vy.length == 1) {
        // outside that box, this value can not exist in this row
        scanRow(vy.first, valueXs[value]!.first, (iy, ix) {
          if (values[iy][ix] == null && !scanXs.contains(ix) && candidates[iy][ix].contains(value)) {
            findings.putIfAbsent(iy, () => <int, Map<int, Finding>>{});
            findings[iy]!.putIfAbsent(ix, () => <int, Finding>{});
            findings[iy]![ix]![value] = Finding.forcedOut;
          }
        });
      }
    });

    // go through each value and ask if it can only be in a single column within that box
    valueXs.forEach((value, vx) {
      if (vx.length == 1) {
        // outside that box, this value can not exist in this column
        scanColumn(valueYs[value]!.first, vx.first, (iy, ix) {
          if (values[iy][ix] == null && !scanYs.contains(iy) && candidates[iy][ix].contains(value)) {
            findings.putIfAbsent(iy, () => <int, Map<int, Finding>>{});
            findings[iy]!.putIfAbsent(ix, () => <int, Finding>{});
            findings[iy]![ix]![value] = Finding.forcedOut;
          }
        });
      }
    });
  });

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

// iterate over all y for a given x(i)
void scanYsForX(int i, CellHandler handler) => scanLine((j) => handler(j, i));

// iterate over all x for a given y(i)
void scanXsForY(int i, CellHandler handler) => scanLine((j) => handler(i, j));

// iterate over all xy cells for a given box(i)
void scanYXsForBox(int i, CellHandler handler) => scanBox(_boxOrigins[i][0], _boxOrigins[i][1], handler);

IthIterator iteratorForDimension(Dimension dimension) {
  switch (dimension) {
    case Dimension.b:
      return scanYXsForBox;
    case Dimension.y:
      return scanXsForY;
    case Dimension.x:
      return scanYsForX;
  }
}
