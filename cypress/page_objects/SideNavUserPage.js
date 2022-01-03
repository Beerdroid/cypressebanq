export default class SideNavUserPage {
    static transfersMenu() {
        return cy.get('[routerlink*="transfer"] label')
    }

    static cardsMenu() {
        return cy.get('[routerlink*="my-cards"]')
    }
}