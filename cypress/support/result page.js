Cypress.Commands.add('goToProductPage', ()=> {
    cy.get('.qa-pl-items-grid > div').click()
  })