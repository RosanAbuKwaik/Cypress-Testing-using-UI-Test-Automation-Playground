it('should click the green button and verify its class or color change', () => {
  cy.visit('https://uitestingplayground.com/hiddenlayers')
  cy.get('#greenButton')
    .should('be.visible')
    .and('have.class', 'btn-success')
  cy.get('#greenButton').click()
  cy.get('#greenButton')
    .should('have.class', 'btn-success')   
})
