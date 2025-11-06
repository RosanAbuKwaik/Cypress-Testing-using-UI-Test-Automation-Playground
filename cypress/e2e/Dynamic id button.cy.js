  it('should find and click the button with dynamic id ', () => {
    cy.visit('https://uitestingplayground.com/dynamicid')
    cy.get(".btn-primary").should('be.visible').click();
  });




