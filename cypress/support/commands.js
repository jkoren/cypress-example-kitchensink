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
import "@testing-library/cypress/add-commands";


// jeff wrote below commands to create these commands cy.setLocalStorage and cy.getLocalStorage that can be used in .cy.js files
// a pretty common use case

Cypress.Commands.add('setLocalStorage', (key, value) => {
  cy.window().then((window) => {
    window.localStorage.setItem(key, value)
  })
})

Cypress.Commands.add('getLocalStorage', (key) => {
  cy.window().then((window) => {
    return window.localStorage.getItem(key)
  })
})

// Cypress.Commands.overwrite('type', ) // to overwrite cypress commands - or add functionality to a cypress command
