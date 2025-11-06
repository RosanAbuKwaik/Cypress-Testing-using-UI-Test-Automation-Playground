it('should check the message was displayed after timeout 15 second', () => {
  cy.visit('https://uitestingplayground.com/clientdelay')

  cy.get('.btn-primary').click()

  cy.get('#content', { timeout: 15000 })
    .should('be.visible')
    .and('contain.text', 'Data calculated on the client side.')
})
