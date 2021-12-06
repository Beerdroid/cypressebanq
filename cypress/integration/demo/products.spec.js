/// <reference types='cypress' />
import "cypress-real-events/support";

describe('Product page scope', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('navigates to the Product core page via nav menu', () => {
        cy.get('nav#main-nav span').contains('PRODUCTS').realHover()
        cy.get('ul.sub-menu li span').should('be.visible').should('have.length', 5)
        cy.get('ul.sub-menu li span').contains('EBANQ CORE').click()
        cy.log('This is a log record for a demo purpose')
        cy.get('title').should('have.text', 'EBANQ Core - Online Banking Software EBANQ®')
    }) 
})