const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultBrowser: 'election',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
