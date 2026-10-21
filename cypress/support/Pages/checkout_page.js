// Ações e validações da página de checkout (dados de cobrança)

const MENSAGEM_SUCESSO = 'Billings Information registred with success!'

const SELETOR_METODO_PAGAMENTO = {
    paypal: '#css',
    mobile_bank: '#javascript',
    bank_transfer: '#html',
}

export function preenchePrimeiroNome(nome) {
    cy.get('#fname').type(nome)
}

export function preencheSobreNome(sobrenome) {
    cy.get('#lname').type(sobrenome)
}

export function preencheEmpresa(empresa) {
    cy.get('#cname').type(empresa)
}

export function preencheEmail(email) {
    cy.get('#email').type(email)
}

export function selecionaPais(pais) {
    cy.get('#country').select(pais)
}

export function selecionaCidade(cidade) {
    cy.get('#city').select(cidade)
}

export function preencheCep(cep) {
    cy.get('#zip').type(cep)
}

export function preencheEndereco(endereco) {
    cy.get('#faddress').type(endereco)
}

export function preencheObs(obs) {
    cy.get('#messages').type(obs)
}

export function marcaSalvarEndereco() {
    cy.get('#materialUnchecked').check()
}

export function salvarpagamento() {
    cy.contains('button', 'Save').click()
}

export function verificaPagamentoSucesso() {
    cy.contains(MENSAGEM_SUCESSO).should('be.visible')
}

export function verificaPagamentoNaoRealizado() {
    cy.contains(MENSAGEM_SUCESSO).should('not.exist')
}

// O site usa o mesmo id (#errorMessageFirstName) em todas as mensagens de erro,
// então a validação busca pelo texto dentro da classe .errorLabel.
export function verificaErroCampo(mensagem) {
    cy.contains('.errorLabel', mensagem).should('be.visible')
}

export function selecionaMetodoPagamento(metodo) {
    const seletor = SELETOR_METODO_PAGAMENTO[metodo]
    if (!seletor) {
        throw new Error(`Método de pagamento desconhecido: ${metodo}`)
    }
    cy.get(seletor).check()
}

export function fazerPedido() {
    cy.contains('button', 'Place Order').click()
}

export function verificaPedidoSucesso() {
    cy.get('h2')
        .should('be.visible')
        .should('have.text', 'Order success!')
}
