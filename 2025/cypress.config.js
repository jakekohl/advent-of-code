const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultBrowser: 'electron',
    retries: {
      runMode: 1,
      openMode: 0,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
