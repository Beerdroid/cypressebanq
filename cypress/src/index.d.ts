declare namespace Cypress {
    interface Chainable {
      signIn(username: string, password: string): Chainable
      login(username: string, password: string): Chainable
    }
  }