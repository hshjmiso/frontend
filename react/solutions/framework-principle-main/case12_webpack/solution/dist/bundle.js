
    (function(modules) {
      function require(id) {
        const [fn, mapping] = modules[id];
        function localRequire(name) {
          return require(mapping[name]);
        }
        const module = { exports : {} };
        fn(localRequire, module, module.exports);
        return module.exports;
      }
      require(0);
    })({0: [
      function (require, module, exports) {
        "use strict";

var _varA = require("./varA.js");

var _varB = require("./varB.js");

alert((0, _varA.varA)());
alert((0, _varB.varB)());
      },
      {"./varA.js":1,"./varB.js":2},
    ],1: [
      function (require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var text = "varA";

var varA = exports.varA = function varA() {
  return text;
};
      },
      {},
    ],2: [
      function (require, module, exports) {
        "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var text = "varB";

var varB = exports.varB = function varB() {
  return text;
};
      },
      {},
    ],})
  