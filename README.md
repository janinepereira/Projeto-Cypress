# Automação E2E com Cypress | Automation Practice

[![Cypress Tests](https://github.com/janinepereira/Projeto-Cypress/actions/workflows/cypress.yml/badge.svg)](https://github.com/janinepereira/Projeto-Cypress/actions/workflows/cypress.yml)
![Cypress](https://img.shields.io/badge/Cypress-15-17202C?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=black)
![Faker](https://img.shields.io/badge/Faker.js-dados%20din%C3%A2micos-2E7D32)

Projeto de testes automatizados End-to-End com Cypress para o site de prática [Automation Practice](https://automationpratice.com.br), cobrindo os fluxos de **login**, **cadastro de usuário** e **checkout**, com execução automática a cada alteração via GitHub Actions.

https://github.com/user-attachments/assets/d89429a7-88d1-47ff-ad2e-6643662940a0

## O que é testado

| Funcionalidade | Cenários | Tipo |
|---|---|---|
| Login | Login com sucesso, senha não informada, e-mail não informado, e-mail em formato inválido | Positivo e negativo |
| Cadastro de usuário | Cadastro com sucesso, nome vazio, e-mail vazio, senha vazia | Positivo e negativo |
| Checkout (dados de cobrança) | Cadastro com sucesso, cada um dos 9 campos obrigatórios vazio e todos os campos vazios | Positivo e negativo |

## Estratégia e boas práticas aplicadas

- **Page Objects:** ações e validações de cada página ficam em `cypress/support/Pages`, separadas dos cenários. Se um seletor muda, a correção é feita em um único lugar.
- **Dados dinâmicos com Faker.js:** nomes, e-mails, senhas e endereços são gerados a cada execução, evitando dependência de massa fixa e conflitos de dados já cadastrados.
- **Fixtures:** dados de usuário e de pagamento ficam em `cypress/fixtures`, fora do código de teste.
- **Comando customizado `cy.Login()`:** reaproveita o fluxo de autenticação como pré-condição do checkout.
- **Testes orientados a dados:** os cenários de campo obrigatório do checkout são gerados a partir de uma única lista de campos e mensagens, sem repetir código para cada caso.
- **Cenários negativos com dupla validação:** além de verificar a mensagem de erro, o teste confirma que os dados não foram salvos.
- **Integração contínua:** os testes rodam no GitHub Actions a cada push e pull request na branch `main`, e também podem ser disparados manualmente. Em caso de falha, os screenshots ficam disponíveis como artefato da execução.

## Estrutura do projeto

```
estudos/                    # Exercícios de comandos básicos (fora da suíte do CI)
cypress/
├── e2e/                    # Cenários de teste (*.cy.js)
├── fixtures/               # Massa de dados em JSON
└── support/
    ├── Pages/              # Page Objects (login, cadastro, checkout)
    ├── commands_checkout.js  # Comando customizado cy.Login()
    └── e2e.js
.github/workflows/cypress.yml  # Pipeline de CI
cypress.config.js              # baseUrl e timeouts
```

## Como executar

Pré-requisitos: [Node.js](https://nodejs.org) 18 ou superior e Git.

```bash
git clone https://github.com/janinepereira/Projeto-Cypress.git
cd Projeto-Cypress
npm install
```

Abrir o Cypress no modo interativo:

```bash
npx cypress open
```

Rodar todos os testes no terminal (modo headless):

```bash
npx cypress run
```

## Próximos passos

- [ ] Relatório HTML com Mochawesome publicado no pipeline
- [ ] Fluxo de checkout completo até a confirmação do pedido
- [ ] Padronização de nomes das funções dos Page Objects
- [ ] Testes de API com `cy.request()`

## Autora

**Janine Pereira de Almeida** | QA Analyst Sênior

[LinkedIn](https://www.linkedin.com/in/jpereiraalmeida) · [GitHub](https://github.com/janinepereira)
