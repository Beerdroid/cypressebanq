import MessagesPage from "../../page_objects/MessagesPage";

describe('Messages scope', () => {
    const username = Cypress.env('userName')
    const password = Cypress.env('password')

    beforeEach(() => {
        cy.signIn(username, password)
        cy.visit('/messages')
    })

    const messages = ['Test1', 'Test2']
    messages.forEach(message => {
        it(`searches for message '${message}' via search input`, () => {
            MessagesPage.searchInput().clear().type(message)
            MessagesPage.messageSubject().should('contain.text', message)
        })
    })
})