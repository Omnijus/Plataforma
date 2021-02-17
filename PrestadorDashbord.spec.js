describe('PrestadorDashbord', () => {
   
    before (()=> {
        cy.LoginPrestador ('Admin', 'Pa$$word123')   
    })
    it('Verificar "Atividades Disponíveis"', () => {
        cy.get (':nth-child(1) > .info > .title').contains ("Atividades Disponíveis")
        cy.viewport(1300, 1300) 
       })
     
     it('Verificar "Atividades Realizadas"', () => {
        cy.viewport(1300, 1300) 
        cy.get (':nth-child(2) > .info > .title').contains ("Atividades realizadas")
        cy.wait(5000)
        cy.screenshot ()
    })

    it('Verificar "Valor a receber"', () => {
        cy.viewport(1300, 1300) 
        cy.get (':nth-child(3) > .info > .title').contains ("Valor a receber")
        cy.wait(5000)
        cy.screenshot ()
    })
    it('Validar colunas das atividades disponíveis', () => {
        cy.viewport(1300, 1300) 
        cy.get (':nth-child(1) > table > thead > tr > :nth-child(1)').contains ("Tipo de atividade")
        cy.get (':nth-child(1) > table > thead > tr > :nth-child(2)').contains ("Atividade")
        cy.get (':nth-child(1) > table > thead > tr > :nth-child(3)').contains ("Disponível")
        cy.get (':nth-child(1) > table > thead > tr > :nth-child(4)').contains ("Tempo mínimo")
        cy.get (':nth-child(1) > table > thead > tr > :nth-child(5)').contains ("Tempo máximo")
        cy.get (':nth-child(1) > table > thead > tr > :nth-child(6)').contains ("Valor unitário mínimo")
        cy.get (':nth-child(1) > table > thead > tr > :nth-child(7)').contains ("Valor unitário máximo")
        cy.screenshot ()
    })

    it('Validar Link da atividade "Revisão Dados Iniciais Processo"', () => {
        cy.visit ("/atividades/executar-atividade/24a4a150-02e6-4229-8042-c03d8df5f3b4") 
        cy.viewport(1300, 1300) 
        cy.wait(5000)
        cy.screenshot ()
    })

        it('Validar Link da atividade "Dados Iniciais Processo"', () => {
            cy.visit ("/atividades/executar-atividade/57e4765a-5c81-42c9-be3a-fc37190c6f9f") 
            cy.viewport(1300, 1300) 
            cy.wait(5000)
            cy.screenshot ()

        })

        it('Validar Link da atividade "Revisão Contestação Trabalhista"', () => {
            cy.visit ("/atividades/executar-atividade/86e1fe86-0f24-46b7-bbf7-d6991a1d5e19") 
            cy.viewport(1300, 1300) 
            cy.wait(5000)
            cy.screenshot ()

        })


        it('Validar Link da atividade "Contestação Trabalhista"', () => {
            cy.visit ("atividades/executar-atividade/e752d1c5-80e2-44f2-bb24-7770b7f81dd2") 
            cy.viewport(1300, 1300) 
            cy.wait(5000)
            cy.screenshot ()

        })


        it('Verificar "Atividades últimos 6  meses" em quantidade', () => {
            cy.visit ('/')
            cy.viewport(1300, 1300) 
            cy.get('.recharts-label > tspan').contains ("Quantidade")
            cy.wait(5000)
            cy.screenshot ()

        })

        it('Verificar "Atividades últimos 6  meses" em valor', () => {
            cy.visit ('/')
            cy.viewport(1300, 1300) 
            cy.wait(5000)
            cy.get('.react-toggle-track') .click ()
            cy.get ('.recharts-label > tspan').contains ("Valor (R$)")
            cy.wait(5000)
            cy.screenshot ()
 
         })
 


         it('Validar colunas atividades Realizadas', () => {
            cy.visit ('/')
            cy.viewport(1300, 1300) 
            cy.get ('.table-atividades-realizadas > table > thead > tr > .text-left') .contains ("Data")
            cy.get ('.table-atividades-realizadas > table > thead > tr > :nth-child(2)') .contains ("Quantidade")
            cy.get ('.table-atividades-realizadas > table > thead > tr > :nth-child(3)') .contains ("Tempo gasto")
            cy.get ('.table-atividades-realizadas > table > thead > tr > :nth-child(4)') .contains ("Valor a receber")
            cy.wait(5000)
            cy.screenshot ()
 
         })


         it('Verificar "Próximos Pagamentos"', () => {
            cy.visit ('/')
            cy.get('titulo-destaque') .contains ("Próximos pagamentos")
            cy.wait(5000)
            cy.screenshot ()
 
         })
 
})