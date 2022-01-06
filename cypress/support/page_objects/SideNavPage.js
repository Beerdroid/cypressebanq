export default class SideNavPage {
    static transfersMenu() {
        return cy.get('[routerlink*="transfer"] label')
    }

    static cardsMenu() {
        return cy.get('[routerlink*="my-cards"]')
    }

    static newsMenu() {
        return cy.get('[routerlink="/user-news"]')
    }
}