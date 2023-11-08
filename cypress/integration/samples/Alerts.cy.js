///<reference types="Cypress" />
describe('Alerts',function(){
    it('Window Alerts',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()
        //this alert having only cancel option thatsway use 'window:alert'
        cy.on('window:alert',(str)=>{
            //mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')


        })
        //this alert having cumfirm and cancel option thatsway use 'window:confirm'
        cy.on('window:confirm',(str)=>{
            //mocha 
            expect(str).to.equal('Hello , Are you sure you want to confirm?')


        })
       

        
    })





})