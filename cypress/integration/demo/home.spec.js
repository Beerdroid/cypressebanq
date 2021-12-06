/// <reference types='cypress' />

describe('Home page scope', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('navigates to the Home page with base URL', () => {
        cy.get('title').should('have.text', 'Home - Online Banking Software EBANQ®')
    })
})