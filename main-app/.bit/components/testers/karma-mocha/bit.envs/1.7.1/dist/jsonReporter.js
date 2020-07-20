'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JSONReporter = function JSONReporter(baseReporterDecorator, config, helper, logger) {
  var log = logger.create('karma-json-reporter');
  baseReporterDecorator(this);

  var history = {
    browsers: {},
    result: {},
    summary: {}
  };

  var reporterConfig = config.jsonReporter || {};
  var stdout = typeof reporterConfig.stdout !== 'undefined' ? reporterConfig.stdout : true;
  var outputFile = reporterConfig.outputFile ? helper.normalizeWinPath(_path2.default.resolve(config.basePath, reporterConfig.outputFile)) : null;

  this.onSpecComplete = function (browser, result) {
    history.result[browser.id] = history.result[browser.id] || [];
    history.result[browser.id].push(result);

    history.browsers[browser.id] = history.browsers[browser.id] || browser;
  };

  this.onRunComplete = function (browser, result) {
    history.summary = result;

    if (stdout) {
      process.stdout.write(JSON.stringify(history));
    }

    if (outputFile) {
      _fsExtra2.default.ensureDirSync(_path2.default.dirname(outputFile));
      _fsExtra2.default.writeJsonSync(outputFile, history);
    }

    history.result = {};
  };
};

JSONReporter.$inject = ['baseReporterDecorator', 'config', 'helper', 'logger'];

// PUBLISH DI MODULE
module.exports = {
  'reporter:json': ['type', JSONReporter]
};

//# sourceMappingURL=jsonReporter.js.map