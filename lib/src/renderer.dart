part of sudoku;

class Renderer {
  final Game _game;

  Element get _boardElement => querySelector('#board')!;

  Renderer({required Game game}) : _game = game {
    _game.redraw.listen(paint);
    paint();
  }

  void paint([_]) {
    final values = _game.values;
    final candidates = _game.candidates;
    var i = 0;
    final children = _boardElement.children;
    for (int y = 0; y < values.length; y++) {
      for (int x = 0; x < values[y].length; x++) {
        final newClasses = _cellClassName(y, x, values[y][x]);
        final newInnerHtml = _cellInnerHtml(y, x, values[y][x], candidates[y][x]);
        if (children[i].className != newClasses || children[i].innerHtml != newInnerHtml) {
          children[i]
            ..className = newClasses
            ..innerHtml = newInnerHtml;
        }

        i++;
      }
    }
  }

  String _cellInnerHtml(int c, int r, int? value, Set<int> candidates) {
    if (value != null) {
      return '$value';
    } else if (_game.mode == EntryMode.puzzle) {
      return '';
    } else {
      final findings = _game.found(c, r);
      var candidateHtml = '';
      for (final value in possibleValues) {
        final contents = candidates.contains(value) ? '$value' : '';
        candidateHtml += '<div class="${_candidateClassName(value, findings)}">$contents</div>';
      }
      return candidateHtml;
    }
  }

  String _candidateClassName(int value, Map<int, Finding> findings) {
    if (findings.containsKey(value)) {
      return findings[value]!.className;
    }
    return '';
  }

  String _cellClassName(int y, int x, int? v) {
    var classes = <String>['tile'];
    if ((_game.cursorV != null && _game.cursorV == v) || (y == _game.cursorY && x == _game.cursorX)) {
      classes.add('selected');
    } else if (y == _game.cursorY || x == _game.cursorX || _game.box == getBox(y, x)) {
      classes.add('related');
    }
    if (!_game.isValid(y, x)) {
      classes.add('invalid');
    }
    if (v == null) {
      classes.add('candidates');
    } else if (_game.setByPuzzle(y, x)) {
      classes.add('puzzle');
    }
    return classes.join(' ');
  }
}
