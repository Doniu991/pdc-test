describe('Search product', function () {
    it('Searching product Cross Raven Airborne Stealth', function () {
        
        const product = "Raven Rival Obscure Blacken MX"

        cy.goToPage()
        cy.closePopup()
        cy.searchEngine(product)
        cy.longWait()
        cy.checkProduct()
        })
})