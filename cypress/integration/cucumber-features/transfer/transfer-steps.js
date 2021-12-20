import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import TransfersPage from "../../../page_objects/TransfersPage";

Given('user is logged in', () => {
    const username = Cypress.env('userName')
    const password = Cypress.env('password')
    cy.visit('/')
    cy.login(username, password)
});
Given('transfer between accounts page is loaded', () => {
    cy.visit('transfer/transfer-between-accounts')
});
When('user selects a debit account', () => {
    TransfersPage.getDebitFromDropDown().click()
    TransfersPage.getDropDownOption().contains('EBQ11113487654').click()
});
When('user selects a credit account', () => {
    TransfersPage.getCreditToDropDown().click()
    TransfersPage.getDropDownOption().contains('EBQ11223487456').click()
});
When('user enters a transfer amount', () => {
    TransfersPage.getAmountToTransferInput().type('11')
});
When('user enters a transfer description', () => {
    TransfersPage.getDescriptionTextArea().type('Transfer test text')
});
When('user submits a transaction', () => {
    TransfersPage.getSubmitButton().click()
    TransfersPage.getSubmitButton().click()
});
Then('a message about successful transfer is displayed', () => {
    TransfersPage.getPopUpMessage().contains('Your request has been sent for approval. Request ID #')
});