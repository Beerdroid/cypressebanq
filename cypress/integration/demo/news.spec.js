/// <reference types='cypress' />
import "cypress-real-events/support";

describe('News page scope', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('navigates to the News page via nav menu', () => {
        cy.get('nav#main-nav span').contains('NEWS').click()
        cy.get('title').should('have.text', 'News - Online Banking Software EBANQ®')
    })  
})