declare namespace Cypress {
    interface Chainable {
      signin(username: string, password: string): Chainable<Element>
      login(username: string, password: string): Chainable<Element>
    }
  }