import MessagesPage from "../../support/page_objects/MessagesPage";

/*
Features:
1. Dynamic test approach
2. Data-provider approach
3. Screenshots
*/
describe.skip('Messages scope', () => {
    const username = Cypress.env('userName')
    const password = Cypress.env('password')

    beforeEach(() => {
        cy.signIn(username, password)
        cy.visit('/messages')
    })

    //Dynamic test
    const messages = ['Delaware Company', 'XRP Account']
    messages.forEach(message => {
        it(`searches for message '${message}' via search input`, () => {
            MessagesPage.searchInput().clear().type(message)
            MessagesPage.messageSubject().should('contain.text', message)
            cy.screenshot(`${message}`)
        })
    })

    //Data provider style
    const messages_data_provider = require('../../fixtures/messages.json')
    messages_data_provider.forEach(message => {
            it(`searches for message '${message}' via search input - data-provider`, () => {
                MessagesPage.searchInput().clear().type(message)
                MessagesPage.messageSubject().should('contain.text', message)
            })
        }
    )
})