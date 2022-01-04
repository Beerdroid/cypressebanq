export default class LoginPage {
    static usernameInput() {
        return cy.xpath('//input[@type="email"]')
    }

    static passwordInput() {
        return cy.get('[type="password"]')
    }

    static submitButton() {
        return cy.get('[type="submit"]')
    }
}