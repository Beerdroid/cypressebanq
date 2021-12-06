export default class ContactPage {
    visit() {
        cy.visit('/contact-us/')
    }

    getNameInput() {
        return cy.get('#input_1_1')
    }

    getPhoneInput() {
        return cy.get('#input_1_10')
    }

    getEmailInput() {
        return cy.get('#input_1_2')
    }

    getSubjectInput() {
        return cy.get('#input_1_3')
    }

    getMessageTextArea() {
        return cy.get('#input_1_4')
    }

    getTermsCheckBox() {
        return cy.get('#choice_1_8_1')
    }
}