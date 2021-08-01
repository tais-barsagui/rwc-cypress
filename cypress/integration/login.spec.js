/// <reference types="cypress" />

import login from '../support/pages/login'
context('Login', () => {
    it('Realizar login com sucesso', () => {
       login.acessarPaginaLogin()
       login.preencherFormularioLogin()
       login.submeterFormularioLogin()

        // verificação
    });
});
