export default class CommonElements {
    static loadSpinner() {
        return cy.get('div.spinner .la-ball-clip-rotate')
    }

    static messagesLink() {
        return cy.get('[ng-reflect-router-link="/messages"]')
    }
}