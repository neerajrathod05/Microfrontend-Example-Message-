'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (filePath) {
    var fileName = filePath.split(_path2.default.sep).pop();
    return fileName.split('.')[0];
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/**
@name extractFileNameFromPath
@description Recieves a file path and returns the file name
@param {string} filePath
@returns {string}
*/

//# sourceMappingURL=index.js.map