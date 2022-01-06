export default class TransfersPage {

    static transferBetweenAccountsLink() {
        return cy.get('[ng-reflect-router-link="transfer-between-accounts"]')
    }

    static debitFromDropDown() {
        return cy.get('[formcontrolname="accountFrom"] ng-select').should('be.visible')
    }

    static creditToDropDown() {
        return cy.get('[formcontrolname="accountTo"] ng-select')
    }

    static amountToTransferInput() {
        return cy.get('[formcontrolname="outgoingAmount"]')
    }

    static descriptionTextArea() {
        return cy.get('#description')
    }

    static submitButton() {
        return cy.get('[type="submit"]')
    }

    static confirmButton() {
        return cy.get('[type="submit"]')
    }

    static popUpMessage() {
        return cy.get('div.popup-message')
    }

    static dropDownOption() {
        return cy.get('[role="option"]')
    }


}