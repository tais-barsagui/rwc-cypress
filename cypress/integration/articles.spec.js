/// <reference types="cypress" />

import articles from '../support/pages/articles'
import Routes from '../support/routes'

context('Artigos', () => {

    beforeEach(() => {
    Routes.init()
    
    //Preparação
    cy.backgroudLogin()
    articles.acessarFormularioDeNovaPublicacao()        
   });

    it('Criar um novo artigo', () => {
       //Ação
       articles.preencherFormulario()
       articles.submerterArtigo()        

       // Verificação
       articles.verificarSeAPublicacaoFoiCriadacomSucesso()
         
    });
});

//hooks -> momentos antes e depois do teste
// before / beforeEach
// after / afterEach

// AAA = Arrange Act Assert
// PAV = Preparação Ação Verificação