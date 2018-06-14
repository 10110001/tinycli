
    (function(modules) {
      function require(fileName) {
        const fn = modules[fileName];

        const module = { exports : {} };

        fn(require, module, module.exports);

        return module.exports;
      }

      require('./app/src/index.js');
    })({'./app/src/index.js': function (require, module, exports) { "use strict";

var _test = require("./test");

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_test2.default); /**
                              * @user you
                              * @author you 
                              * Date: 2018/6/14
                              */ },'./test': function (require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _message = require("./message");

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = 'hello' + _message2.default; /**
                                      * @user you
                                      * @author you 
                                      * Date: 2018/6/14
                                      */
exports.default = a; },'./message': function (require, module, exports) { "use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @user you
 * @author you 
 * Date: 2018/6/14
 */
var b = 'world';

exports.default = b; },})
  