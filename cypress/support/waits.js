Cypress.Commands.add('veryShortWait', ()=> {
    cy.wait(800)
})

Cypress.Commands.add('shortWait', ()=> {
    cy.wait(1000)
})

Cypress.Commands.add('mediumWait', ()=> {
    cy.wait(3000)
})

Cypress.Commands.add('longWait', ()=> {
    cy.wait(6000)
})