/// <reference types='cypress' />
import "cypress-real-events/support";

describe('Demo/Price page scope', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    /* ==== Test Created with Cypress Studio ==== */
    it('requests Demo-price generated test via Cypress Studio', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#menu-item-3111 > a > span').click();
        cy.get('#input_2_1').clear();
        cy.get('#input_2_1').type('Firstname').should('have.value', 'Firstname');
        cy.get('#input_2_8').clear();
        cy.get('#input_2_8').type('Lastname').should('have.value', 'Lastname');
        cy.get('#input_2_2').clear();
        cy.get('#input_2_2').type('test@gmail.com').should('have.value', 'test@gmail.com');
        cy.get('#choice_2_6_1').check().should('be.checked');
        /* ==== End Cypress Studio ==== */
    });
})