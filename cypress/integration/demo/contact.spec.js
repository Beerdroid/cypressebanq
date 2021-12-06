/// <reference types='cypress' />
import "cypress-real-events/support";
import ContactPage from '../../page_objects/ContactPage'

describe('Contact page scope', () => {
    const contactPage = new ContactPage();

    beforeEach(() => {
        contactPage.visit();    
    })

    it('fills Contact Us form', function () {
        contactPage.getNameInput().clear().type('TestName').should('have.value', 'TestName');
        contactPage.getEmailInput().clear().type('test@gmail.com').should('have.value', 'test@gmail.com');
        contactPage.getSubjectInput().clear().type('TestSubj').should('have.value', 'TestSubj');
        contactPage.getPhoneInput().clear().type('1112233').should('have.value', '1112233');
        contactPage.getMessageTextArea().click().type('Test message').should('have.value', 'Test message');
        contactPage.getTermsCheckBox().check().should('be.checked');
        cy.screenshot('contact-page-form')
    });
})