part of sudoku;

class Renderer {
  final Game _game;

  Element get _boardElement => querySelector('#board')!;
  Element get _keyRowElement => querySelector('#numbers')!;
  Element get _bigElement => querySelector('#big')!;
  Element get _littleElement => querySelector('#little')!;

  Renderer({required Game game}) : _game = game {
    _game.redraw.listen(paint);
    paint();
  }

  void paint([_]) {
    final values = _game.values;
    final candidates = _game.candidates;
    var i = 0;
    final tileDivs = _boardElement.children;
    for (int y = 0; y < values.length; y++) {
      for (int x = 0; x < values[y].length; x++) {
        final newClasses = _tileClassName(y, x, values[y][x]);
        final newInnerHtml = _tileInnerHtml(y, x, values[y][x], candidates[y][x]);
        if (tileDivs[i].className != newClasses || tileDivs[i].innerHtml != newInnerHtml) {
          tileDivs[i]
            ..className = newClasses
            ..innerHtml = newInnerHtml;
        }

        i++;
      }
    }

    final keyDivs = _keyRowElement.children;
    for (int i = 0; i < values.length; i++) {
      final newClasses = _keyClassName(i + 1);
      if (keyDivs[i].className != newClasses) {
        keyDivs[i].className = newClasses;
      }
    }

    _bigElement.className = _game.mode == Mode.entry ? 'key half-key long-key selected' : 'key half-key long-key';

    _littleElement.className = _game.mode == Mode.note ? 'key half-key long-key selected' : 'key half-key long-key';
  }

  String _tileInnerHtml(int y, int x, int? value, Set<int> candidates) {
    if (value != null) {
      return '$value';
    } else if (_game.mode == Mode.puzzle) {
      return '';
    } else {
      final selectedValue = _game.selectedValue;
      final findings = _game.found(y, x);
      var candidateHtml = '';
      for (final value in possibleValues) {
        final contents = findings.containsKey(value) || (_game.candidates[y][x].contains(value)) ? '$value' : '';
        candidateHtml +=
            '<div class="${_candidateClassName(value, selectedValue, findings, _game.oneOfTwo(y, x, value))}">$contents</div>';
      }
      return candidateHtml;
    }
  }

  String _candidateClassName(int value, int? selectedValue, Map<int, Finding> findings, bool oneOfTwo) {
    if (findings.containsKey(value)) {
      return findings[value]!.className;
    } else if (selectedValue != null && value == selectedValue && oneOfTwo) {
      return 'selected';
    }
    return '';
  }

  String _tileClassName(int y, int x, int? v) {
    var classes = <String>['tile'];
    if (_game.selected(y, x)) {
      classes.add('selected');
    } else if (_game.related(y, x)) {
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

  String _keyClassName(int v) {
    var classes = <String>['key'];
    if (_game.selectedValue == v) {
      classes.add('selected');
    }
    return classes.join(' ');
  }
}
