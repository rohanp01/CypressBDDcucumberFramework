class ShopPage {
    iphoneAddtocartbtn() {

        cy.get(':nth-child(1) > .card > .card-footer > .btn').click()
    }
    checkOutBtn(){
        cy.get('.nav-link.btn.btn-primary').click()
    }








}
export default ShopPage