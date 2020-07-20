'use strict';

var _chai = require('chai');

var _empty = require('../../src/validation/empty');

var _empty2 = _interopRequireDefault(_empty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('#empty()', function () {
  it('should return true as an empty array was passed', function () {
    (0, _chai.expect)((0, _empty2.default)([])).to.equal(true);
  });

  it('should return true as an empty object was passed', function () {
    (0, _chai.expect)((0, _empty2.default)({})).to.equal(true);
  });

  it('should return true as an empty string was passed', function () {
    (0, _chai.expect)((0, _empty2.default)('')).to.equal(true);
  });

  it('should return false as string `foo` was passed', function () {
    (0, _chai.expect)((0, _empty2.default)('foo')).to.equal(false);
  });

  it('should return false as [1] was passed', function () {
    (0, _chai.expect)((0, _empty2.default)([1])).to.equal(false);
  });

  it('should return false as { a: 1 } was passed', function () {
    (0, _chai.expect)((0, _empty2.default)({ a: 1 })).to.equal(false);
  });
});

//# sourceMappingURL=empty.spec.js.map