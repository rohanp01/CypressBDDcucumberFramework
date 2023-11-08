///<reference types="Cypress" />
describe('DropDown', function(){
    it('Handle Dynamic DropDown',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('input[id="autocomplete"]').type('ind')
        //$el---> all element store in array 
        //cy.get('ul[id="ui-id-1"] li')--> it having 3 ele ---each loop will find india and click it
        cy.get('ul[id="ui-id-1"] li').each(($el, index, $list) =>{
        if($el.text()=='India')
            $el.click()


        })
        //this will check exepected India has selected or not
        cy.get('input[class="inputs ui-autocomplete-input"]').should('have.value','India')


    })

})    