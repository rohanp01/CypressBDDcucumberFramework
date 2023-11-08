class HomePage {
    // https://rahulshettyacademy.com/angularprac this is webside


    enterName() {

        return cy.get(':nth-child(1) > .form-control')
    }
    enterEmail() {

        return cy.get(':nth-child(2) > .form-control')
    }
    enterPassword() {

        return cy.get('#exampleInputPassword1')
    }
    checkbox() {

        return cy.get('#exampleCheck1')
    }
    genderMale() {

        cy.get('#exampleFormControlSelect1').select('Male')
    }
    genderfemale() {

        cy.get('#exampleFormControlSelect1').select('Female')
    }
    shopButtom() {

        cy.get(':nth-child(2)>.nav-link').click()
    }
    





}

export default HomePage
