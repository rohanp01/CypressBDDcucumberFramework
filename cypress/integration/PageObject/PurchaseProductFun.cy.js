///<reference types="Cypress" />

import HomePage from "./HomePage.cy"
import ShopPage from "./ShopPage.cy"
import CheckOutPage from "./CheckOutPage.cy"
import PurchasePage from "./PurchasePage.cy"
describe('Purchase', function () {

    beforeEach(function () {
        cy.fixture('example').then(function (data) {
            this.data = data //global access
        })


    })
    it('Purchase Order', function () {
        const homePage = new HomePage()
        const shopPage = new ShopPage()
        const checkOutPage = new CheckOutPage()
        const purchasePage = new PurchasePage()


        cy.visit(this.data.URL)
        homePage.shopButtom()
        shopPage.iphoneAddtocartbtn()
        shopPage.checkOutBtn()
        checkOutPage.checkOutBtn()

        purchasePage.countryBox().type(this.data.countryName)
        cy.wait(7000)
        purchasePage.indiaCountry().click()
        purchasePage.checkBox().click( {force: true})
        
         purchasePage.purchaseOrderBtn()
         purchasePage.succesfulText().then(function(text){
           var textmsg=text.text()
           expect(textmsg.includes('Success')).to.be.true


         })

    })

})