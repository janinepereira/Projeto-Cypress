/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'

const login_page = require('../support/Pages/login_pages')

describe('Login', () => {

  beforeEach(() => {
    cy.visit('/login')
  })

  it('Login com sucesso', () => {
    login_page.preencheremail(faker.internet.email({ provider: 'gmail.com' }))
    login_page.preenchersenha(faker.internet.password())
    login_page.clicaremlogin()
    login_page.verificalogin()
  })

  it('Login sem informar a senha', () => {
    login_page.preencheremail(faker.internet.email({ provider: 'gmail.com' }))
    login_page.clicaremlogin()
    login_page.verificasenhainvalida()
  })

  it('Login sem informar o e-mail', () => {
    login_page.preenchersenha(faker.internet.password())
    login_page.clicaremlogin()
    login_page.verificaemailInvalido()
  })

  it('Login com e-mail em formato inválido', () => {
    login_page.preencheremail('email_sem_arroba')
    login_page.preenchersenha(faker.internet.password())
    login_page.clicaremlogin()
    login_page.verificaemailInvalido()
  })
})
