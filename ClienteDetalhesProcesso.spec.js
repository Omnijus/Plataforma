/// <reference types="cypress" />

describe('DetalhesProcesso', () => {


     before (()=> {
       cy.LoginCliente ('Admin', 'Pa$$word123') 
        
 })
                              
  
        it('Acessar detalhes do processo', () => {
   
                cy.visit ('https://cliente-qa.omnijus.net.br/processos')
                cy.get ('.filtros > :nth-child(1) > .input') .type ("1500772-97.2020.8.26.0288")
                cy.viewport(1300, 1300) 
                cy.get ('.btn-primary') .click ()
                cy.get (':nth-child(2) > .label') .contains ("Área")
                cy.visit ('https://cliente-qa.omnijus.net.br/processos/detalhes/01175dc0-9db5-40e8-915a-d14885ed7ec5') 
            })

           it('Validar a exibição do rótulo', () => {
      
            cy.visit ('https://cliente-qa.omnijus.net.br/processos/detalhes/01175dc0-9db5-40e8-915a-d14885ed7ec5')
            cy.get (':nth-child(1) > .card-movimentacao > .movimentacao-rotulos > :nth-child(1)') .contains ("teste 5")
            cy.wait(5000)
            cy.screenshot ()
           })
       })