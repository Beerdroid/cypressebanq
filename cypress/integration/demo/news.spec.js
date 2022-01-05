import "cypress-real-events/support";
import NewsPage from "../../support/page_objects/NewsPage";
import SideNavPage from "../../support/page_objects/SideNavPage";

/*
Features:
1. interceptor
2. assertion styles
3. cypress real events plugin
4. Suite and test retries config
*/
describe('News tests',
    {
        retries: {
            runMode: 2,
            openMode: 1,
        },
    },
    () => {
        const username = Cypress.env('userName')
        const password = Cypress.env('password')

        beforeEach(() => {
            cy.signIn(username, password)
            cy.visit('/')
        })

        it('intercepts a news response and replaces with a custom one',
            {
                retries: {
                    runMode: 2,
                    openMode: 1,
                },
            },
            () => {
                const stubbedHeader = 'Hello world! This title is STUBBED!'

                cy.intercept('**/article*', {fixture: 'news_stub.json'})

                SideNavPage.newsMenu().realHover().click()
                NewsPage.newsHeaderLink().should('contain.text', stubbedHeader)
                NewsPage.newsHeaderLink().should(header => {
                    expect(header.text()).to.include(stubbedHeader)
                })
                NewsPage.newsHeaderLink().should(header => {
                    assert.include(header.text(), stubbedHeader)
                })
            })
    })