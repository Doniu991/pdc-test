Cypress.Commands.add('goToPage', ()=> {
  cy.visit(Cypress.env('url'))
})