import LoginSteps from "../../support/steps/LoginSteps";

/*
Features:
1. Browser config
2. cypress-grep tags
*/
describe('Login page', { tags: "@smoke" }, () => {
    const username = Cypress.env('userName')
    const password = Cypress.env('password')

    beforeEach(() => {
        cy.visit('/')
    })

    it('login successfully in firefox', { browser: 'firefox' }, () => {
        LoginSteps.login(username, password)
        cy.url().should('include', '/my-accounts');
    })

    it('login successfully in electron', { browser: 'electron', tags: "@electron" }, () => {
        LoginSteps.login(username, password)
        cy.url().should('include', '/my-accounts');
    })
})