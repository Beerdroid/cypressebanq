import TransfersPage from "../../support/page_objects/TransfersPage";
import TransfersSteps from "../../support/steps/TransfersSteps";

const transferTransferBetweenAccounts = 'transfer/transfer-between-accounts';

describe('Transfers scope', () => {
    const username = Cypress.env('userName')
    const password = Cypress.env('password')

    beforeEach(() => {
        cy.signIn(username, password)
    })

    it('sends transfer between accounts', () => {
        cy.visit(transferTransferBetweenAccounts)
        TransfersSteps.fillAndSubmitForm('EBQ11113487654', 'EBQ11223487456', '11', 'Text')
        TransfersPage.popUpMessage().should('contain.text','Your request has been sent for approval. Request ID #')
    })
})