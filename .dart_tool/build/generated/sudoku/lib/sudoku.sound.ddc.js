define(['dart_sdk'], (function load__packages__sudoku__sudoku(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _internal = dart_sdk._internal;
  const _interceptors = dart_sdk._interceptors;
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
  var $runtimeType = dartx.runtimeType;
  var $length = dartx.length;
  var $className = dartx.className;
  var $innerHtml = dartx.innerHtml;
  var $add = dartx.add;
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
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    intNToint: () => (T.intNToint = dart.constFn(dart.fnType(core.int, [T.intN()])))(),
    ListOfintN: () => (T.ListOfintN = dart.constFn(core.List$(T.intN())))(),
    ListOfListOfintN: () => (T.ListOfListOfintN = dart.constFn(core.List$(T.ListOfintN())))(),
    intToListOfintN: () => (T.intToListOfintN = dart.constFn(dart.fnType(T.ListOfintN(), [core.int])))(),
    ListOfbool: () => (T.ListOfbool = dart.constFn(core.List$(core.bool)))(),
    intTobool: () => (T.intTobool = dart.constFn(dart.fnType(core.bool, [core.int])))(),
    ListOfListOfbool: () => (T.ListOfListOfbool = dart.constFn(core.List$(T.ListOfbool())))(),
    ListOfListOfListOfbool: () => (T.ListOfListOfListOfbool = dart.constFn(core.List$(T.ListOfListOfbool())))(),
    intToListOfbool: () => (T.intToListOfbool = dart.constFn(dart.fnType(T.ListOfbool(), [core.int])))(),
    intToListOfListOfbool: () => (T.intToListOfListOfbool = dart.constFn(dart.fnType(T.ListOfListOfbool(), [core.int])))(),
    ListNOfListOfintN: () => (T.ListNOfListOfintN = dart.constFn(dart.nullable(T.ListOfListOfintN())))(),
    __ToListOfListOfintN: () => (T.__ToListOfListOfintN = dart.constFn(dart.fnType(T.ListOfListOfintN(), [], {withMerge: T.ListNOfListOfintN()}, {})))(),
    intAndintAndintNTovoid: () => (T.intAndintAndintNTovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.int, T.intN()])))(),
    ListNOfListOfListOfbool: () => (T.ListNOfListOfListOfbool = dart.constFn(dart.nullable(T.ListOfListOfListOfbool())))(),
    __ToListOfListOfListOfbool: () => (T.__ToListOfListOfListOfbool = dart.constFn(dart.fnType(T.ListOfListOfListOfbool(), [], {withMerge: T.ListNOfListOfListOfbool()}, {})))(),
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
        [_Enum__name]: "puzzle",
        [_Enum_index]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: sudoku.EntryMode.prototype,
        [_Enum__name]: "value",
        [_Enum_index]: 1
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: sudoku.EntryMode.prototype,
        [_Enum__name]: "candidate",
        [_Enum_index]: 2
      });
    },
    get C5() {
      return C[5] = dart.constList([C[6] || CT.C6, C[7] || CT.C7, C[8] || CT.C8], sudoku.EntryMode);
    },
    get C9() {
      return C[9] = dart.constMap(core.int, core.String, [1, "one", 2, "two", 3, "three", 4, "four", 5, "five", 6, "six", 7, "seven", 8, "eight", 9, "nine"]);
    }
  }, false);
  var C = Array(10).fill(void 0);
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
      }, T.MouseEventToNull());
    }
    [_onClickKey](value) {
      return dart.fn(e => {
        e.stopPropagation();
        e.preventDefault();
        this[_inputController].add(sudoku.Input.toggle({value: value}));
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
  var __Game__autoCandidates = dart.privateName(sudoku, "_#Game#_autoCandidates");
  var __Game__userCandidates = dart.privateName(sudoku, "_#Game#_userCandidates");
  var __Game__puzzle = dart.privateName(sudoku, "_#Game#_puzzle");
  var __Game__values = dart.privateName(sudoku, "_#Game#_values");
  var __Game__mode = dart.privateName(sudoku, "_#Game#_mode");
  var _column = dart.privateName(sudoku, "_column");
  var _row = dart.privateName(sudoku, "_row");
  var _controller = dart.privateName(sudoku, "_controller");
  var _handleInput = dart.privateName(sudoku, "_handleInput");
  var _initPuzzle = dart.privateName(sudoku, "_initPuzzle");
  var _autoCandidates = dart.privateName(sudoku, "_autoCandidates");
  var _userCandidates = dart.privateName(sudoku, "_userCandidates");
  var _puzzle = dart.privateName(sudoku, "_puzzle");
  var _values = dart.privateName(sudoku, "_values");
  var _mode = dart.privateName(sudoku, "_mode");
  var _redraw = dart.privateName(sudoku, "_redraw");
  var _handleEntryMode = dart.privateName(sudoku, "_handleEntryMode");
  var _handleCursor = dart.privateName(sudoku, "_handleCursor");
  var _handleToggle = dart.privateName(sudoku, "_handleToggle");
  var _updateAutoCandidates = dart.privateName(sudoku, "_updateAutoCandidates");
  sudoku.Game = class Game extends core.Object {
    get redraw() {
      return this[_redrawController].stream;
    }
    get [_autoCandidates]() {
      let t0;
      t0 = this[__Game__autoCandidates];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_autoCandidates")) : t0;
    }
    set [_autoCandidates](library$32package$58sudoku$47src$47game$46dart$58$58_autoCandidates$35param) {
      this[__Game__autoCandidates] = library$32package$58sudoku$47src$47game$46dart$58$58_autoCandidates$35param;
    }
    get [_userCandidates]() {
      let t0;
      t0 = this[__Game__userCandidates];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_userCandidates")) : t0;
    }
    set [_userCandidates](library$32package$58sudoku$47src$47game$46dart$58$58_userCandidates$35param) {
      this[__Game__userCandidates] = library$32package$58sudoku$47src$47game$46dart$58$58_userCandidates$35param;
    }
    get candidates() {
      return sudoku['CandidateX|copy'](this[_autoCandidates], {withMerge: this[_userCandidates]});
    }
    get [_puzzle]() {
      let t0;
      t0 = this[__Game__puzzle];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_puzzle")) : t0;
    }
    set [_puzzle](library$32package$58sudoku$47src$47game$46dart$58$58_puzzle$35param) {
      this[__Game__puzzle] = library$32package$58sudoku$47src$47game$46dart$58$58_puzzle$35param;
    }
    get [_values]() {
      let t0;
      t0 = this[__Game__values];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_values")) : t0;
    }
    set [_values](library$32package$58sudoku$47src$47game$46dart$58$58_values$35param) {
      this[__Game__values] = library$32package$58sudoku$47src$47game$46dart$58$58_values$35param;
    }
    get puzzle() {
      return sudoku['PuzzleX|copy'](this[_puzzle], {withMerge: this[_values]});
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
        case dart.wrapType(sudoku.EntryModeInput):
          {
            this[_handleEntryMode](sudoku.EntryModeInput.as(input));
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
      this[_redraw]();
    }
    [_initPuzzle]() {
      this[_column] = null;
      this[_row] = null;
      this[_mode] = sudoku.EntryMode.puzzle;
      this[_puzzle] = sudoku.emptyPuzzle();
      this[_values] = sudoku.emptyPuzzle();
      this[_autoCandidates] = sudoku.allCandidates();
      this[_userCandidates] = sudoku.allCandidates();
      this[_redraw]();
    }
    [_handleEntryMode](entryModeInput) {
      this[_mode] = entryModeInput.entryMode;
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
      let t0, t0$, t0$0;
      if (this.hasCursor) {
        if (this[_mode] === sudoku.EntryMode.puzzle) {
          this[_puzzle] = (t0 = sudoku['PuzzleX|copy'](this[_puzzle]), (() => {
            sudoku['PuzzleX|toggle'](t0, dart.nullCheck(this[_column]), dart.nullCheck(this[_row]), toggleInput.value);
            return t0;
          })());
          this[_updateAutoCandidates]();
        } else if (this[_mode] === sudoku.EntryMode.value) {
          this[_values] = (t0$ = sudoku['PuzzleX|copy'](this[_values]), (() => {
            sudoku['PuzzleX|toggle'](t0$, dart.nullCheck(this[_column]), dart.nullCheck(this[_row]), toggleInput.value);
            return t0$;
          })());
          this[_updateAutoCandidates]();
        } else if (this[_mode] === sudoku.EntryMode.candidate) {
          this[_userCandidates] = (t0$0 = sudoku['CandidateX|copy'](this[_userCandidates]), (() => {
            sudoku['CandidateX|toggle'](t0$0, dart.nullCheck(this[_column]), dart.nullCheck(this[_row]), toggleInput.value);
            return t0$0;
          })());
        }
      }
    }
    [_updateAutoCandidates]() {
      this[_autoCandidates] = sudoku.considering(this.puzzle);
    }
  };
  (sudoku.Game.new = function(opts) {
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[_redrawController] = async.StreamController.broadcast();
    this[__Game__autoCandidates] = null;
    this[__Game__userCandidates] = null;
    this[__Game__puzzle] = null;
    this[__Game__values] = null;
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
    [_handleEntryMode]: dart.fnType(dart.void, [sudoku.EntryModeInput]),
    [_handleCursor]: dart.fnType(dart.void, [sudoku.CursorInput]),
    [_handleToggle]: dart.fnType(dart.void, [sudoku.ToggleInput]),
    [_updateAutoCandidates]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(sudoku.Game, () => ({
    __proto__: dart.getGetters(sudoku.Game.__proto__),
    redraw: async.Stream,
    [_autoCandidates]: core.List$(core.List$(core.List$(core.bool))),
    [_userCandidates]: core.List$(core.List$(core.List$(core.bool))),
    candidates: core.List$(core.List$(core.List$(core.bool))),
    [_puzzle]: core.List$(core.List$(dart.nullable(core.int))),
    [_values]: core.List$(core.List$(dart.nullable(core.int))),
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
    [_autoCandidates]: core.List$(core.List$(core.List$(core.bool))),
    [_userCandidates]: core.List$(core.List$(core.List$(core.bool))),
    [_puzzle]: core.List$(core.List$(dart.nullable(core.int))),
    [_values]: core.List$(core.List$(dart.nullable(core.int))),
    [_mode]: sudoku.EntryMode
  }));
  dart.setLibraryUri(sudoku.Game, I[0]);
  dart.setFieldSignature(sudoku.Game, () => ({
    __proto__: dart.getFields(sudoku.Game.__proto__),
    [_redrawController]: dart.finalFieldType(async.StreamController),
    [_controller]: dart.finalFieldType(sudoku.Controller),
    [__Game__autoCandidates]: dart.fieldType(dart.nullable(core.List$(core.List$(core.List$(core.bool))))),
    [__Game__userCandidates]: dart.fieldType(dart.nullable(core.List$(core.List$(core.List$(core.bool))))),
    [__Game__puzzle]: dart.fieldType(dart.nullable(core.List$(core.List$(dart.nullable(core.int))))),
    [__Game__values]: dart.fieldType(dart.nullable(core.List$(core.List$(dart.nullable(core.int))))),
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
    static entryMode(mode) {
      return new sudoku.EntryModeInput.new(mode);
    }
    static ['_#entryMode#tearOff'](mode) {
      return sudoku.Input.entryMode(mode);
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
  dart.setStaticMethodSignature(sudoku.Input, () => ['reset', 'entryMode', 'cursor', 'toggle']);
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
  var entryMode$ = dart.privateName(sudoku, "EntryModeInput.entryMode");
  sudoku.EntryModeInput = class EntryModeInput extends core.Object {
    get entryMode() {
      return this[entryMode$];
    }
    set entryMode(value) {
      super.entryMode = value;
    }
    static ['_#new#tearOff'](entryMode) {
      return new sudoku.EntryModeInput.new(entryMode);
    }
  };
  (sudoku.EntryModeInput.new = function(entryMode) {
    this[entryMode$] = entryMode;
    ;
  }).prototype = sudoku.EntryModeInput.prototype;
  dart.addTypeTests(sudoku.EntryModeInput);
  dart.addTypeCaches(sudoku.EntryModeInput);
  sudoku.EntryModeInput[dart.implements] = () => [sudoku.Input];
  dart.setLibraryUri(sudoku.EntryModeInput, I[0]);
  dart.setFieldSignature(sudoku.EntryModeInput, () => ({
    __proto__: dart.getFields(sudoku.EntryModeInput.__proto__),
    entryMode: dart.finalFieldType(sudoku.EntryMode)
  }));
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
        let candidateHtml = "";
        for (let c = 0; c < candidates[$length]; c = c + 1) {
          let contents = candidates[$_get](c) ? dart.str(c + 1) : "";
          candidateHtml = candidateHtml + ("<div>" + contents + "</div>");
        }
        return candidateHtml;
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
    [_cellInnerHtml]: dart.fnType(core.String, [core.int, core.int, dart.nullable(core.int), core.List$(core.bool)]),
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
  dart.setStaticFieldSignature(sudoku.EntryMode, () => ['values', 'puzzle', 'value', 'candidate']);
  dart.defineExtensionMethods(sudoku.EntryMode, ['toString']);
  dart.defineLazy(sudoku.EntryMode, {
    /*sudoku.EntryMode.values*/get values() {
      return C[5] || CT.C5;
    },
    /*sudoku.EntryMode.puzzle*/get puzzle() {
      return C[6] || CT.C6;
    },
    /*sudoku.EntryMode.value*/get value() {
      return C[7] || CT.C7;
    },
    /*sudoku.EntryMode.candidate*/get candidate() {
      return C[8] || CT.C8;
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
  sudoku.emptyPuzzle = function emptyPuzzle() {
    return T.ListOfListOfintN().generate(9, dart.fn(_ => sudoku._emptyNine(), T.intToListOfintN()));
  };
  sudoku._allNine = function _allNine(set) {
    return T.ListOfbool().generate(9, dart.fn(_ => set, T.intTobool()));
  };
  sudoku.allCandidates = function allCandidates() {
    return T.ListOfListOfListOfbool().generate(9, dart.fn(_ => T.ListOfListOfbool().generate(9, dart.fn(__ => sudoku._allNine(true), T.intToListOfbool())), T.intToListOfListOfbool()));
  };
  sudoku.noneCandidates = function noneCandidates() {
    return T.ListOfListOfListOfbool().generate(9, dart.fn(_ => T.ListOfListOfbool().generate(9, dart.fn(__ => sudoku._allNine(false), T.intToListOfbool())), T.intToListOfListOfbool()));
  };
  sudoku['PuzzleX|copy'] = function PuzzleX$124copy($this, opts) {
    let t6, t5;
    let withMerge = opts && 'withMerge' in opts ? opts.withMerge : null;
    let puzzle = sudoku.emptyPuzzle();
    for (let c = 0; c < 9; c = c + 1) {
      for (let r = 0; r < 9; r = r + 1) {
        puzzle[$_get](c)[$_set](r, (t5 = $this[$_get](c)[$_get](r), t5 == null ? (t6 = withMerge, t6 == null ? null : t6[$_get](c)[$_get](r)) : t5));
      }
    }
    return puzzle;
  };
  sudoku['PuzzleX|get#copy'] = function PuzzleX$124get$35copy($this) {
    return dart.fn(opts => {
      let withMerge = opts && 'withMerge' in opts ? opts.withMerge : null;
      return sudoku['PuzzleX|copy']($this, {withMerge: withMerge});
    }, T.__ToListOfListOfintN());
  };
  sudoku['PuzzleX|toggle'] = function PuzzleX$124toggle($this, column, row, value) {
    if ($this[$_get](column)[$_get](row) == value) {
      $this[$_get](column)[$_set](row, null);
      return;
    }
    $this[$_get](column)[$_set](row, value);
  };
  sudoku['PuzzleX|get#toggle'] = function PuzzleX$124get$35toggle($this) {
    return dart.fn((column, row, value) => sudoku['PuzzleX|toggle']($this, column, row, value), T.intAndintAndintNTovoid());
  };
  sudoku['CandidateX|copy'] = function CandidateX$124copy($this, opts) {
    let withMerge = opts && 'withMerge' in opts ? opts.withMerge : null;
    let candidates = sudoku.allCandidates();
    if (withMerge != null) {
      for (let c = 0; c < 9; c = c + 1) {
        for (let r = 0; r < 9; r = r + 1) {
          for (let i = 0; i < 9; i = i + 1) {
            candidates[$_get](c)[$_get](r)[$_set](i, $this[$_get](c)[$_get](r)[$_get](i) && withMerge[$_get](c)[$_get](r)[$_get](i));
          }
        }
      }
    } else {
      for (let c = 0; c < 9; c = c + 1) {
        for (let r = 0; r < 9; r = r + 1) {
          candidates[$_get](c)[$_set](r, $this[$_get](c)[$_get](r)[$toList]());
        }
      }
    }
    return candidates;
  };
  sudoku['CandidateX|get#copy'] = function CandidateX$124get$35copy($this) {
    return dart.fn(opts => {
      let withMerge = opts && 'withMerge' in opts ? opts.withMerge : null;
      return sudoku['CandidateX|copy']($this, {withMerge: withMerge});
    }, T.__ToListOfListOfListOfbool());
  };
  sudoku['CandidateX|toggle'] = function CandidateX$124toggle($this, column, row, value) {
    if (value == null) $this[$_get](column)[$_set](row, sudoku._allNine(true));
    $this[$_get](column)[$_get](row)[$_set](dart.nullCheck(value) - 1, !$this[$_get](column)[$_get](row)[$_get](dart.notNull(value) - 1));
  };
  sudoku['CandidateX|get#toggle'] = function CandidateX$124get$35toggle($this) {
    return dart.fn((column, row, value) => sudoku['CandidateX|toggle']($this, column, row, value), T.intAndintAndintNTovoid());
  };
  sudoku.considering = function considering(values) {
    let candidates = sudoku.allCandidates();
    for (let c = 0; c < 9; c = c + 1) {
      for (let r = 0; r < 9; r = r + 1) {
        if (values[$_get](c)[$_get](r) != null) {
          let value = dart.nullCheck(values[$_get](c)[$_get](r));
          for (let vc = 0; vc < 9; vc = vc + 1) {
            for (let vr = 0; vr < 9; vr = vr + 1) {
              if (vc === c || vr === r || sudoku.getCube(vc, vr) == sudoku.getCube(c, r)) {
                candidates[$_get](vc)[$_get](vr)[$_set](value - 1, false);
              }
            }
          }
        }
      }
    }
    return candidates;
  };
  dart.defineLazy(sudoku, {
    /*sudoku.bindings*/get bindings() {
      return new (T.IdentityMapOfint$Input()).from([27, sudoku.Input.reset(), 38, sudoku.Input.cursor({move: sudoku.Move.up}), 40, sudoku.Input.cursor({move: sudoku.Move.down}), 37, sudoku.Input.cursor({move: sudoku.Move.left}), 39, sudoku.Input.cursor({move: sudoku.Move.right}), 87, sudoku.Input.cursor({move: sudoku.Move.up}), 83, sudoku.Input.cursor({move: sudoku.Move.down}), 65, sudoku.Input.cursor({move: sudoku.Move.left}), 68, sudoku.Input.cursor({move: sudoku.Move.right}), 49, sudoku.Input.toggle({value: 1}), 50, sudoku.Input.toggle({value: 2}), 51, sudoku.Input.toggle({value: 3}), 52, sudoku.Input.toggle({value: 4}), 53, sudoku.Input.toggle({value: 5}), 54, sudoku.Input.toggle({value: 6}), 55, sudoku.Input.toggle({value: 7}), 56, sudoku.Input.toggle({value: 8}), 57, sudoku.Input.toggle({value: 9}), 8, sudoku.Input.toggle({value: null})]);
    },
    set bindings(_) {},
    /*sudoku.keyIds*/get keyIds() {
      return C[9] || CT.C9;
    }
  }, false);
  dart.trackLibraries("packages/sudoku/sudoku", {
    "package:sudoku/sudoku.dart": sudoku
  }, {
    "package:sudoku/sudoku.dart": ["src/controller.dart", "src/game.dart", "src/input.dart", "src/renderer.dart", "src/util.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/controller.dart","src/game.dart","src/input.dart","src/renderer.dart","src/util.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAyC6B,YAAA,AAAiB;IAAM;;AAErB,YAAuB,gBAAvB,mBAAc;IAAU;;AACrB,YAA0B,gBAA1B,mBAAc;IAAa;;;;iBAqBlC;AACjB,oBAAU,AAAE,CAAD;AACjB,UAAI,AAAS,8BAAY,OAAO;AACU,QAAxC,AAAiB,2BAAqB,eAAjB,AAAQ,uBAAC,OAAO;;IAEzC;mBAEiB,GAAO;AAAM,qBAAY;AACjB,QAAnB,AAAE,CAAD;AACiB,QAAlB,AAAE,CAAD;AACoD,QAArD,AAAiB,2BAAU,6BAAe,CAAC,OAAO,CAAC;;IACpD;kBAEW;AAAU,qBAAY;AACb,QAAnB,AAAE,CAAD;AACiB,QAAlB,AAAE,CAAD;AAC+C,QAAhD,AAAiB,2BAAU,4BAAc,KAAK;;IAC/C;mBAEmB;AACH,MAAnB,AAAE,CAAD;AACiB,MAAlB,AAAE,CAAD;AACmC,MAApC,AAAiB,2BAAU;IAC7B;;;;IAhD8B,yBAAmB;AAOJ,SAA3C,AAAS;iBAAA,OAAM,AAAU,gCAAO;AACW,UAA3C,AAAS;kBAAA,OAAM,AAAQ,+BAAO;AAE1B,YAAI;AACF,mBAAW,AAAc;AAC/B,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AACtB,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AACwB,QAA9C,AAAQ,AAAI,AAAQ,QAAZ,QAAC,CAAC,4CAAiB,mBAAa,CAAC,EAAE,CAAC;AACzC,QAAH,IAAA,AAAC,CAAA;;;AAIL,aAAW,QAAS,AAAO;AACnB,uBAAiE,eAApD,AAAiB,qCAAc,AAAoB,MAAH,eAAb,AAAM,qBAAC,KAAK;AACrB,MAA7C,AAAW,AAAQ,UAAT,2CAAgB,kBAAY,KAAK;;EAE/C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AC3DqB,YAAA,AAAkB;IAAM;;;AAKjB;;IAAe;0BAAf;;IAAe;;;AACf;;IAAe;0BAAf;;IAAe;;AACF,YAAgB,2BAAhB,mCAAgC;IAAgB;;;AAGnE;;IAAO;kBAAP;;IAAO;;;AACP;;IAAO;kBAAP;;IAAO;;AACE,YAAQ,wBAAR,2BAAwB;IAAQ;;;AAEhD;+CAAkB;IAAK;gBAAvB;;IAAuB;;AAChB;IAAK;;AAGR;IAAO;;AAGV;IAAI;;AAEH,4BAAQ,eAAS;IAAK;;AAEjB,YAAA,AAAgB,0BAAG;IAAY;;;;;;AAOxC,YAAA,AAAkB,6BAAI;IAAQ;mBAEnB;AACtB,cAAQ,AAAM,KAAD;;;AAEI,YAAb;AACA;;;;AAEyC,YAAzC,uBAAuB,yBAAN,KAAK;AACtB;;;;AAEmC,YAAnC,oBAAoB,sBAAN,KAAK;AACnB;;;;AAEmC,YAAnC,oBAAoB,sBAAN,KAAK;AACnB;;;AAEK,MAAT;IACF;;AAGgB,MAAd,gBAAU;AACC,MAAX,aAAO;AACiB,MAAxB,cAAkB;AACK,MAAvB,gBAAU;AACa,MAAvB,gBAAU;AACuB,MAAjC,wBAAkB;AACe,MAAjC,wBAAkB;AACT,MAAT;IACF;uBAEqC;AACH,MAAhC,cAAQ,AAAe,cAAD;IACxB;oBAE+B;AAC7B,UAAI,AAAY,WAAD;AACkC,QAA/C,gBAA4B,2BAAF,eAAhB,AAAY,WAAD,QAAkB;AACD,QAAtC,aAAyB,wBAAF,eAAhB,AAAY,WAAD,QAAe;;AAEL,QAA5B,gBAAU,AAAY,WAAD;AACC,QAAtB,aAAO,AAAY,WAAD;;IAEtB;oBAE+B;;AAC7B,UAAI;AACF,YAAI,AAAM,gBAAa;AAC+C,UAApE,sBAAkB,uBAAR,gBAAQ;AAAQ,yCAAc,eAAP,gBAAc,eAAJ,aAAO,AAAY,WAAD;;;AACtC,UAAvB;cACK,KAAI,AAAM,gBAAa;AACwC,UAApE,uBAAkB,uBAAR,gBAAQ;AAAQ,0CAAc,eAAP,gBAAc,eAAJ,aAAO,AAAY,WAAD;;;AACtC,UAAvB;cACK,KAAI,AAAM,gBAAa;AACwD,UAApF,gCAAkC,0BAAhB,wBAAgB;AAAQ,8CAAc,eAAP,gBAAc,eAAJ,aAAO,AAAY,WAAD;;;;;IAGnF;;AAGuC,MAArC,wBAAkB,mBAAY;IAChC;;;QAlE0B;IA5BH,0BAAqC;mCAMhC;mCACA;2BAIN;2BACA;yBAGP;IAGV;IAGA;IAOgD,oBAAE,UAAU;AACzB,IAAtC,AAAY,AAAM,yCAAO;AACZ,IAAb;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AC/ByB;IAAY;;;;qBACH;AAAS,2CAAe,IAAI;IAAC;;;;;UACpC;UAAa;UAAW;AAAU,wCAAY,MAAM,EAAE,GAAG,EAAE,IAAI;IAAC;;;;;;;;UAChE;AAAW,wCAAY,KAAK;IAAC;;;;;;;;;;;;;;;;;;;EAGvB;;;;;;;IAIjB;;;;;;;;;;;IADI;;EAAU;;;;;;;;;;;;;IAMnB;;;;;;IAAQ;;;;;;IACP;;;;;;;;;;qCAFK,QAAa,KAAU;IAAvB;IAAa;IAAU;;EAAK;;;;;;;;;;;;;IAOlC;;;;;;;;;;;IADM;;EAAM;;;;;;;;;;;;;;AClBM,YAAuB,gBAAvB,mBAAc;IAAU;;;;;UAOzC;;AACJ,mBAAS,AAAM;AACf,uBAAa,AAAM;AACrB,cAAI;AACF,qBAAW,AAAc;AAC/B,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAO,MAAD,WAAS,IAAA,AAAC,CAAA;AAClC,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAM,AAAI,MAAJ,QAAC,CAAC,YAAU,IAAA,AAAC,CAAA;AAC/B,2BAAa,qBAAe,CAAC,EAAE,CAAC,EAAE,AAAM,AAAG,MAAH,QAAC,CAAC,SAAE,CAAC;AAC7C,6BAAe,qBAAe,CAAC,EAAE,CAAC,EAAE,AAAM,AAAG,MAAH,QAAC,CAAC,SAAE,CAAC,GAAG,AAAU,AAAG,UAAH,QAAC,CAAC,SAAE,CAAC;AACvE,cAAI,AAAQ,AAAI,QAAJ,QAAC,CAAC,kBAAe,UAAU,IAAI,AAAQ,AAAI,QAAJ,QAAC,CAAC,kBAAe,YAAY;AAGlD,iBAF5B,AAAQ,QAAA,QAAC,CAAC;YAAF;AACJ,+BAAY,UAAU;AACtB,+BAAY,YAAY;;;;AAG3B,UAAH,IAAA,AAAC,CAAA;;;IAGP;qBAE0B,GAAO,GAAQ,OAAkB;AACzD,UAAI,KAAK;AACP,cAAe,UAAN,KAAK;;AAEV,4BAAgB;AACpB,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAW,UAAD,WAAS,IAAA,AAAC,CAAA;AAChC,yBAAW,AAAU,UAAA,QAAC,CAAC,IAAe,SAAR,AAAE,CAAD,GAAG,KAAM;AACP,UAAvC,gBAAA,AAAc,aAAD,IAAI,AAAsB,UAAf,QAAQ;;AAElC,cAAO,cAAa;;IAExB;qBAE0B,GAAO,GAAQ;AACnC,oBAAkB,wBAAC;AACvB,UAAI,AAAE,CAAD,KAAI,AAAM,sBAAU,AAAE,CAAD,KAAI,AAAM;AACX,QAAvB,AAAQ,OAAD,OAAK;YACP,KAAI,AAAE,CAAD,KAAI,AAAM,sBAAU,AAAE,CAAD,KAAI,AAAM,mBAAO,AAAM,AAAK,oBAAG,eAAQ,CAAC,EAAE,CAAC;AACpD,QAAtB,AAAQ,OAAD,OAAK;;AAEd,UAAI,AAAM,KAAD,UAAU,AAAQ,AAAiB,OAAlB,OAAK;AAC/B,YAAO,AAAQ,QAAD,QAAM;IACtB;;;QA/CwB;IAAe,cAAE,IAAI;AACjB,IAA1B,AAAM,AAAO,oCAAO;AACb,IAAP;EACF;;;;;;;;;;;;;;;;;;;;;;;;ICFF;;qCALK;;;EAKL;;;;;;;MALK,kBAAM;;;MACT,cAAE;;;MACF,gBAAI;;;MACJ,gBAAI;;;MACJ,iBAAK;;;;;;;IAQP;;0CAJK;;;EAIL;;;;;;;MAJK,uBAAM;;;MACT,uBAAM;;;MACN,sBAAK;;;MACL,0BAAS;;;;mEAIW;;AAClB;;;AAEI,gBAAO,AAAO,OAAD,WAAwB,CAAL,aAAP,MAAM,IAAG,YAAK,KAAI;;;;AAE3C,gBAAO,AAAO,OAAD,WAAwB,CAAL,aAAP,MAAM,IAAG,YAAK,KAAI;;;;AAE3C,eAAO,MAAM;gBAAN,cAAU;;;;AAEjB,gBAAO,MAAM;gBAAN,eAAU;;;EAEvB;;AAXI,mBAAgB,4CAAhB,MAAM;EAWV;6DAEiB;;AACf;;;AAEI,eAAO,GAAG;gBAAH,cAAO;;;;AAEd,gBAAO,GAAG;gBAAH,eAAO;;;;AAEd,gBAAO,AAAI,IAAD,WAAqB,CAAL,aAAJ,GAAG,IAAG,YAAK,KAAI;;;;AAErC,gBAAO,AAAI,IAAD,WAAqB,CAAL,aAAJ,GAAG,IAAG,YAAK,KAAI;;;EAE3C;;AAXI,mBAAa,sCAAb,GAAG;EAWP;oCAGgB,QAAa;AAAQ,UAAA,AAAY,IAAT,YAAY,MAAM,WAAe,AAAK,cAAT,GAAG,IAAI,kBAAW,AAAK,cAAZ,MAAM,IAAI,kBAAI,IAAI;EAAI;;AAE7E,UAAK,uBAAO,GAAG;EAAK;;AACb,UAAK,+BAAS,GAAG,QAAC,KAAM;EAAa;sCAE9C;AAAQ,UAAK,yBAAS,GAAG,QAAC,KAAM,GAAG;EAAC;;AACnB,UAAK,qCAAS,GAAG,QAAC,KAAW,8BAAS,GAAG,QAAC,MAAO,gBAAS;EAAO;;AAChE,UAAK,qCAAS,GAAG,QAAC,KAAW,8BAAS,GAAG,QAAC,MAAO,gBAAS;EAAQ;;;QAIlE;AACjC,iBAAS;AACf,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AACtB,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AACuB,QAA7C,AAAM,AAAG,MAAH,QAAC,CAAC,SAAE,CAAC,GAAe,KAAP,AAAG,aAAF,CAAC,SAAE,CAAC,GAAF,mBAAO,SAAS,eAAT,OAAU,AAAG,UAAF,CAAC,SAAE,CAAC;;;AAGhD,UAAO,OAAM;EACf;;AARiB;UAAwB;AAAxB,gEAAS;;EAQ1B;+DAEgB,QAAY,KAAU;AACpC,QAAQ,AAAQ,AAAM,aAAb,MAAM,SAAE,GAAG,KAAK,KAAK;AACJ,MAApB,AAAQ,aAAP,MAAM,SAAE,GAAG,EAAI;AACpB;;AAEuB,IAArB,AAAQ,aAAP,MAAM,SAAE,GAAG,EAAI,KAAK;EAC3B;;AANK,oBAAW,QAAY,KAAU,0CAAjC,MAAM,EAAN,GAAG,EAAH,KAAK;EAMV;;QAIqD;AAC7C,qBAAa;AACnB,QAAI,SAAS;AACX,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AACtB,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AACtB,mBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AACmC,YAAzD,AAAU,AAAG,AAAG,UAAN,QAAC,CAAC,SAAE,CAAC,SAAE,CAAC,EAAQ,AAAG,AAAG,AAAI,aAAT,CAAC,SAAE,CAAC,SAAE,CAAC,KAAK,AAAS,AAAG,AAAG,SAAN,QAAC,CAAC,SAAE,CAAC,SAAE,CAAC;;;;;AAK9D,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AACtB,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AACgB,UAAtC,AAAU,AAAG,UAAH,QAAC,CAAC,SAAE,CAAC,EAAQ,AAAG,AAAI,aAAN,CAAC,SAAE,CAAC;;;;AAIlC,UAAO,WAAU;EACnB;;AAlBuB;UAA8B;AAA9B,mEAAS;;EAkBhC;qEAGgB,QAAY,KAAU;AACpC,QAAI,AAAM,KAAD,UAAc,AAAQ,AAAsB,aAA7B,MAAM,SAAE,GAAG,EAAI,gBAAS;AACa,IAAzD,AAAQ,AAAK,aAAZ,MAAM,SAAE,GAAG,SAAO,AAAE,eAAP,KAAK,IAAI,IAAU,AAAQ,AAAK,aAAZ,MAAM,SAAE,GAAG,SAAQ,aAAN,KAAK,IAAG;EAC7D;;AAHK,oBAAW,QAAY,KAAU,6CAAjC,MAAM,EAAN,GAAG,EAAH,KAAK;EAGV;4CAIkD;AAC5C,qBAAa;AACnB,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AACtB,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AACtB,YAAI,AAAM,AAAG,MAAH,QAAC,CAAC,SAAE,CAAC;AACP,sBAAoB,eAAZ,AAAM,AAAG,MAAH,QAAC,CAAC,SAAE,CAAC;AACzB,mBAAS,KAAK,GAAG,AAAG,EAAD,GAAG,GAAG,KAAA,AAAE,EAAA;AACzB,qBAAS,KAAK,GAAG,AAAG,EAAD,GAAG,GAAG,KAAA,AAAE,EAAA;AACzB,kBAAI,AAAG,EAAD,KAAI,CAAC,IAAI,AAAG,EAAD,KAAI,CAAC,IAAI,AAAgB,eAAR,EAAE,EAAE,EAAE,KAAK,eAAQ,CAAC,EAAE,CAAC;AAClB,gBAArC,AAAU,AAAI,AAAI,UAAR,QAAC,EAAE,SAAE,EAAE,SAAE,AAAM,KAAD,GAAG,GAAK;;;;;;;AAO5C,UAAO,WAAU;EACnB;;MJvHgB,eAAQ;YAAG,4CACN,0BAED,2BAAkB,sBAChB,2BAAkB,wBAClB,2BAAkB,wBACjB,2BAAkB,yBAEtB,2BAAkB,sBAClB,2BAAkB,wBAClB,2BAAkB,wBAClB,2BAAkB,qBAEnC,IAAU,4BAAc,KACxB,IAAU,4BAAc,KACxB,IAAU,4BAAc,KACxB,IAAU,4BAAc,KACxB,IAAU,4BAAc,KACxB,IAAU,4BAAc,KACxB,IAAU,4BAAc,KACxB,IAAU,4BAAc,KACxB,IAAU,4BAAc,QACC,4BAAc;;;MAGnC,aAAM","file":"sudoku.sound.ddc.js"}');
  // Exports:
  return {
    sudoku: sudoku
  };
}));

//# sourceMappingURL=sudoku.sound.ddc.js.map
