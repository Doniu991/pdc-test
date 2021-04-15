Cypress.Commands.add('addYourVehicle', ()=> {
    cy.get('a.m-button').click()
})

Cypress.Commands.add('selectManufacturer', ()=> {
    cy.get('.gtm_fmb-select-brand > div:nth-child(1)').click()
    cy.get('li.a-select-item:nth-child(3)').click()
})

Cypress.Commands.add('selectModelYear', ()=> {
    cy.get('.gtm_fmb-select-year').click()
    cy.get('.m-select--active > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3)').click()
})

Cypress.Commands.add('selectModelVehicle', ()=> {
    cy.get('.gtm_fmb-select-model').click()
    cy.get('.m-select--active > div:nth-child(2) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(3)').click()
})