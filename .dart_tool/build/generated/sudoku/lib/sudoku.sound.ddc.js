define(['dart_sdk'], (function load__packages__sudoku__sudoku(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
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
  var $length = dartx.length;
  var $last = dartx.last;
  var $forEach = dartx.forEach;
  var $runtimeType = dartx.runtimeType;
  var $isNotEmpty = dartx.isNotEmpty;
  var $removeLast = dartx.removeLast;
  var $isEmpty = dartx.isEmpty;
  var $first = dartx.first;
  var $add = dartx.add;
  var $className = dartx.className;
  var $innerHtml = dartx.innerHtml;
  var $join = dartx.join;
  var $runes = dartx.runes;
  var $map = dartx.map;
  var $toList = dartx.toList;
  var $modulo = dartx['%'];
  var $truncate = dartx.truncate;
  var $_set = dartx._set;
  var $putIfAbsent = dartx.putIfAbsent;
  var $clear = dartx.clear;
  var $remove = dartx.remove;
  var $toString = dartx.toString;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    StreamControllerOfInput: () => (T.StreamControllerOfInput = dart.constFn(async.StreamController$(sudoku.Input)))(),
    MouseEventTovoid: () => (T.MouseEventTovoid = dart.constFn(dart.fnType(dart.void, [html.MouseEvent])))(),
    MouseEventToNvoid: () => (T.MouseEventToNvoid = dart.constFn(dart.nullable(T.MouseEventTovoid())))(),
    MouseEventToNull: () => (T.MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))(),
    JSArrayOfMode: () => (T.JSArrayOfMode = dart.constFn(_interceptors.JSArray$(sudoku.Mode)))(),
    LinkedHashSetOfint: () => (T.LinkedHashSetOfint = dart.constFn(collection.LinkedHashSet$(core.int)))(),
    IdentityMapOfint$Finding: () => (T.IdentityMapOfint$Finding = dart.constFn(_js_helper.IdentityMap$(core.int, sudoku.Finding)))(),
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    ListOfintN: () => (T.ListOfintN = dart.constFn(core.List$(T.intN())))(),
    ListOfListOfintN: () => (T.ListOfListOfintN = dart.constFn(core.List$(T.ListOfintN())))(),
    JSArrayOfListOfListOfintN: () => (T.JSArrayOfListOfListOfintN = dart.constFn(_interceptors.JSArray$(T.ListOfListOfintN())))(),
    SetOfint: () => (T.SetOfint = dart.constFn(core.Set$(core.int)))(),
    ListOfSetOfint: () => (T.ListOfSetOfint = dart.constFn(core.List$(T.SetOfint())))(),
    ListOfListOfSetOfint: () => (T.ListOfListOfSetOfint = dart.constFn(core.List$(T.ListOfSetOfint())))(),
    JSArrayOfListOfListOfSetOfint: () => (T.JSArrayOfListOfListOfSetOfint = dart.constFn(_interceptors.JSArray$(T.ListOfListOfSetOfint())))(),
    MapOfint$Finding: () => (T.MapOfint$Finding = dart.constFn(core.Map$(core.int, sudoku.Finding)))(),
    MapOfint$MapOfint$Finding: () => (T.MapOfint$MapOfint$Finding = dart.constFn(core.Map$(core.int, T.MapOfint$Finding())))(),
    IdentityMapOfint$MapOfint$MapOfint$Finding: () => (T.IdentityMapOfint$MapOfint$MapOfint$Finding = dart.constFn(_js_helper.IdentityMap$(core.int, T.MapOfint$MapOfint$Finding())))(),
    MapOfint$MapOfint$MapOfint$Finding: () => (T.MapOfint$MapOfint$MapOfint$Finding = dart.constFn(core.Map$(core.int, T.MapOfint$MapOfint$Finding())))(),
    JSArrayOfMapOfint$MapOfint$MapOfint$Finding: () => (T.JSArrayOfMapOfint$MapOfint$MapOfint$Finding = dart.constFn(_interceptors.JSArray$(T.MapOfint$MapOfint$MapOfint$Finding())))(),
    MapOfint$bool: () => (T.MapOfint$bool = dart.constFn(core.Map$(core.int, core.bool)))(),
    IdentityMapOfint$MapOfint$bool: () => (T.IdentityMapOfint$MapOfint$bool = dart.constFn(_js_helper.IdentityMap$(core.int, T.MapOfint$bool())))(),
    intAndintToNull: () => (T.intAndintToNull = dart.constFn(dart.fnType(core.Null, [core.int, core.int])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    JSArrayOfInput: () => (T.JSArrayOfInput = dart.constFn(_interceptors.JSArray$(sudoku.Input)))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    JSArrayOfListOfint: () => (T.JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(T.ListOfint())))(),
    intToint: () => (T.intToint = dart.constFn(dart.fnType(core.int, [core.int])))(),
    intNToint: () => (T.intNToint = dart.constFn(dart.fnType(core.int, [T.intN()])))(),
    intToListOfintN: () => (T.intToListOfintN = dart.constFn(dart.fnType(T.ListOfintN(), [core.int])))(),
    intToSetOfint: () => (T.intToSetOfint = dart.constFn(dart.fnType(T.SetOfint(), [core.int])))(),
    intToListOfSetOfint: () => (T.intToListOfSetOfint = dart.constFn(dart.fnType(T.ListOfSetOfint(), [core.int])))(),
    ListNOfListOfintN: () => (T.ListNOfListOfintN = dart.constFn(dart.nullable(T.ListOfListOfintN())))(),
    __ToListOfListOfintN: () => (T.__ToListOfListOfintN = dart.constFn(dart.fnType(T.ListOfListOfintN(), [], {withMerge: T.ListNOfListOfintN()}, {})))(),
    intAndintTointN: () => (T.intAndintTointN = dart.constFn(dart.fnType(T.intN(), [core.int, core.int])))(),
    intAndintAndintNTovoid: () => (T.intAndintAndintNTovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.int, T.intN()])))(),
    intAndintToSetOfint: () => (T.intAndintToSetOfint = dart.constFn(dart.fnType(T.SetOfint(), [core.int, core.int])))(),
    ListNOfListOfSetOfint: () => (T.ListNOfListOfSetOfint = dart.constFn(dart.nullable(T.ListOfListOfSetOfint())))(),
    __ToListOfListOfSetOfint: () => (T.__ToListOfListOfSetOfint = dart.constFn(dart.fnType(T.ListOfListOfSetOfint(), [], {withMerge: T.ListNOfListOfSetOfint()}, {})))(),
    IdentityMapOfint$MapOfint$Finding: () => (T.IdentityMapOfint$MapOfint$Finding = dart.constFn(_js_helper.IdentityMap$(core.int, T.MapOfint$Finding())))(),
    VoidToMapOfint$MapOfint$Finding: () => (T.VoidToMapOfint$MapOfint$Finding = dart.constFn(dart.fnType(T.MapOfint$MapOfint$Finding(), [])))(),
    VoidToMapOfint$Finding: () => (T.VoidToMapOfint$Finding = dart.constFn(dart.fnType(T.MapOfint$Finding(), [])))(),
    VoidToMapOfint$MapOfint$MapOfint$Finding: () => (T.VoidToMapOfint$MapOfint$MapOfint$Finding = dart.constFn(dart.fnType(T.MapOfint$MapOfint$MapOfint$Finding(), [])))(),
    MapOfint$MapOfint$MapOfint$FindingTovoid: () => (T.MapOfint$MapOfint$MapOfint$FindingTovoid = dart.constFn(dart.fnType(dart.void, [T.MapOfint$MapOfint$MapOfint$Finding()])))(),
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    IdentityMapOfint$bool: () => (T.IdentityMapOfint$bool = dart.constFn(_js_helper.IdentityMap$(core.int, core.bool)))(),
    VoidToMapOfint$bool: () => (T.VoidToMapOfint$bool = dart.constFn(dart.fnType(T.MapOfint$bool(), [])))(),
    intAndintTodynamic: () => (T.intAndintTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int, core.int])))(),
    intAndintAndFnTodynamic: () => (T.intAndintAndFnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int, core.int, T.intAndintTodynamic()])))(),
    FnToNull: () => (T.FnToNull = dart.constFn(dart.fnType(core.Null, [T.intAndintAndFnTodynamic()])))(),
    intAndintAndFnTovoid: () => (T.intAndintAndFnTovoid = dart.constFn(dart.fnType(dart.void, [core.int, core.int, T.intAndintTodynamic()])))(),
    intAndintTobool: () => (T.intAndintTobool = dart.constFn(dart.fnType(core.bool, [core.int, core.int])))(),
    IdentityMapOfString$int: () => (T.IdentityMapOfString$int = dart.constFn(_js_helper.IdentityMap$(core.String, core.int)))(),
    IdentityMapOfString$SetOfint: () => (T.IdentityMapOfString$SetOfint = dart.constFn(_js_helper.IdentityMap$(core.String, T.SetOfint())))(),
    VoidToSetOfint: () => (T.VoidToSetOfint = dart.constFn(dart.fnType(T.SetOfint(), [])))(),
    intAndFnTodynamic: () => (T.intAndFnTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int, T.intAndintTodynamic()])))(),
    FnToNull$1: () => (T.FnToNull$1 = dart.constFn(dart.fnType(core.Null, [T.intAndFnTodynamic()])))(),
    intAndFnTovoid: () => (T.intAndFnTovoid = dart.constFn(dart.fnType(dart.void, [core.int, T.intAndintTodynamic()])))(),
    intToNull: () => (T.intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))(),
    IdentityMapOfint$SetOfint: () => (T.IdentityMapOfint$SetOfint = dart.constFn(_js_helper.IdentityMap$(core.int, T.SetOfint())))(),
    intAndSetOfintTovoid: () => (T.intAndSetOfintTovoid = dart.constFn(dart.fnType(dart.void, [core.int, T.SetOfint()])))(),
    intTodynamic: () => (T.intTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.int])))(),
    IdentityMapOfint$Input: () => (T.IdentityMapOfint$Input = dart.constFn(_js_helper.IdentityMap$(core.int, sudoku.Input)))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))()
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
        __proto__: sudoku.Mode.prototype,
        [_Enum__name]: "puzzle",
        [_Enum_index]: 0
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: sudoku.Mode.prototype,
        [_Enum__name]: "entry",
        [_Enum_index]: 1
      });
    },
    get C8() {
      return C[8] = dart.const({
        __proto__: sudoku.Mode.prototype,
        [_Enum__name]: "candidate",
        [_Enum_index]: 2
      });
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: sudoku.Mode.prototype,
        [_Enum__name]: "note",
        [_Enum_index]: 3
      });
    },
    get C5() {
      return C[5] = dart.constList([C[6] || CT.C6, C[7] || CT.C7, C[8] || CT.C8, C[9] || CT.C9], sudoku.Mode);
    },
    get C11() {
      return C[11] = dart.const({
        __proto__: sudoku.Finding.prototype,
        [_Enum__name]: "lastStanding",
        [_Enum_index]: 0
      });
    },
    get C12() {
      return C[12] = dart.const({
        __proto__: sudoku.Finding.prototype,
        [_Enum__name]: "forcedOut",
        [_Enum_index]: 1
      });
    },
    get C13() {
      return C[13] = dart.const({
        __proto__: sudoku.Finding.prototype,
        [_Enum__name]: "neededElsewhere",
        [_Enum_index]: 2
      });
    },
    get C14() {
      return C[14] = dart.const({
        __proto__: sudoku.Finding.prototype,
        [_Enum__name]: "note",
        [_Enum_index]: 3
      });
    },
    get C10() {
      return C[10] = dart.constList([C[11] || CT.C11, C[12] || CT.C12, C[13] || CT.C13, C[14] || CT.C14], sudoku.Finding);
    },
    get C15() {
      return C[15] = dart.fn(sudoku.scanColumn, T.intAndintAndFnTovoid());
    },
    get C16() {
      return C[16] = dart.fn(sudoku.scanRow, T.intAndintAndFnTovoid());
    },
    get C17() {
      return C[17] = dart.fn(sudoku.scanBox, T.intAndintAndFnTovoid());
    },
    get C18() {
      return C[18] = dart.fn(sudoku.scanIthColumn, T.intAndFnTovoid());
    },
    get C19() {
      return C[19] = dart.fn(sudoku.scanIthRow, T.intAndFnTovoid());
    },
    get C20() {
      return C[20] = dart.fn(sudoku.scanIthBox, T.intAndFnTovoid());
    },
    get C21() {
      return C[21] = dart.constMap(core.int, core.String, [1, "one", 2, "two", 3, "three", 4, "four", 5, "five", 6, "six", 7, "seven", 8, "eight", 9, "nine"]);
    },
    get C23() {
      return C[23] = dart.constList(["600090007", "040007100", "002800050", "800000090", "000070000", "030000008", "050002300", "004500020", "900030004"], core.String);
    },
    get C22() {
      return C[22] = dart.constList([C[23] || CT.C23], T.ListOfString());
    },
    get C25() {
      return C[25] = dart.constList(["086010047", "001500000", "000000002", "060000500", "000040200", "700900064", "070050081", "000000600", "900003000"], core.String);
    },
    get C26() {
      return C[26] = dart.constList(["049002000", "000007000", "260000950", "034070000", "600205001", "000060890", "082000046", "000800000", "000300510"], core.String);
    },
    get C27() {
      return C[27] = dart.constList(["000700100", "007006830", "000300056", "000070010", "400902005", "010060000", "270001000", "069800200", "005007000"], core.String);
    },
    get C28() {
      return C[28] = dart.constList(["900001005", "600000140", "000058000", "500704000", "090080030", "000306008", "000460000", "024000009", "300100007"], core.String);
    },
    get C24() {
      return C[24] = dart.constList([C[25] || CT.C25, C[26] || CT.C26, C[27] || CT.C27, C[28] || CT.C28], T.ListOfString());
    },
    get C30() {
      return C[30] = dart.constList(["000046500", "000000900", "006003020", "003080000", "000409080", "090000060", "700090005", "240810000", "050030000"], core.String);
    },
    get C29() {
      return C[29] = dart.constList([C[30] || CT.C30], T.ListOfString());
    },
    get C32() {
      return C[32] = dart.constList(["000076003", "000080000", "730000010", "092000400", "007068000", "000040070", "000000000", "000257306", "400000058"], core.String);
    },
    get C31() {
      return C[31] = dart.constList([C[32] || CT.C32], T.ListOfString());
    },
    get C34() {
      return C[34] = dart.constList(["003020600", "900305001", "001806400", "008102900", "700000008", "006708200", "002609500", "800203009", "005010300"], core.String);
    },
    get C35() {
      return C[35] = dart.constList(["200080300", "060070084", "030500209", "000105408", "000000000", "402706000", "301007040", "720040060", "004010003"], core.String);
    },
    get C36() {
      return C[36] = dart.constList(["000000907", "000420180", "000705026", "100904000", "050000040", "000507009", "920108000", "034059000", "507000000"], core.String);
    },
    get C37() {
      return C[37] = dart.constList(["030050040", "008010500", "460000012", "070502080", "000603000", "040109030", "250000098", "001020600", "080060020"], core.String);
    },
    get C38() {
      return C[38] = dart.constList(["020810740", "700003100", "090002805", "009040087", "400208003", "160030200", "302700060", "005600008", "076051090"], core.String);
    },
    get C39() {
      return C[39] = dart.constList(["100920000", "524010000", "000000070", "050008102", "000000000", "402700090", "060000000", "000030945", "000071006"], core.String);
    },
    get C40() {
      return C[40] = dart.constList(["043080250", "600000000", "000001094", "900004070", "000608000", "010200003", "820500000", "000000005", "034090710"], core.String);
    },
    get C41() {
      return C[41] = dart.constList(["480006902", "002008001", "900370060", "840010200", "003704100", "001060049", "020085007", "700900600", "609200018"], core.String);
    },
    get C42() {
      return C[42] = dart.constList(["000900002", "050123400", "030000160", "908000000", "070000090", "000000205", "091000050", "007439020", "400007000"], core.String);
    },
    get C43() {
      return C[43] = dart.constList(["001900003", "900700160", "030005007", "050000009", "004302600", "200000070", "600100030", "042007006", "500006800"], core.String);
    },
    get C44() {
      return C[44] = dart.constList(["000125400", "008400000", "420800000", "030000095", "060902010", "510000060", "000003049", "000007200", "001298000"], core.String);
    },
    get C45() {
      return C[45] = dart.constList(["062340750", "100005600", "570000040", "000094800", "400000006", "005830000", "030000091", "006400007", "059083260"], core.String);
    },
    get C46() {
      return C[46] = dart.constList(["300000000", "005009000", "200504000", "020000700", "160000058", "704310600", "000890100", "000067080", "000005437"], core.String);
    },
    get C47() {
      return C[47] = dart.constList(["630000000", "000500008", "005674000", "000020000", "003401020", "000000345", "000007004", "080300902", "947100080"], core.String);
    },
    get C48() {
      return C[48] = dart.constList(["000020040", "008035000", "000070602", "031046970", "200000000", "000501203", "049000730", "000000010", "800004000"], core.String);
    },
    get C49() {
      return C[49] = dart.constList(["361025900", "080960010", "400000057", "008000471", "000603000", "259000800", "740000005", "020018060", "005470329"], core.String);
    },
    get C50() {
      return C[50] = dart.constList(["050807020", "600010090", "702540006", "070020301", "504000908", "103080070", "900076205", "060090003", "080103040"], core.String);
    },
    get C51() {
      return C[51] = dart.constList(["080005000", "000003457", "000070809", "060400903", "007010500", "408007020", "901020000", "842300000", "000100080"], core.String);
    },
    get C52() {
      return C[52] = dart.constList(["003502900", "000040000", "106000305", "900251008", "070408030", "800763001", "308000104", "000020000", "005104800"], core.String);
    },
    get C53() {
      return C[53] = dart.constList(["000000000", "009805100", "051907420", "290401065", "000000000", "140508093", "026709580", "005103600", "000000000"], core.String);
    },
    get C54() {
      return C[54] = dart.constList(["020030090", "000907000", "900208005", "004806500", "607000208", "003102900", "800605007", "000309000", "030020050"], core.String);
    },
    get C55() {
      return C[55] = dart.constList(["005000006", "070009020", "000500107", "804150000", "000803000", "000092805", "907006000", "030400010", "200000600"], core.String);
    },
    get C56() {
      return C[56] = dart.constList(["040000050", "001943600", "009000300", "600050002", "103000506", "800020007", "005000200", "002436700", "030000040"], core.String);
    },
    get C57() {
      return C[57] = dart.constList(["004000000", "000030002", "390700080", "400009001", "209801307", "600200008", "010008053", "900040000", "000000800"], core.String);
    },
    get C58() {
      return C[58] = dart.constList(["360020089", "000361000", "000000000", "803000602", "400603007", "607000108", "000000000", "000418000", "970030014"], core.String);
    },
    get C59() {
      return C[59] = dart.constList(["500400060", "009000800", "640020000", "000001008", "208000501", "700500000", "000090084", "003000600", "060003002"], core.String);
    },
    get C60() {
      return C[60] = dart.constList(["007256400", "400000005", "010030060", "000508000", "008060200", "000107000", "030070090", "200000004", "006312700"], core.String);
    },
    get C61() {
      return C[61] = dart.constList(["000000000", "079050180", "800000007", "007306800", "450708096", "003502700", "700000005", "016030420", "000000000"], core.String);
    },
    get C62() {
      return C[62] = dart.constList(["030000080", "009000500", "007509200", "700105008", "020090030", "900402001", "004207100", "002000800", "070000090"], core.String);
    },
    get C63() {
      return C[63] = dart.constList(["200170603", "050000100", "000006079", "000040700", "000801000", "009050000", "310400000", "005000060", "906037002"], core.String);
    },
    get C64() {
      return C[64] = dart.constList(["000000080", "800701040", "040020030", "374000900", "000030000", "005000321", "010060050", "050802006", "080000000"], core.String);
    },
    get C65() {
      return C[65] = dart.constList(["000000085", "000210009", "960080100", "500800016", "000000000", "890006007", "009070052", "300054000", "480000000"], core.String);
    },
    get C66() {
      return C[66] = dart.constList(["608070502", "050608070", "002000300", "500090006", "040302050", "800050003", "005000200", "010704090", "409060701"], core.String);
    },
    get C67() {
      return C[67] = dart.constList(["050010040", "107000602", "000905000", "208030501", "040070020", "901080406", "000401000", "304000709", "020060010"], core.String);
    },
    get C68() {
      return C[68] = dart.constList(["053000790", "009753400", "100000002", "090080010", "000907000", "080030070", "500000003", "007641200", "061000940"], core.String);
    },
    get C69() {
      return C[69] = dart.constList(["006080300", "049070250", "000405000", "600317004", "007000800", "100826009", "000702000", "075040190", "003090600"], core.String);
    },
    get C70() {
      return C[70] = dart.constList(["005080700", "700204005", "320000084", "060105040", "008000500", "070803010", "450000091", "600508007", "003010600"], core.String);
    },
    get C71() {
      return C[71] = dart.constList(["000900800", "128006400", "070800060", "800430007", "500000009", "600079008", "090004010", "003600284", "001007000"], core.String);
    },
    get C72() {
      return C[72] = dart.constList(["000080000", "270000054", "095000810", "009806400", "020403060", "006905100", "017000620", "460000038", "000090000"], core.String);
    },
    get C73() {
      return C[73] = dart.constList(["000602000", "400050001", "085010620", "038206710", "000000000", "019407350", "026040530", "900020007", "000809000"], core.String);
    },
    get C74() {
      return C[74] = dart.constList(["380000000", "000400785", "009020300", "060090000", "800302009", "000040070", "001070500", "495006000", "000000092"], core.String);
    },
    get C75() {
      return C[75] = dart.constList(["000158000", "002060800", "030000040", "027030510", "000000000", "046080790", "050000080", "004070100", "000325000"], core.String);
    },
    get C76() {
      return C[76] = dart.constList(["010500200", "900001000", "002008030", "500030007", "008000500", "600080004", "040100700", "000700006", "003004050"], core.String);
    },
    get C77() {
      return C[77] = dart.constList(["080000040", "000469000", "400000007", "005904600", "070608030", "008502100", "900000005", "000781000", "060000010"], core.String);
    },
    get C78() {
      return C[78] = dart.constList(["904200007", "010000000", "000706500", "000800090", "020904060", "040002000", "001607000", "000000030", "300005702"], core.String);
    },
    get C79() {
      return C[79] = dart.constList(["000700800", "006000031", "040002000", "024070000", "010030080", "000060290", "000800070", "860000500", "002006000"], core.String);
    },
    get C80() {
      return C[80] = dart.constList(["001007090", "590080001", "030000080", "000005800", "050060020", "004100000", "080000030", "100020079", "020700400"], core.String);
    },
    get C81() {
      return C[81] = dart.constList(["000003017", "015009008", "060000000", "100007000", "009000200", "000500004", "000000020", "500600340", "340200000"], core.String);
    },
    get C82() {
      return C[82] = dart.constList(["300200000", "000107000", "706030500", "070009080", "900020004", "010800050", "009040301", "000702000", "000008006"], core.String);
    },
    get C33() {
      return C[33] = dart.constList([C[34] || CT.C34, C[35] || CT.C35, C[36] || CT.C36, C[37] || CT.C37, C[38] || CT.C38, C[39] || CT.C39, C[40] || CT.C40, C[41] || CT.C41, C[42] || CT.C42, C[43] || CT.C43, C[44] || CT.C44, C[45] || CT.C45, C[46] || CT.C46, C[47] || CT.C47, C[48] || CT.C48, C[49] || CT.C49, C[50] || CT.C50, C[51] || CT.C51, C[52] || CT.C52, C[53] || CT.C53, C[54] || CT.C54, C[55] || CT.C55, C[56] || CT.C56, C[57] || CT.C57, C[58] || CT.C58, C[59] || CT.C59, C[60] || CT.C60, C[61] || CT.C61, C[62] || CT.C62, C[63] || CT.C63, C[64] || CT.C64, C[65] || CT.C65, C[66] || CT.C66, C[67] || CT.C67, C[68] || CT.C68, C[69] || CT.C69, C[70] || CT.C70, C[71] || CT.C71, C[72] || CT.C72, C[73] || CT.C73, C[42] || CT.C42, C[74] || CT.C74, C[75] || CT.C75, C[76] || CT.C76, C[77] || CT.C77, C[78] || CT.C78, C[79] || CT.C79, C[80] || CT.C80, C[81] || CT.C81, C[82] || CT.C82], T.ListOfString());
    },
    get C83() {
      return C[83] = dart.constSet(core.int, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    },
    get C85() {
      return C[85] = dart.constList([0, 0], core.int);
    },
    get C86() {
      return C[86] = dart.constList([0, 3], core.int);
    },
    get C87() {
      return C[87] = dart.constList([0, 6], core.int);
    },
    get C88() {
      return C[88] = dart.constList([3, 0], core.int);
    },
    get C89() {
      return C[89] = dart.constList([3, 3], core.int);
    },
    get C90() {
      return C[90] = dart.constList([3, 6], core.int);
    },
    get C91() {
      return C[91] = dart.constList([6, 0], core.int);
    },
    get C92() {
      return C[92] = dart.constList([6, 3], core.int);
    },
    get C93() {
      return C[93] = dart.constList([6, 6], core.int);
    },
    get C84() {
      return C[84] = dart.constList([C[85] || CT.C85, C[86] || CT.C86, C[87] || CT.C87, C[88] || CT.C88, C[89] || CT.C89, C[90] || CT.C90, C[91] || CT.C91, C[92] || CT.C92, C[93] || CT.C93], T.ListOfint());
    }
  }, false);
  var C = Array(94).fill(void 0);
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
    dart.nullCheck(html.querySelector("#big"))[$onClick].listen(dart.fn(e => this[_onInput](e, sudoku.Input.mode(sudoku.Mode.entry)), T.MouseEventTovoid()));
    dart.nullCheck(html.querySelector("#little"))[$onClick].listen(dart.fn(e => this[_onInput](e, sudoku.Input.mode(sudoku.Mode.note)), T.MouseEventTovoid()));
    dart.nullCheck(html.querySelector("#rewind"))[$onClick].listen(dart.fn(e => this[_onInput](e, sudoku.Input.rewind()), T.MouseEventTovoid()));
    dart.nullCheck(html.querySelector("#auto"))[$onClick].listen(dart.fn(e => this[_onInput](e, sudoku.Input.auto()), T.MouseEventTovoid()));
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
  var __Game__candidates = dart.privateName(sudoku, "_#Game#_candidates");
  var __Game__audoCandidates = dart.privateName(sudoku, "_#Game#_audoCandidates");
  var __Game__puzzle = dart.privateName(sudoku, "_#Game#_puzzle");
  var __Game__entries = dart.privateName(sudoku, "_#Game#_entries");
  var _history = dart.privateName(sudoku, "_history");
  var __Game__findings = dart.privateName(sudoku, "_#Game#_findings");
  var __Game__notes = dart.privateName(sudoku, "_#Game#_notes");
  var __Game__invalids = dart.privateName(sudoku, "_#Game#_invalids");
  var __Game__mode = dart.privateName(sudoku, "_#Game#_mode");
  var _cursorY = dart.privateName(sudoku, "_cursorY");
  var _cursorX = dart.privateName(sudoku, "_cursorX");
  var _selectedValue = dart.privateName(sudoku, "_selectedValue");
  var _relatedY = dart.privateName(sudoku, "_relatedY");
  var _relatedX = dart.privateName(sudoku, "_relatedX");
  var _relatedB = dart.privateName(sudoku, "_relatedB");
  var _controller = dart.privateName(sudoku, "_controller");
  var _handleInput = dart.privateName(sudoku, "_handleInput");
  var _initPuzzle = dart.privateName(sudoku, "_initPuzzle");
  var _loadPuzzle = dart.privateName(sudoku, "_loadPuzzle");
  var _candidates = dart.privateName(sudoku, "_candidates");
  var _audoCandidates = dart.privateName(sudoku, "_audoCandidates");
  var _puzzle = dart.privateName(sudoku, "_puzzle");
  var _entries = dart.privateName(sudoku, "_entries");
  var _findings = dart.privateName(sudoku, "_findings");
  var _notes = dart.privateName(sudoku, "_notes");
  var _invalids = dart.privateName(sudoku, "_invalids");
  var _mode = dart.privateName(sudoku, "_mode");
  var _redraw = dart.privateName(sudoku, "_redraw");
  var _handleRewind = dart.privateName(sudoku, "_handleRewind");
  var _handleMode = dart.privateName(sudoku, "_handleMode");
  var _handleCursor = dart.privateName(sudoku, "_handleCursor");
  var _handleToggle = dart.privateName(sudoku, "_handleToggle");
  var _handleAuto = dart.privateName(sudoku, "_handleAuto");
  var _calc = dart.privateName(sudoku, "_calc");
  var _select = dart.privateName(sudoku, "_select");
  var _toggleCell = dart.privateName(sudoku, "_toggleCell");
  sudoku.Game = class Game extends core.Object {
    get redraw() {
      return this[_redrawController].stream;
    }
    get [_candidates]() {
      let t0;
      t0 = this[__Game__candidates];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_candidates")) : t0;
    }
    set [_candidates](library$32package$58sudoku$47src$47game$46dart$58$58_candidates$35param) {
      this[__Game__candidates] = library$32package$58sudoku$47src$47game$46dart$58$58_candidates$35param;
    }
    get [_audoCandidates]() {
      let t0;
      t0 = this[__Game__audoCandidates];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_audoCandidates")) : t0;
    }
    set [_audoCandidates](library$32package$58sudoku$47src$47game$46dart$58$58_audoCandidates$35param) {
      this[__Game__audoCandidates] = library$32package$58sudoku$47src$47game$46dart$58$58_audoCandidates$35param;
    }
    get candidates() {
      return sudoku['CandidateX|copy'](this[_candidates], {withMerge: this[_audoCandidates][$last]});
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
    get [_notes]() {
      let t0;
      t0 = this[__Game__notes];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_notes")) : t0;
    }
    set [_notes](library$32package$58sudoku$47src$47game$46dart$58$58_notes$35param) {
      this[__Game__notes] = library$32package$58sudoku$47src$47game$46dart$58$58_notes$35param;
    }
    found(column, row) {
      let t0, t1, t0$, t0$0;
      t0$0 = (t0$ = (t0 = this[_findings][$_get](column), t0 == null ? null : t0[$_get](row)), t0$ == null ? (t1 = this[_notes][$last][$_get](column), t1 == null ? null : t1[$_get](row)) : t0$);
      return t0$0 == null ? new (T.IdentityMapOfint$Finding()).new() : t0$0;
    }
    get [_invalids]() {
      let t0;
      t0 = this[__Game__invalids];
      return t0 == null ? dart.throw(new _internal.LateError.fieldNI("_invalids")) : t0;
    }
    set [_invalids](library$32package$58sudoku$47src$47game$46dart$58$58_invalids$35param) {
      this[__Game__invalids] = library$32package$58sudoku$47src$47game$46dart$58$58_invalids$35param;
    }
    isValid(column, row) {
      return !(this[_invalids][$containsKey](column) && dart.nullCheck(this[_invalids][$_get](column))[$containsKey](row));
    }
    get [_mode]() {
      let t0;
      t0 = this[__Game__mode];
      return t0 == null ? this[__Game__mode] = sudoku.Mode.entry : t0;
    }
    set [_mode](library$32package$58sudoku$47src$47game$46dart$58$58_mode$35param) {
      this[__Game__mode] = library$32package$58sudoku$47src$47game$46dart$58$58_mode$35param;
    }
    get mode() {
      return this[_mode];
    }
    get cursorY() {
      return this[_cursorY];
    }
    get cursorX() {
      return this[_cursorX];
    }
    get cursorBox() {
      return sudoku.getBox(this.cursorY, this.cursorX);
    }
    get selectedValue() {
      return this[_selectedValue];
    }
    selected(y, x) {
      return y === this.cursorY && x === this.cursorX || this[_selectedValue] != null && (this[_puzzle][$_get](y)[$_get](x) == this[_selectedValue] || this[_entries][$last][$_get](y)[$_get](x) == this[_selectedValue]);
    }
    related(y, x) {
      return this[_relatedY].contains(y) || this[_relatedX].contains(x) || this[_relatedB].contains(sudoku.getBox(y, x)) || this[_selectedValue] != null && (this[_puzzle][$_get](y)[$_get](x) != null || this[_entries][$last][$_get](y)[$_get](x) != null);
    }
    get hasCursor() {
      return this.cursorY != null && this.cursorX != null;
    }
    getValue(y, x) {
      return y != null && x != null ? this.values[$_get](y)[$_get](x) : null;
    }
    static ['_#new#tearOff'](opts) {
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new sudoku.Game.new({controller: controller});
    }
    [_loadPuzzle](index) {
      core.print("Puzzle(" + dart.str(index) + ")");
      this[_initPuzzle]();
      sudoku.parsedPuzzle(index, sudoku.evilPuzzles)[$forEach](dart.bind(this, _handleInput));
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
        case dart.wrapType(sudoku.ModeInput):
          {
            this[_handleMode](sudoku.ModeInput.as(input));
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
        case dart.wrapType(sudoku.AutoInput):
          {
            this[_handleAuto]({everything: false});
            break;
          }
      }
      this[_redraw]();
    }
    [_initPuzzle]() {
      this[_cursorY] = null;
      this[_cursorX] = null;
      this[_mode] = sudoku.Mode.puzzle;
      this[_puzzle] = sudoku.emptyPuzzle();
      this[_entries] = T.JSArrayOfListOfListOfintN().of([sudoku.emptyPuzzle()]);
      this[_candidates] = sudoku.fullCandidates();
      this[_audoCandidates] = T.JSArrayOfListOfListOfSetOfint().of([sudoku.fullCandidates()]);
      this[_notes] = T.JSArrayOfMapOfint$MapOfint$MapOfint$Finding().of([new (T.IdentityMapOfint$MapOfint$MapOfint$Finding()).new()]);
      this[_history] = T.JSArrayOfMode().of([]);
      this[_invalids] = new (T.IdentityMapOfint$MapOfint$bool()).new();
      this[_redraw]();
    }
    [_handleRewind]() {
      if (this[_history][$isNotEmpty]) {
        if (this[_history][$last] === sudoku.Mode.entry) {
          this[_entries][$removeLast]();
        } else if (this[_history][$last] === sudoku.Mode.candidate) {
          this[_audoCandidates][$removeLast]();
        } else if (this[_history][$last] === sudoku.Mode.note) {
          this[_notes][$removeLast]();
        }
        this[_history][$removeLast]();
        this[_calc]();
      }
    }
    [_handleMode](modeInput) {
      this[_mode] = modeInput.mode;
      if (this[_mode] !== sudoku.Mode.puzzle) {
        this[_calc]();
      }
    }
    [_handleCursor](cursorInput) {
      if (cursorInput.move != null) {
        this[_cursorY] = sudoku['MoveX|nextY'](dart.nullCheck(cursorInput.move), this.cursorY);
        this[_cursorX] = sudoku['MoveX|nextX'](dart.nullCheck(cursorInput.move), this.cursorX);
      } else {
        this[_cursorY] = cursorInput.y;
        this[_cursorX] = cursorInput.x;
      }
      this[_select](this.getValue(this.cursorY, this.cursorX));
    }
    [_handleToggle](toggleInput) {
      if (!this.hasCursor) {
        this[_select](this.selectedValue != toggleInput.value ? toggleInput.value : null);
      }
      if (this.hasCursor) {
        this[_toggleCell](dart.nullCheck(this.cursorY), dart.nullCheck(this.cursorX), toggleInput.value, this[_mode]);
        this[_select](toggleInput.value);
        this[_calc]();
      }
    }
    [_select](value) {
      this[_selectedValue] = value;
      let puzzle = this.values;
      this[_relatedY].clear();
      this[_relatedX].clear();
      this[_relatedB].clear();
      if (value != null) {
        sudoku.scan(dart.fn((y, x) => {
          if (puzzle[$_get](y)[$_get](x) == value) {
            this[_relatedY].add(y);
            this[_relatedX].add(x);
            this[_relatedB].add(dart.nullCheck(sudoku.getBox(y, x)));
          }
        }, T.intAndintToNull()));
      }
    }
    [_handleAuto](opts) {
      let everything = opts && 'everything' in opts ? opts.everything : false;
      if (this[_mode] !== sudoku.Mode.puzzle && this[_findings][$isNotEmpty] && this[_invalids][$isEmpty]) {
        if (everything) {
          for (let fy of this[_findings][$keys]) {
            for (let fx of dart.nullCheck(this[_findings][$_get](fy))[$keys]) {
              for (let fv of dart.nullCheck(dart.nullCheck(this[_findings][$_get](fy))[$_get](fx))[$keys]) {
                let fm = sudoku['FindingX|get#mode'](dart.nullCheck(dart.nullCheck(dart.nullCheck(this[_findings][$_get](fy))[$_get](fx))[$_get](fv)));
                this[_toggleCell](fy, fx, fv, fm);
              }
            }
          }
          this[_calc]();
          this[_handleAuto]({everything: everything});
        } else {
          let fy = this[_findings][$keys][$first];
          let fx = dart.nullCheck(this[_findings][$_get](fy))[$keys][$first];
          let fv = dart.nullCheck(dart.nullCheck(this[_findings][$_get](fy))[$_get](fx))[$keys][$first];
          let fm = sudoku['FindingX|get#mode'](dart.nullCheck(dart.nullCheck(dart.nullCheck(this[_findings][$_get](fy))[$_get](fx))[$_get](fv)));
          this[_toggleCell](fy, fx, fv, fm);
          this[_calc]();
        }
      }
    }
    [_toggleCell](cellY, cellX, value, mode) {
      let t0, t0$, t0$0, t0$1;
      if (mode === sudoku.Mode.puzzle) {
        this[_puzzle] = (t0 = sudoku['PuzzleX|copy'](this[_puzzle]), (() => {
          sudoku['PuzzleX|toggle'](t0, cellY, cellX, value);
          return t0;
        })());
      } else {
        if (mode === sudoku.Mode.entry) {
          this[_entries][$add]((t0$ = sudoku['PuzzleX|copy'](this[_entries][$last]), (() => {
            sudoku['PuzzleX|toggle'](t0$, cellY, cellX, value);
            return t0$;
          })()));
        } else if (mode === sudoku.Mode.candidate) {
          this[_audoCandidates][$add]((t0$0 = sudoku['CandidateX|copy'](this[_audoCandidates][$last]), (() => {
            sudoku['CandidateX|toggle'](t0$0, cellY, cellX, value);
            return t0$0;
          })()));
        } else if (mode === sudoku.Mode.note) {
          this[_notes][$add]((t0$1 = sudoku['FindingsX|copy'](this[_notes][$last]), (() => {
            sudoku['FindingsX|toggle'](t0$1, cellY, cellX, value);
            return t0$1;
          })()));
        }
        this[_history][$add](mode);
      }
    }
    [_calc]() {
      this[_candidates] = sudoku.calcAutoCandidates(this.values);
      this[_findings] = sudoku.calcFindings(this.values, this.candidates);
      this[_invalids] = sudoku.calcInvalids(this.values, this.candidates);
    }
  };
  (sudoku.Game.new = function(opts) {
    let controller = opts && 'controller' in opts ? opts.controller : null;
    this[_redrawController] = async.StreamController.broadcast();
    this[__Game__candidates] = null;
    this[__Game__audoCandidates] = null;
    this[__Game__puzzle] = null;
    this[__Game__entries] = null;
    this[_history] = T.JSArrayOfMode().of([]);
    this[__Game__findings] = null;
    this[__Game__notes] = null;
    this[__Game__invalids] = null;
    this[__Game__mode] = null;
    this[_cursorY] = null;
    this[_cursorX] = null;
    this[_selectedValue] = null;
    this[_relatedY] = T.LinkedHashSetOfint().new();
    this[_relatedX] = T.LinkedHashSetOfint().new();
    this[_relatedB] = T.LinkedHashSetOfint().new();
    this[_controller] = controller;
    this[_controller].input.listen(dart.bind(this, _handleInput));
    this[_initPuzzle]();
    let rand = math.Random.new();
    this[_loadPuzzle](rand.nextInt(sudoku.evilPuzzles[$length]));
  }).prototype = sudoku.Game.prototype;
  dart.addTypeTests(sudoku.Game);
  dart.addTypeCaches(sudoku.Game);
  dart.setMethodSignature(sudoku.Game, () => ({
    __proto__: dart.getMethods(sudoku.Game.__proto__),
    setByPuzzle: dart.fnType(core.bool, [core.int, core.int]),
    found: dart.fnType(core.Map$(core.int, sudoku.Finding), [core.int, core.int]),
    isValid: dart.fnType(core.bool, [core.int, core.int]),
    selected: dart.fnType(core.bool, [core.int, core.int]),
    related: dart.fnType(core.bool, [core.int, core.int]),
    getValue: dart.fnType(dart.nullable(core.int), [dart.nullable(core.int), dart.nullable(core.int)]),
    [_loadPuzzle]: dart.fnType(dart.void, [core.int]),
    [_redraw]: dart.fnType(dart.dynamic, []),
    [_handleInput]: dart.fnType(dart.void, [sudoku.Input]),
    [_initPuzzle]: dart.fnType(dart.void, []),
    [_handleRewind]: dart.fnType(dart.void, []),
    [_handleMode]: dart.fnType(dart.void, [sudoku.ModeInput]),
    [_handleCursor]: dart.fnType(dart.void, [sudoku.CursorInput]),
    [_handleToggle]: dart.fnType(dart.void, [sudoku.ToggleInput]),
    [_select]: dart.fnType(dart.void, [dart.nullable(core.int)]),
    [_handleAuto]: dart.fnType(dart.void, [], {everything: core.bool}, {}),
    [_toggleCell]: dart.fnType(dart.void, [core.int, core.int, dart.nullable(core.int), sudoku.Mode]),
    [_calc]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(sudoku.Game, () => ({
    __proto__: dart.getGetters(sudoku.Game.__proto__),
    redraw: async.Stream,
    [_candidates]: core.List$(core.List$(core.Set$(core.int))),
    [_audoCandidates]: core.List$(core.List$(core.List$(core.Set$(core.int)))),
    candidates: core.List$(core.List$(core.Set$(core.int))),
    [_puzzle]: core.List$(core.List$(dart.nullable(core.int))),
    [_entries]: core.List$(core.List$(core.List$(dart.nullable(core.int)))),
    values: core.List$(core.List$(dart.nullable(core.int))),
    [_findings]: core.Map$(core.int, core.Map$(core.int, core.Map$(core.int, sudoku.Finding))),
    [_notes]: core.List$(core.Map$(core.int, core.Map$(core.int, core.Map$(core.int, sudoku.Finding)))),
    [_invalids]: core.Map$(core.int, core.Map$(core.int, core.bool)),
    [_mode]: sudoku.Mode,
    mode: sudoku.Mode,
    cursorY: dart.nullable(core.int),
    cursorX: dart.nullable(core.int),
    cursorBox: dart.nullable(core.int),
    selectedValue: dart.nullable(core.int),
    hasCursor: core.bool
  }));
  dart.setSetterSignature(sudoku.Game, () => ({
    __proto__: dart.getSetters(sudoku.Game.__proto__),
    [_candidates]: core.List$(core.List$(core.Set$(core.int))),
    [_audoCandidates]: core.List$(core.List$(core.List$(core.Set$(core.int)))),
    [_puzzle]: core.List$(core.List$(dart.nullable(core.int))),
    [_entries]: core.List$(core.List$(core.List$(dart.nullable(core.int)))),
    [_findings]: core.Map$(core.int, core.Map$(core.int, core.Map$(core.int, sudoku.Finding))),
    [_notes]: core.List$(core.Map$(core.int, core.Map$(core.int, core.Map$(core.int, sudoku.Finding)))),
    [_invalids]: core.Map$(core.int, core.Map$(core.int, core.bool)),
    [_mode]: sudoku.Mode
  }));
  dart.setLibraryUri(sudoku.Game, I[0]);
  dart.setFieldSignature(sudoku.Game, () => ({
    __proto__: dart.getFields(sudoku.Game.__proto__),
    [_redrawController]: dart.finalFieldType(async.StreamController),
    [_controller]: dart.finalFieldType(sudoku.Controller),
    [__Game__candidates]: dart.fieldType(dart.nullable(core.List$(core.List$(core.Set$(core.int))))),
    [__Game__audoCandidates]: dart.fieldType(dart.nullable(core.List$(core.List$(core.List$(core.Set$(core.int)))))),
    [__Game__puzzle]: dart.fieldType(dart.nullable(core.List$(core.List$(dart.nullable(core.int))))),
    [__Game__entries]: dart.fieldType(dart.nullable(core.List$(core.List$(core.List$(dart.nullable(core.int)))))),
    [_history]: dart.fieldType(core.List$(sudoku.Mode)),
    [__Game__findings]: dart.fieldType(dart.nullable(core.Map$(core.int, core.Map$(core.int, core.Map$(core.int, sudoku.Finding))))),
    [__Game__notes]: dart.fieldType(dart.nullable(core.List$(core.Map$(core.int, core.Map$(core.int, core.Map$(core.int, sudoku.Finding)))))),
    [__Game__invalids]: dart.fieldType(dart.nullable(core.Map$(core.int, core.Map$(core.int, core.bool)))),
    [__Game__mode]: dart.fieldType(dart.nullable(sudoku.Mode)),
    [_cursorY]: dart.fieldType(dart.nullable(core.int)),
    [_cursorX]: dart.fieldType(dart.nullable(core.int)),
    [_selectedValue]: dart.fieldType(dart.nullable(core.int)),
    [_relatedY]: dart.finalFieldType(core.Set$(core.int)),
    [_relatedX]: dart.finalFieldType(core.Set$(core.int)),
    [_relatedB]: dart.finalFieldType(core.Set$(core.int))
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
    static mode(mode) {
      return new sudoku.ModeInput.new(mode);
    }
    static ['_#mode#tearOff'](mode) {
      return sudoku.Input.mode(mode);
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
    static togglNote(opts) {
      let value = opts && 'value' in opts ? opts.value : null;
      return new sudoku.ToggleInput.new(value);
    }
    static ['_#togglNote#tearOff'](opts) {
      let value = opts && 'value' in opts ? opts.value : null;
      return sudoku.Input.togglNote({value: value});
    }
    static auto() {
      return new sudoku.AutoInput.new();
    }
    static ['_#auto#tearOff']() {
      return sudoku.Input.auto();
    }
  };
  (sudoku.Input[dart.mixinNew] = function() {
  }).prototype = sudoku.Input.prototype;
  dart.addTypeTests(sudoku.Input);
  dart.addTypeCaches(sudoku.Input);
  dart.setStaticMethodSignature(sudoku.Input, () => ['reset', 'rewind', 'mode', 'cursor', 'toggle', 'togglNote', 'auto']);
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
  var mode$ = dart.privateName(sudoku, "ModeInput.mode");
  sudoku.ModeInput = class ModeInput extends core.Object {
    get mode() {
      return this[mode$];
    }
    set mode(value) {
      super.mode = value;
    }
    static ['_#new#tearOff'](mode) {
      return new sudoku.ModeInput.new(mode);
    }
  };
  (sudoku.ModeInput.new = function(mode) {
    this[mode$] = mode;
    ;
  }).prototype = sudoku.ModeInput.prototype;
  dart.addTypeTests(sudoku.ModeInput);
  dart.addTypeCaches(sudoku.ModeInput);
  sudoku.ModeInput[dart.implements] = () => [sudoku.Input];
  dart.setLibraryUri(sudoku.ModeInput, I[0]);
  dart.setFieldSignature(sudoku.ModeInput, () => ({
    __proto__: dart.getFields(sudoku.ModeInput.__proto__),
    mode: dart.finalFieldType(sudoku.Mode)
  }));
  var y$ = dart.privateName(sudoku, "CursorInput.y");
  var x$ = dart.privateName(sudoku, "CursorInput.x");
  var move$ = dart.privateName(sudoku, "CursorInput.move");
  sudoku.CursorInput = class CursorInput extends core.Object {
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get move() {
      return this[move$];
    }
    set move(value) {
      super.move = value;
    }
    static ['_#new#tearOff'](y, x, move) {
      return new sudoku.CursorInput.new(y, x, move);
    }
  };
  (sudoku.CursorInput.new = function(y, x, move) {
    this[y$] = y;
    this[x$] = x;
    this[move$] = move;
    ;
  }).prototype = sudoku.CursorInput.prototype;
  dart.addTypeTests(sudoku.CursorInput);
  dart.addTypeCaches(sudoku.CursorInput);
  sudoku.CursorInput[dart.implements] = () => [sudoku.Input];
  dart.setLibraryUri(sudoku.CursorInput, I[0]);
  dart.setFieldSignature(sudoku.CursorInput, () => ({
    __proto__: dart.getFields(sudoku.CursorInput.__proto__),
    y: dart.finalFieldType(dart.nullable(core.int)),
    x: dart.finalFieldType(dart.nullable(core.int)),
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
  sudoku.AutoInput = class AutoInput extends core.Object {
    static ['_#new#tearOff']() {
      return new sudoku.AutoInput.new();
    }
  };
  (sudoku.AutoInput.new = function() {
    ;
  }).prototype = sudoku.AutoInput.prototype;
  dart.addTypeTests(sudoku.AutoInput);
  dart.addTypeCaches(sudoku.AutoInput);
  sudoku.AutoInput[dart.implements] = () => [sudoku.Input];
  dart.setLibraryUri(sudoku.AutoInput, I[0]);
  var _game = dart.privateName(sudoku, "_game");
  var _keyRowElement = dart.privateName(sudoku, "_keyRowElement");
  var _bigElement = dart.privateName(sudoku, "_bigElement");
  var _littleElement = dart.privateName(sudoku, "_littleElement");
  var _tileClassName = dart.privateName(sudoku, "_tileClassName");
  var _tileInnerHtml = dart.privateName(sudoku, "_tileInnerHtml");
  var _keyClassName = dart.privateName(sudoku, "_keyClassName");
  var _candidateClassName = dart.privateName(sudoku, "_candidateClassName");
  sudoku.Renderer = class Renderer extends core.Object {
    get [_boardElement]() {
      return dart.nullCheck(html.querySelector("#board"));
    }
    get [_keyRowElement]() {
      return dart.nullCheck(html.querySelector("#numbers"));
    }
    get [_bigElement]() {
      return dart.nullCheck(html.querySelector("#big"));
    }
    get [_littleElement]() {
      return dart.nullCheck(html.querySelector("#little"));
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
      let tileDivs = this[_boardElement][$children];
      for (let y = 0; y < values[$length]; y = y + 1) {
        for (let x = 0; x < values[$_get](y)[$length]; x = x + 1) {
          let newClasses = this[_tileClassName](y, x, values[$_get](y)[$_get](x));
          let newInnerHtml = this[_tileInnerHtml](y, x, values[$_get](y)[$_get](x), candidates[$_get](y)[$_get](x));
          if (tileDivs[$_get](i)[$className] !== newClasses || tileDivs[$_get](i)[$innerHtml] !== newInnerHtml) {
            t0 = tileDivs[$_get](i);
            (() => {
              t0[$className] = newClasses;
              t0[$innerHtml] = newInnerHtml;
              return t0;
            })();
          }
          i = i + 1;
        }
      }
      let keyDivs = this[_keyRowElement][$children];
      for (let i = 0; i < values[$length]; i = i + 1) {
        let newClasses = this[_keyClassName](i + 1);
        if (keyDivs[$_get](i)[$className] !== newClasses) {
          keyDivs[$_get](i)[$className] = newClasses;
        }
      }
      this[_bigElement][$className] = this[_game].mode === sudoku.Mode.entry ? "key half-key long-key selected" : "key half-key long-key";
      this[_littleElement][$className] = this[_game].mode === sudoku.Mode.note ? "key half-key long-key selected" : "key half-key long-key";
    }
    [_tileInnerHtml](y, x, value, candidates) {
      if (value != null) {
        return dart.str(value);
      } else if (this[_game].mode === sudoku.Mode.puzzle) {
        return "";
      } else {
        let selectedValue = this[_game].selectedValue;
        let findings = this[_game].found(y, x);
        let candidateHtml = "";
        for (let value of sudoku.possibleValues) {
          let contents = findings[$containsKey](value) ? dart.str(value) : "";
          candidateHtml = candidateHtml + ("<div class=\"" + this[_candidateClassName](value, selectedValue, findings) + "\">" + contents + "</div>");
        }
        return candidateHtml;
      }
    }
    [_candidateClassName](value, selectedValue, findings) {
      if (findings[$containsKey](value)) {
        return sudoku['FindingX|get#className'](dart.nullCheck(findings[$_get](value)));
      }
      return "";
    }
    [_tileClassName](y, x, v) {
      let classes = T.JSArrayOfString().of(["tile"]);
      if (this[_game].selected(y, x)) {
        classes[$add]("selected");
      } else if (this[_game].related(y, x)) {
        classes[$add]("related");
      }
      if (!this[_game].isValid(y, x)) {
        classes[$add]("invalid");
      }
      if (v == null) {
        classes[$add]("candidates");
      } else if (this[_game].setByPuzzle(y, x)) {
        classes[$add]("puzzle");
      }
      return classes[$join](" ");
    }
    [_keyClassName](v) {
      let classes = T.JSArrayOfString().of(["key"]);
      if (this[_game].selectedValue === v) {
        classes[$add]("selected");
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
    [_tileInnerHtml]: dart.fnType(core.String, [core.int, core.int, dart.nullable(core.int), core.Set$(core.int)]),
    [_candidateClassName]: dart.fnType(core.String, [core.int, dart.nullable(core.int), core.Map$(core.int, sudoku.Finding)]),
    [_tileClassName]: dart.fnType(core.String, [core.int, core.int, dart.nullable(core.int)]),
    [_keyClassName]: dart.fnType(core.String, [core.int])
  }));
  dart.setGetterSignature(sudoku.Renderer, () => ({
    __proto__: dart.getGetters(sudoku.Renderer.__proto__),
    [_boardElement]: html.Element,
    [_keyRowElement]: html.Element,
    [_bigElement]: html.Element,
    [_littleElement]: html.Element
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
  sudoku.Mode = class Mode extends core._Enum {
    toString() {
      return "Mode." + this[_name];
    }
  };
  (sudoku.Mode.new = function(index, name) {
    sudoku.Mode.__proto__.new.call(this, index, name);
    ;
  }).prototype = sudoku.Mode.prototype;
  dart.addTypeTests(sudoku.Mode);
  dart.addTypeCaches(sudoku.Mode);
  dart.setLibraryUri(sudoku.Mode, I[0]);
  dart.setStaticFieldSignature(sudoku.Mode, () => ['values', 'puzzle', 'entry', 'candidate', 'note']);
  dart.defineExtensionMethods(sudoku.Mode, ['toString']);
  dart.defineLazy(sudoku.Mode, {
    /*sudoku.Mode.values*/get values() {
      return C[5] || CT.C5;
    },
    /*sudoku.Mode.puzzle*/get puzzle() {
      return C[6] || CT.C6;
    },
    /*sudoku.Mode.entry*/get entry() {
      return C[7] || CT.C7;
    },
    /*sudoku.Mode.candidate*/get candidate() {
      return C[8] || CT.C8;
    },
    /*sudoku.Mode.note*/get note() {
      return C[9] || CT.C9;
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
  dart.setStaticFieldSignature(sudoku.Finding, () => ['values', 'lastStanding', 'forcedOut', 'neededElsewhere', 'note']);
  dart.defineExtensionMethods(sudoku.Finding, ['toString']);
  dart.defineLazy(sudoku.Finding, {
    /*sudoku.Finding.values*/get values() {
      return C[10] || CT.C10;
    },
    /*sudoku.Finding.lastStanding*/get lastStanding() {
      return C[11] || CT.C11;
    },
    /*sudoku.Finding.forcedOut*/get forcedOut() {
      return C[12] || CT.C12;
    },
    /*sudoku.Finding.neededElsewhere*/get neededElsewhere() {
      return C[13] || CT.C13;
    },
    /*sudoku.Finding.note*/get note() {
      return C[14] || CT.C14;
    }
  }, false);
  sudoku.parsedPuzzle = function parsedPuzzle(i, puzzleList) {
    if (i >= puzzleList[$length]) return T.JSArrayOfInput().of([]);
    let puzzle = T.JSArrayOfListOfint().of([]);
    for (let row of puzzleList[$_get](i)) {
      puzzle[$add](row[$runes][$map](core.int, dart.fn(r => core.int.parse(core.String.fromCharCode(r)), T.intToint()))[$toList]());
    }
    let inputs = T.JSArrayOfInput().of([]);
    sudoku.scan(dart.fn((y, x) => {
      if (puzzle[$_get](y)[$_get](x) > 0) {
        inputs[$add](sudoku.Input.cursor({column: y, row: x}));
        inputs[$add](sudoku.Input.toggle({value: puzzle[$_get](y)[$_get](x)}));
      }
    }, T.intAndintToNull()));
    inputs[$add](sudoku.Input.mode(sudoku.Mode.entry));
    inputs[$add](sudoku.Input.cursor());
    return inputs;
  };
  sudoku['FindingX|get#className'] = function FindingX$124get$35className($this) {
    switch ($this) {
      case C[11] || CT.C11:
        {
          return "last-standing";
        }
      case C[12] || CT.C12:
        {
          return "forced-out";
        }
      case C[13] || CT.C13:
        {
          return "needed-elsewhere";
        }
      case C[14] || CT.C14:
        {
          return "user-note";
        }
    }
  };
  sudoku['FindingX|get#mode'] = function FindingX$124get$35mode($this) {
    switch ($this) {
      case C[11] || CT.C11:
        {
          return sudoku.Mode.entry;
        }
      case C[12] || CT.C12:
        {
          return sudoku.Mode.candidate;
        }
      case C[13] || CT.C13:
        {
          return sudoku.Mode.candidate;
        }
      case C[14] || CT.C14:
        {
          return sudoku.Mode.note;
        }
    }
  };
  sudoku['MoveX|nextY'] = function MoveX$124nextY($this, y) {
    let t3, t3$;
    switch ($this) {
      case C[1] || CT.C1:
        {
          return y != null ? (dart.notNull(y) - 1)[$modulo](9) : 8;
        }
      case C[2] || CT.C2:
        {
          return y != null ? (dart.notNull(y) + 1)[$modulo](9) : 0;
        }
      case C[3] || CT.C3:
        {
          t3 = y;
          return t3 == null ? 4 : t3;
        }
      case C[4] || CT.C4:
        {
          t3$ = y;
          return t3$ == null ? 4 : t3$;
        }
    }
  };
  sudoku['MoveX|get#nextY'] = function MoveX$124get$35nextY($this) {
    return dart.fn(y => sudoku['MoveX|nextY']($this, y), T.intNToint());
  };
  sudoku['MoveX|nextX'] = function MoveX$124nextX($this, x) {
    let t5, t5$;
    switch ($this) {
      case C[1] || CT.C1:
        {
          t5 = x;
          return t5 == null ? 4 : t5;
        }
      case C[2] || CT.C2:
        {
          t5$ = x;
          return t5$ == null ? 4 : t5$;
        }
      case C[3] || CT.C3:
        {
          return x != null ? (dart.notNull(x) - 1)[$modulo](9) : 8;
        }
      case C[4] || CT.C4:
        {
          return x != null ? (dart.notNull(x) + 1)[$modulo](9) : 0;
        }
    }
  };
  sudoku['MoveX|get#nextX'] = function MoveX$124get$35nextX($this) {
    return dart.fn(x => sudoku['MoveX|nextX']($this, x), T.intNToint());
  };
  sudoku.getBox = function getBox(y, x) {
    return x != null && y != null ? (dart.notNull(x) / 3)[$truncate]() + (dart.notNull(y) / 3)[$truncate]() * 3 : null;
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
  sudoku['PuzzleX|get#copy'] = function PuzzleX$124get$35copy($this) {
    return dart.fn(opts => {
      let withMerge = opts && 'withMerge' in opts ? opts.withMerge : null;
      return sudoku['PuzzleX|copy']($this, {withMerge: withMerge});
    }, T.__ToListOfListOfintN());
  };
  sudoku['PuzzleX|copy'] = function PuzzleX$124copy($this, opts) {
    let withMerge = opts && 'withMerge' in opts ? opts.withMerge : null;
    let puzzle = sudoku.emptyPuzzle();
    sudoku.scan(dart.fn((y, x) => {
      let t9, t8, t10, t9$, t8$;
      t8$ = puzzle[$_get](y);
      t9$ = x;
      t10 = (t8 = $this[$_get](y)[$_get](x), t8 == null ? (t9 = withMerge, t9 == null ? null : t9[$_get](y)[$_get](x)) : t8);
      t8$[$_set](t9$, t10);
      return t10;
    }, T.intAndintTointN()));
    return puzzle;
  };
  sudoku['PuzzleX|toggle'] = function PuzzleX$124toggle($this, y, x, value) {
    if ($this[$_get](y)[$_get](x) == value) {
      $this[$_get](y)[$_set](x, null);
      return;
    }
    $this[$_get](y)[$_set](x, value);
  };
  sudoku['PuzzleX|get#toggle'] = function PuzzleX$124get$35toggle($this) {
    return dart.fn((y, x, value) => sudoku['PuzzleX|toggle']($this, y, x, value), T.intAndintAndintNTovoid());
  };
  sudoku['CandidateX|copy'] = function CandidateX$124copy($this, opts) {
    let withMerge = opts && 'withMerge' in opts ? opts.withMerge : null;
    let candidates = sudoku.emptyCandidates();
    if (withMerge != null) {
      sudoku.scan(dart.fn((y, x) => {
        for (let value of sudoku.possibleValues) {
          if ($this[$_get](y)[$_get](x).contains(value) && withMerge[$_get](y)[$_get](x).contains(value)) {
            candidates[$_get](y)[$_get](x).add(value);
          }
        }
      }, T.intAndintToNull()));
    } else {
      sudoku.scan(dart.fn((y, x) => {
        let t13, t12, t11;
        t11 = candidates[$_get](y);
        t12 = x;
        t13 = $this[$_get](y)[$_get](x).toSet();
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
  sudoku['CandidateX|toggle'] = function CandidateX$124toggle($this, y, x, value) {
    if (value == null) $this[$_get](y)[$_set](x, sudoku._allNine());
    if ($this[$_get](y)[$_get](x).contains(dart.nullCheck(value))) {
      $this[$_get](y)[$_get](x).remove(value);
    } else {
      $this[$_get](y)[$_get](x).add(value);
    }
  };
  sudoku['CandidateX|get#toggle'] = function CandidateX$124get$35toggle($this) {
    return dart.fn((y, x, value) => sudoku['CandidateX|toggle']($this, y, x, value), T.intAndintAndintNTovoid());
  };
  sudoku['FindingsX|copy'] = function FindingsX$124copy($this) {
    let copy = new (T.IdentityMapOfint$MapOfint$MapOfint$Finding()).new();
    for (let y of $this[$keys]) {
      copy[$putIfAbsent](y, dart.fn(() => new (T.IdentityMapOfint$MapOfint$Finding()).new(), T.VoidToMapOfint$MapOfint$Finding()));
      for (let x of dart.nullCheck($this[$_get](y))[$keys]) {
        dart.nullCheck(copy[$_get](y))[$putIfAbsent](x, dart.fn(() => new (T.IdentityMapOfint$Finding()).new(), T.VoidToMapOfint$Finding()));
        for (let value of dart.nullCheck(dart.nullCheck($this[$_get](y))[$_get](x))[$keys]) {
          dart.nullCheck(dart.nullCheck(copy[$_get](y))[$_get](x))[$_set](value, dart.nullCheck(dart.nullCheck(dart.nullCheck($this[$_get](y))[$_get](x))[$_get](value)));
        }
      }
    }
    return copy;
  };
  sudoku['FindingsX|get#copy'] = function FindingsX$124get$35copy($this) {
    return dart.fn(() => sudoku['FindingsX|copy']($this), T.VoidToMapOfint$MapOfint$MapOfint$Finding());
  };
  sudoku['FindingsX|toggle'] = function FindingsX$124toggle($this, y, x, value) {
    let t18, t17, t18$, t17$;
    if (value == null) {
      t17 = $this[$_get](y);
      t17 == null ? null : (t18 = t17[$_get](x), t18 == null ? null : t18[$clear]());
    } else if ((t17$ = $this[$_get](y), t17$ == null ? null : (t18$ = t17$[$_get](x), t18$ == null ? null : t18$[$containsKey](value))) === true) {
      dart.nullCheck(dart.nullCheck($this[$_get](y))[$_get](x))[$remove](value);
    } else {
      $this[$putIfAbsent](y, dart.fn(() => new (T.IdentityMapOfint$MapOfint$Finding()).new(), T.VoidToMapOfint$MapOfint$Finding()));
      dart.nullCheck($this[$_get](y))[$putIfAbsent](x, dart.fn(() => new (T.IdentityMapOfint$Finding()).new(), T.VoidToMapOfint$Finding()));
      dart.nullCheck(dart.nullCheck($this[$_get](y))[$_get](x))[$_set](value, sudoku.Finding.note);
    }
  };
  sudoku['FindingsX|get#toggle'] = function FindingsX$124get$35toggle($this) {
    return dart.fn((y, x, value) => sudoku['FindingsX|toggle']($this, y, x, value), T.intAndintAndintNTovoid());
  };
  sudoku['FindingsX|addOther'] = function FindingsX$124addOther($this, other) {
    for (let y of other[$keys]) {
      $this[$putIfAbsent](y, dart.fn(() => new (T.IdentityMapOfint$MapOfint$Finding()).new(), T.VoidToMapOfint$MapOfint$Finding()));
      for (let x of dart.nullCheck(other[$_get](y))[$keys]) {
        dart.nullCheck($this[$_get](y))[$putIfAbsent](x, dart.fn(() => new (T.IdentityMapOfint$Finding()).new(), T.VoidToMapOfint$Finding()));
        for (let value of dart.nullCheck(dart.nullCheck(other[$_get](y))[$_get](x))[$keys]) {
          dart.nullCheck(dart.nullCheck($this[$_get](y))[$_get](x))[$_set](value, dart.nullCheck(dart.nullCheck(dart.nullCheck(other[$_get](y))[$_get](x))[$_get](value)));
        }
      }
    }
  };
  sudoku['FindingsX|get#addOther'] = function FindingsX$124get$35addOther($this) {
    return dart.fn(other => sudoku['FindingsX|addOther']($this, other), T.MapOfint$MapOfint$MapOfint$FindingTovoid());
  };
  sudoku['FindingsX|debug'] = function FindingsX$124debug($this) {
    core.print("Findings:");
    for (let y of $this[$keys]) {
      for (let x of dart.nullCheck($this[$_get](y))[$keys]) {
        for (let v of dart.nullCheck(dart.nullCheck($this[$_get](y))[$_get](x))[$keys]) {
          core.print("[" + dart.str(y) + "][" + dart.str(x) + "][" + dart.str(v) + "] = " + dart.str(dart.nullCheck(dart.nullCheck($this[$_get](y))[$_get](x))[$_get](v)));
        }
      }
    }
  };
  sudoku['FindingsX|get#debug'] = function FindingsX$124get$35debug($this) {
    return dart.fn(() => sudoku['FindingsX|debug']($this), T.VoidTovoid());
  };
  sudoku.calcInvalids = function calcInvalids(values, candidates) {
    let invalid = new (T.IdentityMapOfint$MapOfint$bool()).new();
    sudoku.scan(dart.fn((y, x) => {
      let value = values[$_get](y)[$_get](x);
      if (value == null) {
        if (candidates[$_get](y)[$_get](x)[$isEmpty]) {
          invalid[$putIfAbsent](y, dart.fn(() => new (T.IdentityMapOfint$bool()).new(), T.VoidToMapOfint$bool()));
          dart.nullCheck(invalid[$_get](y))[$_set](x, true);
        }
      } else {
        let valueCount = 1;
        function validateDimention(iterator) {
          iterator(y, x, dart.fn((iy, ix) => {
            if (y !== iy || x !== ix) {
              if (value == values[$_get](iy)[$_get](ix)) {
                valueCount = valueCount + 1;
              }
            }
          }, T.intAndintToNull()));
        }
        dart.fn(validateDimention, T.FnToNull());
        validateDimention(C[15] || CT.C15);
        validateDimention(C[16] || CT.C16);
        validateDimention(C[17] || CT.C17);
        if (valueCount > 1) {
          invalid[$putIfAbsent](y, dart.fn(() => new (T.IdentityMapOfint$bool()).new(), T.VoidToMapOfint$bool()));
          dart.nullCheck(invalid[$_get](y))[$_set](x, true);
        }
      }
    }, T.intAndintToNull()));
    return invalid;
  };
  sudoku.calcAutoCandidates = function calcAutoCandidates(values) {
    let candidates = sudoku.fullCandidates();
    sudoku.scan(dart.fn((y, x) => {
      if (values[$_get](y)[$_get](x) != null) {
        let value = dart.nullCheck(values[$_get](y)[$_get](x));
        sudoku.scanColumn(y, x, dart.fn((iy, ix) => candidates[$_get](iy)[$_get](ix).remove(value), T.intAndintTobool()));
        sudoku.scanRow(y, x, dart.fn((iy, ix) => candidates[$_get](iy)[$_get](ix).remove(value), T.intAndintTobool()));
        sudoku.scanBox(y, x, dart.fn((iy, ix) => candidates[$_get](iy)[$_get](ix).remove(value), T.intAndintTobool()));
      }
    }, T.intAndintToNull()));
    return candidates;
  };
  sudoku.calcFindings = function calcFindings(values, candidates) {
    let findings = new (T.IdentityMapOfint$MapOfint$MapOfint$Finding()).new();
    sudoku['FindingsX|addOther'](findings, sudoku.findLastStandingValues(values, candidates));
    if (findings[$isEmpty]) {
      sudoku['FindingsX|addOther'](findings, sudoku.findForcedOutCandidates(values, candidates));
    }
    if (findings[$isEmpty]) {
      sudoku['FindingsX|addOther'](findings, sudoku.findNeededElsewhereCandidates(values, candidates));
    }
    return findings;
  };
  sudoku.findNeededElsewhereCandidates = function findNeededElsewhereCandidates(values, candidates) {
    let findings = new (T.IdentityMapOfint$MapOfint$MapOfint$Finding()).new();
    for (let setSize = 2; setSize < 9; setSize = setSize + 1) {
      sudoku.scanLine(dart.fn(i => {
        function checkForNeededElsewhere(ithIterator) {
          let setCounts = new (T.IdentityMapOfString$int()).new();
          let sets = new (T.IdentityMapOfString$SetOfint()).new();
          ithIterator(i, dart.fn((y, x) => {
            let t22;
            if (values[$_get](y)[$_get](x) == null && candidates[$_get](y)[$_get](x)[$length] === setSize) {
              let setKey = candidates[$_get](y)[$_get](x)[$toString]();
              setCounts[$_set](setKey, dart.notNull((t22 = setCounts[$_get](setKey), t22 == null ? 0 : t22)) + 1);
              sets[$putIfAbsent](setKey, dart.fn(() => candidates[$_get](y)[$_get](x), T.VoidToSetOfint()));
            }
          }, T.intAndintToNull()));
          for (let setKey of setCounts[$keys]) {
            if (setCounts[$_get](setKey) === setSize) {
              let candidatesNeededElsewhere = dart.nullCheck(sets[$_get](setKey));
              ithIterator(i, dart.fn((y, x) => {
                if (setKey !== candidates[$_get](y)[$_get](x)[$toString]()) {
                  for (let value of candidatesNeededElsewhere) {
                    if (values[$_get](y)[$_get](x) == null && candidates[$_get](y)[$_get](x).contains(value)) {
                      findings[$putIfAbsent](y, dart.fn(() => new (T.IdentityMapOfint$MapOfint$Finding()).new(), T.VoidToMapOfint$MapOfint$Finding()));
                      dart.nullCheck(findings[$_get](y))[$putIfAbsent](x, dart.fn(() => new (T.IdentityMapOfint$Finding()).new(), T.VoidToMapOfint$Finding()));
                      dart.nullCheck(dart.nullCheck(findings[$_get](y))[$_get](x))[$_set](value, sudoku.Finding.neededElsewhere);
                    }
                  }
                }
              }, T.intAndintToNull()));
            }
          }
        }
        dart.fn(checkForNeededElsewhere, T.FnToNull$1());
        checkForNeededElsewhere(C[18] || CT.C18);
        checkForNeededElsewhere(C[19] || CT.C19);
        checkForNeededElsewhere(C[20] || CT.C20);
      }, T.intToNull()));
    }
    return findings;
  };
  sudoku.findForcedOutCandidates = function findForcedOutCandidates(values, candidates) {
    let findings = new (T.IdentityMapOfint$MapOfint$MapOfint$Finding()).new();
    sudoku.scanLine(dart.fn(i => {
      let valueYs = new (T.IdentityMapOfint$SetOfint()).new();
      let valueXs = new (T.IdentityMapOfint$SetOfint()).new();
      let scanYs = T.LinkedHashSetOfint().new();
      let scanXs = T.LinkedHashSetOfint().new();
      sudoku.scanIthBox(i, dart.fn((iy, ix) => {
        scanYs.add(iy);
        scanXs.add(ix);
        if (values[$_get](iy)[$_get](ix) == null) {
          for (let candidate of candidates[$_get](iy)[$_get](ix)) {
            valueYs[$putIfAbsent](candidate, dart.fn(() => T.LinkedHashSetOfint().new(), T.VoidToSetOfint()));
            dart.nullCheck(valueYs[$_get](candidate)).add(iy);
            valueXs[$putIfAbsent](candidate, dart.fn(() => T.LinkedHashSetOfint().new(), T.VoidToSetOfint()));
            dart.nullCheck(valueXs[$_get](candidate)).add(ix);
          }
        }
      }, T.intAndintToNull()));
      valueYs[$forEach](dart.fn((value, vy) => {
        if (vy[$length] === 1) {
          sudoku.scanRow(vy[$first], dart.nullCheck(valueXs[$_get](value))[$first], dart.fn((iy, ix) => {
            if (values[$_get](iy)[$_get](ix) == null && !scanXs.contains(ix) && candidates[$_get](iy)[$_get](ix).contains(value)) {
              findings[$putIfAbsent](iy, dart.fn(() => new (T.IdentityMapOfint$MapOfint$Finding()).new(), T.VoidToMapOfint$MapOfint$Finding()));
              dart.nullCheck(findings[$_get](iy))[$putIfAbsent](ix, dart.fn(() => new (T.IdentityMapOfint$Finding()).new(), T.VoidToMapOfint$Finding()));
              dart.nullCheck(dart.nullCheck(findings[$_get](iy))[$_get](ix))[$_set](value, sudoku.Finding.forcedOut);
            }
          }, T.intAndintToNull()));
        }
      }, T.intAndSetOfintTovoid()));
      valueXs[$forEach](dart.fn((value, vx) => {
        if (vx[$length] === 1) {
          sudoku.scanColumn(dart.nullCheck(valueYs[$_get](value))[$first], vx[$first], dart.fn((iy, ix) => {
            if (values[$_get](iy)[$_get](ix) == null && !scanYs.contains(iy) && candidates[$_get](iy)[$_get](ix).contains(value)) {
              findings[$putIfAbsent](iy, dart.fn(() => new (T.IdentityMapOfint$MapOfint$Finding()).new(), T.VoidToMapOfint$MapOfint$Finding()));
              dart.nullCheck(findings[$_get](iy))[$putIfAbsent](ix, dart.fn(() => new (T.IdentityMapOfint$Finding()).new(), T.VoidToMapOfint$Finding()));
              dart.nullCheck(dart.nullCheck(findings[$_get](iy))[$_get](ix))[$_set](value, sudoku.Finding.forcedOut);
            }
          }, T.intAndintToNull()));
        }
      }, T.intAndSetOfintTovoid()));
    }, T.intToNull()));
    return findings;
  };
  sudoku.findLastStandingValues = function findLastStandingValues(values, candidates) {
    let findings = new (T.IdentityMapOfint$MapOfint$MapOfint$Finding()).new();
    sudoku.scan(dart.fn((y, x) => {
      if (values[$_get](y)[$_get](x) != null) return;
      if (candidates[$_get](y)[$_get](x)[$length] === 1) {
        findings[$putIfAbsent](y, dart.fn(() => new (T.IdentityMapOfint$MapOfint$Finding()).new(), T.VoidToMapOfint$MapOfint$Finding()));
        dart.nullCheck(findings[$_get](y))[$putIfAbsent](x, dart.fn(() => new (T.IdentityMapOfint$Finding()).new(), T.VoidToMapOfint$Finding()));
        dart.nullCheck(dart.nullCheck(findings[$_get](y))[$_get](x))[$_set](candidates[$_get](y)[$_get](x)[$first], sudoku.Finding.lastStanding);
      } else {
        let foundLastStandingValue = false;
        function checkForLastStanding(iterator) {
          if (!foundLastStandingValue) {
            let remainingOptions = sudoku._allNine();
            iterator(y, x, dart.fn((iy, ix) => {
              let value = values[$_get](iy)[$_get](ix);
              if (y !== iy || x !== ix) {
                if (value != null) {
                  remainingOptions.remove(value);
                } else {
                  remainingOptions.removeAll(candidates[$_get](iy)[$_get](ix));
                }
              }
            }, T.intAndintToNull()));
            if (remainingOptions[$length] === 1) {
              findings[$putIfAbsent](y, dart.fn(() => new (T.IdentityMapOfint$MapOfint$Finding()).new(), T.VoidToMapOfint$MapOfint$Finding()));
              dart.nullCheck(findings[$_get](y))[$putIfAbsent](x, dart.fn(() => new (T.IdentityMapOfint$Finding()).new(), T.VoidToMapOfint$Finding()));
              dart.nullCheck(dart.nullCheck(findings[$_get](y))[$_get](x))[$_set](remainingOptions[$first], sudoku.Finding.lastStanding);
              foundLastStandingValue = true;
            }
          }
        }
        dart.fn(checkForLastStanding, T.FnToNull());
        checkForLastStanding(C[15] || CT.C15);
        checkForLastStanding(C[16] || CT.C16);
        checkForLastStanding(C[17] || CT.C17);
      }
    }, T.intAndintToNull()));
    return findings;
  };
  sudoku.scanLine = function scanLine(iterator, opts) {
    let size = opts && 'size' in opts ? opts.size : 9;
    for (let i = 0; i < size; i = i + 1) {
      iterator(i);
    }
  };
  sudoku.scan = function scan(iterator, opts) {
    let size = opts && 'size' in opts ? opts.size : 9;
    sudoku.scanLine(dart.fn(i => {
      sudoku.scanLine(dart.fn(j => {
        iterator(i, j);
      }, T.intToNull()), {size: size});
    }, T.intToNull()), {size: size});
  };
  sudoku.scanColumn = function scanColumn(y, x, handler) {
    return sudoku.scanLine(dart.fn(i => handler((y + i)[$modulo](9), x), T.intTodynamic()));
  };
  sudoku.scanRow = function scanRow(y, x, handler) {
    return sudoku.scanLine(dart.fn(i => handler(y, (x + i)[$modulo](9)), T.intTodynamic()));
  };
  sudoku.scanBox = function scanBox(y, x, handler) {
    let oy = (y / 3)[$truncate]();
    let ox = (x / 3)[$truncate]();
    sudoku.scan(dart.fn((i, j) => handler(oy * 3 + i, ox * 3 + j), T.intAndintTodynamic()), {size: 3});
  };
  sudoku.scanIthColumn = function scanIthColumn(i, handler) {
    return sudoku.scanLine(dart.fn(j => handler(j, i), T.intTodynamic()));
  };
  sudoku.scanIthRow = function scanIthRow(i, handler) {
    return sudoku.scanLine(dart.fn(j => handler(i, j), T.intTodynamic()));
  };
  sudoku.scanIthBox = function scanIthBox(i, handler) {
    return sudoku.scanBox(sudoku._boxOrigins[$_get](i)[$_get](0), sudoku._boxOrigins[$_get](i)[$_get](1), handler);
  };
  dart.defineLazy(sudoku, {
    /*sudoku.bindings*/get bindings() {
      return new (T.IdentityMapOfint$Input()).from([27, sudoku.Input.reset(), 8, sudoku.Input.rewind(), 188, sudoku.Input.rewind(), 190, sudoku.Input.auto(), 13, sudoku.Input.mode(sudoku.Mode.entry), 38, sudoku.Input.cursor({move: sudoku.Move.up}), 40, sudoku.Input.cursor({move: sudoku.Move.down}), 37, sudoku.Input.cursor({move: sudoku.Move.left}), 39, sudoku.Input.cursor({move: sudoku.Move.right}), 87, sudoku.Input.cursor({move: sudoku.Move.up}), 83, sudoku.Input.cursor({move: sudoku.Move.down}), 65, sudoku.Input.cursor({move: sudoku.Move.left}), 68, sudoku.Input.cursor({move: sudoku.Move.right}), 49, sudoku.Input.toggle({value: 1}), 50, sudoku.Input.toggle({value: 2}), 51, sudoku.Input.toggle({value: 3}), 52, sudoku.Input.toggle({value: 4}), 53, sudoku.Input.toggle({value: 5}), 54, sudoku.Input.toggle({value: 6}), 55, sudoku.Input.toggle({value: 7}), 56, sudoku.Input.toggle({value: 8}), 57, sudoku.Input.toggle({value: 9}), 97, sudoku.Input.toggle({value: 1}), 98, sudoku.Input.toggle({value: 2}), 99, sudoku.Input.toggle({value: 3}), 100, sudoku.Input.toggle({value: 4}), 101, sudoku.Input.toggle({value: 5}), 102, sudoku.Input.toggle({value: 6}), 103, sudoku.Input.toggle({value: 7}), 104, sudoku.Input.toggle({value: 8}), 105, sudoku.Input.toggle({value: 9}), 186, sudoku.Input.mode(sudoku.Mode.entry), 222, sudoku.Input.mode(sudoku.Mode.note)]);
    },
    set bindings(_) {},
    /*sudoku.keyIds*/get keyIds() {
      return C[21] || CT.C21;
    },
    /*sudoku.xWingPuzzles*/get xWingPuzzles() {
      return C[22] || CT.C22;
    },
    /*sudoku.evilPuzzles*/get evilPuzzles() {
      return C[24] || CT.C24;
    },
    /*sudoku.expertPuzzles*/get expertPuzzles() {
      return C[29] || CT.C29;
    },
    /*sudoku.hardPuzzles*/get hardPuzzles() {
      return C[31] || CT.C31;
    },
    /*sudoku.easyPuzzles*/get easyPuzzles() {
      return C[33] || CT.C33;
    },
    /*sudoku.possibleValues*/get possibleValues() {
      return C[83] || CT.C83;
    },
    /*sudoku._boxOrigins*/get _boxOrigins() {
      return C[84] || CT.C84;
    }
  }, false);
  dart.trackLibraries("packages/sudoku/sudoku", {
    "package:sudoku/sudoku.dart": sudoku
  }, {
    "package:sudoku/sudoku.dart": ["src/controller.dart", "src/game.dart", "src/input.dart", "src/puzzles.dart", "src/renderer.dart", "src/util.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/controller.dart","src/game.dart","src/input.dart","src/renderer.dart","src/util.dart","src/puzzles.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA6D6B,YAAA,AAAiB;IAAM;;AAErB,YAAuB,gBAAvB,mBAAc;IAAU;;AACrB,YAA0B,gBAA1B,mBAAc;IAAa;;;;iBA4BlC;AACjB,oBAAU,AAAE,CAAD;AAEjB,UAAI,AAAS,8BAAY,OAAO;AACU,QAAxC,AAAiB,2BAAqB,eAAjB,AAAQ,uBAAC,OAAO;;IAEzC;eAEoB,GAAS;AACR,MAAnB,AAAE,CAAD;AACiB,MAAlB,AAAE,CAAD;AAC0B,MAA3B,AAAiB,2BAAI,KAAK;IAC5B;mBAEiB,GAAO;AAAM,qBAAY;AACjB,QAAnB,AAAE,CAAD;AACiB,QAAlB,AAAE,CAAD;AACoD,QAArD,AAAiB,2BAAU,6BAAe,CAAC,OAAO,CAAC;;IACpD;kBAEW;AAAU,qBAAY;AACb,QAAnB,AAAE,CAAD;AACiB,QAAlB,AAAE,CAAD;AAC+C,QAAhD,AAAiB,2BAAU,4BAAc,KAAK;;IAC/C;mBAEmB;AACH,MAAnB,AAAE,CAAD;AACiB,MAAlB,AAAE,CAAD;AACmC,MAApC,AAAiB,2BAAU;IAC7B;;;;IA9D8B,yBAAmB;AAOJ,SAA3C,AAAS;iBAAA,OAAM,AAAU,gCAAO;AACW,UAA3C,AAAS;kBAAA,OAAM,AAAQ,+BAAO;AAEuD,IAA9D,AAAE,AAAQ,eAAjC,mBAAc,4BAA0B,QAAY,KAAM,eAAS,CAAC,EAAQ;AACgB,IAAvE,AAAE,AAAQ,eAA/B,mBAAc,0BAAwB,QAAY,KAAM,eAAS,CAAC,EAAQ,kBAAU;AACU,IAAtE,AAAE,AAAQ,eAAlC,mBAAc,6BAA2B,QAAY,KAAM,eAAS,CAAC,EAAQ,kBAAU;AACA,IAA/D,AAAE,AAAQ,eAAlC,mBAAc,6BAA2B,QAAY,KAAM,eAAS,CAAC,EAAQ;AACM,IAA7D,AAAE,AAAQ,eAAhC,mBAAc,2BAAyB,QAAY,KAAM,eAAS,CAAC,EAAQ;AAGvE,YAAI;AACF,mBAAW,AAAc;AAC/B,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AACtB,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,GAAG,IAAA,AAAC,CAAA;AACwB,QAA9C,AAAQ,AAAI,AAAQ,QAAZ,QAAC,CAAC,4CAAiB,mBAAa,CAAC,EAAE,CAAC;AACzC,QAAH,IAAA,AAAC,CAAA;;;AAKL,aAAW,QAAS,AAAO;AAC+D,MAApC,AAAE,AAAQ,eAA9D,AAAiB,qCAAc,AAAoB,MAAH,eAAb,AAAM,qBAAC,KAAK,+CAAsB,kBAAY,KAAK;;EAE1F;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ACtFqB,YAAA,AAAkB;IAAM;;;AAKnB;;IAAW;sBAAX;;IAAW;;;AACL;;IAAe;0BAAf;;IAAe;;AACR,YAAY,2BAAZ,+BAA4B,AAAgB;IAAK;;;AAGlE;;IAAO;kBAAP;;IAAO;;;AACD;;IAAQ;mBAAR;;IAAQ;;AACL,YAAQ,wBAAR,2BAAwB,AAAS;IAAK;gBAEhD,QAAY;AAAQ,YAAA,AAAO,AAAQ,AAAM,sBAAb,MAAM,SAAE,GAAG;IAAS;;;AAI1B;;IAAS;oBAAT;;IAAS;;;AACH;;IAAM;iBAAN;;IAAM;UAC3B,QAAY;;AAAQ,cAAwB,YAAxB,AAAS,uBAAC,MAAM,gBAAP,OAAS,UAAC,GAAG,IAAb,oBAAkB,AAAO,AAAI,2BAAC,MAAM,gBAAP,OAAS,UAAC,GAAG;YAA3B,gBAAgC;IAAE;;;AAE5E;;IAAS;oBAAT;;IAAS;YACtB,QAAY;AAAQ,eAAE,AAAU,8BAAY,MAAM,KAAsB,AAAE,eAAnB,AAAS,uBAAC,MAAM,iBAAe,GAAG;IAAE;;;AAElG;+CAAa;IAAK;gBAAlB;;IAAkB;;AACX;IAAK;;AAGF;IAAQ;;AAGR;IAAQ;;AAEN,2BAAO,cAAS;IAAQ;;AAGpB;IAAc;aACtB,GAAO;AACrB,YAAC,AAAE,AAA4B,EAA7B,KAAI,gBAAW,AAAE,CAAD,KAAI,gBACrB,iCAA2B,AAAO,AAAG,AAAI,qBAAN,CAAC,SAAE,CAAC,KAAK,wBAAkB,AAAS,AAAI,AAAG,AAAI,6BAAN,CAAC,SAAE,CAAC,KAAK;IAAgB;YAKzF,GAAO;AACpB,YAAC,AAAU,AAA0E,0BAAjE,CAAC,KAAK,AAAU,yBAAS,CAAC,KAAK,AAAU,yBAAS,cAAO,CAAC,EAAE,CAAC,MAChF,iCAA4B,AAAO,AAAG,qBAAF,CAAC,SAAE,CAAC,aAAa,AAAS,AAAI,AAAG,6BAAF,CAAC,SAAE,CAAC;IAAY;;AAElE,YAAA,AAAgB,yBAAG;IAAe;aACrC,GAAQ;AAAM,YAAA,AAAU,EAAT,YAAY,CAAC,WAAW,AAAM,AAAG,mBAAF,CAAC,SAAE,CAAC,IAAI;IAAI;;;;;kBAUxD;AACI,MAAvB,WAAM,AAAgB,qBAAP,KAAK;AACP,MAAb;AACsD,MAAtD,AAAiC,oBAApB,KAAK,EAAE,wCAAqB;IAC3C;;AAEa,YAAA,AAAkB,6BAAI;IAAQ;mBAEnB;AACtB,cAAQ,AAAM,KAAD;;;AAEI,YAAb;AACA;;;;AAEe,YAAf;AACA;;;;AAE+B,YAA/B,kBAAkB,oBAAN,KAAK;AACjB;;;;AAEmC,YAAnC,oBAAoB,sBAAN,KAAK;AACnB;;;;AAEmC,YAAnC,oBAAoB,sBAAN,KAAK;AACnB;;;;AAE8B,YAA9B,+BAAwB;AACxB;;;AAEK,MAAT;IACF;;AAGiB,MAAf,iBAAW;AACI,MAAf,iBAAW;AACQ,MAAnB,cAAa;AACU,MAAvB,gBAAU;AACgB,MAA1B,iBAAW,kCAAC;AACkB,MAA9B,oBAAc;AACsB,MAApC,wBAAkB,sCAAC;AACN,MAAb,eAAS,oDAAC;AACG,MAAb,iBAAW;AACG,MAAd,kBAAY;AACH,MAAT;IACF;;AAGE,UAAI,AAAS;AACX,YAAI,AAAS,AAAK,0BAAQ;AACH,UAArB,AAAS;cACJ,KAAI,AAAS,AAAK,0BAAQ;AACH,UAA5B,AAAgB;cACX,KAAI,AAAS,AAAK,0BAAQ;AACZ,UAAnB,AAAO;;AAEY,QAArB,AAAS;AACF,QAAP;;IAEJ;kBAE2B;AAUH,MAAtB,cAAQ,AAAU,SAAD;AACjB,UAAI,gBAAc;AACT,QAAP;;IAEJ;oBAG+B;AAC7B,UAAI,AAAY,WAAD;AAC8B,QAA3C,iBAA6B,sBAAF,eAAhB,AAAY,WAAD,QAAa;AACQ,QAA3C,iBAA6B,sBAAF,eAAhB,AAAY,WAAD,QAAa;;AAEX,QAAxB,iBAAW,AAAY,WAAD;AACE,QAAxB,iBAAW,AAAY,WAAD;;AAGW,MAAnC,cAAQ,cAAS,cAAS;IAE5B;oBAE+B;AAC7B,WAAK;AACmE,QAAtE,cAAQ,AAAc,sBAAG,AAAY,WAAD,SAAS,AAAY,WAAD,SAAS;;AAEnE,UAAI;AACuD,QAAzD,kBAAmB,eAAP,eAAiB,eAAP,eAAU,AAAY,WAAD,QAAQ;AACzB,QAA1B,cAAQ,AAAY,WAAD;AACZ,QAAP;;IAEJ;cAEkB;AACM,MAAtB,uBAAiB,KAAK;AAChB,mBAAS;AACE,MAAjB,AAAU;AACO,MAAjB,AAAU;AACO,MAAjB,AAAU;AACV,UAAI,KAAK;AAOL,QANF,YAAK,SAAC,GAAG;AACP,cAAI,AAAM,AAAG,AAAI,MAAP,QAAC,CAAC,SAAE,CAAC,KAAK,KAAK;AACP,YAAhB,AAAU,oBAAI,CAAC;AACC,YAAhB,AAAU,oBAAI,CAAC;AACa,YAA5B,AAAU,oBAAgB,eAAZ,cAAO,CAAC,EAAE,CAAC;;;;IAIjC;;UAEuB;AACrB,UAAI,gBAAc,sBAAU,AAAU,gCAAc,AAAU;AAC5D,YAAI,UAAU;AAEZ,mBAAW,KAAM,AAAU;AACzB,qBAAW,KAAmB,AAAE,gBAAf,AAAS,uBAAC,EAAE;AAC3B,uBAAW,KAAwB,AAAE,gBAAP,AAAC,eAAd,AAAS,uBAAC,EAAE,UAAG,EAAE;AAC1B,yBAA8B,4BAAF,eAAL,AAAC,eAAN,AAAC,eAAd,AAAS,uBAAC,EAAE,UAAG,EAAE,UAAG,EAAE;AACN,gBAA3B,kBAAY,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE;;;;AAIzB,UAAP;AACmC,UAAnC,+BAAwB,UAAU;;AAG5B,mBAAK,AAAU,AAAK;AACpB,mBAAkB,AAAE,AAAK,eAApB,AAAS,uBAAC,EAAE;AACjB,mBAAuB,AAAE,AAAK,eAAZ,AAAC,eAAd,AAAS,uBAAC,EAAE,UAAG,EAAE;AACtB,mBAA8B,4BAAF,eAAL,AAAC,eAAN,AAAC,eAAd,AAAS,uBAAC,EAAE,UAAG,EAAE,UAAG,EAAE;AACN,UAA3B,kBAAY,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE,EAAE;AACnB,UAAP;;;IAGN;kBAEqB,OAAW,OAAY,OAAY;;AACtD,UAAI,AAAK,IAAD,KAAS;AACsC,QAArD,sBAAkB,uBAAR,gBAAQ;AAAQ,uCAAO,KAAK,EAAE,KAAK,EAAE,KAAK;;;;AAEpD,YAAI,AAAK,IAAD,KAAS;AACgD,UAA/D,AAAS,4BAAkB,uBAAd,AAAS,wBAAK;AAAQ,0CAAO,KAAK,EAAE,KAAK,EAAE,KAAK;;;cACxD,KAAI,AAAK,IAAD,KAAS;AACuD,UAA7E,AAAgB,oCAAyB,0BAArB,AAAgB,+BAAK;AAAQ,8CAAO,KAAK,EAAE,KAAK,EAAE,KAAK;;;cACtE,KAAI,AAAK,IAAD,KAAS;AACqC,UAA3D,AAAO,2BAAgB,yBAAZ,AAAO,sBAAK;AAAQ,6CAAO,KAAK,EAAE,KAAK,EAAE,KAAK;;;;AAEzC,QAAlB,AAAS,qBAAI,IAAI;;IAErB;;AAG0C,MAAxC,oBAAc,0BAAmB;AACW,MAA5C,kBAAY,oBAAa,aAAQ;AACW,MAA5C,kBAAY,oBAAa,aAAQ;IACnC;;;QA3K0B;IArDH,0BAAqC;+BAMlC;mCACM;2BAIV;4BACM;IAKjB,iBAAW;6BAEqB;0BACM;6BAGnB;yBAGpB;IAGL;IAGA;IAKA;IAMU,kBAAY;IACZ,kBAAY;IACZ,kBAAY;IAQ0B,oBAAE,UAAU;AACzB,IAAtC,AAAY,AAAM,yCAAO;AACZ,IAAb;AAEM,eAAO;AACgC,IAA7C,kBAAY,AAAK,IAAD,SAAS,AAAY;EACvC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AC3DyB;IAAY;;;;;AACX;IAAa;;;;gBACf;AAAS,sCAAU,IAAI;IAAC;;;;;UACrB;UAAa;UAAW;AAAU,wCAAY,MAAM,EAAE,GAAG,EAAE,IAAI;IAAC;;;;;;;;UAChE;AAAW,wCAAY,KAAK;IAAC;;;;;;UAC1B;AAAW,wCAAY,KAAK;IAAC;;;;;;AACnC;IAAW;;;;;;;;;;;;;;;;;;EAGF;;;;;;;;;;;;EAEC;;;;;;;IAIvB;;;;;;;;;;;IADI;;EAAK;;;;;;;;;;;;;IAMT;;;;;;IAAG;;;;;;IACF;;;;;;;;;;qCAFK,GAAQ,GAAQ;IAAhB;IAAQ;IAAQ;;EAAK;;;;;;;;;;;;;IAO3B;;;;;;;;;;;IADM;;EAAM;;;;;;;;;;;;;;;;EAIS;;;;;;;;;;;;;;;AC3BH,YAAuB,gBAAvB,mBAAc;IAAU;;AACvB,YAAyB,gBAAzB,mBAAc;IAAY;;AAC7B,YAAqB,gBAArB,mBAAc;IAAQ;;AACnB,YAAwB,gBAAxB,mBAAc;IAAW;;;;;UAO3C;;AACJ,mBAAS,AAAM;AACf,uBAAa,AAAM;AACrB,cAAI;AACF,qBAAW,AAAc;AAC/B,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAO,MAAD,WAAS,IAAA,AAAC,CAAA;AAClC,iBAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAM,AAAI,MAAJ,QAAC,CAAC,YAAU,IAAA,AAAC,CAAA;AAC/B,2BAAa,qBAAe,CAAC,EAAE,CAAC,EAAE,AAAM,AAAG,MAAH,QAAC,CAAC,SAAE,CAAC;AAC7C,6BAAe,qBAAe,CAAC,EAAE,CAAC,EAAE,AAAM,AAAG,MAAH,QAAC,CAAC,SAAE,CAAC,GAAG,AAAU,AAAG,UAAH,QAAC,CAAC,SAAE,CAAC;AACvE,cAAI,AAAQ,AAAI,QAAJ,QAAC,CAAC,kBAAe,UAAU,IAAI,AAAQ,AAAI,QAAJ,QAAC,CAAC,kBAAe,YAAY;AAGlD,iBAF5B,AAAQ,QAAA,QAAC,CAAC;YAAF;AACJ,+BAAY,UAAU;AACtB,+BAAY,YAAY;;;;AAG3B,UAAH,IAAA,AAAC,CAAA;;;AAIC,oBAAU,AAAe;AAC/B,eAAS,IAAI,GAAG,AAAE,CAAD,GAAG,AAAO,MAAD,WAAS,IAAA,AAAC,CAAA;AAC5B,yBAAa,oBAAc,AAAE,CAAD,GAAG;AACrC,YAAI,AAAO,AAAI,OAAJ,QAAC,CAAC,kBAAe,UAAU;AACH,UAAjC,AAAO,AAAI,OAAJ,QAAC,CAAC,gBAAc,UAAU;;;AAIwE,MAA7G,AAAY,gCAAY,AAAM,AAAK,qBAAQ,oBAAQ,mCAAmC;AAEyB,MAA/G,AAAe,mCAAY,AAAM,AAAK,qBAAQ,mBAAO,mCAAmC;IAC1F;qBAE0B,GAAO,GAAQ,OAAgB;AACvD,UAAI,KAAK;AACP,cAAe,UAAN,KAAK;YACT,KAAI,AAAM,AAAK,qBAAQ;AAC5B,cAAO;;AAED,4BAAgB,AAAM;AACtB,uBAAW,AAAM,kBAAM,CAAC,EAAE,CAAC;AAC7B,4BAAgB;AACpB,iBAAW,QAAS;AACZ,yBAAW,AAAS,QAAD,eAAa,KAAK,IAAa,SAAP,KAAK,IAAI;AAC4C,UAAtG,gBAAA,AAAc,aAAD,IAAI,AAAqF,kBAAtE,0BAAoB,KAAK,EAAE,aAAa,EAAE,QAAQ,IAAE,QAAG,QAAQ;;AAEjG,cAAO,cAAa;;IAExB;0BAE+B,OAAY,eAAiC;AAC1E,UAAI,AAAS,QAAD,eAAa,KAAK;AAC5B,cAAwB,kCAAF,eAAf,AAAQ,QAAA,QAAC,KAAK;;AAEvB,YAAO;IACT;qBAE0B,GAAO,GAAQ;AACnC,oBAAkB,wBAAC;AACvB,UAAI,AAAM,qBAAS,CAAC,EAAE,CAAC;AACE,QAAvB,AAAQ,OAAD,OAAK;YACP,KAAI,AAAM,oBAAQ,CAAC,EAAE,CAAC;AACL,QAAtB,AAAQ,OAAD,OAAK;;AAEd,WAAK,AAAM,oBAAQ,CAAC,EAAE,CAAC;AACC,QAAtB,AAAQ,OAAD,OAAK;;AAEd,UAAI,AAAE,CAAD;AACsB,QAAzB,AAAQ,OAAD,OAAK;YACP,KAAI,AAAM,wBAAY,CAAC,EAAE,CAAC;AACV,QAArB,AAAQ,OAAD,OAAK;;AAEd,YAAO,AAAQ,QAAD,QAAM;IACtB;oBAEyB;AACnB,oBAAkB,wBAAC;AACvB,UAAI,AAAM,AAAc,8BAAG,CAAC;AACH,QAAvB,AAAQ,OAAD,OAAK;;AAEd,YAAO,AAAQ,QAAD,QAAM;IACtB;;;QArFwB;IAAe,cAAE,IAAI;AACjB,IAA1B,AAAM,AAAO,oCAAO;AACb,IAAP;EACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICHF;;qCALK;;;EAKL;;;;;;;MALK,kBAAM;;;MACT,cAAE;;;MACF,gBAAI;;;MACJ,gBAAI;;;MACJ,iBAAK;;;;;;;IASP;;qCALK;;;EAKL;;;;;;;MALK,kBAAM;;;MACT,kBAAM;;;MACN,iBAAK;;;MACL,qBAAS;;;MACT,gBAAI;;;;;;;IAQN;;wCALK;;;EAKL;;;;;;;MALK,qBAAM;;;MACT,2BAAY;;;MACZ,wBAAS;;;MACT,8BAAe;;;MACf,mBAAI;;;;8CCtBuB,GAAsB;AACjD,QAAI,AAAE,CAAD,IAAI,AAAW,UAAD,WAAS,MAAO;AAC7B,iBAAoB;AAC1B,aAAS,MAAO,AAAU,WAAA,QAAC,CAAC;AACkD,MAA5E,AAAO,MAAD,OAAK,AAAI,AAAM,AAA8C,GAArD,yBAAW,QAAC,KAAU,eAAa,yBAAa,CAAC;;AAE3D,iBAAgB;AAMpB,IALF,YAAK,SAAC,GAAG;AACP,UAAI,AAAM,AAAG,AAAI,MAAP,QAAC,CAAC,SAAE,CAAC,IAAI;AAC0B,QAA3C,AAAO,MAAD,OAAW,6BAAe,CAAC,OAAO,CAAC;AACI,QAA7C,AAAO,MAAD,OAAW,4BAAc,AAAM,AAAG,MAAH,QAAC,CAAC,SAAE,CAAC;;;AAGZ,IAAlC,AAAO,MAAD,OAAW,kBAAU;AACD,IAA1B,AAAO,MAAD,OAAW;AACjB,UAAO,OAAM;EACf;;ADWI;;;AAEI,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;EAEb;;AAGE;;;AAEI,gBAAY;;;;AAEZ,gBAAY;;;;AAEZ,gBAAY;;;;AAEZ,gBAAY;;;EAElB;yDAIe;;AACb;;;AAEI,gBAAO,AAAE,EAAD,WAAmB,CAAL,aAAF,CAAC,IAAG,YAAK,KAAI;;;;AAEjC,gBAAO,AAAE,EAAD,WAAmB,CAAL,aAAF,CAAC,IAAG,YAAK,KAAI;;;;AAEjC,eAAO,CAAC;gBAAD,cAAK;;;;AAEZ,gBAAO,CAAC;gBAAD,eAAK;;;EAElB;;AAXI,mBAAW,kCAAX,CAAC;EAWL;yDAEe;;AACb;;;AAEI,eAAO,CAAC;gBAAD,cAAK;;;;AAEZ,gBAAO,CAAC;gBAAD,eAAK;;;;AAEZ,gBAAO,AAAE,EAAD,WAAmB,CAAL,aAAF,CAAC,IAAG,YAAK,KAAI;;;;AAEjC,gBAAO,AAAE,EAAD,WAAmB,CAAL,aAAF,CAAC,IAAG,YAAK,KAAI;;;EAEvC;;AAXI,mBAAW,kCAAX,CAAC;EAWL;kCAIe,GAAQ;AAAM,UAAA,AAAU,EAAT,YAAY,CAAC,WAAa,AAAK,cAAP,CAAC,IAAI,kBAAM,AAAK,cAAP,CAAC,IAAI,kBAAI,IAAI;EAAI;;AAEvD,UAAK,uBAAO,GAAG;EAAK;;AACb,UAAK,+BAAS,GAAG,QAAC,KAAM;EAAa;;AAEhD,UAAA,AAAe;EAAO;;AACJ,UAAK,mCAAS,GAAG,QAAC,KAAW,4BAAS,GAAG,QAAC,MAAO;EAAY;;AAC5D,UAAK,mCAAS,GAAG,QAAC,KAAW,4BAAS,GAAG,QAAC,MAAO;EAAI;;AAI5E;UAAwB;AAAxB,gEAAS;;EAI1B;;QAJyC;AACjC,iBAAS;AAC8C,IAA7D,YAAK,SAAC,GAAG;;AAAM,YAAA,AAAM,MAAA,QAAC,CAAC;YAAE,CAAC;aAAe,KAAP,AAAG,aAAF,CAAC,SAAE,CAAC,GAAF,mBAAO,SAAS,eAAT,OAAU,AAAG,UAAF,CAAC,SAAE,CAAC;MAAnC;;;AACxB,UAAO,OAAM;EACf;+DAEgB,GAAO,GAAQ;AAC7B,QAAQ,AAAG,AAAI,aAAN,CAAC,SAAE,CAAC,KAAK,KAAK;AACJ,MAAb,AAAG,aAAF,CAAC,SAAE,CAAC,EAAI;AACb;;AAEgB,IAAd,AAAG,aAAF,CAAC,SAAE,CAAC,EAAI,KAAK;EACpB;;AANK,oBAAW,GAAO,GAAQ,0CAA1B,CAAC,EAAD,CAAC,EAAD,KAAK;EAMV;;QAIiD;AACzC,qBAAa;AACnB,QAAI,SAAS;AAOT,MANF,YAAK,SAAC,GAAG;AACP,iBAAW,QAAS;AAClB,cAAQ,AAAG,AAAI,aAAN,CAAC,SAAE,CAAC,WAAW,KAAK,KAAK,AAAS,AAAG,AAAI,SAAP,QAAC,CAAC,SAAE,CAAC,WAAW,KAAK;AACnC,YAA3B,AAAU,AAAG,AAAI,UAAP,QAAC,CAAC,SAAE,CAAC,MAAM,KAAK;;;;;AAKqB,MAArD,YAAK,SAAC,GAAG;;AAAM,cAAA,AAAU,UAAA,QAAC,CAAC;cAAE,CAAC;cAAQ,AAAG,AAAI,aAAN,CAAC,SAAE,CAAC;QAAf;;;;AAE9B,UAAO,WAAU;EACnB;;AAdqB;UAA4B;AAA5B,mEAAS;;EAc9B;qEAGgB,GAAO,GAAQ;AAC7B,QAAI,AAAM,KAAD,UAAc,AAAG,AAAgB,aAAlB,CAAC,SAAE,CAAC,EAAI;AAChC,QAAQ,AAAG,AAAI,aAAN,CAAC,SAAE,CAAC,WAAgB,eAAL,KAAK;AACH,MAApB,AAAG,AAAI,aAAN,CAAC,SAAE,CAAC,SAAS,KAAK;;AAEF,MAAjB,AAAG,AAAI,aAAN,CAAC,SAAE,CAAC,MAAM,KAAK;;EAExB;;AAPK,oBAAW,GAAO,GAAQ,6CAA1B,CAAC,EAAD,CAAC,EAAD,KAAK;EAOV;;AAKQ,eAAyC;AAC/C,aAAW,IAAK;AACuC,MAArD,AAAK,IAAD,eAAa,CAAC,EAAE,cAA8B;AAClD,eAAW,IAAY,AAAE,gBAAL,aAAC,CAAC;AAC2B,QAAxC,AAAE,eAAT,AAAI,IAAA,QAAC,CAAC,iBAAe,CAAC,EAAE,cAAoB;AAC5C,iBAAW,QAAoB,AAAE,gBAAN,AAAC,eAAJ,aAAC,CAAC,UAAG,CAAC;AACc,UAA/B,AAAC,eAAL,AAAC,eAAR,AAAI,IAAA,QAAC,CAAC,UAAG,CAAC,UAAG,KAAK,EAAuB,eAAR,AAAC,eAAL,AAAC,eAAJ,aAAC,CAAC,UAAG,CAAC,UAAG,KAAK;;;;AAI9C,UAAO,KAAI;EACb;;AAZsC;EAYtC;mEAGgB,GAAO,GAAQ;;AAC7B,QAAI,AAAM,KAAD;AACa,YAAhB,aAAC,CAAC;oBAAF,cAAI,WAAC,CAAC,iBAAF,OAAK;UACR,KAAoC,QAA5B,aAAC,CAAC,kBAAF,eAAI,YAAC,CAAC,kBAAF,OAAK,mBAAY,KAAK,QAAK;AAClB,MAAf,AAAE,eAAN,AAAC,eAAJ,aAAC,CAAC,UAAG,CAAC,YAAU,KAAK;;AAEuB,MAAhD,oBAAY,CAAC,EAAE,cAA8B;AACE,MAAxC,AAAE,eAAL,aAAC,CAAC,iBAAe,CAAC,EAAE,cAAoB;AACV,MAAvB,AAAC,eAAL,AAAC,eAAJ,aAAC,CAAC,UAAG,CAAC,UAAG,KAAK,EAAY;;EAElC;;AAVK,oBAAW,GAAO,GAAQ,4CAA1B,CAAC,EAAD,CAAC,EAAD,KAAK;EAUV;uEAEoD;AAClD,aAAW,IAAK,AAAM,MAAD;AAC6B,MAAhD,oBAAY,CAAC,EAAE,cAA8B;AAC7C,eAAW,IAAa,AAAE,gBAAV,AAAK,KAAA,QAAC,CAAC;AAC0B,QAAxC,AAAE,eAAL,aAAC,CAAC,iBAAe,CAAC,EAAE,cAAoB;AAC5C,iBAAW,QAAqB,AAAE,gBAAN,AAAC,eAAT,AAAK,KAAA,QAAC,CAAC,UAAG,CAAC;AACc,UAAhC,AAAC,eAAL,AAAC,eAAJ,aAAC,CAAC,UAAG,CAAC,UAAG,KAAK,EAAwB,eAAR,AAAC,eAAL,AAAC,eAAT,AAAK,KAAA,QAAC,CAAC,UAAG,CAAC,UAAG,KAAK;;;;EAIjD;;AAVK,mBAA+C,6CAA/C,KAAK;EAUV;;AAGoB,IAAlB,WAAM;AACN,aAAW,IAAK;AACd,eAAW,IAAY,AAAE,gBAAL,aAAC,CAAC;AACpB,iBAAW,IAAgB,AAAE,gBAAN,AAAC,eAAJ,aAAC,CAAC,UAAG,CAAC;AACkB,UAA1C,WAAM,AAAmC,eAAhC,CAAC,oBAAG,CAAC,oBAAG,CAAC,sBAAiB,AAAC,eAAL,AAAC,eAAJ,aAAC,CAAC,UAAG,CAAC,UAAG,CAAC;;;;EAI9C;;AATK;EASL;8CAIqD,QAA6B;AAC5E,kBAA+B;AA8BnC,IA7BF,YAAK,SAAC,GAAG;AACD,kBAAQ,AAAM,AAAG,MAAH,QAAC,CAAC,SAAE,CAAC;AAEzB,UAAI,AAAM,KAAD;AACP,YAAI,AAAU,AAAG,AAAI,UAAP,QAAC,CAAC,SAAE,CAAC;AAC0B,UAA3C,AAAQ,OAAD,eAAa,CAAC,EAAE,cAAiB;AACnB,UAAX,AAAC,eAAX,AAAO,OAAA,QAAC,CAAC,UAAG,CAAC,EAAI;;;AAGf,yBAAa;AACjB,mCAA2B;AAOvB,UANF,AAAQ,QAAA,CAAC,CAAC,EAAE,CAAC,EAAE,SAAC,IAAI;AAClB,gBAAI,CAAC,KAAI,EAAE,IAAI,CAAC,KAAI,EAAE;AACpB,kBAAI,AAAM,KAAD,IAAI,AAAM,AAAI,MAAJ,QAAC,EAAE,SAAE,EAAE;AACZ,gBAAZ,aAAA,AAAU,UAAA;;;;;;AAMW,QAA7B,iBAAiB;AACS,QAA1B,iBAAiB;AACS,QAA1B,iBAAiB;AAEjB,YAAI,AAAW,UAAD,GAAG;AAC4B,UAA3C,AAAQ,OAAD,eAAa,CAAC,EAAE,cAAiB;AACnB,UAAX,AAAC,eAAX,AAAO,OAAA,QAAC,CAAC,UAAG,CAAC,EAAI;;;;AAIvB,UAAO,QAAO;EAChB;0DAGyD;AACjD,qBAAa;AAQjB,IAPF,YAAK,SAAC,GAAG;AACP,UAAI,AAAM,AAAG,MAAH,QAAC,CAAC,SAAE,CAAC;AACP,oBAAoB,eAAZ,AAAM,AAAG,MAAH,QAAC,CAAC,SAAE,CAAC;AACqC,QAA9D,kBAAW,CAAC,EAAE,CAAC,EAAE,SAAC,IAAI,OAAO,AAAU,AAAI,AAAK,UAAT,QAAC,EAAE,SAAE,EAAE,SAAS,KAAK;AACD,QAA3D,eAAQ,CAAC,EAAE,CAAC,EAAE,SAAC,IAAI,OAAO,AAAU,AAAI,AAAK,UAAT,QAAC,EAAE,SAAE,EAAE,SAAS,KAAK;AACE,QAA3D,eAAQ,CAAC,EAAE,CAAC,EAAE,SAAC,IAAI,OAAO,AAAU,AAAI,AAAK,UAAT,QAAC,EAAE,SAAE,EAAE,SAAS,KAAK;;;AAG7D,UAAO,WAAU;EACnB;8CAGoE,QAA6B;AACzF,mBAA6C;AAEU,IAApD,6BAAT,QAAQ,EAAU,8BAAuB,MAAM,EAAE,UAAU;AAE3D,QAAI,AAAS,QAAD;AACoD,MAArD,6BAAT,QAAQ,EAAU,+BAAwB,MAAM,EAAE,UAAU;;AAG9D,QAAI,AAAS,QAAD;AAC0D,MAA3D,6BAAT,QAAQ,EAAU,qCAA8B,MAAM,EAAE,UAAU;;AAGpE,UAAO,SAAQ;EACjB;gFAImB,QACI;AAEf,mBAA6C;AAEnD,aAAS,UAAU,GAAG,AAAQ,OAAD,GAAG,GAAG,UAAA,AAAO,OAAA;AAkCtC,MAjCF,gBAAS,QAAC;AACR,yCAAoC;AAC5B,0BAAyB;AACzB,qBAAyB;AAO7B,UANF,AAAW,WAAA,CAAC,CAAC,EAAE,SAAC,GAAG;;AACjB,gBAAI,AAAM,AAAG,AAAI,MAAP,QAAC,CAAC,SAAE,CAAC,aAAa,AAAU,AAAG,AAAI,AAAO,UAAd,QAAC,CAAC,SAAE,CAAC,eAAY,OAAO;AACtD,2BAAS,AAAU,AAAG,AAAI,UAAP,QAAC,CAAC,SAAE,CAAC;AACkB,cAAhD,AAAS,SAAA,QAAC,MAAM,EAA6B,cAAN,MAAlB,AAAS,SAAA,QAAC,MAAM,GAAP,cAAY,YAAK;AACC,cAAhD,AAAK,IAAD,eAAa,MAAM,EAAE,cAAM,AAAU,AAAG,UAAH,QAAC,CAAC,SAAE,CAAC;;;AAGlD,mBAAW,SAAU,AAAU,UAAD;AAC5B,gBAAI,AAAS,AAAS,SAAT,QAAC,MAAM,MAAK,OAAO;AACxB,8CAAwC,eAAZ,AAAI,IAAA,QAAC,MAAM;AAW3C,cAVF,AAAW,WAAA,CAAC,CAAC,EAAE,SAAC,GAAG;AACjB,oBAAI,MAAM,KAAI,AAAU,AAAG,AAAI,UAAP,QAAC,CAAC,SAAE,CAAC;AAC3B,2BAAW,QAAS,0BAAyB;AAC3C,wBAAI,AAAM,AAAG,AAAI,MAAP,QAAC,CAAC,SAAE,CAAC,aAAa,AAAU,AAAG,AAAI,UAAP,QAAC,CAAC,SAAE,CAAC,WAAW,KAAK;AACA,sBAAzD,AAAS,QAAD,eAAa,CAAC,EAAE,cAA8B;AACH,sBAAxC,AAAE,eAAb,AAAQ,QAAA,QAAC,CAAC,iBAAe,CAAC,EAAE,cAAoB;AACC,sBAAlC,AAAC,eAAL,AAAC,eAAZ,AAAQ,QAAA,QAAC,CAAC,UAAG,CAAC,UAAG,KAAK,EAAY;;;;;;;;;AAUV,QAAtC,uBAAuB;AACY,QAAnC,uBAAuB;AACY,QAAnC,uBAAuB;;;AAG3B,UAAO,SAAQ;EACjB;oEAImB,QACI;AAEf,mBAA6C;AAqDjD,IAjDF,gBAAS,QAAC;AAIF,oBAAyB;AACzB,oBAAyB;AACzB,mBAAc;AACd,mBAAc;AAalB,MAXF,kBAAW,CAAC,EAAE,SAAC,IAAI;AACH,QAAd,AAAO,MAAD,KAAK,EAAE;AACC,QAAd,AAAO,MAAD,KAAK,EAAE;AACb,YAAI,AAAM,AAAI,AAAK,MAAT,QAAC,EAAE,SAAE,EAAE;AACf,mBAAW,YAAa,AAAU,AAAI,WAAJ,QAAC,EAAE,SAAE,EAAE;AACM,YAA7C,AAAQ,OAAD,eAAa,SAAS,EAAE,cAAW;AACf,YAAT,AAAE,eAApB,AAAO,OAAA,QAAC,SAAS,OAAO,EAAE;AACmB,YAA7C,AAAQ,OAAD,eAAa,SAAS,EAAE,cAAW;AACf,YAAT,AAAE,eAApB,AAAO,OAAA,QAAC,SAAS,OAAO,EAAE;;;;AAiB9B,MAXF,AAAQ,OAAD,WAAS,SAAC,OAAO;AACtB,YAAI,AAAG,AAAO,EAAR,cAAW;AAQb,UANF,eAAQ,AAAG,EAAD,UAAsB,AAAE,eAAhB,AAAO,OAAA,QAAC,KAAK,YAAU,SAAC,IAAI;AAC5C,gBAAI,AAAM,AAAI,AAAK,MAAT,QAAC,EAAE,SAAE,EAAE,cAAc,AAAO,MAAD,UAAU,EAAE,KAAK,AAAU,AAAI,AAAK,UAAT,QAAC,EAAE,SAAE,EAAE,WAAW,KAAK;AAC3B,cAA1D,AAAS,QAAD,eAAa,EAAE,EAAE,cAA8B;AACF,cAAzC,AAAE,eAAd,AAAQ,QAAA,QAAC,EAAE,iBAAe,EAAE,EAAE,cAAoB;AACL,cAA5B,AAAC,eAAN,AAAC,eAAb,AAAQ,QAAA,QAAC,EAAE,UAAG,EAAE,UAAG,KAAK,EAAY;;;;;AAkB1C,MAXF,AAAQ,OAAD,WAAS,SAAC,OAAO;AACtB,YAAI,AAAG,AAAO,EAAR,cAAW;AAQb,UANF,kBAAyB,AAAE,eAAhB,AAAO,OAAA,QAAC,KAAK,YAAU,AAAG,EAAD,UAAQ,SAAC,IAAI;AAC/C,gBAAI,AAAM,AAAI,AAAK,MAAT,QAAC,EAAE,SAAE,EAAE,cAAc,AAAO,MAAD,UAAU,EAAE,KAAK,AAAU,AAAI,AAAK,UAAT,QAAC,EAAE,SAAE,EAAE,WAAW,KAAK;AAC3B,cAA1D,AAAS,QAAD,eAAa,EAAE,EAAE,cAA8B;AACF,cAAzC,AAAE,eAAd,AAAQ,QAAA,QAAC,EAAE,iBAAe,EAAE,EAAE,cAAoB;AACL,cAA5B,AAAC,eAAN,AAAC,eAAb,AAAQ,QAAA,QAAC,EAAE,UAAG,EAAE,UAAG,KAAK,EAAY;;;;;;AAO9C,UAAO,SAAQ;EACjB;kEAImB,QACI;AAEf,mBAA6C;AAqCjD,IAnCF,YAAK,SAAC,GAAG;AACP,UAAI,AAAM,AAAG,MAAH,QAAC,CAAC,SAAE,CAAC,WAAW;AAC1B,UAAI,AAAU,AAAG,AAAI,AAAO,UAAd,QAAC,CAAC,SAAE,CAAC,eAAY;AAE4B,QAAzD,AAAS,QAAD,eAAa,CAAC,EAAE,cAA8B;AACH,QAAxC,AAAE,eAAb,AAAQ,QAAA,QAAC,CAAC,iBAAe,CAAC,EAAE,cAAoB;AACe,QAAhD,AAAC,eAAL,AAAC,eAAZ,AAAQ,QAAA,QAAC,CAAC,UAAG,CAAC,UAAG,AAAU,AAAG,AAAI,UAAP,QAAC,CAAC,SAAE,CAAC,WAAmB;;AAE/C,qCAAyB;AAC7B,sCAA8B;AAC5B,eAAK,sBAAsB;AACrB,mCAAmB;AAUrB,YATF,AAAQ,QAAA,CAAC,CAAC,EAAE,CAAC,EAAE,SAAC,IAAI;AACZ,0BAAQ,AAAM,AAAI,MAAJ,QAAC,EAAE,SAAE,EAAE;AAC3B,kBAAI,CAAC,KAAI,EAAE,IAAI,CAAC,KAAI,EAAE;AACpB,oBAAI,KAAK;AACuB,kBAA9B,AAAiB,gBAAD,QAAQ,KAAK;;AAEiB,kBAA9C,AAAiB,gBAAD,WAAW,AAAU,AAAI,UAAJ,QAAC,EAAE,SAAE,EAAE;;;;AAIlD,gBAAI,AAAiB,AAAO,gBAAR,cAAW;AAC4B,cAAzD,AAAS,QAAD,eAAa,CAAC,EAAE,cAA8B;AACH,cAAxC,AAAE,eAAb,AAAQ,QAAA,QAAC,CAAC,iBAAe,CAAC,EAAE,cAAoB;AACe,cAAhD,AAAC,eAAL,AAAC,eAAZ,AAAQ,QAAA,QAAC,CAAC,UAAG,CAAC,UAAG,AAAiB,gBAAD,UAAkB;AACtB,cAA7B,yBAAyB;;;;;AAKC,QAAhC,oBAAoB;AACS,QAA7B,oBAAoB;AACS,QAA7B,oBAAoB;;;AAIxB,UAAO,SAAQ;EACjB;sCAE8B;QAAe;AAC3C,aAAS,IAAI,GAAG,AAAE,CAAD,GAAG,IAAI,EAAE,IAAA,AAAC,CAAA;AACd,MAAX,AAAQ,QAAA,CAAC,CAAC;;EAEd;8BAEiC;QAAe;AAKhC,IAJd,gBAAS,QAAC;AAGM,MAFd,gBAAS,QAAC;AACM,QAAd,AAAQ,QAAA,CAAC,CAAC,EAAE,CAAC;gCACN,IAAI;8BACN,IAAI;EACf;0CASoB,GAAO,GAAe;AAAY,2BAAS,QAAC,KAAM,AAAO,OAAA,CAAS,CAAP,AAAE,CAAD,GAAG,CAAC,WAAI,IAAG,CAAC;EAAE;oCAG7E,GAAO,GAAe;AAAY,2BAAS,QAAC,KAAM,AAAO,OAAA,CAAC,CAAC,EAAU,CAAP,AAAE,CAAD,GAAG,CAAC,WAAI;EAAG;oCAG1E,GAAO,GAAe;AAC/B,aAAO,CAAF,CAAC,GAAI;AACV,aAAO,CAAF,CAAC,GAAI;AACwC,IAAxD,YAAK,SAAC,GAAG,MAAM,AAAO,OAAA,CAAC,AAAG,AAAI,EAAL,GAAG,IAAI,CAAC,EAAE,AAAG,AAAI,EAAL,GAAG,IAAI,CAAC,mCAAS;EACxD;gDAiBuB,GAAe;AAAY,2BAAS,QAAC,KAAM,AAAO,OAAA,CAAC,CAAC,EAAE,CAAC;EAAE;0CAE5D,GAAe;AAAY,2BAAS,QAAC,KAAM,AAAO,OAAA,CAAC,CAAC,EAAE,CAAC;EAAE;0CAEzD,GAAe;AAAY,0BAAQ,AAAW,AAAG,0BAAF,CAAC,SAAE,IAAI,AAAW,AAAG,0BAAF,CAAC,SAAE,IAAI,OAAO;EAAC;;MJ/crF,eAAQ;YAAG,4CAEN,yBAEM,uBACzB,KAAW,uBAEX,KAAW,yBAEU,kBAAU,wBAEb,2BAAkB,sBAChB,2BAAkB,wBAClB,2BAAkB,wBACjB,2BAAkB,yBAEtB,2BAAkB,sBAClB,2BAAkB,wBAClB,2BAAkB,wBAClB,2BAAkB,qBAEnC,IAAU,4BAAc,KACxB,IAAU,4BAAc,KACxB,IAAU,4BAAc,KACxB,IAAU,4BAAc,KACxB,IAAU,4BAAc,KACxB,IAAU,4BAAc,KACxB,IAAU,4BAAc,KACxB,IAAU,4BAAc,KACxB,IAAU,4BAAc,KAExB,IAAU,4BAAc,KACxB,IAAU,4BAAc,KACxB,IAAU,4BAAc,KACxB,KAAW,4BAAc,KACzB,KAAW,4BAAc,KACzB,KAAW,4BAAc,KACzB,KAAW,4BAAc,KACzB,KAAW,4BAAc,KACzB,KAAW,4BAAc,KAEzB,KAAW,kBAAU,oBACrB,KAAW,kBAAU;;;MAGjB,aAAM;;;MKzBN,mBAAY;;;MAcZ,kBAAW;;;MA+CX,oBAAa;;;MAcb,kBAAW;;;MAcX,kBAAW;;;MD7GF,qBAAc;;;MA4bvB,kBAAW","file":"sudoku.sound.ddc.js"}');
  // Exports:
  return {
    sudoku: sudoku
  };
}));

//# sourceMappingURL=sudoku.sound.ddc.js.map
