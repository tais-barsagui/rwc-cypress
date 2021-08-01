/// <reference types="cypress" />

const faker = require('faker')

const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Articles {
1      
    acessarFormularioDeNovaPublicacao(){
        cy.get('a[href*=editor]').click()
    }

    preencherFormulario(){
        // preencher o formulário do artigo
        cy.get(el.inputTitle).type('Agilizei Title')
        cy.get(el.inputDescription).type('Cypress')
        cy.get(el.textAreaContent).type(faker.lorem.paragraph())
        cy.get(el.inputTags).type('cypress')
    }

    submerterArtigo(){
        // submeter o artigo 
        cy.get(el.buttonSubmit).click() 

    }   

    verificarSeAPublicacaoFoiCriadacomSucesso(){
        //template string
        cy.wait(`@${Routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticlesTitle}`).then((getArticlesTitle) => {
            expect(getArticlesTitle.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticlesTitleComments}`).then((getArticleTitleComments) => {
            expect(getArticleTitleComments.status).to.eq(200)
        })
    }
}

export default new Articles();