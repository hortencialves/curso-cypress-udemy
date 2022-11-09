import loc from './locators'
// essa importacao é feita porque estamos usando os dados da pasta locators.
/// Desse jeito que esta aqui os comandos não são usados diretamente, somente se estiverem na pasta index.
/// Como ele é específico de contas eu so importo onde ele é extremamente necessário que é em contas.
Cypress.Commands.add('acessarMenuConta', () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
})

Cypress.Commands.add('inserirConta', conta => {
    cy.get(loc.CONTAS.NOME).type(conta)
    cy.get(loc.CONTAS.BTN_SALVAR).click()
})