exports.config = {
    capabilities: {
        'directConnect': true,
        'browserName': 'chrome',
        chromeOptions: {
            //args: ["--headless", "--disable-gpu", "--window-size=1024x768"]
        }
    },
    directConnect: false,
    baseUrl: 'http://localhost:4200/',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    specs: ['e2e/tests/index.spec.js'],//path to you spec files
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000
    }
};