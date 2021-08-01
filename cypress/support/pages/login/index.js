const el = require('./elements').ELEMENTS

class Login{

    acessarPaginaLogin() {
        cy.visit('login');
}         
    preencherFormularioLogin() {
        cy.get(el.inputEmail).type(Cypress.config().user.email)
        cy.get(el.inputPassword).type(Cypress.config().user.password)
    }    
    
     submeterFormularioLogin() {
        cy.get(el.buttonSubmit).click()
     }   

}

export default new Login();