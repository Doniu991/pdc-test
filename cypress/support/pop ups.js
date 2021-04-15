Cypress.Commands.add('closeOffer', ()=> {
    cy.get('div.m-button').click()
  })

  Cypress.Commands.add('closePopup', ()=> {
    cy.get('div.m-button').click()
    cy.get('.NostoOverlayClosePermanently').click()
  })