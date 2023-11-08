///<reference types="Cypress" />
describe('Framework', function () {

    before(function()  {
        cy.fixture('example').then(function(data){
            this.data=data //global access
        })



    })
    it('Login ', function () {

        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(1) > .form-control').type(this.data.name)
        //Validating attribute properties and their behaviour with cypress assertions
        //checking min length of text box....having minlength attribute in given element
        cy.get(':nth-child(1) > .form-control').should('have.attr','minlength',2)

        //verify element disable mod or not
        //check box disable or anable is the behaviour thatsway use 'be.disabled'
        cy.get(".form-check input[id='inlineRadio3']").should('be.disabled')

        
        





    })

})    