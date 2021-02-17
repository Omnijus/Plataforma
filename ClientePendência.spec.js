/// <reference types="cypress" />

describe('ClientePendencia', () => {


    before (()=> {
      cy.LoginCliente ('Admin', 'Pa$$word123') 
      {
  
}
       
})

it('Filtrar campo "Pendência" por "subsídio"', () => {
      
    cy.visit ('/pendencias')
    cy.get (':nth-child(2) > .omni-select') .select ("Subsídio")
    cy.get ('.btn-primary').click ()
    cy.get ('.filtros-aplicados_value__3VFkF').contains ('Subsídio')
    cy.scrollTo('bottomRight')
    cy.screenshot ()
      })

        
      it('Validar resolução do subsidio', () => {
      
        cy.visit ('/pendencias/resolucao-subsidio/8f606fa8-b845-442c-853e-8cc1f21f8ec5')
        cy.get('.title').contains ("Processo nº 1000876-46.2020.5.02.0004")
        cy.get ('.omni-select').contains ("Bom")
        cy.get (':nth-child(1) > .pendencias-subsidio_linhaSubsidio__3asMa > .pendencias-subsidio_checkBoxNaoPossui__2ao8B').contains ("Não possui subsídios")
           
      })

      it('Baixar subsídio', () => {
        cy.visit ('/pendencias/resolucao-subsidio/8f606fa8-b845-442c-853e-8cc1f21f8ec5')
        cy.get(':nth-child(3) > .pendencias-subsidio_fileListItem__3lz41 > [alt="Ícone de download"]').click ()

      }) 
    })

