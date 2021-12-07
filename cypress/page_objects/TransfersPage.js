export default class TransfersPage {
    getTransferBetweenAccountsLink() {
        return cy.get('[ng-reflect-router-link="transfer-between-accounts"]')
    }

    getDebitFromDropDown(){
        return cy.get('[formcontrolname="accountFrom"] ng-select')
    }    
    
    getCreditToDropDown(){
        return cy.get('[formcontrolname="accountTo"] ng-select')
    }

    getAmountToTransferInput(){
        return cy.get('[formcontrolname="outgoingAmount"]')
    }    
    
    getDescriptionTextArea(){
        return cy.get('#description')
    }    
    
    getSubmitButton(){
        return cy.get('[type="submit"]')
    }   
    
    getPopUpMessage(){
        return cy.get('div.popup-message')
    }   
    
    getDropDownOption(){
        return cy.get('[role="option"]')
    }
}