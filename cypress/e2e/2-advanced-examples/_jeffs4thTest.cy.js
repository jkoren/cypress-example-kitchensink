// from Learn Cypress in 3 Hours | Full Cypress Tutorial | Cypress Automation
// LambdaTest
// 82,554 views  Dec 1, 2021
// https://youtu.be/jX3v3N6oN5M 

// before() is a hook, also beforeEach(), afterEach(), after()
// before() in the test runner shows up as BEFORE ALL, after() shows up as AFTER ALL

before(() => {
  cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length', 10)
})

it('visits the home page', () => {
  cy.visit("/"); // can do this with baseUrl defined in cypress.config.js
})

it('has an h1 on the page', () => {
  cy.visit('/')
  cy.get('h1').should('exist')
})

// or

context('my fourth test', () => {
  before(() => {
    cy.request("https://api.spacexdata.com/v3/missions")
      .its("body")
      .should("have.length", 10);
  });

  it("visits the home page", () => {
    cy.visit("/"); // can do this with baseUrl defined in cypress.config.js
  });

  it("has an h1 on the page", () => {
    cy.visit("/");
    cy.get("h1").should("exist");
  });
})