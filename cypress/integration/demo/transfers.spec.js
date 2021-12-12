/// <reference types='cypress' />
import "cypress-real-events/support";
import TransfersPage from "../../page_objects/TransfersPage";

describe('Transfers scope <regression>', () => {

    beforeEach(() => {
        const username = Cypress.env('userName')
        const password = Cypress.env('password')
        
        cy.login(username, password)       
    })

    it('sends transfer between accounts', () => {
        cy.visit('transfer/transfer-between-accounts')
        TransfersPage.getDebitFromDropDown().realHover().click()
        TransfersPage.getDropDownOption().contains('EBQ11113487654').click()
        TransfersPage.getCreditToDropDown().click()
        TransfersPage.getDropDownOption().contains('EBQ11223487456').click()
        TransfersPage.getAmountToTransferInput().type('11').debug()
        TransfersPage.getDescriptionTextArea().type('Transfer test text')
        TransfersPage.getSubmitButton().click()
        TransfersPage.getSubmitButton().click()
        TransfersPage.getPopUpMessage().contains('Your request has been sent for approval. Request ID #')
    })
})
