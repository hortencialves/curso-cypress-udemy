/// <reference types="cypress" />

import loc from '../../support/locators'
import '../../support/commandsContas'
/// esse aqui é a importacao dos comandos das contas
describe('Should test at a functional level', () => {
    before(() => {
        cy.login('test@tester.com', 'tester12345')
        cy.resetApp()
        // cy.visit('https://barrigareact.wcaquino.me')
        // cy.get(loc.LOGIN.USER).type('test@tester.com')
        // cy.get(loc.LOGIN.PASSWORD).type('tester12345')
        // cy.get(loc.LOGIN.BTN_LOGIN).click()
        // cy.get(loc.MESSAGE).should('contain', 'Bem vindo')
    })
    it('Should create an account', () => {
        cy.acessarMenuConta()
        cy.inserirConta('Creche')
        cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso!')
        // cy.get(loc.MENU.SETTINGS).click()
        // cy.get(loc.MENU.CONTAS).click()
        // cy.get(loc.CONTAS.NOME).type('Creche')
        // cy.get(loc.CONTAS.BTN_SALVAR).click()
    })

    it('Should update an account', () => {
        // cy.get('tr > :nth-child(2) > :nth-child(1) > .far').click()
        // cy.get(loc.MENU.SETTINGS).click()
        // cy.get(loc.MENU.CONTAS).click()
        cy.acessarMenuConta()
        
        cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Creche')).click()
        cy.get(loc.CONTAS.NOME)
            .clear()
            .type('Conta Alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso!')
    })
    it('Should not create an account with same name', () => {
        cy.acessarMenuConta()

        cy.get(loc.CONTAS.NOME).type('Conta Alterada')
        cy.get(loc.CONTAS.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'code 400')
    })
    it('Should create a transaction', () => {
        cy.get(loc.MENU.MOVIMENTACAO).click()

        cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Desc')
        cy.get(loc.MOVIMENTACAO.VALOR).type('123')
        cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Inter')
        cy.get(loc.MOVIMENTACAO.STATUS).click()
        cy.get(loc.MOVIMENTACAO.CONTA).select('Conta Alterada')
        cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
        cy.get(loc.MESSAGE).should('contain', 'sucesso')
        cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)
        cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO('Desc','123')).should('exist')
    })

    it('Should get balance', () => {
        cy.get(loc.MENU.HOME).click()
        cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta Alterada')).should('contain','123,00')
    })

    it('Should remove a transcation', ()=> {
        
    })

})