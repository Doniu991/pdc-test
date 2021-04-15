describe('Add product to the cart', function () {
    it('Adding product to the cart', function () {
        
        const product = "24MX Shoe Deodorant Balls"

        cy.goToPage()
        cy.closePopup()
        cy.searchEngine(product)
        cy.longWait()
        cy.goToProductPage()
        cy.mediumWait()
        cy.addProductToTheCart()
        cy.checkProductInCart()
        })
})