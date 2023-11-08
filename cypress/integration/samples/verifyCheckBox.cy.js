///<reference types="Cypress" />
describe('Checkbox', function(){
    it('verify check box',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked')
})

it('verify multiple check box',function(){

    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
  
    // find the common locator of the check box then in check method pass multiple value of the check box it will select those check box 
    cy.get('input[type="checkbox"]').check(['option1','option3'])
       cy.get 

})

//same for Radio buttons 





})