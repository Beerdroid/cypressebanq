import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps'
import TransfersPage from "../../support/page_objects/TransfersPage";

Given('transfer between accounts page is loaded', () => {
    cy.visit('transfer/transfer-between-accounts')
});
When('user selects a debit account {string}', (account) => {
    TransfersPage.debitFromDropDown().click()
    TransfersPage.dropDownOption().contains(account).click()
});
When('user selects a credit account {string}', (account) => {
    TransfersPage.creditToDropDown().click()
    TransfersPage.dropDownOption().contains(account).click()
});
When('user enters a transfer amount {int}', (amount) => {
    TransfersPage.amountToTransferInput().type(amount)
});
When('user enters a transfer description {string}', (text) => {
    TransfersPage.descriptionTextArea().type(text)
});
When('user submits a transaction', () => {
    TransfersPage.submitButton().click()
    TransfersPage.submitButton().click()
});
Then('a message about successful transfer is displayed', () => {
    TransfersPage.popUpMessage().contains('Your request has been sent for approval. Request ID #')
});