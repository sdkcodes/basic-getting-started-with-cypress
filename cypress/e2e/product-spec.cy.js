describe('Products testing', () => {
    it('should load the home page', () => {
        cy.visit('http://localhost:5000')

        //verify that an h2 element contains the text 'Welcome to E-commerce testing with Cypress'
        cy.contains('h2', 'Welcome to E-commerce testing with Cypress')
    })

    it('should add a product to the cart and view the cart', () => {
        //visit our product page
        cy.visit('http://localhost:5000/products.html')
        
        // look for an element with this product-id and click the add to cart button
        cy.get('[data-product-id="abc123"]').click()
        cy.contains('Add to Cart').click()

        // then go to the cart page
        cy.get('a[href="/cart.html"]').click()

        // verify that the product we added to cart exists on the cart page
        cy.contains('h1', 'Shopping Cart')
        cy.contains('Product: abc123')
    })
})