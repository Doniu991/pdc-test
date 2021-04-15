Cypress.Commands.add('goToEquipmentmxCategory', ()=> {
    cy.get('li.m-navigation-mobile-item:nth-child(1)').click()
})

Cypress.Commands.add('goToClothingmxSubCategory', ()=> {
  cy.get('li.gtm_navigation-category-3:nth-child(1)').click()
})

Cypress.Commands.add('goToGlovesmxCategory', ()=> {
  cy.get('li.a-bottom-category-nav-item:nth-child(2)').click()
})

Cypress.Commands.add('goToHelmetsmxCategory', ()=> {
  cy.get('li.gtm_navigation-category-3:nth-child(2)').click()
})

Cypress.Commands.add('categoryMenu', ()=> {
  cy.get('.o-mobile-header__menu').click()
})

Cypress.Commands.add('addVehicle', ()=> {
  cy.get('.o-mobile-header__fmbicon').click()
})

Cypress.Commands.add('searchEngine', (product)=> {
  cy.get('#search-tablet').click()
    .type(product)
    .type('{ENTER}')
})