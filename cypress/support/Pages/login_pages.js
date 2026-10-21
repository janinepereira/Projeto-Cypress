
export function preencheremail(email) {
    cy.get('#user').type(email)
}

export function preenchersenha (password) {
    cy.get('#password').type(password)
}

export function clicaremlogin () {
    cy.get('#btnLogin').click()
}

export function verificalogin () {
    cy.get('#swal2-title', { timeout: 30000 }).should('have.text', 
      'Login realizado')
}

export function verificasenhainvalida (password) {
    cy.get('.invalid_input', { timeout: 30000 }).should('have.text', 
      'Senha inválida.')
}

export function verificaemailInvalido(email) {
    cy.get('.invalid_input', { timeout: 30000 }).should('have.text',
        'E-mail inválido.');
}