'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isEmpty;

var _hasOwnProperty = require('../object/hasOwnProperty');

var _hasOwnProperty2 = _interopRequireDefault(_hasOwnProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * determines whether `obj` reference is empty (empty array, empty object and/or falsy values)
 * @name empty
 * @param {*} name
 * @returns {boolean}
 * @example
 *  empty([]) // => true
 *  empty({}) // => true
 *  empty(1) // => false
 *  empty('') // => false
 *  empty('foo') // => false
 *  empty(false) // => true
 */
function isEmpty(obj) {
  for (var n in obj) {
    if ((0, _hasOwnProperty2.default)(obj, n) && obj[n]) return false;
  } // eslint-disable-line
  return true;
}
;
module.exports = exports['default'];

//# sourceMappingURL=empty.js.map