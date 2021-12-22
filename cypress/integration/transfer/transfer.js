import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps'
import TransfersPage from "../../page_objects/TransfersPage";

Given('transfer between accounts page is loaded', () => {
    cy.visit('transfer/transfer-between-accounts')
});
When('user selects a debit account {string}', (account) => {
    TransfersPage.getDebitFromDropDown().click()
    TransfersPage.getDropDownOption().contains(account).click()
});
When('user selects a credit account {string}', (account) => {
    TransfersPage.getCreditToDropDown().click()
    TransfersPage.getDropDownOption().contains(account).click()
});
When('user enters a transfer amount {int}', (amount) => {
    TransfersPage.getAmountToTransferInput().type(amount)
});
When('user enters a transfer description {string}', (text) => {
    TransfersPage.getDescriptionTextArea().type(text)
});
When('user submits a transaction', () => {
    TransfersPage.getSubmitButton().click()
    TransfersPage.getSubmitButton().click()
});
Then('a message about successful transfer is displayed', () => {
    TransfersPage.getPopUpMessage().contains('Your request has been sent for approval. Request ID #')
});