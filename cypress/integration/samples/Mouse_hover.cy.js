///<reference types="Cypress" />
describe('mouse hover',function(){
    it('mouse hover',function(){

        //tc - mouse hover on element and select 'Top'
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       // cy.get('div.mouse-hover-content').invoke('show') // show will showing all option in mouse hover ele
        
       
       cy.contains('Top').click({force: true})// ---forcefully clicked hidden ele
        cy.url().should('includes','top')


        
        
    })





})