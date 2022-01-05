import {Given, Then, When} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from "../../support/page_objects/LoginPage";

Given("login page is opened", () => {
    cy.visit('/')
});
When("user enters username {string}", (username) => {
    LoginPage.usernameInput().clear().type(username)
});
When("user enters password {string}", (password) => {
    LoginPage.passwordInput().clear().type(password)
});
When("user submits credentials", () => {
    LoginPage.submitButton().click()
});
Then("my accounts page is opened", () => {
    cy.url().should('include', '/my-accounts');
});
Then("the error is displayed", () => {
    cy.contains("Wrong username or password.").should('be.visible')
});