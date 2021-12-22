import {Given} from "cypress-cucumber-preprocessor/steps";

Given('user is logged in', () => {
    const username = Cypress.env('userName')
    const password = Cypress.env('password')
    cy.signIn(username, password)
});