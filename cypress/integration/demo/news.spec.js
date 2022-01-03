describe('News tests', () => {
    const username = Cypress.env('userName')
    const password = Cypress.env('password')

    beforeEach(() => {
        cy.signIn(username, password)
    })

    it('intercepts a news response and replaces with a custom one', () => {
        cy.visit('/')
        cy.intercept('**/article*', {fixture: 'news_stub.json'})
        cy.get('[routerlink="/user-news"]').click()
        cy.get('.table-content div.news-title').should('contain.text', 'Hello world! This title is STUBBED!')
    })
})