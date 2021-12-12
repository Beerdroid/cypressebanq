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

import LoginPage from "../page_objects/LoginPage"

Cypress.Commands.add('login', (user, password) => {
    const loginPage = new LoginPage()
    cy.visit('/')
    loginPage.getUsernameInput().clear().type(user)
    loginPage.getPasswordInput().clear().type(password)
    loginPage.getSubmitButton().click()
    cy.location('pathname', {timeout: 10000}).should('include', '/my-accounts');
})

Cypress.Commands.add('signIn', (email, password) => {
    const baseUrl = Cypress.env('apiBaseUrl')
    const signInPath = '/users/public/v1/auth/signin'

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
        .then((response) => {
            Cypress.env('token', response.body.accessToken) // either this or some global var but remember that this will only work in one test case
            return response
        })
        .its('status')
        .should('eq', 200)
})
