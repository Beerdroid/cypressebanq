export default class SideNavUserPage {
    getTransfersMenu() {
        return cy.get('[routerlink*="transfer"] label')
    }

    getCardsMenu() {
        return cy.get('[routerlink*="my-cards"]')
    }
}