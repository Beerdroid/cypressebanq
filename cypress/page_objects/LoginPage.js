export default class LoginPage {
    getUsernameInput() {
        return cy.get('[type="email"]')
    }

    getPasswordInput() {
        return cy.get('[type="password"]')
    }   
    
    getSubmitButton() {
        return cy.get('[type="submit"]')
    }
}