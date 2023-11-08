///<reference types="Cypress" />
describe('DropDown', function(){
    it('Handle Static DropDown',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //
        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')





    })

})    