// from Learn Cypress in 3 Hours | Full Cypress Tutorial | Cypress Automation
// LambdaTest
// 82,554 views  Dec 1, 2021
// https://youtu.be/jX3v3N6oN5M 

context('my fifth test', () => {

  it("pulls data from a fixture", () => {
    cy.fixture('example').then((data) => {
      // looks in fixture folder
      cy.log(data);
    }) 
  });

  it("updates a fixture inline", () => {
    cy.fixture('example').then((data) => {
      data.email = 'updated@gmail.com'
      cy.log(data)
    })
  })

  // using "this" can do this with a beforeEach instead of doing it twice

  // another option is to mock api responses
  // it('uses fixture data in a network request', function () { // using function instead of "fat arrow"
  //   cy.visit('/commands/network-requests')
  //   cy.intercept("GET", "**/comments/*", this.data);
  //   // see video for more details

  // })

})