export default class LoginPage {
    static usernameInput() {
        return cy.get('[type="email"]')
    }

    static passwordInput() {
        return cy.get('[type="password"]')
    }

    static submitButton() {
        return cy.get('[type="submit"]')
    }

    static login() {
        cy.visit('/login')
        cy.get('button').click()
        cy.get('[type="email"]').type('User')
        cy.get('[type="password"]').type('12345')
        cy.get('[type="submit"]').click()
    }


}