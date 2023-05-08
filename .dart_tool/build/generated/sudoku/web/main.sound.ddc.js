define(['dart_sdk', 'packages/sudoku/sudoku'], (function load__web__main(dart_sdk, packages__sudoku__sudoku) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const sudoku = packages__sudoku__sudoku.sudoku;
  var main = Object.create(dart.library);
  dart._checkModuleNullSafetyMode(true);
  const CT = Object.create({
    _: () => (C, CT)
  });
  main.main = function main$() {
    let controller = new sudoku.Controller.new();
    let game = new sudoku.Game.new({controller: controller});
    new sudoku.Renderer.new({game: game});
  };
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;AAGQ,qBAAa;AACb,eAAO,iCAAiB,UAAU;AACpB,IAApB,+BAAe,IAAI;EACrB","file":"main.sound.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
}));

//# sourceMappingURL=main.sound.ddc.js.map
