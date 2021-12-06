/// <reference types='cypress' />
import "cypress-real-events/support";

describe('About us page scope', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('navigates to the About us page via nav menu', () => {
        cy.get('nav#main-nav span').contains('ABOUT US').click()
        cy.get('title').should('have.text', 'About Us - Online Banking Software EBANQ®')
    }) 
})