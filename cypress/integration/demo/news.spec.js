import "cypress-real-events/support";
import NewsPage from "../../page_objects/NewsPage";
import SideNavPage from "../../page_objects/SideNavPage";

/*
Features:
1. interceptor
2. assertion styles
3. cypress real events plugin
*/
describe('News tests', () => {
    const username = Cypress.env('userName')
    const password = Cypress.env('password')

    beforeEach(() => {
        cy.signIn(username, password)
        cy.visit('/')
    })

    it('intercepts a news response and replaces with a custom one', () => {
        const stubbedHeader = 'Hello world! This title is STUBBED!'

        cy.intercept('**/article*', {fixture: 'news_stub.json'})

        SideNavPage.newsMenu().realHover().realClick()
        NewsPage.newsHeaderLink().should('contain.text', stubbedHeader)
        NewsPage.newsHeaderLink().should(header => {
            expect(header.text()).to.include(stubbedHeader)
        })
        NewsPage.newsHeaderLink().should(header => {
            assert.include(header.text(), stubbedHeader)
        })
    })
})