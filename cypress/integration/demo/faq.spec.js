/// <reference types='cypress' />
import "cypress-real-events/support";

describe('FAQ page scope', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('navigates to the FAQ page via nav menu', () => {
        cy.get('nav#main-nav span').contains('FAQ').click()
        cy.get('title').should('have.text', 'FAQ - Online Banking Software EBANQ®')
    })  
})