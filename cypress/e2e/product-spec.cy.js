describe('Products testing', () => {
    it('should load the home page', () => {
        cy.visit('http://localhost:5000')

        cy.contains('h2', 'Welcome to E-commerce testing with Cypress')
    })

    it('should add a product to the cart and view the cart', () => {
        cy.visit('http://localhost:5000/products.html')
        
        cy.get('[data-product-id="abc123"]').click()
        cy.contains('Add to Cart').click()

        cy.get('a[href="/cart.html"]').click()

        cy.contains('h1', 'Shopping Cart')
        cy.contains('Product: abc123')
    })
})