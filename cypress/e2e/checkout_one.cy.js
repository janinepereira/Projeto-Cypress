/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'

const checkout_page = require('../support/Pages/checkout_page')

// Preenche todos os campos obrigatórios, exceto o informado em "campoVazio"
function preencherFormulario(campoVazio) {
    const campos = {
        firstName: () => checkout_page.preenchePrimeiroNome(faker.person.firstName('female')),
        lastName: () => checkout_page.preencheSobreNome(faker.person.lastName('female')),
        company: () => checkout_page.preencheEmpresa(faker.company.name()),
        email: () => checkout_page.preencheEmail(faker.internet.email({ provider: 'gmail.com' })),
        country: () => checkout_page.selecionaPais('usa'),
        city: () => checkout_page.selecionaCidade('Afghanistan'),
        zipCode: () => checkout_page.preencheCep(faker.location.zipCode('########')),
        address: () => checkout_page.preencheEndereco(faker.location.streetAddress()),
        notes: () => checkout_page.preencheObs('Pedido de teste automatizado'),
    }

    Object.entries(campos).forEach(([campo, preencher]) => {
        if (campo !== campoVazio) preencher()
    })
}

// Mensagens exibidas pelo site (o erro de digitação "prenchido" é do próprio site)
const camposObrigatorios = [
    { campo: 'firstName', nome: 'First Name', mensagem: 'O campo First Name deve ser prenchido' },
    { campo: 'lastName', nome: 'Last Name', mensagem: 'O campo Last Name deve ser prenchido' },
    { campo: 'company', nome: 'Company Name', mensagem: 'O campo Company deve ser prenchido' },
    { campo: 'email', nome: 'Email Address', mensagem: 'O campo E-mail deve ser prenchido ou é inválido' },
    { campo: 'country', nome: 'Country', mensagem: 'O campo Country deve ser prenchido' },
    { campo: 'city', nome: 'State/City', mensagem: 'O campo City deve ser prenchido' },
    { campo: 'zipCode', nome: 'Zip Code', mensagem: 'O campo Zip Code deve ser prenchido' },
    { campo: 'address', nome: 'Full Address', mensagem: 'O campo Address deve ser prenchido' },
    { campo: 'notes', nome: 'Additional Notes', mensagem: 'O campo Additional Notes deve ser prenchido' },
]

describe('Checkout - dados de cobrança', () => {

    beforeEach(() => {
        cy.Login()
        cy.visit('/checkout-one')
    })

    it('Salvar dados de cobrança com todos os campos preenchidos', () => {
        preencherFormulario()
        checkout_page.marcaSalvarEndereco()
        checkout_page.salvarpagamento()
        checkout_page.verificaPagamentoSucesso()
    })

    camposObrigatorios.forEach(({ campo, nome, mensagem }) => {
        it(`Campo ${nome} vazio exibe mensagem de obrigatoriedade`, () => {
            preencherFormulario(campo)
            checkout_page.salvarpagamento()
            checkout_page.verificaErroCampo(mensagem)
            checkout_page.verificaPagamentoNaoRealizado()
        })
    })

    it('Todos os campos vazios exibem todas as mensagens de obrigatoriedade', () => {
        checkout_page.salvarpagamento()
        camposObrigatorios.forEach(({ mensagem }) => {
            checkout_page.verificaErroCampo(mensagem)
        })
        checkout_page.verificaPagamentoNaoRealizado()
    })
})
