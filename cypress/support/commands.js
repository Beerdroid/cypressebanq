// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import "cypress-localstorage-commands"
import LoginPage from "./page_objects/LoginPage";
import 'cypress-file-upload';
require('cy-verify-downloads').addCustomCommand();

Cypress.Commands.add('signIn', (email, password) => {
    const baseUrl = Cypress.env('apiBaseUrl')
    const signInPath = Cypress.env('signInPath')

    cy.api({
        method: 'POST',
        url: baseUrl + signInPath,
        body: {
            data: {
                email,
                password
            }
        }
    })
        .as('signInResponse')
        .its('body')
        .then(body => {
            cy.setLocalStorage('ebanq-auth', JSON.stringify(body.data))
        })
})

Cypress.Commands.add('login', (username, password) => {
    LoginPage.usernameInput().clear().type(username)
    LoginPage.passwordInput().clear().type(password)
    LoginPage.submitButton().click()
    cy.url().should('include', '/my-accounts');
})