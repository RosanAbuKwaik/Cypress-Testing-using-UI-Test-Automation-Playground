it('should check the message was displayed after timeout 15 second', () => {
  cy.visit('https://uitestingplayground.com/click')

  cy.get(".btn-primary")
    .should('be.visible')
    .click()

  cy.get('.btn-success')
    .should('be.visible')

  cy.get('.btn-success')
    .invoke('css', 'background-color')
    .should('eq', 'rgb(40, 167, 69)')
})
