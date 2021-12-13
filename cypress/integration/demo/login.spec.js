import LoginPage from "../../page_objects/LoginPage";

describe('Login page', () => {
    const username = Cypress.env('userName')
    const password = Cypress.env('password')

    beforeEach(() => {
        cy.visit('/')
    })

    it('login successfully', () => {
        LoginPage.getUsernameInput().clear().type(username)
        LoginPage.getPasswordInput().clear().type(password)
        LoginPage.getSubmitButton().click()
        cy.url().should('include', '/my-accounts');
    })
})