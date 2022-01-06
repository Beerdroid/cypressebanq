export default class NewsPage {
    static newsHeaderLink() {
        return cy.get('.table-content div.news-title').should('be.visible')
    }
}