///<reference types="Cypress" />
describe('Web Table', function () {
    it('Web Table', function () {

        //tc- verify WebServices's pries in table currect or not (means price 35 or not)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.table-display td:nth-child(2)').each(($el, index, $list) => {
            var text = $el.text()
            if (text.includes('WebServices')) {
                //next() use for sibling 
                //text() is not cypree method this jquery method 
                // cy.get('.table-display td:nth-child(2)').eq(index).next().text()---> here text() cant resolve promise....then() method will resolve promise
                

                cy.get(".table-display td:nth-child(2)").eq(index).next().then(function (price) {
                    var priceText = price.text()
                    expect(priceText).to.equal('35')
                });

            }





        })




    })





})