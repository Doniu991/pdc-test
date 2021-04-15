describe('Display mx gloves', function () {
    it('Display mx gloves from the equipment category', function () {
    cy.goToPage()
    cy.closePopup()
    cy.categoryMenu()
    cy.goToEquipmentmxCategory()
    cy.goToClothingmxSubCategory()
    cy.goToGlovesmxCategory()
    cy.viewProducts()
    })
})