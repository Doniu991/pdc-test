describe('Display mx helmets', function () {
    it('Display mx helmets from the equipment category', function () {
        cy.goToPage()
        cy.closePopup()
        cy.categoryMenu()
        cy.goToEquipmentmxCategory()
        cy.goToHelmetsmxCategory()
        cy.viewProducts()
        })
})