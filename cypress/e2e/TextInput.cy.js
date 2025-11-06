it('should check the message was displayed after timeout 15 second', () => {
  cy.visit('https://uitestingplayground.com/textinput')
cy.get("#newButtonName").type("rosan abukwaik")
cy.get("#updatingButton").click();
cy.get("#updatingButton").should('contain.text','rosan abukwaik')
})








