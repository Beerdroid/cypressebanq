export default class MyProfilePage {
    static fileBrowseButton() {
        return cy.get('file-drop span')
    }

    static fileDropZoneInput() {
        return cy.get('#dropZone input', {timeout: 12000})
    }

    static saveFileUploadButton() {
        return cy.get('[type="submit"]')
    }

    static latestFileName() {
        return this.latestFileRow().find('[data-title="Name"]:nth-of-type(2)')
    }

    static tableRow() {
        return cy.get('tbody tr')
    }

    static notification() {
        return cy.get('div.simple-notification')
    }

    static latestFileDownloadButton() {
        return this.latestFileRow().find('a.medium')
    }

    static latestFileRow() {
        return this.tableRow().first()
    }
}