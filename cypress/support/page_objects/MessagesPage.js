export default class MessagesPage {
    static searchInput() {
        return cy.get('input.search-container__input')
    }

    static messageSubject() {
        return cy.get('[data-title="Subject"]')
    }
}