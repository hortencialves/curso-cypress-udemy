/// <reference types="cypress" />

describe('Work with a basic elements', () => {
    before(() => {
        cy.visit ('https://wcaquino.me/cypress/componentes.html')
    })
    beforeEach(() => {
        cy.reload()
    })
    
    
    it('Text', () => {
        cy.get('body').should('contain', 'Cuidado')
        cy.get('span').should('contain', 'Cuidado')
        cy.get('.facilAchar').should('have.text', 'Cuidado onde clica, muitas armadilhas...')

    })

    it('Links', () => {
        cy.get('a').first().click()
        cy.get('#resultado').should('have.text', 'Voltou!')
        
        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
        cy.contains('Voltar').click()
    })

    it.only('TextFields', () => {
        cy.get('#formNome').type('Cypress Test')
        cy.get('#formNome').should('have.value', 'Cypress Test')

        cy.get('#elementosForm\\:sugestoes')
            .type('textarea')
            .should('have.value', 'textarea')

        cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
            .type('?????')

        cy.get('[data-cy=dataSobrenome]')
            .type('Teste12345{backspace}{backspace}')
            .should('have.value', 'Teste123')

        cy.get('#elementosForm\\:sugestoes')
            .clear()
            .type('Erro{selectall}acerto')
            .should('have.value', 'acerto', { delay: 100 })
    })

    it('Radio Button', () => {
        cy.get('#formSexoFem').click()
            .should('be.checked')
        
        cy.get('#formSexoMasc')
            .should('be.not.checked')

        cy.get("[name=formSexo]").should('have.length', 2)
    })

    it('Checkbox', () => {
        cy.get('#formComidaPizza')
            .click()
            .should('be.checked')

        cy.get('[name="formComidaFavorita"]').click( { multiple: true })
        cy.get('#formComidaPizza').should('be.not.checked')
        cy.get('#formComidaVegetariana').should('be.checked')
    })
    it('Combo', ()=> {
        cy.get('[data-test=dataEscolaridade]')
            .select('2graucomp')
            .should('have.value', '2graucomp')
    })

    it.only('Combo M??ltiplo', ()=>{
        cy.get('[data-testid=dataEsportes]')
            .select(['natacao','Corrida', 'nada'])
    })


    // TODO validar op????es do combo m??ltiplo
})