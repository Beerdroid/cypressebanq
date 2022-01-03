import LoginPage from "../../page_objects/LoginPage";

describe('Login page', () => {
    const username = Cypress.env('userName')
    const password = Cypress.env('password')

    beforeEach(() => {
        cy.visit('/')
    })

    it('login successfully', () => {
        LoginPage.usernameInput().clear().type(username)
        LoginPage.passwordInput().clear().type(password)
        LoginPage.submitButton().click()
        cy.url().should('include', '/my-accounts');
    })
})