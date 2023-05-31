part of sudoku;

class Game {
  final StreamController _redrawController = StreamController.broadcast();
  Stream get redraw => _redrawController.stream;

  final Controller _controller;

  // Used to combine auto calculated candidates with user disabled ones
  late List<List<Set<int>>> _autoCandidates;
  late List<List<List<Set<int>>>> _userCandidates; // historical: last is current
  List<List<Set<int>>> get candidates => _autoCandidates.copy(withMerge: _userCandidates.last);

  // original puzzle values merged with user selected ones
  late List<List<int?>> _puzzle;
  late List<List<List<int?>>> _entries; // historical: last is current
  List<List<int?>> get values => _puzzle.copy(withMerge: _entries.last);
  bool setByPuzzle(int column, int row) => _puzzle[column][row] != null;

  List<EntryMode> _history = [];

  late Map<int, Map<int, Map<int, Finding>>> _findings;
  Map<int, Finding> found(int column, int row) => _findings[column]?[row] ?? {};

  late Map<int, Map<int, bool>> _invalids;
  bool isValid(int column, int row) => !(_invalids.containsKey(column) && _invalids[column]!.containsKey(row));

  late EntryMode _mode = EntryMode.value;
  EntryMode get mode => _mode;

  int? _y;
  int? get column => _y;

  int? _x;
  int? get row => _x;

  int? _v;
  int? get val => _v;

  int? get box => getBox(_y, _x);

  bool get hasCursor => _y != null && _x != null;
  int? getValue(int? y, int? x) => y != null && x != null ? values[y][x] : null;

  Game({required Controller controller}) : _controller = controller {
    _controller.input.listen(_handleInput);
    _initPuzzle();

    // hardPuzzle.forEach(_handleInput);
    _loadNextPuzzle();
  }

  var _parsePuzzleIndex = 0;
  void _loadNextPuzzle() {
    print('Puzzle($_parsePuzzleIndex)');
    _initPuzzle();
    parsedPuzzle(_parsePuzzleIndex, evilPuzzles).forEach(_handleInput);
    _parsePuzzleIndex++;
  }

  _redraw() => _redrawController.add(_puzzle);

  void _handleInput(Input input) {
    switch (input.runtimeType) {
      case ResetInput:
        _initPuzzle();
        break;
      case RewindInput:
        _handleRewind();
        break;
      case EntryModeInput:
        _handleEntryMode(input as EntryModeInput);
        break;
      case CursorInput:
        _handleCursor(input as CursorInput);
        break;
      case ToggleInput:
        _handleToggle(input as ToggleInput);
        break;
      case AutoInput:
        _handleAuto(everything: true);
        break;
    }
    _redraw();
  }

  void _initPuzzle() {
    _y = null;
    _x = null;
    _mode = EntryMode.puzzle;
    _puzzle = emptyPuzzle();
    _entries = [emptyPuzzle()];
    _autoCandidates = fullCandidates();
    _userCandidates = [fullCandidates()];
    _history = [];
    _invalids = {};
    _redraw();
  }

  void _handleRewind() {
    if (_history.isNotEmpty) {
      if (_history.last == EntryMode.value) {
        _entries.removeLast();
      } else if (_history.last == EntryMode.candidate) {
        _userCandidates.removeLast();
      }
      _history.removeLast();
      _calc();
    }
  }

  void _handleEntryMode(EntryModeInput entryModeInput) {
    // For saving off a puzzle for reentry on init
    // if (_mode == EntryMode.puzzle && _mode != entryModeInput.entryMode) {
    //   print("Puzzle START -------------");
    //   scanLine((y) {
    //     print("\"${values[y].map((v) => v ?? '0').join()}\",");
    //   });
    //   print("Puzzle END ---------------");
    // }

    _mode = entryModeInput.entryMode;
    if (_mode != EntryMode.puzzle) {
      _calc();
    }
  }

  // either move is set, or y & x, or y & x are null which clears the cursor
  void _handleCursor(CursorInput cursorInput) {
    if (cursorInput.move != null) {
      _y = cursorInput.move!.nextY(_y);
      _x = cursorInput.move!.nextX(_x);
    } else {
      _y = cursorInput.column;
      _x = cursorInput.row;
    }

    _v = getValue(_y, _x);
  }

  void _handleToggle(ToggleInput toggleInput) {
    if (!hasCursor) {
      _v = _v != toggleInput.value ? toggleInput.value : null;
    }
    if (hasCursor) {
      _toggleCell(_y!, _x!, toggleInput.value, _mode);
      _calc();
    }
  }

  void _handleAuto({bool everything = false}) {
    if (_mode != EntryMode.puzzle && _findings.isNotEmpty && _invalids.isEmpty) {
      if (everything) {
        // recursively solve everything there is a strategy to solve
        for (final fy in _findings.keys) {
          for (final fx in _findings[fy]!.keys) {
            for (final fv in _findings[fy]![fx]!.keys) {
              final fm = _findings[fy]![fx]![fv]!.mode;
              _toggleCell(fy, fx, fv, fm);
            }
          }
        }
        _calc();
        _handleAuto(everything: everything);
      } else {
        // solve a single cell
        final fy = _findings.keys.first;
        final fx = _findings[fy]!.keys.first;
        final fv = _findings[fy]![fx]!.keys.first;
        final fm = _findings[fy]![fx]![fv]!.mode;
        _toggleCell(fy, fx, fv, fm);
        _calc();
      }
    }
  }

  void _toggleCell(int cellY, int cellX, int? value, EntryMode mode) {
    if (mode == EntryMode.puzzle) {
      _puzzle = _puzzle.copy()..toggle(cellY, cellX, value);
    } else {
      if (mode == EntryMode.value) {
        _entries.add(_entries.last.copy()..toggle(cellY, cellX, value));
      } else if (mode == EntryMode.candidate) {
        _userCandidates.add(_userCandidates.last.copy()..toggle(cellY, cellX, value));
      }
      _history.add(mode);
    }
  }

  void _calc() {
    _autoCandidates = calcAutoCandidates(values);
    _findings = calcFindings(values, candidates);
    _invalids = calcInvalids(values, candidates);
  }
}
