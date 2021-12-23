import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from "../../page_objects/LoginPage";

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
Then("the error is displayed", () => {
    cy.contains("Wrong username or password.").should('be.visible')
});