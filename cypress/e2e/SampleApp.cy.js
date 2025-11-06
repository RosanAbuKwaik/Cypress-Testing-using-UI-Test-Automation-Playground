it('should Login successfully with the valid data', () => {
  cy.visit('https://uitestingplayground.com/sampleapp')

  const userName = "rosanAbukwaik";
  const password = 'pwd';

  cy.get('input[name="UserName"]').type(userName);
  cy.get('input[name="Password"]').type(password);
  cy.get("#login").click();

  cy.get('#loginstatus').should('have.text', `Welcome, ${userName}!`)
})
