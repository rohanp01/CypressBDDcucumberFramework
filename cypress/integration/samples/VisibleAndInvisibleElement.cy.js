///<reference types="Cypress" />
describe('Visible And InvisibleElement',function()

{
    it('Verify Visible And Invisible Element', function() 
    {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        
    })



} )