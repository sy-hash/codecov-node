// http://devcenter.wercker.com/articles/steps/variables.html

module.exports = {
  detect: function() {
    return !!process.env.HEROKU_TEST_RUN_ID
  },

  configuration: function() {
    console.log('    herokuCI Detected')
    return {
      service: 'herokuCI',
      build: process.env.HEROKU_TEST_RUN_ID,
      commit: process.env.HEROKU_TEST_RUN_COMMIT_VERSION,
      branch: process.env.HEROKU_TEST_RUN_BRANCH,
    }
  },
}
