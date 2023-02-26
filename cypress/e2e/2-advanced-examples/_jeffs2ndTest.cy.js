// from Learn Cypress in 3 Hours | Full Cypress Tutorial | Cypress Automation
// LambdaTest
// 82,554 views  Dec 1, 2021
// https://youtu.be/jX3v3N6oN5M 

// how to run commands sycnronously including non-cypress commands
// how to access a simple API

it('types into an email field', () => {
  cy.visit("/commands/actions"); // can do this with baseUrl defined in cypress.config.js
  // example of asynchronous cypress mode
  // cy. commands are run in order, a chain of promises
  // but console.log is not in the chain
  // custom javascript (non cypress commands) will run first
  cy.findAllByPlaceholderText("Email").type("test@email.com");
  cy.log("test is underway"); // print in "test runner" window
  cy.wait(2000).then(() => {
    // 5000 milliseconds = 5 seconds
    fetch("https://api.spacexdata.com/v3/missions")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    console.log("the test is really finished");
  });
  console.log("test is finished");
})