///<reference types="Cypress" />

//const cypress = require("cypress")



describe('Framework2 customise cmd', function () {
    //beforeEach this method execute every it block
    
    beforeEach(function () {
        cy.fixture('example').then(function (data) {
            this.data = data //global access
        })



    })
    it('Shop ', function () {
        
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        //TC- grabb all product and select perticuler product and click on add cart btn
        //in customise cmd use support-commands.js in this file we create custome method ans use in tc

        cy.get(' :nth-child(2)> a.nav-link').click()
        cy.selectProduct(this.data.pName)





    })

    it('add to cart two product ', function () {

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        //TC- grabb all product and select two product and click on add cart btn
        //in customise cmd use support-commands.js in this file we create custome method ans use in tc

        cy.get(' :nth-child(2)> a.nav-link').click()

        this.data.products.forEach(function (element) {
            cy.log(element)
            cy.selectProduct(element)
            cy.pause() //scrit will pause to help to debug
        })

        
        



    })

})    