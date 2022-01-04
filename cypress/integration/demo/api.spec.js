describe('API example', () => {
    const baseUrl = Cypress.env('apiBaseUrl')
    const getCardsPath = '/accounts/private/v1/own-cards'

    beforeEach('get accessToken via API', () => {
        const username = Cypress.env('userName')
        const password = Cypress.env('password')
        cy.signIn(username, password)
        cy.get('@signInResponse').then(response => {
            cy.wrap(response.body.data.accessToken).as('accessToken')
            cy.get('@accessToken').then(token => {
                cy.log(token)
            })
        })
    })

    it('gets user cards', () => {
        cy.get('@accessToken').then((accessToken) => {
            cy.api({
                method: 'GET',
                url: baseUrl + getCardsPath,
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                }
            }).then(response => {
                expect(response.status).to.eq(200)
                cy.log(JSON.stringify(response.body))
                expect(response.body.data[0].userId).to.eql('d5983e72-0a79-4076-9bf9-4eec2dac73f1')
            })
        })
    })
})
