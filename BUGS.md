# Defeitos encontrados

Defeitos identificados no site [Automation Practice](https://automationpratice.com.br) durante a automação dos testes.

## BUG-01: Checkout salva dados de cobrança com campos obrigatórios vazios

| | |
|---|---|
| **Severidade** | Alta |
| **Página** | `/checkout-one` (Billings Information) |
| **Encontrado por** | `cypress/e2e/checkout_one.cy.js` |
| **Status** | Aberto |

**Passos para reproduzir**
1. Fazer login.
2. Acessar `/checkout-one`.
3. Preencher todos os campos obrigatórios, exceto **First Name**.
4. Clicar em **Save**.

**Resultado esperado:** exibir a mensagem "O campo First Name deve ser prenchido" e não salvar os dados.

**Resultado obtido:** a mensagem de erro do campo é exibida, mas ao mesmo tempo aparece "Billings Information registred with success!" e o formulário é bloqueado como se tivesse sido salvo.

**Abrangência:** o mesmo ocorre com First Name, Last Name, Company Name, Country, State/City, Zip Code, Full Address e Additional Notes. Apenas o campo de e-mail impede o salvamento corretamente.

**Causa provável:** a validação do botão Save usa o estado dos campos antes da atualização (o estado do React é atualizado de forma assíncrona). O e-mail funciona porque é validado diretamente no momento do clique.

## Observação: ids duplicados nas mensagens de erro

Todas as mensagens de erro do checkout usam o mesmo id `errorMessageFirstName`. Ids devem ser únicos no HTML; a duplicação prejudica acessibilidade e a localização de elementos pela automação. Os testes contornam isso buscando a mensagem pelo texto dentro de `.errorLabel`.

## Observação: texto com erro de digitação

As mensagens de obrigatoriedade usam "prenchido" em vez de "preenchido".
