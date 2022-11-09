/// <reference types="cypress" />
// serve para o VSCODE entender que estamos a trabalhar com o Cypress
it('A external test...', () => {

})
// it serve para um caso de teste
// describe serve para agrupar testes
//skip serve para 'pular' um teste. Para que ele não seja executado.
// only serve para apenas aqueles testes executarem. No only só pode utilizar uma vez
// se não vai pegar somente o último. Já os skips eu posso usar mais de uma vez.

describe('Should group tests...', ()=> {
    it('A specific test...', () => {

    })

    describe('Should group more specifis tests2...', ()=> {
        it('A specific test2...', () => {
    
        })
    
    it.only('A internal test...', () => {
    
        })
    })

    it('A internal test...', () => {

    })
})