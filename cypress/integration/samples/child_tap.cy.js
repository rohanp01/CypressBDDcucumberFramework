///<reference types="Cypress" />
describe('child Tab',function(){
    it('child tab',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('a[id="opentab"]').click()
        cy.get('a[id="opentab"]').invoke('removeAttr','target').click()
        cy.origin("https://www.qaclickacademy.com/",()=>{

        cy.get('.navbar-nav > :nth-child(4) > a').click()
        cy.get('.col-lg-5 h2').should('contain','Welcome to QAClick Academy ')


        })

        
    })





})