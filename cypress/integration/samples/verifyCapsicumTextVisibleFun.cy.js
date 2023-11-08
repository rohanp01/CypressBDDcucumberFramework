///<reference types="Cypress" />
describe('Verify text field',function()

{
    it('Verify text field of Capsicum', function() 
    {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('cu')
        cy.wait(4000)
        cy.get('.products > :nth-child(2) > .product-name').should('have.text','Capsicum')
        cy.log('TC passed')
        
    })



} )