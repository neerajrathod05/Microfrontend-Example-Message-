'use strict';

var _chai = require('chai');

var _extractFileNameFromPath = require('../../src/file/extractFileNameFromPath');

var _extractFileNameFromPath2 = _interopRequireDefault(_extractFileNameFromPath);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('extractFileNameFromPath', function () {
    it('should extract file name from full path', function () {
        var fullPath = 'src' + _path2.default.sep + 'temp' + _path2.default.sep + 'name.js';
        var filename = (0, _extractFileNameFromPath2.default)(fullPath);
        return (0, _chai.expect)(filename).to.eql('name');
    });

    it('should extract file name from partial path', function () {
        var fullPath = 'name.js';
        var filename = (0, _extractFileNameFromPath2.default)(fullPath);
        return (0, _chai.expect)(filename).to.eql('name');
    });
});

//# sourceMappingURL=extractFileNameFromPath.spec.js.map