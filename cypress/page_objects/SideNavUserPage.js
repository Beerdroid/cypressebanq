export default class SideNavUserPage {
    static getTransfersMenu() {
        return cy.get('[routerlink*="transfer"] label')
    }

    static getCardsMenu() {
        return cy.get('[routerlink*="my-cards"]')
    }
}