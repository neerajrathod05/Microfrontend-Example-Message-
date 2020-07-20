'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBrowserFailure = undefined;

var _bitUtilsValidation = require('@bit/bit.utils.validation.empty');

var _bitUtilsValidation2 = _interopRequireDefault(_bitUtilsValidation);

var _path = require('path');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var convertKarmaFormatToBitFormat = function convertKarmaFormatToBitFormat(results, runStart, runEnd) {
  var errorsFound = false;

  var normalizeError = function normalizeError(test) {
    errorsFound = true;
    var message = 'No info regarding error';
    var stack = 'No info regarding error';

    if (test.log.length > 0) {
      var errorLines = test.log[0].split('at');
      message = errorLines.shift();
      stack = 'at ' + errorLines.join('at');
    }

    return {
      message: message,
      stack: stack
    };
  };

  var normalizeTest = function normalizeTest(test) {
    return {
      title: test.suite[0] + ' ' + test.description,
      pass: test.success,
      err: !test.success ? normalizeError(test) : null,
      duration: test.endTime - test.startTime
    };
  };

  var getFailures = function getFailures(results) {
    var failures = results.failures || [];

    if (failures.length == 0 && !errorsFound && results.summary.error) {
      failures[0] = { title: 'Karma failure', err: { message: '' } };
    }

    return failures;
  };

  return {
    tests: results.result && !(0, _bitUtilsValidation2.default)(results.result) ? Object.keys(results.result).map(function (key) {
      return results.result[key];
    })[0].map(normalizeTest) : [],
    stats: {
      start: runStart,
      end: runEnd
    },
    failures: getFailures(results)
  };
};

var getBrowserFailure = exports.getBrowserFailure = function getBrowserFailure() {
  return {
    tests: [],
    pass: false,
    stats: {
      start: null,
      end: null
    },
    failures: [{ title: 'Cannot find browser',
      err: {
        message: ''
      }
    }]
  };
};

exports.default = convertKarmaFormatToBitFormat;

//# sourceMappingURL=resultsAdapter.js.map