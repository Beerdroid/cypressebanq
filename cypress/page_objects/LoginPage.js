export default class LoginPage {
    static getUsernameInput() {
        return cy.get('[type="email"]')
    }

    static getPasswordInput() {
        return cy.get('[type="password"]')
    }

    static getSubmitButton() {
        return cy.get('[type="submit"]')
    }
}