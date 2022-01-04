import MyProfilePage from "../../page_objects/MyProfilePage";
const path = require('path')

/*
Features:
1. verify download plugin
2. file upload plugin
3. upload / download feature
*/
describe('My profile tests', () => {
    const username = Cypress.env('userName')
    const password = Cypress.env('password')
    const downloadsFolder = Cypress.config('downloadsFolder')

    beforeEach(() => {
        cy.signIn(username, password)
        cy.visit('/my-profile/files')
    })

    it('uploads a txt file and verifies content after download', {tags: '@upload-download'}, () => {
        const fileName = 'hello_world.txt'
        MyProfilePage.fileDropZoneInput().attachFile(fileName)
        MyProfilePage.saveFileUploadButton().click()
        MyProfilePage.notification().should('be.visible')
        MyProfilePage.latestFileName().should('contain.text', fileName)
        MyProfilePage.latestFileDownloadButton().click()
        MyProfilePage.latestFileName().invoke('attr', 'title').then(title => {
            const filename = path.join(downloadsFolder, title)
            cy.readFile(filename).should('eq', 'Hello world file content')
            cy.verifyDownload(title)
        })
    })
})