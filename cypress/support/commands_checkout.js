// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import {email, password} from '../fixtures/user_admin.json'

Cypress.Commands.add('Login', () => {
    cy.visit('/login');
    cy.get('#user').type(email);
    cy.get('#password').type(password);
    cy.get('#btnLogin').click();
    cy.get('.swal2-title', { timeout: 30000 }).should('have.text', 
      'Login realizado'
    );
    cy.get('.swal2-confirm').click()

})