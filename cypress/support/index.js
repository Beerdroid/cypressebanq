// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '@bahmutov/cy-api/support'
require('cypress-terminal-report/src/installLogsCollector')();

// Alternatively you can use CommonJS syntax:
// require('./commands')

//Filters specs suites by keywords in a suite title. <your_keyword> value should be added to a suite title
//The following command structure is used to filter test: npx cypress run --env SUITE=your_keyword
beforeEach(function() {
    let testSuite = Cypress.env('SUITE');
    if (!testSuite) {
      return;
    }
    
    const testName = Cypress.mocha.getRunner().test.fullTitle();
    testSuite = "<"+testSuite+">"
    if (!testName.includes(testSuite)) {
      this.skip();
    }
  })

