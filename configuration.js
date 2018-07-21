var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    dest: 'target/screenshots',
    filename: 'my-report.html',
    pathBuilder: function(currentSpec, suites, browserCapabilities) {
        // will return chrome/your-spec-name.png
        return browserCapabilities.get('browserName') + '/' + currentSpec.fullName;
    }
});


exports.config = {

    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    jasmineNodeOpts: {
        showColors: true
    },
    specs: ['PracticeExercise.js'],

    //reporter functions
    // Setup the report before any tests start
    beforeLaunch: function() {
        return new Promise(function(resolve){
            reporter.beforeLaunch(resolve);
        });
    },

    // Assign the test reporter to each running instance
    onPrepare: function() {

        //browser size
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(reporter);
    },

    // Close the report after all tests finish
    afterLaunch: function(exitCode) {
        return new Promise(function(resolve){
            reporter.afterLaunch(resolve.bind(this, exitCode));
        });
    }
}