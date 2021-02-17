describe('PrestadorAbaAtividades', () => {
   
    before (()=> {
        cy.LoginPrestador ('Admin', 'Pa$$word123') 
         
    })

       it('Visitar aba Atividades', () => {
           cy.visit ("/Atividades")
           cy.viewport(1300, 1300) 
     
        })


        it('Realizar filtro por "Período"', () => {
            cy.visit ("/Atividades")
            cy.viewport(1300, 1300) 
            cy.get (':nth-child(1) > .field-wrapper > :nth-child(1) > .content > .react-datepicker-wrapper > .react-datepicker__input-container > .input').type ("01/10/2020")
            cy.get (':nth-child(1) > .field-wrapper > :nth-child(2) > .content > .react-datepicker-wrapper > .react-datepicker__input-container > .input').type ("10/02/2021")
            cy.get ('.btn-primary').click ()
            cy.get ('.filtros-aplicados_filtrosAplicados__-brX6 > :nth-child(2)').contains ("Data de conclusão de:01/10/2020")
            cy.get ('.filtros-aplicados_filtrosAplicados__-brX6 > :nth-child(3)').contains ("Data de conclusão até:10/02/2021")
            cy.wait(5000)
            cy.screenshot ()
        
        })
        
        it('Realizar filtro por "Tipo de Atividade" e "Atividade"' , () => {
            cy.visit ("/Atividades")
            cy.viewport(1300, 1300) 
            cy.get(':nth-child(2) > .omni-select').select ("Entrevista Guiada")
            cy.get (':nth-child(3) > .omni-select').select ("Dados Iniciais Processo")
            cy.get ('.btn-primary').click ()
            cy.get ('.filtros-aplicados_tag__2EK28').contains ("Tipo de atividade:Entrevista Guiada")
            cy.get ('.filtros-aplicados_filtrosAplicados__-brX6 > :nth-child(3)').contains ("Atividade:Dados Iniciais Processo")
            cy.wait(5000)
            cy.screenshot ()
         })
        
         it('Realizar filtro por "Data de previsão de pagamento"', () => {
            cy.visit ("/Atividades")
            cy.viewport(1300, 1300) 
            cy.get (':nth-child(5) > .field-wrapper > :nth-child(1) > .content > .react-datepicker-wrapper > .react-datepicker__input-container > .input').type ("01/11/2020")
            cy.get (':nth-child(5) > .field-wrapper > :nth-child(2) > .content > .react-datepicker-wrapper > .react-datepicker__input-container > .input').type ("10/02/2021")
            cy.get ('.btn-primary').click ()
            cy.get ('.filtros-aplicados_filtrosAplicados__-brX6 > :nth-child(2)').contains ("Data de previsão de pagamento de:01/11/2020")
            cy.get ('.filtros-aplicados_filtrosAplicados__-brX6 > :nth-child(3)').contains ("Data de previsão de pagamento até:10/02/2021")
            cy.wait(5000)
            cy.screenshot ()
        
        })

        it('Exportar Excel ↓', () => {
            cy.visit ("/Atividades")
            cy.get ('.sc-bkzZxe > :nth-child(2)').click ()

        })

            it('Exportar CSV ↓', () => {
                cy.visit ("/Atividades")
                cy.get ('.sc-bkzZxe > :nth-child(2)').click ()

    })

    it('Ocultar Filtro ↑', () => {
        cy.visit ("/Atividades")
        cy.get ('.button').click ()
        

})
})

