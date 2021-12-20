export default class TransfersPage {
    static getTransferBetweenAccountsLink() {
        return cy.get('[ng-reflect-router-link="transfer-between-accounts"]')
    }

    static getDebitFromDropDown(){
        return cy.get('[formcontrolname="accountFrom"] ng-select')
    }

    static getCreditToDropDown(){
        return cy.get('[formcontrolname="accountTo"] ng-select')
    }

    static getAmountToTransferInput(){
        return cy.get('[formcontrolname="outgoingAmount"]')
    }

    static getDescriptionTextArea(){
        return cy.get('#description')
    }

    static getSubmitButton(){
        return cy.get('[type="submit"]')
    }

    static getPopUpMessage(){
        return cy.get('div.popup-message')
    }

    static getDropDownOption(){
        return cy.get('[role="option"]')
    }

}