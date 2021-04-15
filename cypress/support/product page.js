Cypress.Commands.add('addProductToTheCart', ()=> {
  cy.get('.m-button--purchase').click()
})