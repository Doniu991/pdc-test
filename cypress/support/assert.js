Cypress.Commands.add('viewProducts', ()=> {
  cy.get('.qa-pl-items-grid')
    .should('be.visible')
})

Cypress.Commands.add('checkProduct', ()=> {
  cy.get('.qa-pl-items-grid > div')
    .should('be.visible')
})

Cypress.Commands.add('checkProductInCart', ()=> {
  cy.get('div.o-cart-process__anim:nth-child(2)')
    .should('be.visible')
})

Cypress.Commands.add('checkVehicleSelection', ()=> {
  cy.get('.o-fmb-select-vehicle__content')
    .should('be.visible') 
})