/// <reference types='cypress' />
import "cypress-real-events/support";
import TransfersPage from "../../page_objects/TransfersPage";

describe('Transfers scope', () => {
    const transfersPage = new TransfersPage()
    const transeferIdregex = '(?<=(ID\s#))\d+'

    beforeEach(() => {
        const username = Cypress.env('userName')
        const password = Cypress.env('password')
        
        cy.login(username, password)       
    })

    it('sends transfer between accounts', () => {
        cy.visit('transfer/transfer-between-accounts')
        transfersPage.getDebitFromDropDown().click()
        transfersPage.getDropDownOption().contains('EBQ11113487654').click()  
        transfersPage.getCreditToDropDown().click()
        transfersPage.getDropDownOption().contains('EBQ11223487456').click()
        transfersPage.getAmountToTransferInput().type('11').debug()
        transfersPage.getDescriptionTextArea().type('Transfer test text')
        transfersPage.getSubmitButton().click()
        transfersPage.getSubmitButton().click()
        transfersPage.getPopUpMessage().contains('Your request has been sent for approval. Request ID #')
    })
})