/// <reference types="cypress"/>

import { faker } from '@faker-js/faker'
const cadastro_usuario_page = require('../support/Pages/cadastro_usuario.pages')

describe('Cadastro de usuário', () => {

  beforeEach(() => {
    cy.visit('/register')
  })

it('Cadastro de usuario com sucesso', () => {
  cadastro_usuario_page.preenchernome('Janine');
  cadastro_usuario_page.preencheremail(faker.internet.email({ provider: 'gmail.com' }))
  cadastro_usuario_page.preenchersenha(faker.internet.password())
  cadastro_usuario_page.salvarcadastro()
  cadastro_usuario_page.fazercacadastro()

});

it('Cadastro com nome vazio', () => {
  cadastro_usuario_page.preencheremail(faker.internet.email({ provider: 'gmail.com' }))
  cadastro_usuario_page.preenchersenha(faker.internet.password())
  cadastro_usuario_page.salvarcadastro()
  cadastro_usuario_page.verificanomevazio()

});

it('Cadastro com email vazio', () => {
  cadastro_usuario_page.preenchernome('Janine');
  cadastro_usuario_page.preenchersenha(faker.internet.password())
  cadastro_usuario_page.salvarcadastro()
  cadastro_usuario_page.verificaemailvazio()

});

it('Cadastro com senha vazia', () => {
  cadastro_usuario_page.preenchernome('Janine');
  cadastro_usuario_page.preencheremail(faker.internet.email({ provider: 'gmail.com' }))
  cadastro_usuario_page.salvarcadastro()
  cadastro_usuario_page.verificasenhavazia()

})

});