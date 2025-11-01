const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: "cypress-mochawesome-reporter",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    baseUrl: "https://events.webmobi.com",
  },

  reporterOptions: {
    reportDir: "cypress/reports/html",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
    reportTitle: "🌐 WebMobi QA E2E Validation Suite",
  },
});
