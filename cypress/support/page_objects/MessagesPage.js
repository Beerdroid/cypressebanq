export default class MessagesPage {
    static searchInput() {
        return cy.get('input.search-container__input', {timeout: 12000})
    }

    static messageSubject() {
        return cy.get('[data-title="Subject"]')
    }
}