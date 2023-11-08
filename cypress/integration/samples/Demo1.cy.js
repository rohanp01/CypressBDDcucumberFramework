///<reference types="Cypress" />
describe('This is my first suite',function()

{
    it('This is my first test case', function() 
    {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('cu')
        cy.wait(4000)
        cy.get('div[class=product]').should('have.length',2)
        //cy.get('div[class=product]').eq(1).contains('ADD TO CART').click()
        cy.get('div[class=product]').each(($el, index, $list) =>{
            const fuirtname=$el.find('h4.product-name').text()
            if(fuirtname.includes('Capsicum'))
            {
                $el.find('button').click()
                

            }
            

        })

    })



} )