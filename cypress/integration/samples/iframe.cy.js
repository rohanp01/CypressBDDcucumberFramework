///<reference types="Cypress" />
///<reference types="Cypress-iframe" />
import 'cypress-iframe'

describe('iFrame', function () {
    it('iFrame', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe') //first load the iframe 
        cy.iframe().find("a[href='mentorship']").eq(1).click({force: true})


    })





})