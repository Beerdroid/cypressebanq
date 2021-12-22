import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from "../../page_objects/LoginPage";
import TransfersPage from "../../page_objects/TransfersPage";

Given("login page is opened", () => {
    cy.visit('/')
});
When("user enters username {string}", (username) => {
    LoginPage.getUsernameInput().clear().type(username)
});
When("user enters password {string}", (password) => {
    LoginPage.getPasswordInput().clear().type(password)
});
When("user submits credentials", () => {
    LoginPage.getSubmitButton().click()
});
Then("my accounts page is opened", () => {
    cy.url().should('include', '/my-accounts');
});