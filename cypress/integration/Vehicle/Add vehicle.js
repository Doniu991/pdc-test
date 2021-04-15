describe('Add vehicle', function () {
    it('Adding your vehicle to the search profile', function () {

        cy.goToPage()
        cy.closePopup()
        cy.addVehicle()
        cy.shortWait()
        cy.selectManufacturer()
        cy.selectModelYear()
        cy.selectModelVehicle()
        cy.checkVehicleSelection()
        })
})