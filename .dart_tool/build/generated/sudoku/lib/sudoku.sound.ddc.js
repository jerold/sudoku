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
  var $last = dartx.last;
  var $forEach = dartx.forEach;
  var $runtimeType = dartx.runtimeType;
  var $isNotEmpty = dartx.isNotEmpty;
  var $removeLast = dartx.removeLast;
  var $add = dartx.add;
  var $requestAnimationFrame = dartx.requestAnimationFrame;
  var $length = dartx.length;
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
  var $isEmpty = dartx.isEmpty;
  var $toString = dartx.toString;
  var $first = dartx.first;
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
    numTovoid: () => (T.numTovoid = dart.constFn(dart.fnType(dart.void, [core.num])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    JSArrayOfInput: () => (T.JSArrayOfInput = dart.constFn(_interceptors.JSArray$(sudoku.Input)))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    JSArrayOfListOfint: () => (T.JSArrayOfListOfint = dart.constFn(_interceptors.JSArray$(T.ListOfint())))(),
    intToint: () => (T.intToint = dart.constFn(dart.fnType(core.int, [core.int])))(),
    intAndintToNull: () => (T.intAndintToNull = dart.constFn(dart.fnType(core.Null, [core.int, core.int])))(),
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
    intAndintTobool: () => (T.intAndintTobool = dart.constFn(dart.fnType(core.bool, [core.int, core.int])))(),
    IdentityMapOfint$MapOfint$MapOfint$Finding: () => (T.IdentityMapOfint$MapOfint$MapOfint$Finding = dart.constFn(_js_helper.IdentityMap$(core.int, T.MapOfint$MapOfint$Finding())))(),
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
    get C12() {
      return C[12] = dart.const({
        __proto__: sudoku.Finding.prototype,
        [_Enum__name]: "neededElsewhere",
        [_Enum_index]: 2
      });
    },
    get C9() {
      return C[9] = dart.constList([C[10] || CT.C10, C[11] || CT.C11, C[12] || CT.C12], sudoku.Finding);
    },
    get C13() {
      return C[13] = dart.fn(sudoku.scanColumn, T.intAndintAndFnTovoid());
    },
    get C14() {
      return C[14] = dart.fn(sudoku.scanRow, T.intAndintAndFnTovoid());
    },
    get C15() {
      return C[15] = dart.fn(sudoku.scanBox, T.intAndintAndFnTovoid());
    },
    get C16() {
      return C[16] = dart.fn(sudoku.scanIthColumn, T.intAndFnTovoid());
    },
    get C17() {
      return C[17] = dart.fn(sudoku.scanIthRow, T.intAndFnTovoid());
    },
    get C18() {
      return C[18] = dart.fn(sudoku.scanIthBox, T.intAndFnTovoid());
    },
    get C19() {
      return C[19] = dart.constMap(core.int, core.String, [1, "one", 2, "two", 3, "three", 4, "four", 5, "five", 6, "six", 7, "seven", 8, "eight", 9, "nine"]);
    },
    get C21() {
      return C[21] = dart.constList(["049002000", "000007000", "260000950", "034070000", "600205001", "000060890", "082000046", "000800000", "000300510"], core.String);
    },
    get C22() {
      return C[22] = dart.constList(["000700100", "007006830", "000300056", "000070010", "400902005", "010060000", "270001000", "069800200", "005007000"], core.String);
    },
    get C23() {
      return C[23] = dart.constList(["900001005", "600000140", "000058000", "500704000", "090080030", "000306008", "000460000", "024000009", "300100007"], core.String);
    },
    get C20() {
      return C[20] = dart.constList([C[21] || CT.C21, C[22] || CT.C22, C[23] || CT.C23], T.ListOfString());
    },
    get C25() {
      return C[25] = dart.constList(["003020600", "900305001", "001806400", "008102900", "700000008", "006708200", "002609500", "800203009", "005010300"], core.String);
    },
    get C26() {
      return C[26] = dart.constList(["200080300", "060070084", "030500209", "000105408", "000000000", "402706000", "301007040", "720040060", "004010003"], core.String);
    },
    get C27() {
      return C[27] = dart.constList(["000000907", "000420180", "000705026", "100904000", "050000040", "000507009", "920108000", "034059000", "507000000"], core.String);
    },
    get C28() {
      return C[28] = dart.constList(["030050040", "008010500", "460000012", "070502080", "000603000", "040109030", "250000098", "001020600", "080060020"], core.String);
    },
    get C29() {
      return C[29] = dart.constList(["020810740", "700003100", "090002805", "009040087", "400208003", "160030200", "302700060", "005600008", "076051090"], core.String);
    },
    get C30() {
      return C[30] = dart.constList(["100920000", "524010000", "000000070", "050008102", "000000000", "402700090", "060000000", "000030945", "000071006"], core.String);
    },
    get C31() {
      return C[31] = dart.constList(["043080250", "600000000", "000001094", "900004070", "000608000", "010200003", "820500000", "000000005", "034090710"], core.String);
    },
    get C32() {
      return C[32] = dart.constList(["480006902", "002008001", "900370060", "840010200", "003704100", "001060049", "020085007", "700900600", "609200018"], core.String);
    },
    get C33() {
      return C[33] = dart.constList(["000900002", "050123400", "030000160", "908000000", "070000090", "000000205", "091000050", "007439020", "400007000"], core.String);
    },
    get C34() {
      return C[34] = dart.constList(["001900003", "900700160", "030005007", "050000009", "004302600", "200000070", "600100030", "042007006", "500006800"], core.String);
    },
    get C35() {
      return C[35] = dart.constList(["000125400", "008400000", "420800000", "030000095", "060902010", "510000060", "000003049", "000007200", "001298000"], core.String);
    },
    get C36() {
      return C[36] = dart.constList(["062340750", "100005600", "570000040", "000094800", "400000006", "005830000", "030000091", "006400007", "059083260"], core.String);
    },
    get C37() {
      return C[37] = dart.constList(["300000000", "005009000", "200504000", "020000700", "160000058", "704310600", "000890100", "000067080", "000005437"], core.String);
    },
    get C38() {
      return C[38] = dart.constList(["630000000", "000500008", "005674000", "000020000", "003401020", "000000345", "000007004", "080300902", "947100080"], core.String);
    },
    get C39() {
      return C[39] = dart.constList(["000020040", "008035000", "000070602", "031046970", "200000000", "000501203", "049000730", "000000010", "800004000"], core.String);
    },
    get C40() {
      return C[40] = dart.constList(["361025900", "080960010", "400000057", "008000471", "000603000", "259000800", "740000005", "020018060", "005470329"], core.String);
    },
    get C41() {
      return C[41] = dart.constList(["050807020", "600010090", "702540006", "070020301", "504000908", "103080070", "900076205", "060090003", "080103040"], core.String);
    },
    get C42() {
      return C[42] = dart.constList(["080005000", "000003457", "000070809", "060400903", "007010500", "408007020", "901020000", "842300000", "000100080"], core.String);
    },
    get C43() {
      return C[43] = dart.constList(["003502900", "000040000", "106000305", "900251008", "070408030", "800763001", "308000104", "000020000", "005104800"], core.String);
    },
    get C44() {
      return C[44] = dart.constList(["000000000", "009805100", "051907420", "290401065", "000000000", "140508093", "026709580", "005103600", "000000000"], core.String);
    },
    get C45() {
      return C[45] = dart.constList(["020030090", "000907000", "900208005", "004806500", "607000208", "003102900", "800605007", "000309000", "030020050"], core.String);
    },
    get C46() {
      return C[46] = dart.constList(["005000006", "070009020", "000500107", "804150000", "000803000", "000092805", "907006000", "030400010", "200000600"], core.String);
    },
    get C47() {
      return C[47] = dart.constList(["040000050", "001943600", "009000300", "600050002", "103000506", "800020007", "005000200", "002436700", "030000040"], core.String);
    },
    get C48() {
      return C[48] = dart.constList(["004000000", "000030002", "390700080", "400009001", "209801307", "600200008", "010008053", "900040000", "000000800"], core.String);
    },
    get C49() {
      return C[49] = dart.constList(["360020089", "000361000", "000000000", "803000602", "400603007", "607000108", "000000000", "000418000", "970030014"], core.String);
    },
    get C50() {
      return C[50] = dart.constList(["500400060", "009000800", "640020000", "000001008", "208000501", "700500000", "000090084", "003000600", "060003002"], core.String);
    },
    get C51() {
      return C[51] = dart.constList(["007256400", "400000005", "010030060", "000508000", "008060200", "000107000", "030070090", "200000004", "006312700"], core.String);
    },
    get C52() {
      return C[52] = dart.constList(["000000000", "079050180", "800000007", "007306800", "450708096", "003502700", "700000005", "016030420", "000000000"], core.String);
    },
    get C53() {
      return C[53] = dart.constList(["030000080", "009000500", "007509200", "700105008", "020090030", "900402001", "004207100", "002000800", "070000090"], core.String);
    },
    get C54() {
      return C[54] = dart.constList(["200170603", "050000100", "000006079", "000040700", "000801000", "009050000", "310400000", "005000060", "906037002"], core.String);
    },
    get C55() {
      return C[55] = dart.constList(["000000080", "800701040", "040020030", "374000900", "000030000", "005000321", "010060050", "050802006", "080000000"], core.String);
    },
    get C56() {
      return C[56] = dart.constList(["000000085", "000210009", "960080100", "500800016", "000000000", "890006007", "009070052", "300054000", "480000000"], core.String);
    },
    get C57() {
      return C[57] = dart.constList(["608070502", "050608070", "002000300", "500090006", "040302050", "800050003", "005000200", "010704090", "409060701"], core.String);
    },
    get C58() {
      return C[58] = dart.constList(["050010040", "107000602", "000905000", "208030501", "040070020", "901080406", "000401000", "304000709", "020060010"], core.String);
    },
    get C59() {
      return C[59] = dart.constList(["053000790", "009753400", "100000002", "090080010", "000907000", "080030070", "500000003", "007641200", "061000940"], core.String);
    },
    get C60() {
      return C[60] = dart.constList(["006080300", "049070250", "000405000", "600317004", "007000800", "100826009", "000702000", "075040190", "003090600"], core.String);
    },
    get C61() {
      return C[61] = dart.constList(["005080700", "700204005", "320000084", "060105040", "008000500", "070803010", "450000091", "600508007", "003010600"], core.String);
    },
    get C62() {
      return C[62] = dart.constList(["000900800", "128006400", "070800060", "800430007", "500000009", "600079008", "090004010", "003600284", "001007000"], core.String);
    },
    get C63() {
      return C[63] = dart.constList(["000080000", "270000054", "095000810", "009806400", "020403060", "006905100", "017000620", "460000038", "000090000"], core.String);
    },
    get C64() {
      return C[64] = dart.constList(["000602000", "400050001", "085010620", "038206710", "000000000", "019407350", "026040530", "900020007", "000809000"], core.String);
    },
    get C65() {
      return C[65] = dart.constList(["380000000", "000400785", "009020300", "060090000", "800302009", "000040070", "001070500", "495006000", "000000092"], core.String);
    },
    get C66() {
      return C[66] = dart.constList(["000158000", "002060800", "030000040", "027030510", "000000000", "046080790", "050000080", "004070100", "000325000"], core.String);
    },
    get C67() {
      return C[67] = dart.constList(["010500200", "900001000", "002008030", "500030007", "008000500", "600080004", "040100700", "000700006", "003004050"], core.String);
    },
    get C68() {
      return C[68] = dart.constList(["080000040", "000469000", "400000007", "005904600", "070608030", "008502100", "900000005", "000781000", "060000010"], core.String);
    },
    get C69() {
      return C[69] = dart.constList(["904200007", "010000000", "000706500", "000800090", "020904060", "040002000", "001607000", "000000030", "300005702"], core.String);
    },
    get C70() {
      return C[70] = dart.constList(["000700800", "006000031", "040002000", "024070000", "010030080", "000060290", "000800070", "860000500", "002006000"], core.String);
    },
    get C71() {
      return C[71] = dart.constList(["001007090", "590080001", "030000080", "000005800", "050060020", "004100000", "080000030", "100020079", "020700400"], core.String);
    },
    get C72() {
      return C[72] = dart.constList(["000003017", "015009008", "060000000", "100007000", "009000200", "000500004", "000000020", "500600340", "340200000"], core.String);
    },
    get C73() {
      return C[73] = dart.constList(["300200000", "000107000", "706030500", "070009080", "900020004", "010800050", "009040301", "000702000", "000008006"], core.String);
    },
    get C24() {
      return C[24] = dart.constList([C[25] || CT.C25, C[26] || CT.C26, C[27] || CT.C27, C[28] || CT.C28, C[29] || CT.C29, C[30] || CT.C30, C[31] || CT.C31, C[32] || CT.C32, C[33] || CT.C33, C[34] || CT.C34, C[35] || CT.C35, C[36] || CT.C36, C[37] || CT.C37, C[38] || CT.C38, C[39] || CT.C39, C[40] || CT.C40, C[41] || CT.C41, C[42] || CT.C42, C[43] || CT.C43, C[44] || CT.C44, C[45] || CT.C45, C[46] || CT.C46, C[47] || CT.C47, C[48] || CT.C48, C[49] || CT.C49, C[50] || CT.C50, C[51] || CT.C51, C[52] || CT.C52, C[53] || CT.C53, C[54] || CT.C54, C[55] || CT.C55, C[56] || CT.C56, C[57] || CT.C57, C[58] || CT.C58, C[59] || CT.C59, C[60] || CT.C60, C[61] || CT.C61, C[62] || CT.C62, C[63] || CT.C63, C[64] || CT.C64, C[33] || CT.C33, C[65] || CT.C65, C[66] || CT.C66, C[67] || CT.C67, C[68] || CT.C68, C[69] || CT.C69, C[70] || CT.C70, C[71] || CT.C71, C[72] || CT.C72, C[73] || CT.C73], T.ListOfString());
    },
    get C74() {
      return C[74] = dart.constSet(core.int, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    },
    get C76() {
      return C[76] = dart.constList([0, 0], core.int);
    },
    get C77() {
      return C[77] = dart.constList([0, 3], core.int);
    },
    get C78() {
      return C[78] = dart.constList([0, 6], core.int);
    },
    get C79() {
      return C[79] = dart.constList([3, 0], core.int);
    },
    get C80() {
      return C[80] = dart.constList([3, 3], core.int);
    },
    get C81() {
      return C[81] = dart.constList([3, 6], core.int);
    },
    get C82() {
      return C[82] = dart.constList([6, 0], core.int);
    },
    get C83() {
      return C[83] = dart.constList([6, 3], core.int);
    },
    get C84() {
      return C[84] = dart.constList([6, 6], core.int);
    },
    get C75() {
      return C[75] = dart.constList([C[76] || CT.C76, C[77] || CT.C77, C[78] || CT.C78, C[79] || CT.C79, C[80] || CT.C80, C[81] || CT.C81, C[82] || CT.C82, C[83] || CT.C83, C[84] || CT.C84], T.ListOfint());
    }
  }, false);
  var C = Array(85).fill(void 0);
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
  var _y = dart.privateName(sudoku, "_y");
  var _x = dart.privateName(sudoku, "_x");
  var _parsePuzzleIndex = dart.privateName(sudoku, "_parsePuzzleIndex");
  var _controller = dart.privateName(sudoku, "_controller");
  var _handleInput = dart.privateName(sudoku, "_handleInput");
  var _initPuzzle = dart.privateName(sudoku, "_initPuzzle");
  var _loadNextPuzzle = dart.privateName(sudoku, "_loadNextPuzzle");
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
      return this[_y];
    }
    get row() {
      return this[_x];
    }
    get box() {
      return sudoku.getBox(this[_y], this[_x]);
    }
    get hasCursor() {
      return this[_y] != null && this[_x] != null;
    }
    static ['_#new#tearOff'](opts) {
      let controller = opts && 'controller' in opts ? opts.controller : null;
      return new sudoku.Game.new({controller: controller});
    }
    [_loadNextPuzzle]() {
      core.print("Puzzle(" + dart.str(this[_parsePuzzleIndex]) + ")");
      this[_initPuzzle]();
      sudoku.parsedPuzzle(this[_parsePuzzleIndex], sudoku.evilPuzzles)[$forEach](dart.bind(this, _handleInput));
      this[_parsePuzzleIndex] = this[_parsePuzzleIndex] + 1;
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
      this[_y] = null;
      this[_x] = null;
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
        this[_y] = sudoku['MoveX|nextY'](dart.nullCheck(cursorInput.move), this[_y]);
        this[_x] = sudoku['MoveX|nextX'](dart.nullCheck(cursorInput.move), this[_x]);
      } else {
        this[_y] = cursorInput.column;
        this[_x] = cursorInput.row;
      }
    }
    [_handleToggle](toggleInput) {
      if (this.hasCursor) {
        this[_toggleCell](dart.nullCheck(this[_y]), dart.nullCheck(this[_x]), toggleInput.value, this[_mode]);
      }
    }
    [_toggleCell](cellY, cellX, value, mode) {
      let t0, t0$, t0$0;
      if (mode === sudoku.EntryMode.puzzle) {
        this[_puzzle] = (t0 = sudoku['PuzzleX|copy'](this[_puzzle]), (() => {
          sudoku['PuzzleX|toggle'](t0, cellY, cellX, value);
          return t0;
        })());
      } else {
        if (mode === sudoku.EntryMode.value) {
          this[_entries][$add]((t0$ = sudoku['PuzzleX|copy'](this[_entries][$last]), (() => {
            sudoku['PuzzleX|toggle'](t0$, cellY, cellX, value);
            return t0$;
          })()));
        } else if (mode === sudoku.EntryMode.candidate) {
          this[_userCandidates][$add]((t0$0 = sudoku['CandidateX|copy'](this[_userCandidates][$last]), (() => {
            sudoku['CandidateX|toggle'](t0$0, cellY, cellX, value);
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
    }
    [_clearFoundCell](cellY, cellX, value, mode) {
      return async.async(dart.dynamic, (function* _clearFoundCell() {
        html.window[$requestAnimationFrame](dart.fn(_ => this[_toggleCell](cellY, cellX, value, mode), T.numTovoid()));
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
    this[_y] = null;
    this[_x] = null;
    this[_parsePuzzleIndex] = 2;
    this[_controller] = controller;
    this[_controller].input.listen(dart.bind(this, _handleInput));
    this[_initPuzzle]();
    this[_loadNextPuzzle]();
  }).prototype = sudoku.Game.prototype;
  dart.addTypeTests(sudoku.Game);
  dart.addTypeCaches(sudoku.Game);
  dart.setMethodSignature(sudoku.Game, () => ({
    __proto__: dart.getMethods(sudoku.Game.__proto__),
    setByPuzzle: dart.fnType(core.bool, [core.int, core.int]),
    found: dart.fnType(core.Map$(core.int, sudoku.Finding), [core.int, core.int]),
    isValid: dart.fnType(core.bool, [core.int, core.int]),
    [_loadNextPuzzle]: dart.fnType(dart.void, []),
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
    [_y]: dart.fieldType(dart.nullable(core.int)),
    [_x]: dart.fieldType(dart.nullable(core.int)),
    [_parsePuzzleIndex]: dart.fieldType(core.int)
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
  dart.setStaticFieldSignature(sudoku.Finding, () => ['values', 'lastStanding', 'forcedOut', 'neededElsewhere']);
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
    },
    /*sudoku.Finding.neededElsewhere*/get neededElsewhere() {
      return C[12] || CT.C12;
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
    inputs[$add](sudoku.Input.entryMode(sudoku.EntryMode.value));
    inputs[$add](sudoku.Input.cursor());
    return inputs;
  };
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
      case C[12] || CT.C12:
        {
          return "needed-elsewhere";
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
      case C[12] || CT.C12:
        {
          return sudoku.EntryMode.candidate;
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
  sudoku['PuzzleX|copy'] = function PuzzleX$124copy($this, opts) {
    let withMerge = opts && 'withMerge' in opts ? opts.withMerge : null;
    let puzzle = sudoku.emptyPuzzle();
    sudoku.scan(dart.fn((y, x) => {
      let t8, t7, t9, t8$, t7$;
      t7$ = puzzle[$_get](y);
      t8$ = x;
      t9 = (t7 = $this[$_get](y)[$_get](x), t7 == null ? (t8 = withMerge, t8 == null ? null : t8[$_get](y)[$_get](x)) : t7);
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
  sudoku['FindingsX|combine'] = function FindingsX$124combine($this, other) {
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
  sudoku['FindingsX|get#combine'] = function FindingsX$124get$35combine($this) {
    return dart.fn(other => sudoku['FindingsX|combine']($this, other), T.MapOfint$MapOfint$MapOfint$FindingTovoid());
  };
  sudoku.validate = function validate(values, candidates) {
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
        validateDimention(C[13] || CT.C13);
        validateDimention(C[14] || CT.C14);
        validateDimention(C[15] || CT.C15);
        if (valueCount > 1) {
          invalid[$putIfAbsent](y, dart.fn(() => new (T.IdentityMapOfint$bool()).new(), T.VoidToMapOfint$bool()));
          dart.nullCheck(invalid[$_get](y))[$_set](x, true);
        }
      }
    }, T.intAndintToNull()));
    return invalid;
  };
  sudoku.findCandidates = function findCandidates(values) {
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
  sudoku.findValues = function findValues(values, candidates) {
    let findings = new (T.IdentityMapOfint$MapOfint$MapOfint$Finding()).new();
    sudoku['FindingsX|combine'](findings, sudoku.findForcedOutCandidates(values, candidates));
    sudoku['FindingsX|combine'](findings, sudoku.findLastStandingValues(values, candidates));
    sudoku['FindingsX|combine'](findings, sudoku.findNeededElsewhereCandidates(values, candidates));
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
            let t16;
            if (values[$_get](y)[$_get](x) == null && candidates[$_get](y)[$_get](x)[$length] === setSize) {
              let setKey = candidates[$_get](y)[$_get](x)[$toString]();
              setCounts[$_set](setKey, dart.notNull((t16 = setCounts[$_get](setKey), t16 == null ? 0 : t16)) + 1);
              sets[$putIfAbsent](setKey, dart.fn(() => candidates[$_get](y)[$_get](x), T.VoidToSetOfint()));
            }
          }, T.intAndintToNull()));
          for (let setKey of setCounts[$keys]) {
            if (setCounts[$_get](setKey) === setSize) {
              let candidatesNeededElsewhere = dart.nullCheck(sets[$_get](setKey));
              ithIterator(i, dart.fn((y, x) => {
                if (setKey !== candidates[$_get](y)[$_get](x)[$toString]()) {
                  for (let value of candidatesNeededElsewhere) {
                    if (candidates[$_get](y)[$_get](x).contains(value)) {
                      findings[$putIfAbsent](y, dart.fn(() => new (T.IdentityMapOfint$MapOfint$Finding()).new(), T.VoidToMapOfint$MapOfint$Finding()));
                      dart.nullCheck(findings[$_get](y))[$putIfAbsent](x, dart.fn(() => new (T.IdentityMapOfint$Finding()).new(), T.VoidToMapOfint$Finding()));
                      dart.nullCheck(dart.nullCheck(findings[$_get](y))[$_get](x))[$_set](value, sudoku.Finding.neededElsewhere);
                    }
                  }
                } else {
                }
              }, T.intAndintToNull()));
            }
          }
        }
        dart.fn(checkForNeededElsewhere, T.FnToNull$1());
        checkForNeededElsewhere(C[16] || CT.C16);
        checkForNeededElsewhere(C[17] || CT.C17);
        checkForNeededElsewhere(C[18] || CT.C18);
      }, T.intToNull()));
    }
    return findings;
  };
  sudoku.findForcedOutCandidates = function findForcedOutCandidates(values, candidates) {
    let findings = new (T.IdentityMapOfint$MapOfint$MapOfint$Finding()).new();
    sudoku.scan(dart.fn((y, x) => {
      let by = y * 3;
      let bx = x * 3;
      let valueYs = new (T.IdentityMapOfint$SetOfint()).new();
      let valueXs = new (T.IdentityMapOfint$SetOfint()).new();
      let scanYs = T.LinkedHashSetOfint().new();
      let scanXs = T.LinkedHashSetOfint().new();
      sudoku.scanBox(by, bx, dart.fn((iy, ix) => {
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
            if (!scanXs.contains(ix) && candidates[$_get](iy)[$_get](ix).contains(value)) {
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
            if (!scanYs.contains(iy) && candidates[$_get](iy)[$_get](ix).contains(value)) {
              findings[$putIfAbsent](iy, dart.fn(() => new (T.IdentityMapOfint$MapOfint$Finding()).new(), T.VoidToMapOfint$MapOfint$Finding()));
              dart.nullCheck(findings[$_get](iy))[$putIfAbsent](ix, dart.fn(() => new (T.IdentityMapOfint$Finding()).new(), T.VoidToMapOfint$Finding()));
              dart.nullCheck(dart.nullCheck(findings[$_get](iy))[$_get](ix))[$_set](value, sudoku.Finding.forcedOut);
            }
          }, T.intAndintToNull()));
        }
      }, T.intAndSetOfintTovoid()));
    }, T.intAndintToNull()), {size: 3});
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
        checkForLastStanding(C[13] || CT.C13);
        checkForLastStanding(C[14] || CT.C14);
        checkForLastStanding(C[15] || CT.C15);
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
      return new (T.IdentityMapOfint$Input()).from([27, sudoku.Input.reset(), 8, sudoku.Input.rewind(), 13, sudoku.Input.entryMode(sudoku.EntryMode.value), 38, sudoku.Input.cursor({move: sudoku.Move.up}), 40, sudoku.Input.cursor({move: sudoku.Move.down}), 37, sudoku.Input.cursor({move: sudoku.Move.left}), 39, sudoku.Input.cursor({move: sudoku.Move.right}), 87, sudoku.Input.cursor({move: sudoku.Move.up}), 83, sudoku.Input.cursor({move: sudoku.Move.down}), 65, sudoku.Input.cursor({move: sudoku.Move.left}), 68, sudoku.Input.cursor({move: sudoku.Move.right}), 49, sudoku.Input.toggle({value: 1}), 50, sudoku.Input.toggle({value: 2}), 51, sudoku.Input.toggle({value: 3}), 52, sudoku.Input.toggle({value: 4}), 53, sudoku.Input.toggle({value: 5}), 54, sudoku.Input.toggle({value: 6}), 55, sudoku.Input.toggle({value: 7}), 56, sudoku.Input.toggle({value: 8}), 57, sudoku.Input.toggle({value: 9}), 67, sudoku.Input.entryMode(sudoku.EntryMode.candidate), 86, sudoku.Input.entryMode(sudoku.EntryMode.value)]);
    },
    set bindings(_) {},
    /*sudoku.keyIds*/get keyIds() {
      return C[19] || CT.C19;
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
    /*sudoku.evilPuzzles*/get evilPuzzles() {
      return C[20] || CT.C20;
    },
    /*sudoku.easyPuzzles*/get easyPuzzles() {
      return C[24] || CT.C24;
    },
    /*sudoku.possibleValues*/get possibleValues() {
      return C[74] || CT.C74;
    },
    /*sudoku._boxOrigins*/get _boxOrigins() {
      return C[75] || CT.C75;
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
