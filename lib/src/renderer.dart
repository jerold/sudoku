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
    for (int c = 0; c < values.length; c++) {
      for (int r = 0; r < values[c].length; r++) {
        final newClasses = _cellClassName(c, r, values[c][r]);
        final newInnerHtml = _cellInnerHtml(c, r, values[c][r], candidates[c][r]);
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

  String _cellClassName(int c, int r, int? value) {
    var classes = <String>['tile'];
    if ((_game.val != null && _game.val == _game.getValue(c, r)) || (c == _game.column && r == _game.row)) {
      classes.add('selected');
    } else if (c == _game.column || r == _game.row || _game.box == getBox(c, r)) {
      classes.add('related');
    }
    if (!_game.isValid(c, r)) {
      classes.add('invalid');
    }
    if (value == null) {
      classes.add('candidates');
    } else if (_game.setByPuzzle(c, r)) {
      classes.add('puzzle');
    }
    return classes.join(' ');
  }
}
