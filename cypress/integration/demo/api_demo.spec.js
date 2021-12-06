/// <reference types='cypress' />

describe('Petstore API demo', () => {
    const baseUrl = Cypress.config('apiBaseUrl')

    it('creates a new pet and check it is available in the GET end-point', () => {
        cy.fixture('create_pet_payload').as('payload')
        cy.get('@payload').then(payload => {
            cy.request('POST', baseUrl + '/pet', payload).then(response => {
                expect(response.status).to.eq(200)
                cy.log(JSON.stringify(response.body))
                cy.wrap(response.body.id).as('id')
            })
            cy.get('@id').then(id => {
                cy.request('GET', baseUrl + `/pet/${id}`).then(response => {
                    expect(response.status).to.eq(200)
                    cy.log(JSON.stringify(response.body))
                })
            }

            )
        })
    })
})