/// <reference types="cypress" />


describe('Processo', () => {


  
  before (()=> {
    cy.LoginCliente ('Admin', 'Pa$$word123') 
     
})
        
     it('Acessar Aba Processo', () => {
     
            cy.visit ("/processos")
            cy.get (':nth-child(2) > .label') .contains ("Área")
            cy.wait(5000)
            cy.screenshot ()
     

        })
   
                
     it('Pesquisa por cod processo', () => {
      
                cy.visit ("/processos")
                cy.get ('.filtros > :nth-child(1) > .input') .type ("1500772-97.2020.8.26.0288")
                cy.viewport(1300, 1300) 
                cy.get ('.btn-primary') .click ()
                cy.get (':nth-child(2) > .label') .contains ("Área")
                cy.wait(5000)
                cy.screenshot ()
            })
               
      it('validar a exibição do rótulo', () => {
      
                    cy.visit ("/processos")
                    cy.get ('.filtros > :nth-child(1) > .input') .type ("1500772-97.2020.8.26.0288")
                    cy.viewport(1300, 1300) 
                    cy.get ('.btn-primary') .click ()
                    cy.get ('span.rotulo-movimentacao_rotulo__GwY9x:nth-child(1)') .contains ("teste 5")
                    cy.wait(5000)
                    cy.screenshot ()               
                      
    })

      it('Pesquisa por Estado', () => {
      
        cy.visit ("/processos")
        cy.get (':nth-child(16) > .omni-select').select ("São Paulo")
        cy.viewport(1300, 1300) 
        cy.get ('.btn-primary') .click ()
        cy.wait(5000)
        cy.screenshot ()
       
     })
       it('Pesquisa por Área', () => {
      
            cy.visit ("/processos")
            cy.get (':nth-child(2) > .omni-select').select ("Trabalhista")
            cy.viewport(1300, 1300) 
            cy.get ('.btn-primary') .click ()
            cy.get ('.filtros-aplicados_value__3VFkF').contains ("Trabalhista")
            cy.wait(5000)
            cy.screenshot ()
          })
        })