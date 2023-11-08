const { defineConfig } = require("cypress");

module.exports = defineConfig({

  


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'cypress/integration/samples/*.cy.js'
    //specPattern:'cypress/integration/PageObject/*.cy.js'
  }



});









