///<reference types="Cypress" />

import HomePage from "./HomePage.cy"
describe('Login', function () {

    beforeEach(function () {
        cy.fixture('example').then(function (data) {
            this.data = data //global access
        })


    })
    it('verify login fun', function () {
       const homePage= new HomePage()
        cy.visit(this.data.URL)
        homePage.enterName().type(this.data.name)
        homePage.enterEmail().type(this.data.email)
        homePage.enterPassword().type(this.data.password)
        homePage.genderfemale()




    })

})