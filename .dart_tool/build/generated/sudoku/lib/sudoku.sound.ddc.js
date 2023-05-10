define(['dart_sdk'], (function load__packages__sudoku__sudoku(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
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
  var $forEach = dartx.forEach;
  var $last = dartx.last;
  var $runtimeType = dartx.runtimeType;
  var $isNotEmpty = dartx.isNotEmpty;
  var $removeLast = dartx.removeLast;
  var $add = dartx.add;
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var $length = dartx.length;
  var $className = dartx.className;
  var $innerHtml = dartx.innerHtml;
  var $join = dartx.join;
  var $modulo = dartx['%'];
  var $truncate = dartx.truncate;
  var $_set = dartx._set;
  var $putIfAbsent = dartx.putIfAbsent;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    StreamControllerOfInput: () => (T.StreamControllerOfInput = dart.constFn(async.StreamController$(sudoku.Input)))(),
    MouseEventTovoid: () => (T.MouseEventTovoid = dart.constFn(dart.fnType(dart.void, [html.MouseEvent])))(),
    MouseEventToNvoid: () => (T.MouseEventToNvoid = dart.constFn(dart.nullable(T.MouseEventTovoid())))(),
    MouseEventToNull: () => (T.MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))(),
    JSArrayOfEntryMode: () => (T.JSArrayOfEntryMode = dart.constFn(_interceptors.JSArray$(sudoku.EntryMode)))(),
    IdentityMapOfint$Finding: () => (T.IdentityMapOfint$Finding = dart.constFn(_js_helper.IdentityMap$(core.int, sudoku.Finding)))(),
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    ListOfintN: () => (T.ListOfintN = dart.constFn(core.List$(T.intN())))(),
    ListOfListOfintN: () => (T.ListOfListOfintN = dart.constFn(core.List$(T.ListOfintN())))(),
    JSArrayOfListOfListOfintN: () => (T.JSArrayOfListOfListOfintN = dart.constFn(_interceptors.JSArray$(T.ListOfListOfintN())))(),
    SetOfint: () => (T.SetOfint = dart.constFn(core.Set$(core.int)))(),
    ListOfSetOfint: () => (T.ListOfSetOfint = dart.constFn(core.List$(T.SetOfint())))(),
    ListOfListOfSetOfint: () => (T.ListOfListOfSetOfint = dart.constFn(core.List$(T.ListOfSetOfint())))(),
    JSArrayOfListOfListOfSetOfint: () => (T.JSArrayOfListOfListOfSetOfint = dart.constFn(_interceptors.JSArray$(T.ListOfListOfSetOfint())))(),
    MapOfint$bool: () => (T.MapOfint$bool = dart.constFn(core.Map$(core.int, core.bool)))(),
    IdentityMapOfint$MapOfint$bool: () => (T.IdentityMapOfint$MapOfint$bool = dart.constFn(_js_helper.IdentityMap$(core.int, T.MapOfint$bool())))(),
    intAndintToNull: () => (T.intAndintToNull = dart.constFn(dart.fnType(core.Null, [core.int, core.int])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    intNToint: () => (T.intNToint = dart.constFn(dart.fnType(core.int, [T.intN()])))(),
    intToListOfintN: () => (T.intToListOfintN = dart.constFn(dart.fnType(T.ListOfintN(), [core.int])))(),
    intToSetOfint: () => (T.intToSetOfint = dart.constFn(dart.fnType(T.SetOfint(), [core.int])))(),
    intToListOfSetOfint: () => (T.intToListOfSetOfint = dart.constFn(dart.fnType(T.ListOfSetOfint(), [core.int])))(),
    LinkedHashSetOfint: () => (T.LinkedHashSetOfint = dart.constFn(collection.LinkedHashSet$(core.int)))(),
    intAndintTointN: () => (T.intAndintTointN = dart.constFn(dart.fnType(T.intN(), [core.int, core.int])))(),
    ListNOfListOfintN: () => (T.ListNOfListOfintN = dart.constFn(dart.nullable(T.ListOfListOfintN())))(),
    __ToListOfListOfintN: () => (T.__ToListOfListOfintN = dart.constFn(dart.fnType(T.ListOfListOfintN(), [], {withMerge: T.ListNOfListOfintN()}, {})))(),
    intAndintAndintNTovoid: () => (T.intAndintAndintNTovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.int, T.intN()])))(),
    intAndintToSetOfint: () => (T.intAndintToSetOfint = dart.constFn(dart.fnType(T.SetOfint(), [core.int, core.int])))(),
    ListNOfListOfSetOfint: () => (T.ListNOfListOfSetOfint = dart.constFn(dart.nullable(T.ListOfListOfSetOfint())))(),
    __ToListOfListOfSetOfint: () => (T.__ToListOfListOfSetOfint = dart.constFn(dart.fnType(T.ListOfListOfSetOfint(), [], {withMerge: T.ListNOfListOfSetOfint()}, {})))(),
    MapOfint$Finding: () => (T.MapOfint$Finding = dart.constFn(core.Map$(core.int, sudoku.Finding)))(),
    IdentityMapOfint$MapOfint$Finding: () => (T.IdentityMapOfint$MapOfint$Finding = dart.constFn(_js_helper.IdentityMap$(core.int, T.MapOfint$Finding())))(),
    MapOfint$MapOfint$Finding: () => (T.MapOfint$MapOfint$Finding = dart.constFn(core.Map$(core.int, T.MapOfint$Finding())))(),
    VoidToMapOfint$MapOfint$Finding: () => (T.VoidToMapOfint$MapOfint$Finding = dart.constFn(dart.fnType(T.MapOfint$MapOfint$Finding(), [])))(),
    VoidToMapOfint$Finding: () => (T.VoidToMapOfint$Finding = dart.constFn(dart.fnType(T.MapOfint$Finding(), [])))(),
    MapOfint$MapOfint$MapOfint$Finding: () => (T.MapOfint$MapOfint$MapOfint$Finding = dart.constFn(core.Map$(core.int, T.MapOfint$MapOfint$Finding())))(),
    MapOfint$MapOfint$MapOfint$FindingTovoid: () => (T.MapOfint$MapOfint$MapOfint$FindingTovoid = dart.constFn(dart.fnType(dart.void, [T.MapOfint$MapOfint$MapOfint$Finding()])))(),
    IdentityMapOfint$bool: () => (T.IdentityMapOfint$bool = dart.constFn(_js_helper.IdentityMap$(core.int, core.bool)))(),
    VoidToMapOfint$bool: () => (T.VoidToMapOfint$bool = dart.constFn(dart.fnType(T.MapOfint$bool(), [])))(),
    intAndintTodynamic: () => (T.intAndintTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int, core.int])))(),
    intAndintAndFnTodynamic: () => (T.intAndintAndFnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int, core.int, T.intAndintTodynamic()])))(),
    FnToNull: () => (T.FnToNull = dart.constFn(dart.fnType(core.Null, [T.intAndintAndFnTodynamic()])))(),
    intAndintAndFnTovoid: () => (T.intAndintAndFnTovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.int, T.intAndintTodynamic()])))(),
    IdentityMapOfint$MapOfint$MapOfint$Finding: () => (T.IdentityMapOfint$MapOfint$MapOfint$Finding = dart.constFn(_js_helper.IdentityMap$(core.int, T.MapOfint$MapOfint$Finding())))(),
    IdentityMapOfint$SetOfint: () => (T.IdentityMapOfint$SetOfint = dart.constFn(_js_helper.IdentityMap$(core.int, T.SetOfint())))(),
    VoidToSetOfint: () => (T.VoidToSetOfint = dart.constFn(dart.fnType(T.SetOfint(), [])))(),
    intAndSetOfintTovoid: () => (T.intAndSetOfintTovoid = dart.constFn(dart.fnType(dart.void, [core.int, T.SetOfint()])))(),
    IdentityMapOfint$Input: () => (T.IdentityMapOfint$Input = dart.constFn(_js_helper.IdentityMap$(core.int, sudoku.Input)))(),
    JSArrayOfInput: () => (T.JSArrayOfInput = dart.constFn(_interceptors.JSArray$(sudoku.Input)))()
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
    get C10() {
      return C[10] = dart.const({
        __proto__: sudoku.Finding.prototype,
        [_Enum__name]: "lastStanding",
        [_Enum_index]: 0
      });
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: sudoku.Finding.prototype,
        [_Enum__name]: "forcedOut",
        [_Enum_index]: 1
      });
    },
    get C9() {
      return C[9] = dart.constList([C[10] || CT.C10, C[11] || CT.C11], sudoku.Finding);
    },
    get C12() {
      return C[12] = dart.fn(sudoku.iterateColumn, T.intAndintAndFnTovoid());
    },
    get C13() {
      return C[13] = dart.fn(sudoku.iterateRow, T.intAndintAndFnTovoid());
    },
    get C14() {
      return C[14] = dart.fn(sudoku.iterateBox, T.intAndintAndFnTovoid());
    },
    get C15() {
      return C[15] = dart.constMap(core.int, core.String, [1, "one", 2, "two", 3, "three", 4, "four", 5, "five", 6, "six", 7, "seven", 8, "eight", 9, "nine"]);
    },
    get C16() {
      return C[16] = dart.constSet(core.int, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    }
  }, false);
  var C = Array(17).fill(void 0);
  var I = ["package:sudoku/sudoku.dart"];
  var _inputController = dart.privateName(sudoku, "_inputController");
  var _onKeyDown = dart.privateName(sudoku, "_onKeyDown");
  var _onClickBody = dart.privateName(sudoku, "_onClickBody");
  var _onInput = dart.privateName(sudoku, "_onInput");
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
    [_onInput](e, input) {
      e.stopPropagation();
      e.preventDefault();
      this[_inputController].add(input);
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
    dart.nullCheck(html.querySelector("#clear"))[$onClick].listen(dart.fn(e => this[_onInput](e, sudoku.Input.reset()), T.MouseEventTovoid()));
    dart.nullCheck(html.querySelector("#nominate"))[$onClick].listen(dart.fn(e => this[_onInput](e, sudoku.Input.entryMode(sudoku.EntryMode.value)), T.MouseEventTovoid()));
    dart.nullCheck(html.querySelector("#candidate"))[$onClick].listen(dart.fn(e => this[_onInput](e, sudoku.Input.entryMode(sudoku.EntryMode.candidate)), T.MouseEventTovoid()));
    dart.nullCheck(html.querySelector("#rewind"))[$onClick].listen(dart.fn(e => this[_onInput](e, sudoku.Input.rewind()), T.MouseEventTovoid()));
    let i = 0;
    let children = this[_boardElement][$children];
    for (let c = 0; c < 9; c = c + 1) {
      for (let r = 0; r < 9; r = r + 1) {
        children[$_get](i)[$onClick].listen(T.MouseEventToNvoid().as(this[_onClickTile](c, r)));
        i = i + 1;
      }
    }
    for (let value of sudoku.keyIds[$keys]) {
      dart.nullCheck(this[_keyboardElement].querySelector("#" + dart.nullCheck(sudoku.keyIds[$_get](value))))[$onClick].listen(T.MouseEventToNvoid().as(this[_onClickKey](value)));
    }
  }).prototype = sudoku.Controller.prototype;
  dart.addTypeTests(sudoku.Controller);
  dart.addTypeCaches(sudoku.Controller);
  dart.setMethodSignature(sudoku.Controller, () => ({
    __proto__: dart.getMethods(sudoku.Controller.__proto__),
    [_onKeyDown]: dart.fnType(dart.dynamic, [html.KeyboardEvent]),
    [_onInput]: dart.fnType(dart.dynamic, [html.MouseEvent, sudoku.Input]),
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
  var __Game__entries = dart.privateName(sudoku, "_#Game#_entries");
  var _history = dart.privateName(sudoku, "_history");
  var __Game__findings = dart.privateName(sudoku, "_#Game#_findings");
  var __Game__invalid = dart.privateName(sudoku, "_#Game#_invalid");
  var __Game__mode = dart.privateName(sudoku, "_#Game#_mode");
  var _column = dart.privateName(sudoku, "_column");
  var _row = dart.privateName(sudoku, "_row");
  var _controller = dart.privateName(sudoku, "_controller");
  var _handleInput = dart.privateName(sudoku, "_handleInput");
  var _initPuzzle = dart.privateName(sudoku, "_initPuzzle");
  var _autoCandidates = dart.privateName(sudoku, "_autoCandidates");
  var _userCandidates = dart.privateName(sudoku, "_userCandidates");
  var _puzzle = dart.privateName(sudoku, "_puzzle");
  var _entries = dart.privateName(sudoku, "_entries");
  var _findings = dart.privateName(sudoku, "_findings");
  var _invalid = dart.privateName(sudoku, "_invalid");
  var _mode = dart.privateName(sudoku, "_mode");
  var _redraw = dart.privateName(sudoku, "_redraw");
  var _handleRewind = dart.privateName(sudoku, "_handleRewind");
  var _handleEntryMode = dart.privateName(sudoku, "_handleEntryMode");
  var _handleCursor = dart.privateName(sudoku, "_handleCursor");
  var _handleToggle = dart.privateName(sudoku, "_handleToggle");
  var _calculate = dart.privateName(sudoku, "_calculate");
  var _toggleCell = dart.privateName(sudoku, "_toggleCell");
  var _clearFoundCell = dart.privateName(sudoku, "_clearFoundCell");
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
      return sudoku['CandidateX|copy'](this[_autoCandidates], {withMerge: this[_userCandidates][$last]});
    }
    get [_puzzle]() {
      let t0;
      t0 = this[__Game__puzzle];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_puzzle")) : t0;
    }
    set [_puzzle](library$32package$58sudoku$47src$47game$46dart$58$58_puzzle$35param) {
      this[__Game__puzzle] = library$32package$58sudoku$47src$47game$46dart$58$58_puzzle$35param;
    }
    get [_entries]() {
      let t0;
      t0 = this[__Game__entries];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_entries")) : t0;
    }
    set [_entries](library$32package$58sudoku$47src$47game$46dart$58$58_entries$35param) {
      this[__Game__entries] = library$32package$58sudoku$47src$47game$46dart$58$58_entries$35param;
    }
    get values() {
      return sudoku['PuzzleX|copy'](this[_puzzle], {withMerge: this[_entries][$last]});
    }
    setByPuzzle(column, row) {
      return this[_puzzle][$_get](column)[$_get](row) != null;
    }
    get [_findings]() {
      let t0;
      t0 = this[__Game__findings];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_findings")) : t0;
    }
    set [_findings](library$32package$58sudoku$47src$47game$46dart$58$58_findings$35param) {
      this[__Game__findings] = library$32package$58sudoku$47src$47game$46dart$58$58_findings$35param;
    }
    found(column, row) {
      let t0, t0$;
      t0$ = (t0 = this[_findings][$_get](column), t0 == null ? null : t0[$_get](row));
      return t0$ == null ? new (T.IdentityMapOfint$Finding()).new() : t0$;
    }
    get [_invalid]() {
      let t0;
      t0 = this[__Game__invalid];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_invalid")) : t0;
    }
    set [_invalid](library$32package$58sudoku$47src$47game$46dart$58$58_invalid$35param) {
      this[__Game__invalid] = library$32package$58sudoku$47src$47game$46dart$58$58_invalid$35param;
    }
    isValid(column, row) {
      return !(this[_invalid][$containsKey](column) && dart.nullCheck(this[_invalid][$_get](column))[$containsKey](row));
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
    get box() {
      return sudoku.getBox(this[_column], this[_row]);
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
        case dart.wrapType(sudoku.RewindInput):
          {
            this[_handleRewind]();
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
      this[_entries] = T.JSArrayOfListOfListOfintN().of([sudoku.emptyPuzzle()]);
      this[_autoCandidates] = sudoku.fullCandidates();
      this[_userCandidates] = T.JSArrayOfListOfListOfSetOfint().of([sudoku.fullCandidates()]);
      this[_history] = T.JSArrayOfEntryMode().of([]);
      this[_invalid] = new (T.IdentityMapOfint$MapOfint$bool()).new();
      this[_redraw]();
    }
    [_handleRewind]() {
      if (this[_history][$isNotEmpty]) {
        if (this[_history][$last] === sudoku.EntryMode.value) {
          this[_entries][$removeLast]();
        } else if (this[_history][$last] === sudoku.EntryMode.candidate) {
          this[_userCandidates][$removeLast]();
        }
        this[_history][$removeLast]();
        this[_calculate]({auto: false});
      }
    }
    [_handleEntryMode](entryModeInput) {
      this[_mode] = entryModeInput.entryMode;
      if (this[_mode] !== sudoku.EntryMode.puzzle) {
        this[_calculate]();
      }
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
      if (this.hasCursor) {
        this[_toggleCell](dart.nullCheck(this[_column]), dart.nullCheck(this[_row]), toggleInput.value, this[_mode]);
      }
    }
    [_toggleCell](column, row, value, mode) {
      let t0, t0$, t0$0;
      if (mode === sudoku.EntryMode.puzzle) {
        this[_puzzle] = (t0 = sudoku['PuzzleX|copy'](this[_puzzle]), (() => {
          sudoku['PuzzleX|toggle'](t0, column, row, value);
          return t0;
        })());
      } else {
        if (mode === sudoku.EntryMode.value) {
          this[_entries][$add]((t0$ = sudoku['PuzzleX|copy'](this[_entries][$last]), (() => {
            sudoku['PuzzleX|toggle'](t0$, column, row, value);
            return t0$;
          })()));
        } else if (mode === sudoku.EntryMode.candidate) {
          this[_userCandidates][$add]((t0$0 = sudoku['CandidateX|copy'](this[_userCandidates][$last]), (() => {
            sudoku['CandidateX|toggle'](t0$0, column, row, value);
            return t0$0;
          })()));
        }
        this[_history][$add](mode);
        this[_calculate]();
      }
      this[_redraw]();
    }
    [_calculate](opts) {
      let auto = opts && 'auto' in opts ? opts.auto : true;
      this[_autoCandidates] = sudoku.findCandidates(this.values);
      this[_findings] = sudoku.findValues(this.values, this.candidates);
      this[_invalid] = sudoku.validate(this.values, this.candidates);
      let count = 0;
      sudoku.scan(dart.fn((c, r) => {
        if (this.values[$_get](c)[$_get](r) != null) {
          count = count + 1;
        }
      }, T.intAndintToNull()));
      core.print(dart.str(count) + " / 81");
      if (auto && this[_mode] !== sudoku.EntryMode.puzzle && this[_findings][$isNotEmpty] && this[_invalid][$isEmpty]) {
        let c = this[_findings][$keys][$first];
        let r = dart.nullCheck(this[_findings][$_get](c))[$keys][$first];
        let v = dart.nullCheck(dart.nullCheck(this[_findings][$_get](c))[$_get](r))[$keys][$first];
        let m = sudoku['FindingX|get#mode'](dart.nullCheck(dart.nullCheck(dart.nullCheck(this[_findings][$_get](c))[$_get](r))[$_get](v)));
        if (m === sudoku.Finding.forcedOut) return;
        this[_clearFoundCell](c, r, v, m);
      }
    }
    [_clearFoundCell](c, r, v, m) {
      return async.async(dart.dynamic, (function* _clearFoundCell() {
        yield async.Future.delayed(new core.Duration.new({milliseconds: 50}));
        this[_toggleCell](c, r, v, m);
      }).bind(this));
    }
  };
  (sudoku.Game.new = function(opts) {
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[_redrawController] = async.StreamController.broadcast();
    this[__Game__autoCandidates] = null;
    this[__Game__userCandidates] = null;
    this[__Game__puzzle] = null;
    this[__Game__entries] = null;
    this[_history] = T.JSArrayOfEntryMode().of([]);
    this[__Game__findings] = null;
    this[__Game__invalid] = null;
    this[__Game__mode] = null;
    this[_column] = null;
    this[_row] = null;
    this[_controller] = controller;
    this[_controller].input.listen(dart.bind(this, _handleInput));
    this[_initPuzzle]();
    sudoku.expertPuzzle[$forEach](dart.bind(this, _handleInput));
  }).prototype = sudoku.Game.prototype;
  dart.addTypeTests(sudoku.Game);
  dart.addTypeCaches(sudoku.Game);
  dart.setMethodSignature(sudoku.Game, () => ({
    __proto__: dart.getMethods(sudoku.Game.__proto__),
    setByPuzzle: dart.fnType(core.bool, [core.int, core.int]),
    found: dart.fnType(core.Map$(core.int, sudoku.Finding), [core.int, core.int]),
    isValid: dart.fnType(core.bool, [core.int, core.int]),
    [_redraw]: dart.fnType(dart.dynamic, []),
    [_handleInput]: dart.fnType(dart.void, [sudoku.Input]),
    [_initPuzzle]: dart.fnType(dart.void, []),
    [_handleRewind]: dart.fnType(dart.void, []),
    [_handleEntryMode]: dart.fnType(dart.void, [sudoku.EntryModeInput]),
    [_handleCursor]: dart.fnType(dart.void, [sudoku.CursorInput]),
    [_handleToggle]: dart.fnType(dart.void, [sudoku.ToggleInput]),
    [_toggleCell]: dart.fnType(dart.void, [core.int, core.int, dart.nullable(core.int), sudoku.EntryMode]),
    [_calculate]: dart.fnType(dart.void, [], {auto: core.bool}, {}),
    [_clearFoundCell]: dart.fnType(async.Future, [core.int, core.int, core.int, sudoku.EntryMode])
  }));
  dart.setGetterSignature(sudoku.Game, () => ({
    __proto__: dart.getGetters(sudoku.Game.__proto__),
    redraw: async.Stream,
    [_autoCandidates]: core.List$(core.List$(core.Set$(core.int))),
    [_userCandidates]: core.List$(core.List$(core.List$(core.Set$(core.int)))),
    candidates: core.List$(core.List$(core.Set$(core.int))),
    [_puzzle]: core.List$(core.List$(dart.nullable(core.int))),
    [_entries]: core.List$(core.List$(core.List$(dart.nullable(core.int)))),
    values: core.List$(core.List$(dart.nullable(core.int))),
    [_findings]: core.Map$(core.int, core.Map$(core.int, core.Map$(core.int, sudoku.Finding))),
    [_invalid]: core.Map$(core.int, core.Map$(core.int, core.bool)),
    [_mode]: sudoku.EntryMode,
    mode: sudoku.EntryMode,
    column: dart.nullable(core.int),
    row: dart.nullable(core.int),
    box: dart.nullable(core.int),
    hasCursor: core.bool
  }));
  dart.setSetterSignature(sudoku.Game, () => ({
    __proto__: dart.getSetters(sudoku.Game.__proto__),
    [_autoCandidates]: core.List$(core.List$(core.Set$(core.int))),
    [_userCandidates]: core.List$(core.List$(core.List$(core.Set$(core.int)))),
    [_puzzle]: core.List$(core.List$(dart.nullable(core.int))),
    [_entries]: core.List$(core.List$(core.List$(dart.nullable(core.int)))),
    [_findings]: core.Map$(core.int, core.Map$(core.int, core.Map$(core.int, sudoku.Finding))),
    [_invalid]: core.Map$(core.int, core.Map$(core.int, core.bool)),
    [_mode]: sudoku.EntryMode
  }));
  dart.setLibraryUri(sudoku.Game, I[0]);
  dart.setFieldSignature(sudoku.Game, () => ({
    __proto__: dart.getFields(sudoku.Game.__proto__),
    [_redrawController]: dart.finalFieldType(async.StreamController),
    [_controller]: dart.finalFieldType(sudoku.Controller),
    [__Game__autoCandidates]: dart.fieldType(dart.nullable(core.List$(core.List$(core.Set$(core.int))))),
    [__Game__userCandidates]: dart.fieldType(dart.nullable(core.List$(core.List$(core.List$(core.Set$(core.int)))))),
    [__Game__puzzle]: dart.fieldType(dart.nullable(core.List$(core.List$(dart.nullable(core.int))))),
    [__Game__entries]: dart.fieldType(dart.nullable(core.List$(core.List$(core.List$(dart.nullable(core.int)))))),
    [_history]: dart.fieldType(core.List$(sudoku.EntryMode)),
    [__Game__findings]: dart.fieldType(dart.nullable(core.Map$(core.int, core.Map$(core.int, core.Map$(core.int, sudoku.Finding))))),
    [__Game__invalid]: dart.fieldType(dart.nullable(core.Map$(core.int, core.Map$(core.int, core.bool)))),
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
    static rewind() {
      return new sudoku.RewindInput.new();
    }
    static ['_#rewind#tearOff']() {
      return sudoku.Input.rewind();
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
  dart.setStaticMethodSignature(sudoku.Input, () => ['reset', 'rewind', 'entryMode', 'cursor', 'toggle']);
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
  sudoku.RewindInput = class RewindInput extends core.Object {
    static ['_#new#tearOff']() {
      return new sudoku.RewindInput.new();
    }
  };
  (sudoku.RewindInput.new = function() {
    ;
  }).prototype = sudoku.RewindInput.prototype;
  dart.addTypeTests(sudoku.RewindInput);
  dart.addTypeCaches(sudoku.RewindInput);
  sudoku.RewindInput[dart.implements] = () => [sudoku.Input];
  dart.setLibraryUri(sudoku.RewindInput, I[0]);
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
  var _candidateClassName = dart.privateName(sudoku, "_candidateClassName");
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
      let values = this[_game].values;
      let candidates = this[_game].candidates;
      let i = 0;
      let children = this[_boardElement][$children];
      for (let c = 0; c < values[$length]; c = c + 1) {
        for (let r = 0; r < values[$_get](c)[$length]; r = r + 1) {
          let newClasses = this[_cellClassName](c, r, values[$_get](c)[$_get](r));
          let newInnerHtml = this[_cellInnerHtml](c, r, values[$_get](c)[$_get](r), candidates[$_get](c)[$_get](r));
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
      } else if (this[_game].mode === sudoku.EntryMode.puzzle) {
        return "";
      } else {
        let findings = this[_game].found(c, r);
        let candidateHtml = "";
        for (let value of sudoku.possibleValues) {
          let contents = candidates.contains(value) ? dart.str(value) : "";
          candidateHtml = candidateHtml + ("<div class=\"" + this[_candidateClassName](value, findings) + "\">" + contents + "</div>");
        }
        return candidateHtml;
      }
    }
    [_candidateClassName](value, findings) {
      if (findings[$containsKey](value)) {
        return sudoku['FindingX|get#className'](dart.nullCheck(findings[$_get](value)));
      }
      return "";
    }
    [_cellClassName](c, r, value) {
      let classes = T.JSArrayOfString().of(["tile"]);
      if (c === this[_game].column && r === this[_game].row) {
        classes[$add]("selected");
      } else if (c === this[_game].column || r === this[_game].row || this[_game].box == sudoku.getBox(c, r)) {
        classes[$add]("related");
      }
      if (!this[_game].isValid(c, r)) {
        classes[$add]("invalid");
      }
      if (value == null) {
        classes[$add]("candidates");
      } else if (this[_game].setByPuzzle(c, r)) {
        classes[$add]("puzzle");
      }
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
    [_cellInnerHtml]: dart.fnType(core.String, [core.int, core.int, dart.nullable(core.int), core.Set$(core.int)]),
    [_candidateClassName]: dart.fnType(core.String, [core.int, core.Map$(core.int, sudoku.Finding)]),
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
  sudoku.Finding = class Finding extends core._Enum {
    toString() {
      return "Finding." + this[_name];
    }
  };
  (sudoku.Finding.new = function(index, name) {
    sudoku.Finding.__proto__.new.call(this, index, name);
    ;
  }).prototype = sudoku.Finding.prototype;
  dart.addTypeTests(sudoku.Finding);
  dart.addTypeCaches(sudoku.Finding);
  dart.setLibraryUri(sudoku.Finding, I[0]);
  dart.setStaticFieldSignature(sudoku.Finding, () => ['values', 'lastStanding', 'forcedOut']);
  dart.defineExtensionMethods(sudoku.Finding, ['toString']);
  dart.defineLazy(sudoku.Finding, {
    /*sudoku.Finding.values*/get values() {
      return C[9] || CT.C9;
    },
    /*sudoku.Finding.lastStanding*/get lastStanding() {
      return C[10] || CT.C10;
    },
    /*sudoku.Finding.forcedOut*/get forcedOut() {
      return C[11] || CT.C11;
    }
  }, false);
  sudoku['FindingX|get#className'] = function FindingX$124get$35className($this) {
    switch ($this) {
      case C[10] || CT.C10:
        {
          return "last-standing";
        }
      case C[11] || CT.C11:
        {
          return "forced-out";
        }
    }
  };
  sudoku['FindingX|get#mode'] = function FindingX$124get$35mode($this) {
    switch ($this) {
      case C[10] || CT.C10:
        {
          return sudoku.EntryMode.value;
        }
      case C[11] || CT.C11:
        {
          return sudoku.EntryMode.candidate;
        }
    }
  };
  sudoku['MoveX|nextColumn'] = function MoveX$124nextColumn($this, column) {
    let t3, t3$;
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
          t3 = column;
          return t3 == null ? 4 : t3;
        }
      case C[4] || CT.C4:
        {
          t3$ = column;
          return t3$ == null ? 4 : t3$;
        }
    }
  };
  sudoku['MoveX|get#nextColumn'] = function MoveX$124get$35nextColumn($this) {
    return dart.fn(column => sudoku['MoveX|nextColumn']($this, column), T.intNToint());
  };
  sudoku['MoveX|nextRow'] = function MoveX$124nextRow($this, row) {
    let t5, t5$;
    switch ($this) {
      case C[1] || CT.C1:
        {
          t5 = row;
          return t5 == null ? 4 : t5;
        }
      case C[2] || CT.C2:
        {
          t5$ = row;
          return t5$ == null ? 4 : t5$;
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
  sudoku.getBox = function getBox(column, row) {
    return row != null && column != null ? (dart.notNull(row) / 3)[$truncate]() + (dart.notNull(column) / 3)[$truncate]() * 3 : null;
  };
  sudoku._emptyNine = function _emptyNine() {
    return T.ListOfintN().filled(9, null);
  };
  sudoku.emptyPuzzle = function emptyPuzzle() {
    return T.ListOfListOfintN().generate(9, dart.fn(_ => sudoku._emptyNine(), T.intToListOfintN()));
  };
  sudoku._allNine = function _allNine() {
    return sudoku.possibleValues.toSet();
  };
  sudoku.fullCandidates = function fullCandidates() {
    return T.ListOfListOfSetOfint().generate(9, dart.fn(_ => T.ListOfSetOfint().generate(9, dart.fn(__ => sudoku._allNine(), T.intToSetOfint())), T.intToListOfSetOfint()));
  };
  sudoku.emptyCandidates = function emptyCandidates() {
    return T.ListOfListOfSetOfint().generate(9, dart.fn(_ => T.ListOfSetOfint().generate(9, dart.fn(__ => T.LinkedHashSetOfint().new(), T.intToSetOfint())), T.intToListOfSetOfint()));
  };
  sudoku['PuzzleX|copy'] = function PuzzleX$124copy($this, opts) {
    let withMerge = opts && 'withMerge' in opts ? opts.withMerge : null;
    let puzzle = sudoku.emptyPuzzle();
    sudoku.scan(dart.fn((c, r) => {
      let t8, t7, t9, t8$, t7$;
      t7$ = puzzle[$_get](c);
      t8$ = r;
      t9 = (t7 = $this[$_get](c)[$_get](r), t7 == null ? (t8 = withMerge, t8 == null ? null : t8[$_get](c)[$_get](r)) : t7);
      t7$[$_set](t8$, t9);
      return t9;
    }, T.intAndintTointN()));
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
    let candidates = sudoku.emptyCandidates();
    if (withMerge != null) {
      sudoku.scan(dart.fn((c, r) => {
        for (let value of sudoku.possibleValues) {
          if ($this[$_get](c)[$_get](r).contains(value) && withMerge[$_get](c)[$_get](r).contains(value)) {
            candidates[$_get](c)[$_get](r).add(value);
          }
        }
      }, T.intAndintToNull()));
    } else {
      sudoku.scan(dart.fn((c, r) => {
        let t13, t12, t11;
        t11 = candidates[$_get](c);
        t12 = r;
        t13 = $this[$_get](c)[$_get](r).toSet();
        t11[$_set](t12, t13);
        return t13;
      }, T.intAndintToSetOfint()));
    }
    return candidates;
  };
  sudoku['CandidateX|get#copy'] = function CandidateX$124get$35copy($this) {
    return dart.fn(opts => {
      let withMerge = opts && 'withMerge' in opts ? opts.withMerge : null;
      return sudoku['CandidateX|copy']($this, {withMerge: withMerge});
    }, T.__ToListOfListOfSetOfint());
  };
  sudoku['CandidateX|toggle'] = function CandidateX$124toggle($this, column, row, value) {
    if (value == null) $this[$_get](column)[$_set](row, sudoku._allNine());
    if ($this[$_get](column)[$_get](row).contains(dart.nullCheck(value))) {
      $this[$_get](column)[$_get](row).remove(value);
    } else {
      $this[$_get](column)[$_get](row).add(value);
    }
  };
  sudoku['CandidateX|get#toggle'] = function CandidateX$124get$35toggle($this) {
    return dart.fn((column, row, value) => sudoku['CandidateX|toggle']($this, column, row, value), T.intAndintAndintNTovoid());
  };
  sudoku['FindingsX|combine'] = function FindingsX$124combine($this, other) {
    for (let cKey of other[$keys]) {
      $this[$putIfAbsent](cKey, dart.fn(() => new (T.IdentityMapOfint$MapOfint$Finding()).new(), T.VoidToMapOfint$MapOfint$Finding()));
      let rKeys = dart.nullCheck(other[$_get](cKey))[$keys];
      for (let rKey of rKeys) {
        dart.nullCheck($this[$_get](cKey))[$putIfAbsent](rKey, dart.fn(() => new (T.IdentityMapOfint$Finding()).new(), T.VoidToMapOfint$Finding()));
        let vKeys = dart.nullCheck(dart.nullCheck(other[$_get](cKey))[$_get](rKey))[$keys];
        for (let vKey of vKeys) {
          dart.nullCheck(dart.nullCheck($this[$_get](cKey))[$_get](rKey))[$_set](vKey, dart.nullCheck(dart.nullCheck(dart.nullCheck(other[$_get](cKey))[$_get](rKey))[$_get](vKey)));
        }
      }
    }
  };
  sudoku['FindingsX|get#combine'] = function FindingsX$124get$35combine($this) {
    return dart.fn(other => sudoku['FindingsX|combine']($this, other), T.MapOfint$MapOfint$MapOfint$FindingTovoid());
  };
  sudoku.validate = function validate(values, candidates) {
    let invalid = new (T.IdentityMapOfint$MapOfint$bool()).new();
    sudoku.scan(dart.fn((c, r) => {
      let value = values[$_get](c)[$_get](r);
      if (value == null) {
        if (candidates[$_get](c)[$_get](r)[$isEmpty]) {
          invalid[$putIfAbsent](c, dart.fn(() => new (T.IdentityMapOfint$bool()).new(), T.VoidToMapOfint$bool()));
          dart.nullCheck(invalid[$_get](c))[$_set](r, true);
        }
      } else {
        let valueCount = 1;
        function validateDimention(iterator) {
          iterator(c, r, dart.fn((column, row) => {
            if (c !== column || r !== row) {
              if (value == values[$_get](column)[$_get](row)) {
                valueCount = valueCount + 1;
              }
            }
          }, T.intAndintToNull()));
        }
        dart.fn(validateDimention, T.FnToNull());
        validateDimention(C[12] || CT.C12);
        validateDimention(C[13] || CT.C13);
        validateDimention(C[14] || CT.C14);
        if (valueCount > 1) {
          invalid[$putIfAbsent](c, dart.fn(() => new (T.IdentityMapOfint$bool()).new(), T.VoidToMapOfint$bool()));
          dart.nullCheck(invalid[$_get](c))[$_set](r, true);
        }
      }
    }, T.intAndintToNull()));
    return invalid;
  };
  sudoku.findCandidates = function findCandidates(values) {
    let candidates = sudoku.fullCandidates();
    sudoku.scan(dart.fn((c, r) => {
      if (values[$_get](c)[$_get](r) != null) {
        let value = dart.nullCheck(values[$_get](c)[$_get](r));
        sudoku.scan(dart.fn((column, row) => {
          if (column === c || row === r || sudoku.getBox(column, row) == sudoku.getBox(c, r)) {
            candidates[$_get](column)[$_get](row).remove(value);
          }
        }, T.intAndintToNull()));
      }
    }, T.intAndintToNull()));
    return candidates;
  };
  sudoku.findValues = function findValues(values, candidates) {
    let findings = new (T.IdentityMapOfint$MapOfint$MapOfint$Finding()).new();
    sudoku['FindingsX|combine'](findings, sudoku.findForcedOutCandidates(values, candidates));
    sudoku['FindingsX|combine'](findings, sudoku.findLastStandingValues(values, candidates));
    return findings;
  };
  sudoku.findForcedOutCandidates = function findForcedOutCandidates(values, candidates) {
    let findings = new (T.IdentityMapOfint$MapOfint$MapOfint$Finding()).new();
    sudoku.scan(dart.fn((c, r) => {
      let bc = c * 3;
      let br = r * 3;
      let valueColumns = new (T.IdentityMapOfint$SetOfint()).new();
      let valueRows = new (T.IdentityMapOfint$SetOfint()).new();
      let columns = T.LinkedHashSetOfint().new();
      let rows = T.LinkedHashSetOfint().new();
      sudoku.iterateBox(bc, br, dart.fn((column, row) => {
        columns.add(column);
        rows.add(row);
        if (values[$_get](column)[$_get](row) == null) {
          for (let candidate of candidates[$_get](column)[$_get](row)) {
            valueColumns[$putIfAbsent](candidate, dart.fn(() => T.LinkedHashSetOfint().new(), T.VoidToSetOfint()));
            dart.nullCheck(valueColumns[$_get](candidate)).add(column);
            valueRows[$putIfAbsent](candidate, dart.fn(() => T.LinkedHashSetOfint().new(), T.VoidToSetOfint()));
            dart.nullCheck(valueRows[$_get](candidate)).add(row);
          }
        }
      }, T.intAndintToNull()));
      valueColumns[$forEach](dart.fn((value, column) => {
        if (column[$length] === 1) {
          sudoku.iterateRow(column[$first], dart.nullCheck(valueRows[$_get](value))[$first], dart.fn((vc, vr) => {
            if (!rows.contains(vr) && candidates[$_get](vc)[$_get](vr).contains(value)) {
              findings[$putIfAbsent](vc, dart.fn(() => new (T.IdentityMapOfint$MapOfint$Finding()).new(), T.VoidToMapOfint$MapOfint$Finding()));
              dart.nullCheck(findings[$_get](vc))[$putIfAbsent](vr, dart.fn(() => new (T.IdentityMapOfint$Finding()).new(), T.VoidToMapOfint$Finding()));
              dart.nullCheck(dart.nullCheck(findings[$_get](vc))[$_get](vr))[$_set](value, sudoku.Finding.forcedOut);
            }
          }, T.intAndintToNull()));
        }
      }, T.intAndSetOfintTovoid()));
      valueRows[$forEach](dart.fn((value, row) => {
        if (row[$length] === 1) {
          sudoku.iterateColumn(dart.nullCheck(valueColumns[$_get](value))[$first], row[$first], dart.fn((vc, vr) => {
            if (!columns.contains(vc) && candidates[$_get](vc)[$_get](vr).contains(value)) {
              findings[$putIfAbsent](vc, dart.fn(() => new (T.IdentityMapOfint$MapOfint$Finding()).new(), T.VoidToMapOfint$MapOfint$Finding()));
              dart.nullCheck(findings[$_get](vc))[$putIfAbsent](vr, dart.fn(() => new (T.IdentityMapOfint$Finding()).new(), T.VoidToMapOfint$Finding()));
              dart.nullCheck(dart.nullCheck(findings[$_get](vc))[$_get](vr))[$_set](value, sudoku.Finding.forcedOut);
            }
          }, T.intAndintToNull()));
        }
      }, T.intAndSetOfintTovoid()));
    }, T.intAndintToNull()), {size: 3});
    return findings;
  };
  sudoku.findLastStandingValues = function findLastStandingValues(values, candidates) {
    let findings = new (T.IdentityMapOfint$MapOfint$MapOfint$Finding()).new();
    sudoku.scan(dart.fn((c, r) => {
      if (values[$_get](c)[$_get](r) != null) return;
      if (candidates[$_get](c)[$_get](r)[$length] === 1) {
        findings[$putIfAbsent](c, dart.fn(() => new (T.IdentityMapOfint$MapOfint$Finding()).new(), T.VoidToMapOfint$MapOfint$Finding()));
        dart.nullCheck(findings[$_get](c))[$putIfAbsent](r, dart.fn(() => new (T.IdentityMapOfint$Finding()).new(), T.VoidToMapOfint$Finding()));
        dart.nullCheck(dart.nullCheck(findings[$_get](c))[$_get](r))[$_set](candidates[$_get](c)[$_get](r)[$first], sudoku.Finding.lastStanding);
      } else {
        let foundLastStandingValue = false;
        function checkForLastStanding(dimensionIterator) {
          if (!foundLastStandingValue) {
            let remainingOptions = sudoku._allNine();
            dimensionIterator(c, r, dart.fn((column, row) => {
              let value = values[$_get](column)[$_get](row);
              if (c !== column || r !== row) {
                if (value != null) {
                  remainingOptions.remove(value);
                } else {
                  remainingOptions.removeAll(candidates[$_get](column)[$_get](row));
                }
              }
            }, T.intAndintToNull()));
            if (remainingOptions[$length] === 1) {
              findings[$putIfAbsent](c, dart.fn(() => new (T.IdentityMapOfint$MapOfint$Finding()).new(), T.VoidToMapOfint$MapOfint$Finding()));
              dart.nullCheck(findings[$_get](c))[$putIfAbsent](r, dart.fn(() => new (T.IdentityMapOfint$Finding()).new(), T.VoidToMapOfint$Finding()));
              dart.nullCheck(dart.nullCheck(findings[$_get](c))[$_get](r))[$_set](remainingOptions[$first], sudoku.Finding.lastStanding);
              foundLastStandingValue = true;
            }
          }
        }
        dart.fn(checkForLastStanding, T.FnToNull());
        checkForLastStanding(C[12] || CT.C12);
        checkForLastStanding(C[13] || CT.C13);
        checkForLastStanding(C[14] || CT.C14);
      }
    }, T.intAndintToNull()));
    return findings;
  };
  sudoku.scan = function scan(iterator, opts) {
    let size = opts && 'size' in opts ? opts.size : 9;
    for (let c = 0; c < size; c = c + 1) {
      for (let r = 0; r < size; r = r + 1) {
        iterator(c, r);
      }
    }
  };
  sudoku.iterateColumn = function iterateColumn(column, row, iterator) {
    for (let c = 0; c < 9; c = c + 1) {
      iterator((column + c)[$modulo](9), row);
    }
  };
  sudoku.iterateRow = function iterateRow(column, row, iterator) {
    for (let r = 0; r < 9; r = r + 1) {
      iterator(column, (row + r)[$modulo](9));
    }
  };
  sudoku.iterateBox = function iterateBox(column, row, iterator) {
    let ic = (column / 3)[$truncate]();
    let ir = (row / 3)[$truncate]();
    sudoku.scan(dart.fn((c, r) => iterator(ic * 3 + c, ir * 3 + r), T.intAndintTodynamic()), {size: 3});
  };
  dart.defineLazy(sudoku, {
    /*sudoku.bindings*/get bindings() {
      return new (T.IdentityMapOfint$Input()).from([27, sudoku.Input.reset(), 8, sudoku.Input.rewind(), 13, sudoku.Input.entryMode(sudoku.EntryMode.value), 38, sudoku.Input.cursor({move: sudoku.Move.up}), 40, sudoku.Input.cursor({move: sudoku.Move.down}), 37, sudoku.Input.cursor({move: sudoku.Move.left}), 39, sudoku.Input.cursor({move: sudoku.Move.right}), 87, sudoku.Input.cursor({move: sudoku.Move.up}), 83, sudoku.Input.cursor({move: sudoku.Move.down}), 65, sudoku.Input.cursor({move: sudoku.Move.left}), 68, sudoku.Input.cursor({move: sudoku.Move.right}), 49, sudoku.Input.toggle({value: 1}), 50, sudoku.Input.toggle({value: 2}), 51, sudoku.Input.toggle({value: 3}), 52, sudoku.Input.toggle({value: 4}), 53, sudoku.Input.toggle({value: 5}), 54, sudoku.Input.toggle({value: 6}), 55, sudoku.Input.toggle({value: 7}), 56, sudoku.Input.toggle({value: 8}), 57, sudoku.Input.toggle({value: 9}), 67, sudoku.Input.entryMode(sudoku.EntryMode.candidate), 86, sudoku.Input.entryMode(sudoku.EntryMode.value)]);
    },
    set bindings(_) {},
    /*sudoku.keyIds*/get keyIds() {
      return C[15] || CT.C15;
    },
    /*sudoku.hardPuzzle*/get hardPuzzle() {
      return T.JSArrayOfInput().of([sudoku.Input.cursor({column: 0, row: 4}), sudoku.Input.toggle({value: 7}), sudoku.Input.cursor({column: 0, row: 5}), sudoku.Input.toggle({value: 6}), sudoku.Input.cursor({column: 0, row: 8}), sudoku.Input.toggle({value: 3}), sudoku.Input.cursor({column: 1, row: 4}), sudoku.Input.toggle({value: 8}), sudoku.Input.cursor({column: 2, row: 0}), sudoku.Input.toggle({value: 7}), sudoku.Input.cursor({column: 2, row: 1}), sudoku.Input.toggle({value: 3}), sudoku.Input.cursor({column: 2, row: 7}), sudoku.Input.toggle({value: 1}), sudoku.Input.cursor({column: 3, row: 1}), sudoku.Input.toggle({value: 9}), sudoku.Input.cursor({column: 3, row: 2}), sudoku.Input.toggle({value: 2}), sudoku.Input.cursor({column: 3, row: 6}), sudoku.Input.toggle({value: 4}), sudoku.Input.cursor({column: 4, row: 2}), sudoku.Input.toggle({value: 7}), sudoku.Input.cursor({column: 4, row: 4}), sudoku.Input.toggle({value: 6}), sudoku.Input.cursor({column: 4, row: 5}), sudoku.Input.toggle({value: 8}), sudoku.Input.cursor({column: 5, row: 4}), sudoku.Input.toggle({value: 4}), sudoku.Input.cursor({column: 5, row: 7}), sudoku.Input.toggle({value: 7}), sudoku.Input.cursor({column: 7, row: 3}), sudoku.Input.toggle({value: 2}), sudoku.Input.cursor({column: 7, row: 4}), sudoku.Input.toggle({value: 5}), sudoku.Input.cursor({column: 7, row: 5}), sudoku.Input.toggle({value: 7}), sudoku.Input.cursor({column: 7, row: 6}), sudoku.Input.toggle({value: 3}), sudoku.Input.cursor({column: 7, row: 8}), sudoku.Input.toggle({value: 6}), sudoku.Input.cursor({column: 8, row: 0}), sudoku.Input.toggle({value: 4}), sudoku.Input.cursor({column: 8, row: 7}), sudoku.Input.toggle({value: 5}), sudoku.Input.cursor({column: 8, row: 8}), sudoku.Input.toggle({value: 8}), sudoku.Input.entryMode(sudoku.EntryMode.value), sudoku.Input.cursor()]);
    },
    /*sudoku.expertPuzzle*/get expertPuzzle() {
      return T.JSArrayOfInput().of([sudoku.Input.cursor({column: 0, row: 4}), sudoku.Input.toggle({value: 4}), sudoku.Input.cursor({column: 0, row: 5}), sudoku.Input.toggle({value: 6}), sudoku.Input.cursor({column: 0, row: 6}), sudoku.Input.toggle({value: 5}), sudoku.Input.cursor({column: 1, row: 6}), sudoku.Input.toggle({value: 9}), sudoku.Input.cursor({column: 2, row: 2}), sudoku.Input.toggle({value: 6}), sudoku.Input.cursor({column: 2, row: 5}), sudoku.Input.toggle({value: 3}), sudoku.Input.cursor({column: 2, row: 7}), sudoku.Input.toggle({value: 2}), sudoku.Input.cursor({column: 3, row: 2}), sudoku.Input.toggle({value: 3}), sudoku.Input.cursor({column: 3, row: 4}), sudoku.Input.toggle({value: 8}), sudoku.Input.cursor({column: 4, row: 3}), sudoku.Input.toggle({value: 4}), sudoku.Input.cursor({column: 4, row: 5}), sudoku.Input.toggle({value: 9}), sudoku.Input.cursor({column: 4, row: 7}), sudoku.Input.toggle({value: 8}), sudoku.Input.cursor({column: 5, row: 1}), sudoku.Input.toggle({value: 9}), sudoku.Input.cursor({column: 5, row: 7}), sudoku.Input.toggle({value: 6}), sudoku.Input.cursor({column: 6, row: 0}), sudoku.Input.toggle({value: 7}), sudoku.Input.cursor({column: 6, row: 4}), sudoku.Input.toggle({value: 9}), sudoku.Input.cursor({column: 6, row: 8}), sudoku.Input.toggle({value: 5}), sudoku.Input.cursor({column: 7, row: 0}), sudoku.Input.toggle({value: 2}), sudoku.Input.cursor({column: 7, row: 1}), sudoku.Input.toggle({value: 4}), sudoku.Input.cursor({column: 7, row: 3}), sudoku.Input.toggle({value: 8}), sudoku.Input.cursor({column: 7, row: 4}), sudoku.Input.toggle({value: 1}), sudoku.Input.cursor({column: 8, row: 1}), sudoku.Input.toggle({value: 5}), sudoku.Input.cursor({column: 8, row: 4}), sudoku.Input.toggle({value: 3}), sudoku.Input.entryMode(sudoku.EntryMode.value), sudoku.Input.cursor()]);
    },
    /*sudoku.evilPuzzle*/get evilPuzzle() {
      return T.JSArrayOfInput().of([sudoku.Input.cursor({column: 0, row: 1}), sudoku.Input.toggle({value: 8}), sudoku.Input.cursor({column: 0, row: 2}), sudoku.Input.toggle({value: 6}), sudoku.Input.cursor({column: 0, row: 4}), sudoku.Input.toggle({value: 1}), sudoku.Input.cursor({column: 0, row: 7}), sudoku.Input.toggle({value: 4}), sudoku.Input.cursor({column: 0, row: 8}), sudoku.Input.toggle({value: 7}), sudoku.Input.cursor({column: 1, row: 2}), sudoku.Input.toggle({value: 1}), sudoku.Input.cursor({column: 1, row: 3}), sudoku.Input.toggle({value: 5}), sudoku.Input.cursor({column: 2, row: 8}), sudoku.Input.toggle({value: 2}), sudoku.Input.cursor({column: 3, row: 1}), sudoku.Input.toggle({value: 6}), sudoku.Input.cursor({column: 3, row: 6}), sudoku.Input.toggle({value: 5}), sudoku.Input.cursor({column: 4, row: 4}), sudoku.Input.toggle({value: 4}), sudoku.Input.cursor({column: 4, row: 6}), sudoku.Input.toggle({value: 2}), sudoku.Input.cursor({column: 5, row: 0}), sudoku.Input.toggle({value: 7}), sudoku.Input.cursor({column: 5, row: 3}), sudoku.Input.toggle({value: 9}), sudoku.Input.cursor({column: 5, row: 7}), sudoku.Input.toggle({value: 6}), sudoku.Input.cursor({column: 5, row: 8}), sudoku.Input.toggle({value: 4}), sudoku.Input.cursor({column: 6, row: 1}), sudoku.Input.toggle({value: 7}), sudoku.Input.cursor({column: 6, row: 4}), sudoku.Input.toggle({value: 5}), sudoku.Input.cursor({column: 6, row: 7}), sudoku.Input.toggle({value: 8}), sudoku.Input.cursor({column: 6, row: 8}), sudoku.Input.toggle({value: 1}), sudoku.Input.cursor({column: 7, row: 6}), sudoku.Input.toggle({value: 6}), sudoku.Input.cursor({column: 8, row: 0}), sudoku.Input.toggle({value: 9}), sudoku.Input.cursor({column: 8, row: 5}), sudoku.Input.toggle({value: 3}), sudoku.Input.entryMode(sudoku.EntryMode.value), sudoku.Input.cursor()]);
    },
    /*sudoku.possibleValues*/get possibleValues() {
      return C[16] || CT.C16;
    }
  }, false);
  dart.trackLibraries("packages/sudoku/sudoku", {
    "package:sudoku/sudoku.dart": sudoku
  }, {
    "package:sudoku/sudoku.dart": ["src/controller.dart", "src/game.dart", "src/input.dart", "src/puzzles.dart", "src/renderer.dart", "src/util.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/controller.dart","src/game.dart","src/input.dart","src/renderer.dart","src/util.dart","src/puzzles.dart"],"names":[],"mappings":"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","file":"sudoku.sound.ddc.js"}');
  // Exports:
  return {
    sudoku: sudoku
  };
}));

//# sourceMappingURL=sudoku.sound.ddc.js.map
