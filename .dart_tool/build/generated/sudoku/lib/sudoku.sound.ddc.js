define(['dart_sdk'], (function load__packages__sudoku__sudoku(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var sudoku = Object.create(dart.library);
  var $onKeyDown = dartx.onKeyDown;
  var $onClick = dartx.onClick;
  var $children = dartx.children;
  var $_get = dartx._get;
  var $keys = dartx.keys;
  var $keyCode = dartx.keyCode;
  var $containsKey = dartx.containsKey;
  var $last = dartx.last;
  var $runtimeType = dartx.runtimeType;
  var $clear = dartx.clear;
  var $add = dartx.add;
  var $length = dartx.length;
  var $className = dartx.className;
  var $innerHtml = dartx.innerHtml;
  var $map = dartx.map;
  var $join = dartx.join;
  var $modulo = dartx['%'];
  var $truncate = dartx.truncate;
  var $_set = dartx._set;
  var $toList = dartx.toList;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    StreamControllerOfInput: () => (T.StreamControllerOfInput = dart.constFn(async.StreamController$(sudoku.Input)))(),
    MouseEventTovoid: () => (T.MouseEventTovoid = dart.constFn(dart.fnType(dart.void, [html.MouseEvent])))(),
    MouseEventToNvoid: () => (T.MouseEventToNvoid = dart.constFn(dart.nullable(T.MouseEventTovoid())))(),
    MouseEventToNull: () => (T.MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))(),
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    ListOfintN: () => (T.ListOfintN = dart.constFn(core.List$(T.intN())))(),
    ListOfListOfintN: () => (T.ListOfListOfintN = dart.constFn(core.List$(T.ListOfintN())))(),
    JSArrayOfListOfListOfintN: () => (T.JSArrayOfListOfListOfintN = dart.constFn(_interceptors.JSArray$(T.ListOfListOfintN())))(),
    ListOfListOfListOfintN: () => (T.ListOfListOfListOfintN = dart.constFn(core.List$(T.ListOfListOfintN())))(),
    JSArrayOfListOfListOfListOfintN: () => (T.JSArrayOfListOfListOfListOfintN = dart.constFn(_interceptors.JSArray$(T.ListOfListOfListOfintN())))(),
    intNToString: () => (T.intNToString = dart.constFn(dart.fnType(core.String, [T.intN()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    intNToint: () => (T.intNToint = dart.constFn(dart.fnType(core.int, [T.intN()])))(),
    intToint: () => (T.intToint = dart.constFn(dart.fnType(core.int, [core.int])))(),
    intToListOfintN: () => (T.intToListOfintN = dart.constFn(dart.fnType(T.ListOfintN(), [core.int])))(),
    intToListOfListOfintN: () => (T.intToListOfListOfintN = dart.constFn(dart.fnType(T.ListOfListOfintN(), [core.int])))(),
    ListNOfListOfintN: () => (T.ListNOfListOfintN = dart.constFn(dart.nullable(T.ListOfListOfintN())))(),
    __ToListOfListOfintN: () => (T.__ToListOfListOfintN = dart.constFn(dart.fnType(T.ListOfListOfintN(), [], {withMask: T.ListNOfListOfintN()}, {})))(),
    intAndintAndintNToToggleResult: () => (T.intAndintAndintNToToggleResult = dart.constFn(dart.fnType(sudoku.ToggleResult, [core.int, core.int, T.intN()])))(),
    VoidToListOfListOfListOfintN: () => (T.VoidToListOfListOfListOfintN = dart.constFn(dart.fnType(T.ListOfListOfListOfintN(), [])))(),
    intAndintAndintToToggleResult: () => (T.intAndintAndintToToggleResult = dart.constFn(dart.fnType(sudoku.ToggleResult, [core.int, core.int, core.int])))(),
    IdentityMapOfint$Input: () => (T.IdentityMapOfint$Input = dart.constFn(_js_helper.IdentityMap$(core.int, sudoku.Input)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C1() {
      return C[1] = dart.const({
        __proto__: sudoku.Move.prototype,
        [_Enum__name]: "up",
        [_Enum_index]: 0
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: sudoku.Move.prototype,
        [_Enum__name]: "down",
        [_Enum_index]: 1
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: sudoku.Move.prototype,
        [_Enum__name]: "left",
        [_Enum_index]: 2
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: sudoku.Move.prototype,
        [_Enum__name]: "right",
        [_Enum_index]: 3
      });
    },
    get C0() {
      return C[0] = dart.constList([C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4], sudoku.Move);
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: sudoku.EntryMode.prototype,
        [_Enum__name]: "value",
        [_Enum_index]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: sudoku.EntryMode.prototype,
        [_Enum__name]: "candidate",
        [_Enum_index]: 1
      });
    },
    get C5() {
      return C[5] = dart.constList([C[6] || CT.C6, C[7] || CT.C7], sudoku.EntryMode);
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: sudoku.ToggleResult.prototype,
        [_Enum__name]: "insert",
        [_Enum_index]: 0
      });
    },
    get C10() {
      return C[10] = dart.const({
        __proto__: sudoku.ToggleResult.prototype,
        [_Enum__name]: "remove",
        [_Enum_index]: 1
      });
    },
    get C8() {
      return C[8] = dart.constList([C[9] || CT.C9, C[10] || CT.C10], sudoku.ToggleResult);
    },
    get C11() {
      return C[11] = dart.constMap(core.int, core.String, [1, "one", 2, "two", 3, "three", 4, "four", 5, "five", 6, "six", 7, "seven", 8, "eight", 9, "nine"]);
    }
  }, false);
  var C = Array(12).fill(void 0);
  var I = ["package:sudoku/sudoku.dart"];
  var _inputController = dart.privateName(sudoku, "_inputController");
  var _onKeyDown = dart.privateName(sudoku, "_onKeyDown");
  var _onClickBody = dart.privateName(sudoku, "_onClickBody");
  var _boardElement = dart.privateName(sudoku, "_boardElement");
  var _onClickTile = dart.privateName(sudoku, "_onClickTile");
  var _keyboardElement = dart.privateName(sudoku, "_keyboardElement");
  var _onClickKey = dart.privateName(sudoku, "_onClickKey");
  sudoku.Controller = class Controller extends core.Object {
    get input() {
      return this[_inputController].stream;
    }
    get [_boardElement]() {
      return dart.nullCheck(html.querySelector("#board"));
    }
    get [_keyboardElement]() {
      return dart.nullCheck(html.querySelector("#keyboard"));
    }
    static ['_#new#tearOff']() {
      return new sudoku.Controller.new();
    }
    [_onKeyDown](e) {
      let keyCode = e[$keyCode];
      if (sudoku.bindings[$containsKey](keyCode)) {
        this[_inputController].add(dart.nullCheck(sudoku.bindings[$_get](keyCode)));
      }
    }
    [_onClickTile](c, r) {
      return dart.fn(e => {
        e.stopPropagation();
        e.preventDefault();
        this[_inputController].add(sudoku.Input.cursor({column: c, row: r}));
        core.print("_onClickTile(c:" + dart.str(c) + ", r:" + dart.str(r) + ")");
      }, T.MouseEventToNull());
    }
    [_onClickKey](value) {
      return dart.fn(e => {
        e.stopPropagation();
        e.preventDefault();
        this[_inputController].add(sudoku.Input.toggle({value: value}));
        core.print("_onClickKey(v:" + dart.str(value) + ")");
      }, T.MouseEventToNull());
    }
    [_onClickBody](e) {
      e.stopPropagation();
      e.preventDefault();
      this[_inputController].add(sudoku.Input.cursor());
    }
  };
  (sudoku.Controller.new = function() {
    let t0, t0$;
    this[_inputController] = T.StreamControllerOfInput().broadcast();
    t0 = html.document.body;
    t0 == null ? null : t0[$onKeyDown].listen(dart.bind(this, _onKeyDown));
    t0$ = html.document.body;
    t0$ == null ? null : t0$[$onClick].listen(dart.bind(this, _onClickBody));
    let i = 0;
    let children = this[_boardElement][$children];
    for (let c = 0; c < 9; c = c + 1) {
      for (let r = 0; r < 9; r = r + 1) {
        children[$_get](i)[$onClick].listen(T.MouseEventToNvoid().as(this[_onClickTile](c, r)));
        i = i + 1;
      }
    }
    for (let value of sudoku.keyIds[$keys]) {
      let keyElement = dart.nullCheck(this[_keyboardElement].querySelector("#" + dart.nullCheck(sudoku.keyIds[$_get](value))));
      keyElement[$onClick].listen(T.MouseEventToNvoid().as(this[_onClickKey](value)));
    }
  }).prototype = sudoku.Controller.prototype;
  dart.addTypeTests(sudoku.Controller);
  dart.addTypeCaches(sudoku.Controller);
  dart.setMethodSignature(sudoku.Controller, () => ({
    __proto__: dart.getMethods(sudoku.Controller.__proto__),
    [_onKeyDown]: dart.fnType(dart.dynamic, [html.KeyboardEvent]),
    [_onClickTile]: dart.fnType(dart.dynamic, [core.int, core.int]),
    [_onClickKey]: dart.fnType(dart.dynamic, [core.int]),
    [_onClickBody]: dart.fnType(dart.dynamic, [html.MouseEvent])
  }));
  dart.setGetterSignature(sudoku.Controller, () => ({
    __proto__: dart.getGetters(sudoku.Controller.__proto__),
    input: async.Stream$(sudoku.Input),
    [_boardElement]: html.Element,
    [_keyboardElement]: html.Element
  }));
  dart.setLibraryUri(sudoku.Controller, I[0]);
  dart.setFieldSignature(sudoku.Controller, () => ({
    __proto__: dart.getFields(sudoku.Controller.__proto__),
    [_inputController]: dart.finalFieldType(async.StreamController$(sudoku.Input))
  }));
  var _redrawController = dart.privateName(sudoku, "_redrawController");
  var _values = dart.privateName(sudoku, "_values");
  var _candidates = dart.privateName(sudoku, "_candidates");
  var __Game__puzzle = dart.privateName(sudoku, "_#Game#_puzzle");
  var __Game__mode = dart.privateName(sudoku, "_#Game#_mode");
  var _column = dart.privateName(sudoku, "_column");
  var _row = dart.privateName(sudoku, "_row");
  var _controller = dart.privateName(sudoku, "_controller");
  var _handleInput = dart.privateName(sudoku, "_handleInput");
  var _initPuzzle = dart.privateName(sudoku, "_initPuzzle");
  var _puzzle = dart.privateName(sudoku, "_puzzle");
  var _mode = dart.privateName(sudoku, "_mode");
  var _redraw = dart.privateName(sudoku, "_redraw");
  var _handleCursor = dart.privateName(sudoku, "_handleCursor");
  var _handleToggle = dart.privateName(sudoku, "_handleToggle");
  sudoku.Game = class Game extends core.Object {
    get redraw() {
      return this[_redrawController].stream;
    }
    get candidates() {
      return this[_candidates][$last];
    }
    get [_puzzle]() {
      let t0;
      t0 = this[__Game__puzzle];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_puzzle")) : t0;
    }
    set [_puzzle](library$32package$58sudoku$47src$47game$46dart$58$58_puzzle$35param) {
      this[__Game__puzzle] = library$32package$58sudoku$47src$47game$46dart$58$58_puzzle$35param;
    }
    get puzzle() {
      return sudoku['PuzzleX|copy'](this[_puzzle], {withMask: this[_values][$last]});
    }
    get [_mode]() {
      let t0;
      t0 = this[__Game__mode];
      return t0 == null ? this[__Game__mode] = sudoku.EntryMode.value : t0;
    }
    set [_mode](library$32package$58sudoku$47src$47game$46dart$58$58_mode$35param) {
      this[__Game__mode] = library$32package$58sudoku$47src$47game$46dart$58$58_mode$35param;
    }
    get mode() {
      return this[_mode];
    }
    get column() {
      return this[_column];
    }
    get row() {
      return this[_row];
    }
    get cube() {
      return sudoku.getCube(this[_column], this[_row]);
    }
    get hasCursor() {
      return this[_column] != null && this[_row] != null;
    }
    static ['_#new#tearOff'](opts) {
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new sudoku.Game.new({controller: controller});
    }
    [_redraw]() {
      return this[_redrawController].add(this[_puzzle]);
    }
    [_handleInput](input) {
      switch (input[$runtimeType]) {
        case dart.wrapType(sudoku.ResetInput):
          {
            this[_initPuzzle]();
            break;
          }
        case dart.wrapType(sudoku.CursorInput):
          {
            this[_handleCursor](sudoku.CursorInput.as(input));
            break;
          }
        case dart.wrapType(sudoku.ToggleInput):
          {
            this[_handleToggle](sudoku.ToggleInput.as(input));
            break;
          }
      }
      core.print("_handleInput(" + dart.str(input) + ")");
      this[_redraw]();
    }
    [_initPuzzle]() {
      let t0, t0$;
      this[_column] = null;
      this[_row] = null;
      this[_mode] = sudoku.EntryMode.value;
      this[_puzzle] = sudoku.emptyPuzzle();
      t0 = this[_values];
      (() => {
        t0[$clear]();
        t0[$add](sudoku.emptyPuzzle());
        return t0;
      })();
      t0$ = this[_candidates];
      (() => {
        t0$[$clear]();
        t0$[$add](sudoku.newPuzzleCandidates());
        return t0$;
      })();
      this[_redraw]();
    }
    [_handleCursor](cursorInput) {
      if (cursorInput.move != null) {
        this[_column] = sudoku['MoveX|nextColumn'](dart.nullCheck(cursorInput.move), this[_column]);
        this[_row] = sudoku['MoveX|nextRow'](dart.nullCheck(cursorInput.move), this[_row]);
      } else {
        this[_column] = cursorInput.column;
        this[_row] = cursorInput.row;
      }
    }
    [_handleToggle](toggleInput) {
      let t0;
      if (this.hasCursor) {
        if (this[_mode] === sudoku.EntryMode.value) {
          this[_values][$add]((t0 = sudoku['PuzzleX|copy'](this[_values][$last]), (() => {
            sudoku['PuzzleX|toggle'](t0, dart.nullCheck(this[_column]), dart.nullCheck(this[_row]), toggleInput.value);
            return t0;
          })()));
        }
      }
    }
  };
  (sudoku.Game.new = function(opts) {
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[_redrawController] = async.StreamController.broadcast();
    this[_values] = T.JSArrayOfListOfListOfintN().of([]);
    this[_candidates] = T.JSArrayOfListOfListOfListOfintN().of([]);
    this[__Game__puzzle] = null;
    this[__Game__mode] = null;
    this[_column] = null;
    this[_row] = null;
    this[_controller] = controller;
    this[_controller].input.listen(dart.bind(this, _handleInput));
    this[_initPuzzle]();
  }).prototype = sudoku.Game.prototype;
  dart.addTypeTests(sudoku.Game);
  dart.addTypeCaches(sudoku.Game);
  dart.setMethodSignature(sudoku.Game, () => ({
    __proto__: dart.getMethods(sudoku.Game.__proto__),
    [_redraw]: dart.fnType(dart.dynamic, []),
    [_handleInput]: dart.fnType(dart.void, [sudoku.Input]),
    [_initPuzzle]: dart.fnType(dart.void, []),
    [_handleCursor]: dart.fnType(dart.void, [sudoku.CursorInput]),
    [_handleToggle]: dart.fnType(dart.void, [sudoku.ToggleInput])
  }));
  dart.setGetterSignature(sudoku.Game, () => ({
    __proto__: dart.getGetters(sudoku.Game.__proto__),
    redraw: async.Stream,
    candidates: core.List$(core.List$(core.List$(dart.nullable(core.int)))),
    [_puzzle]: core.List$(core.List$(dart.nullable(core.int))),
    puzzle: core.List$(core.List$(dart.nullable(core.int))),
    [_mode]: sudoku.EntryMode,
    mode: sudoku.EntryMode,
    column: dart.nullable(core.int),
    row: dart.nullable(core.int),
    cube: dart.nullable(core.int),
    hasCursor: core.bool
  }));
  dart.setSetterSignature(sudoku.Game, () => ({
    __proto__: dart.getSetters(sudoku.Game.__proto__),
    [_puzzle]: core.List$(core.List$(dart.nullable(core.int))),
    [_mode]: sudoku.EntryMode
  }));
  dart.setLibraryUri(sudoku.Game, I[0]);
  dart.setFieldSignature(sudoku.Game, () => ({
    __proto__: dart.getFields(sudoku.Game.__proto__),
    [_redrawController]: dart.finalFieldType(async.StreamController),
    [_controller]: dart.finalFieldType(sudoku.Controller),
    [_values]: dart.finalFieldType(core.List$(core.List$(core.List$(dart.nullable(core.int))))),
    [_candidates]: dart.finalFieldType(core.List$(core.List$(core.List$(core.List$(dart.nullable(core.int)))))),
    [__Game__puzzle]: dart.fieldType(dart.nullable(core.List$(core.List$(dart.nullable(core.int))))),
    [__Game__mode]: dart.fieldType(dart.nullable(sudoku.EntryMode)),
    [_column]: dart.fieldType(dart.nullable(core.int)),
    [_row]: dart.fieldType(dart.nullable(core.int))
  }));
  sudoku.Input = class Input extends core.Object {
    static reset() {
      return new sudoku.ResetInput.new();
    }
    static ['_#reset#tearOff']() {
      return sudoku.Input.reset();
    }
    static cursor(opts) {
      let column = opts && 'column' in opts ? opts.column : null;
      let row = opts && 'row' in opts ? opts.row : null;
      let move = opts && 'move' in opts ? opts.move : null;
      return new sudoku.CursorInput.new(column, row, move);
    }
    static ['_#cursor#tearOff'](opts) {
      let column = opts && 'column' in opts ? opts.column : null;
      let row = opts && 'row' in opts ? opts.row : null;
      let move = opts && 'move' in opts ? opts.move : null;
      return sudoku.Input.cursor({column: column, row: row, move: move});
    }
    static toggle(opts) {
      let value = opts && 'value' in opts ? opts.value : null;
      return new sudoku.ToggleInput.new(value);
    }
    static ['_#toggle#tearOff'](opts) {
      let value = opts && 'value' in opts ? opts.value : null;
      return sudoku.Input.toggle({value: value});
    }
  };
  (sudoku.Input[dart.mixinNew] = function() {
  }).prototype = sudoku.Input.prototype;
  dart.addTypeTests(sudoku.Input);
  dart.addTypeCaches(sudoku.Input);
  dart.setStaticMethodSignature(sudoku.Input, () => ['reset', 'cursor', 'toggle']);
  dart.setLibraryUri(sudoku.Input, I[0]);
  sudoku.ResetInput = class ResetInput extends core.Object {
    static ['_#new#tearOff']() {
      return new sudoku.ResetInput.new();
    }
  };
  (sudoku.ResetInput.new = function() {
    ;
  }).prototype = sudoku.ResetInput.prototype;
  dart.addTypeTests(sudoku.ResetInput);
  dart.addTypeCaches(sudoku.ResetInput);
  sudoku.ResetInput[dart.implements] = () => [sudoku.Input];
  dart.setLibraryUri(sudoku.ResetInput, I[0]);
  var column$ = dart.privateName(sudoku, "CursorInput.column");
  var row$ = dart.privateName(sudoku, "CursorInput.row");
  var move$ = dart.privateName(sudoku, "CursorInput.move");
  sudoku.CursorInput = class CursorInput extends core.Object {
    get column() {
      return this[column$];
    }
    set column(value) {
      super.column = value;
    }
    get row() {
      return this[row$];
    }
    set row(value) {
      super.row = value;
    }
    get move() {
      return this[move$];
    }
    set move(value) {
      super.move = value;
    }
    static ['_#new#tearOff'](column, row, move) {
      return new sudoku.CursorInput.new(column, row, move);
    }
  };
  (sudoku.CursorInput.new = function(column, row, move) {
    this[column$] = column;
    this[row$] = row;
    this[move$] = move;
    ;
  }).prototype = sudoku.CursorInput.prototype;
  dart.addTypeTests(sudoku.CursorInput);
  dart.addTypeCaches(sudoku.CursorInput);
  sudoku.CursorInput[dart.implements] = () => [sudoku.Input];
  dart.setLibraryUri(sudoku.CursorInput, I[0]);
  dart.setFieldSignature(sudoku.CursorInput, () => ({
    __proto__: dart.getFields(sudoku.CursorInput.__proto__),
    column: dart.finalFieldType(dart.nullable(core.int)),
    row: dart.finalFieldType(dart.nullable(core.int)),
    move: dart.finalFieldType(dart.nullable(sudoku.Move))
  }));
  var value$ = dart.privateName(sudoku, "ToggleInput.value");
  sudoku.ToggleInput = class ToggleInput extends core.Object {
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    static ['_#new#tearOff'](value) {
      return new sudoku.ToggleInput.new(value);
    }
  };
  (sudoku.ToggleInput.new = function(value) {
    this[value$] = value;
    ;
  }).prototype = sudoku.ToggleInput.prototype;
  dart.addTypeTests(sudoku.ToggleInput);
  dart.addTypeCaches(sudoku.ToggleInput);
  sudoku.ToggleInput[dart.implements] = () => [sudoku.Input];
  dart.setLibraryUri(sudoku.ToggleInput, I[0]);
  dart.setFieldSignature(sudoku.ToggleInput, () => ({
    __proto__: dart.getFields(sudoku.ToggleInput.__proto__),
    value: dart.finalFieldType(dart.nullable(core.int))
  }));
  sudoku.ChangeModeInput = class ChangeModeInput extends core.Object {
    static ['_#new#tearOff']() {
      return new sudoku.ChangeModeInput.new();
    }
  };
  (sudoku.ChangeModeInput.new = function() {
    ;
  }).prototype = sudoku.ChangeModeInput.prototype;
  dart.addTypeTests(sudoku.ChangeModeInput);
  dart.addTypeCaches(sudoku.ChangeModeInput);
  sudoku.ChangeModeInput[dart.implements] = () => [sudoku.Input];
  dart.setLibraryUri(sudoku.ChangeModeInput, I[0]);
  var _game = dart.privateName(sudoku, "_game");
  var _cellClassName = dart.privateName(sudoku, "_cellClassName");
  var _cellInnerHtml = dart.privateName(sudoku, "_cellInnerHtml");
  sudoku.Renderer = class Renderer extends core.Object {
    get [_boardElement]() {
      return dart.nullCheck(html.querySelector("#board"));
    }
    static ['_#new#tearOff'](opts) {
      let game = opts && 'game' in opts ? opts.game : null;
      return new sudoku.Renderer.new({game: game});
    }
    paint(_ = null) {
      let t0;
      let puzzle = this[_game].puzzle;
      let candidates = this[_game].candidates;
      let i = 0;
      let children = this[_boardElement][$children];
      for (let c = 0; c < puzzle[$length]; c = c + 1) {
        for (let r = 0; r < puzzle[$_get](c)[$length]; r = r + 1) {
          let newClasses = this[_cellClassName](c, r, puzzle[$_get](c)[$_get](r));
          let newInnerHtml = this[_cellInnerHtml](c, r, puzzle[$_get](c)[$_get](r), candidates[$_get](c)[$_get](r));
          if (children[$_get](i)[$className] !== newClasses || children[$_get](i)[$innerHtml] !== newInnerHtml) {
            t0 = children[$_get](i);
            (() => {
              t0[$className] = newClasses;
              t0[$innerHtml] = newInnerHtml;
              return t0;
            })();
          }
          i = i + 1;
        }
      }
    }
    [_cellInnerHtml](c, r, value, candidates) {
      if (value != null) {
        return dart.str(value);
      } else {
        return candidates[$map](core.String, dart.fn(c => {
          let t0;
          return "<div>" + dart.str((t0 = c, t0 == null ? "" : t0)) + "</div>";
        }, T.intNToString()))[$join]();
      }
    }
    [_cellClassName](c, r, value) {
      let classes = T.JSArrayOfString().of(["tile"]);
      if (c === this[_game].column && r === this[_game].row) {
        classes[$add]("selected");
      } else if (c === this[_game].column || r === this[_game].row || this[_game].cube == sudoku.getCube(c, r)) {
        classes[$add]("related");
      }
      if (value == null) classes[$add]("candidates");
      return classes[$join](" ");
    }
  };
  (sudoku.Renderer.new = function(opts) {
    let game = opts && 'game' in opts ? opts.game : null;
    this[_game] = game;
    this[_game].redraw.listen(dart.bind(this, 'paint'));
    this.paint();
  }).prototype = sudoku.Renderer.prototype;
  dart.addTypeTests(sudoku.Renderer);
  dart.addTypeCaches(sudoku.Renderer);
  dart.setMethodSignature(sudoku.Renderer, () => ({
    __proto__: dart.getMethods(sudoku.Renderer.__proto__),
    paint: dart.fnType(dart.void, [], [dart.dynamic]),
    [_cellInnerHtml]: dart.fnType(core.String, [core.int, core.int, dart.nullable(core.int), core.List$(dart.nullable(core.int))]),
    [_cellClassName]: dart.fnType(core.String, [core.int, core.int, dart.nullable(core.int)])
  }));
  dart.setGetterSignature(sudoku.Renderer, () => ({
    __proto__: dart.getGetters(sudoku.Renderer.__proto__),
    [_boardElement]: html.Element
  }));
  dart.setLibraryUri(sudoku.Renderer, I[0]);
  dart.setFieldSignature(sudoku.Renderer, () => ({
    __proto__: dart.getFields(sudoku.Renderer.__proto__),
    [_game]: dart.finalFieldType(sudoku.Game)
  }));
  var _name = dart.privateName(core, "_name");
  var _Enum__name = dart.privateName(core, "_Enum._name");
  var _Enum_index = dart.privateName(core, "_Enum.index");
  sudoku.Move = class Move extends core._Enum {
    toString() {
      return "Move." + this[_name];
    }
  };
  (sudoku.Move.new = function(index, name) {
    sudoku.Move.__proto__.new.call(this, index, name);
    ;
  }).prototype = sudoku.Move.prototype;
  dart.addTypeTests(sudoku.Move);
  dart.addTypeCaches(sudoku.Move);
  dart.setLibraryUri(sudoku.Move, I[0]);
  dart.setStaticFieldSignature(sudoku.Move, () => ['values', 'up', 'down', 'left', 'right']);
  dart.defineExtensionMethods(sudoku.Move, ['toString']);
  dart.defineLazy(sudoku.Move, {
    /*sudoku.Move.values*/get values() {
      return C[0] || CT.C0;
    },
    /*sudoku.Move.up*/get up() {
      return C[1] || CT.C1;
    },
    /*sudoku.Move.down*/get down() {
      return C[2] || CT.C2;
    },
    /*sudoku.Move.left*/get left() {
      return C[3] || CT.C3;
    },
    /*sudoku.Move.right*/get right() {
      return C[4] || CT.C4;
    }
  }, false);
  sudoku.EntryMode = class EntryMode extends core._Enum {
    toString() {
      return "EntryMode." + this[_name];
    }
  };
  (sudoku.EntryMode.new = function(index, name) {
    sudoku.EntryMode.__proto__.new.call(this, index, name);
    ;
  }).prototype = sudoku.EntryMode.prototype;
  dart.addTypeTests(sudoku.EntryMode);
  dart.addTypeCaches(sudoku.EntryMode);
  dart.setLibraryUri(sudoku.EntryMode, I[0]);
  dart.setStaticFieldSignature(sudoku.EntryMode, () => ['values', 'value', 'candidate']);
  dart.defineExtensionMethods(sudoku.EntryMode, ['toString']);
  dart.defineLazy(sudoku.EntryMode, {
    /*sudoku.EntryMode.values*/get values() {
      return C[5] || CT.C5;
    },
    /*sudoku.EntryMode.value*/get value() {
      return C[6] || CT.C6;
    },
    /*sudoku.EntryMode.candidate*/get candidate() {
      return C[7] || CT.C7;
    }
  }, false);
  sudoku.ToggleResult = class ToggleResult extends core._Enum {
    toString() {
      return "ToggleResult." + this[_name];
    }
  };
  (sudoku.ToggleResult.new = function(index, name) {
    sudoku.ToggleResult.__proto__.new.call(this, index, name);
    ;
  }).prototype = sudoku.ToggleResult.prototype;
  dart.addTypeTests(sudoku.ToggleResult);
  dart.addTypeCaches(sudoku.ToggleResult);
  dart.setLibraryUri(sudoku.ToggleResult, I[0]);
  dart.setStaticFieldSignature(sudoku.ToggleResult, () => ['values', 'insert', 'remove']);
  dart.defineExtensionMethods(sudoku.ToggleResult, ['toString']);
  dart.defineLazy(sudoku.ToggleResult, {
    /*sudoku.ToggleResult.values*/get values() {
      return C[8] || CT.C8;
    },
    /*sudoku.ToggleResult.insert*/get insert() {
      return C[9] || CT.C9;
    },
    /*sudoku.ToggleResult.remove*/get remove() {
      return C[10] || CT.C10;
    }
  }, false);
  sudoku['MoveX|nextColumn'] = function MoveX$124nextColumn($this, column) {
    let t1, t1$;
    switch ($this) {
      case C[1] || CT.C1:
        {
          return column != null ? (dart.notNull(column) - 1)[$modulo](9) : 8;
        }
      case C[2] || CT.C2:
        {
          return column != null ? (dart.notNull(column) + 1)[$modulo](9) : 0;
        }
      case C[3] || CT.C3:
        {
          t1 = column;
          return t1 == null ? 4 : t1;
        }
      case C[4] || CT.C4:
        {
          t1$ = column;
          return t1$ == null ? 4 : t1$;
        }
    }
  };
  sudoku['MoveX|get#nextColumn'] = function MoveX$124get$35nextColumn($this) {
    return dart.fn(column => sudoku['MoveX|nextColumn']($this, column), T.intNToint());
  };
  sudoku['MoveX|nextRow'] = function MoveX$124nextRow($this, row) {
    let t3, t3$;
    switch ($this) {
      case C[1] || CT.C1:
        {
          t3 = row;
          return t3 == null ? 4 : t3;
        }
      case C[2] || CT.C2:
        {
          t3$ = row;
          return t3$ == null ? 4 : t3$;
        }
      case C[3] || CT.C3:
        {
          return row != null ? (dart.notNull(row) - 1)[$modulo](9) : 8;
        }
      case C[4] || CT.C4:
        {
          return row != null ? (dart.notNull(row) + 1)[$modulo](9) : 0;
        }
    }
  };
  sudoku['MoveX|get#nextRow'] = function MoveX$124get$35nextRow($this) {
    return dart.fn(row => sudoku['MoveX|nextRow']($this, row), T.intNToint());
  };
  sudoku.getCube = function getCube(column, row) {
    return row != null && column != null ? (dart.notNull(row) / 3)[$truncate]() + (dart.notNull(column) / 3)[$truncate]() * 3 : null;
  };
  sudoku._emptyNine = function _emptyNine() {
    return T.ListOfintN().filled(9, null);
  };
  sudoku._allNine = function _allNine() {
    return T.ListOfintN().generate(9, dart.fn(index => index + 1, T.intToint()));
  };
  sudoku.emptyPuzzle = function emptyPuzzle() {
    return T.ListOfListOfintN().generate(9, dart.fn(_ => sudoku._emptyNine(), T.intToListOfintN()));
  };
  sudoku.emptyCandidates = function emptyCandidates() {
    return T.ListOfListOfListOfintN().generate(9, dart.fn(_ => T.ListOfListOfintN().generate(9, dart.fn(__ => sudoku._emptyNine(), T.intToListOfintN())), T.intToListOfListOfintN()));
  };
  sudoku.newPuzzleCandidates = function newPuzzleCandidates() {
    return T.ListOfListOfListOfintN().generate(9, dart.fn(_ => T.ListOfListOfintN().generate(9, dart.fn(__ => sudoku._allNine(), T.intToListOfintN())), T.intToListOfListOfintN()));
  };
  sudoku['PuzzleX|copy'] = function PuzzleX$124copy($this, opts) {
    let t5, t5$;
    let withMask = opts && 'withMask' in opts ? opts.withMask : null;
    let puzzle = sudoku.emptyPuzzle();
    for (let c = 0; c < 9; c = c + 1) {
      for (let r = 0; r < 9; r = r + 1) {
        puzzle[$_get](c)[$_set](r, (t5$ = (t5 = withMask, t5 == null ? null : t5[$_get](c)[$_get](r)), t5$ == null ? $this[$_get](c)[$_get](r) : t5$));
      }
    }
    return puzzle;
  };
  sudoku['PuzzleX|get#copy'] = function PuzzleX$124get$35copy($this) {
    return dart.fn(opts => {
      let withMask = opts && 'withMask' in opts ? opts.withMask : null;
      return sudoku['PuzzleX|copy']($this, {withMask: withMask});
    }, T.__ToListOfListOfintN());
  };
  sudoku['PuzzleX|toggle'] = function PuzzleX$124toggle($this, column, row, value) {
    if ($this[$_get](column)[$_get](row) == value) {
      $this[$_get](column)[$_set](row, null);
      return sudoku.ToggleResult.remove;
    }
    $this[$_get](column)[$_set](row, value);
    return sudoku.ToggleResult.insert;
  };
  sudoku['PuzzleX|get#toggle'] = function PuzzleX$124get$35toggle($this) {
    return dart.fn((column, row, value) => sudoku['PuzzleX|toggle']($this, column, row, value), T.intAndintAndintNToToggleResult());
  };
  sudoku['CandidateX|copy'] = function CandidateX$124copy($this) {
    let puzzle = sudoku.emptyCandidates();
    for (let c = 0; c < 9; c = c + 1) {
      for (let r = 0; r < 9; r = r + 1) {
        puzzle[$_get](c)[$_set](r, $this[$_get](c)[$_get](r)[$toList]());
      }
    }
    return puzzle;
  };
  sudoku['CandidateX|get#copy'] = function CandidateX$124get$35copy($this) {
    return dart.fn(() => sudoku['CandidateX|copy']($this), T.VoidToListOfListOfListOfintN());
  };
  sudoku['CandidateX|toggle'] = function CandidateX$124toggle($this, column, row, value) {
    if ($this[$_get](column)[$_get](row)[$_get](value - 1) === value) {
      $this[$_get](column)[$_get](row)[$_set](value - 1, null);
      return sudoku.ToggleResult.remove;
    }
    $this[$_get](column)[$_get](row)[$_set](value - 1, value);
    return sudoku.ToggleResult.insert;
  };
  sudoku['CandidateX|get#toggle'] = function CandidateX$124get$35toggle($this) {
    return dart.fn((column, row, value) => sudoku['CandidateX|toggle']($this, column, row, value), T.intAndintAndintToToggleResult());
  };
  dart.defineLazy(sudoku, {
    /*sudoku.bindings*/get bindings() {
      return new (T.IdentityMapOfint$Input()).from([27, sudoku.Input.reset(), 38, sudoku.Input.cursor({move: sudoku.Move.up}), 40, sudoku.Input.cursor({move: sudoku.Move.down}), 37, sudoku.Input.cursor({move: sudoku.Move.left}), 39, sudoku.Input.cursor({move: sudoku.Move.right}), 87, sudoku.Input.cursor({move: sudoku.Move.up}), 83, sudoku.Input.cursor({move: sudoku.Move.down}), 65, sudoku.Input.cursor({move: sudoku.Move.left}), 68, sudoku.Input.cursor({move: sudoku.Move.right}), 49, sudoku.Input.toggle({value: 1}), 50, sudoku.Input.toggle({value: 2}), 51, sudoku.Input.toggle({value: 3}), 52, sudoku.Input.toggle({value: 4}), 53, sudoku.Input.toggle({value: 5}), 54, sudoku.Input.toggle({value: 6}), 55, sudoku.Input.toggle({value: 7}), 56, sudoku.Input.toggle({value: 8}), 57, sudoku.Input.toggle({value: 9}), 8, sudoku.Input.toggle({value: null})]);
    },
    set bindings(_) {},
    /*sudoku.keyIds*/get keyIds() {
      return C[11] || CT.C11;
    }
  }, false);
  dart.trackLibraries("packages/sudoku/sudoku", {
    "package:sudoku/sudoku.dart": sudoku
  }, {
    "package:sudoku/sudoku.dart": ["src/controller.dart", "src/game.dart", "src/input.dart", "src/renderer.dart", "src/util.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/controller.dart","src/game.dart","src/input.dart","src/renderer.dart","src/util.dart"],"names":[],"mappings":"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","file":"sudoku.sound.ddc.js"}');
  // Exports:
  return {
    sudoku: sudoku
  };
}));

//# sourceMappingURL=sudoku.sound.ddc.js.map
