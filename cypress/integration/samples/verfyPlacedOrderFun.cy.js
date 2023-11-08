///<reference types="Cypress" />
describe('Placed Order',function(){
    it('verify placed order fun',function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('cu')
        cy.wait(3000)
        cy.get(':nth-child(2) > .product-action > button').click()
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()


        
    })





})