part of sudoku;

class Renderer {
  final Game _game;

  Element get _boardElement => querySelector('#board')!;

  Renderer({required Game game}) : _game = game {
    _game.redraw.listen(paint);
    paint();
  }

  void paint([_]) {
    final puzzle = _game.puzzle;
    final candidates = _game.candidates;
    var i = 0;
    final children = _boardElement.children;
    for (int c = 0; c < puzzle.length; c++) {
      for (int r = 0; r < puzzle[c].length; r++) {
        final newClasses = _cellClassName(c, r, puzzle[c][r]);
        final newInnerHtml = _cellInnerHtml(c, r, puzzle[c][r], candidates[c][r]);
        if (children[i].className != newClasses || children[i].innerHtml != newInnerHtml) {
          children[i]
            ..className = newClasses
            ..innerHtml = newInnerHtml;
        }

        i++;
      }
    }
  }

  String _cellInnerHtml(int c, int r, int? value, List<int?> candidates) {
    if (value != null) {
      return '$value';
    } else {
      return candidates.map((c) => '<div>${c ?? ""}</div>').join();
    }
  }

  String _cellClassName(int c, int r, int? value) {
    var classes = <String>['tile'];
    if (c == _game.column && r == _game.row) {
      classes.add('selected');
    } else if (c == _game.column || r == _game.row || _game.cube == getCube(c, r)) {
      classes.add('related');
    }
    if (value == null) classes.add('candidates');
    return classes.join(' ');
  }
}
