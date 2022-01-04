export default class CommonElements {
    static getLoadSpinner() {
        return cy.get('div.spinner .la-ball-clip-rotate')
    }

    static messagesLink() {
        return cy.get('[ng-reflect-router-link="/messages"]')
    }
}