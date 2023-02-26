// from Learn Cypress in 3 Hours | Full Cypress Tutorial | Cypress Automation
// LambdaTest
// 82,554 views  Dec 1, 2021
// https://youtu.be/jX3v3N6oN5M 

it('links to the action page correctly', () => {
  cy.visit("/"); // can do this with baseUrl defined in cypress.config.js
  // cy.findAllByText('Actions').last().click()  // find the last word "Actions" on the page
  cy.findAllByText('Actions').first().click({force: true}) // find the first word "Actions" on the page and click it, even if it isn't visible
  cy.url().should('include', 'commands/actions')
})

it('lets you type in an input field', () => {
  cy.visit("/commands/actions")
  cy.findByPlaceholderText('Email').type('Test').should('have.value', 'Test')
})

it('lets you clear an inut field', () => {
  cy.visit("/commands/actions");
  cy.findByLabelText('Describe:')
  .type('Test description').should('have.value','Test description')
  .clear().should('have.value','')
})

// start at video 13:01