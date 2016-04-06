exports.config = {
  framework: 'jasmine',
  troubleshoot: true,
   seleniumAddress: 'http://54.200.220.9:4444/wd/hub',
  baseUrl: 'http://localhost:9000',
  specs: 'test/e2e/**/*.js',
  getPageTimeout: 20000,
  allScriptsTimeout: 20000,
  capabilities: {
    'browserName': 'chrome',
  },
  // ----- Options to be passed to minijasminenode -----
  jasmineNodeOpts: {
    // If true, display spec names.
    isVerbose: true,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 30000
  }
};
