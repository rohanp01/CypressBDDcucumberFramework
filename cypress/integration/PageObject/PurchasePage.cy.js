class PurchasePage {

    purchaseOrderBtn() {

        cy.get('form.ng-untouched > .btn').click()


    }
    countryBox() {

        return cy.get('#country')


    }

    indiaCountry() {

        return cy.get('.suggestions > ul > li > a')


    }
    checkBox() {

        return cy.get('#checkbox2')


    }

    succesfulText(){
        return cy.get('.alert.alert-success.alert-dismissible')
    }


}
export default PurchasePage

