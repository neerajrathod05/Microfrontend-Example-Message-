'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readResults = function readResults(filePath) {
  var resultsFilePath = _path2.default.resolve('' + __dirname + _path2.default.sep + filePath + '-results.json');

  var parsedResults = {};

  try {
    parsedResults = _fsExtra2.default.readJsonSync(resultsFilePath);
  } catch (e) {
    return { failures: [{ title: 'Cannot read results file', err: { message: e.message } }] };
  }

  try {
    _fsExtra2.default.removeSync(resultsFilePath);
  } catch (e) {
    console.log('Cannot delete results file: ' + e.message);
  }

  return parsedResults;
};

exports.default = readResults;
module.exports = exports['default'];

//# sourceMappingURL=readResults.js.map