const { defineConfig } = require('cypress')

module.exports = defineConfig({
  apiUrl: 'http://localhost:4000',
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'http://localhost:3000',
  },
})
