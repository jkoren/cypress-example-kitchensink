// from Learn Cypress in 3 Hours | Full Cypress Tutorial | Cypress Automation
// LambdaTest
// 82,554 views  Dec 1, 2021
// https://youtu.be/jX3v3N6oN5M 

const navbarText = Cypress.env('navbarText') // from cypress.config.js

context('my first test', () => {
  beforeEach(() => {
    // cy.visit("http://localhost:8080/commands/actions");  // can do this with baseUrl defined in cypress.config.js
    cy.visit("/commands/actions");
  });

  // get is the entire page
  it("has a friggin H1 element on the page", () => {
    cy.get("h1").should("exist");
    // can target an ID with cy.get(#actions)
    // can target an class with cy.get(.container)

  });

  it("does not render the friggin incorrect text", () => {
    cy.get("h1").should("not.contain.text", "cypress");
  });

  it("renders the correct friggin text", () => {
    cy.get("h1").should("contain.text", "Actions");
  });

  // stopped here https://youtu.be/asFbGBf5SNc?t=551

  it ('renders no paragraph under the first h1 (nav bar)', () => {
    cy.get('.container').first().find('p').should('not.exist')
  })

  it("renders a paragraph under the second h1", () => {
    cy.get(".container").eq(1).find("p").should("exist");
  });

  // diff between .find and .within?  'within' can take a function (a series of steps between {})

  it("renders the 3rd container with the corect elements", () => {
    cy.get(".container").eq(2).within(() => {
      cy.get('h4').should('exist');
      cy.get('p').should('exist');
    })
  })

  it('correctly renders the cypress website lnk', () => {
    // cy.findByText('cypress.io').should('exist');
    cy.findByText(navbarText).should('exist');
  })
})
