/// <reference types="cypress"/>

describe('Comandos básicos', () => {
    it("Acessar uma URL", () => {
    cy.visit('https://automationpratice.com.br/login')   
 });
    
    it("Encontrar elementos", () =>{
     cy.visit('https://automationpratice.com.br/login')
     cy.get('#user').type('edu@teste.com')
     cy.get('#password').type('123456')
     cy.get('#btnLogin').click()
     cy.get('.mc-form')

    // get () - encontra um elemento
    // cy.get('#user')

    // find() - encontra um elemento
    //diminui o escopo com o get () - .class button
     //cy.get('.mc-form').find('.form-control')

     //contains () - encontra um elemento por Texto
     //diminui o escopo com get()
     // cy.get ('.mc-form').contains('Send')

    });

    it("Preencher campo", () => {
    cy.visit('https://automationpratice.com.br/login')
    cy.get('#user').type('edu@teste.com')
    cy.get('#password').type('123456')
    cy.get('.mc-form')
       .find('.form-control')
       .type('edua@teste.com{enter}')

    })

    it("Clicar", ()=> {
        cy.visit('https://automationpratice.com.br/login')
        cy.get('#btnLogin').click()
        cy.get('#btnLogin')
    })

    it('Select' , () => {
       cy.visit('https://automationpratice.com.br/checkout-one')
       cy.get('#country').select('usa')
     
    })

     it('Checkbox/Radio' , () => {
       cy.visit('https://automationpratice.com.br/checkout-one')
       cy.get('#materialUnchecked').check ()
            
    })

     it('Checkbox/Radio' , () => {
       cy.visit('https://automationpratice.com.br/checkout-one')
       cy.get('#materialUnchecked').uncheck()
       cy.get('#css').check()
       
    })

     it('Validar um elemento' , () => {
       cy.visit('https://automationpratice.com.br/login')
       cy.get('#user').type('21212')
       cy.get('#password').type('123456')
       cy.get('#btnLogin').click ()  
       cy.get('.invalid_input')
            .should('have.text',"E-mail inválido.")
            .should('be.visible')
    });
});