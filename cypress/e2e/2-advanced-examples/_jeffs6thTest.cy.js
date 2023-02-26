// from Learn Cypress in 3 Hours | Full Cypress Tutorial | Cypress Automation
// LambdaTest
// 82,554 views  Dec 1, 2021
// https://youtu.be/jX3v3N6oN5M 

context('my sixth test', () => {

  it("triggers a popover ona click", () => {
    cy.visit("/commands/actions");
    cy.get("h1").should("exist");
  }); 

  it('can click on different sections of the canvas', () => {
    cy.visit("/commands/actions");
    cy.get('.action-btn').click()
    cy.get('#action-canvas').click('top')
    cy.get('#action-canvas').click('bottomRight')
    cy.get('#action-canvas').click(80,100)
  })

})