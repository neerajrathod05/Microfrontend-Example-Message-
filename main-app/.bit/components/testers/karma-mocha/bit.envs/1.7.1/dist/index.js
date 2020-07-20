'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _karma = require('karma');

var _karma2 = _interopRequireDefault(_karma);

var _bitUtilsFile = require('@bit/bit.utils.file.extract-file-name-from-path');

var _bitUtilsFile2 = _interopRequireDefault(_bitUtilsFile);

var _bitUtilsValidation = require('@bit/bit.utils.validation.empty');

var _bitUtilsValidation2 = _interopRequireDefault(_bitUtilsValidation);

var _readResults = require('./readResults');

var _readResults2 = _interopRequireDefault(_readResults);

var _resultsAdapter = require('./resultsAdapter');

var _resultsAdapter2 = _interopRequireDefault(_resultsAdapter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./karma.conf');

var run = function run(specFile) {

  var configPath = _path2.default.resolve('' + __dirname + _path2.default.sep + 'karma.conf.js');
  var karmaConfig = _karma2.default.config.parseConfig(configPath, { files: [specFile], port: 9876 });

  var server = new _karma2.default.Server(karmaConfig, function (exitCode) {
    console.info('Karma Server has exited with ' + exitCode);
  });

  var runStart = void 0;

  server.on('run_start', function (browsers) {
    runStart = new Date();
  });

  return new Promise(function (resolve) {
    var isBrowserValid = false;
    server.start();

    server.on('browser_register', function (browsers) {
      isBrowserValid = true;
    });

    server.on('run_complete', function (browsers, resultsSummary) {
      var runEnd = new Date();
      var parsedResults = (0, _readResults2.default)((0, _bitUtilsFile2.default)(specFile));

      if (!isBrowserValid) {
        return resolve((0, _resultsAdapter.getBrowserFailure)());
      }

      if ((0, _bitUtilsValidation2.default)(parsedResults)) {
        return resolve({});
      }

      var adaptedResults = (0, _resultsAdapter2.default)(parsedResults, runStart, runEnd);
      return resolve(adaptedResults);
    });
  });
};

exports.default = { run: run };
module.exports = exports['default'];

//# sourceMappingURL=index.js.map