it('should test mouseover multiple clicks', () => {
  cy.visit('https://uitestingplayground.com/mouseover')

  for (let i = 0; i < 12; i++) {
    cy.contains('a', 'Click me').trigger('mouseover').click()
  }

  cy.get('#clickCount').should('have.text', '12')

  cy.contains('a', 'Link Button').trigger('mouseover').click()
  cy.contains('The link above clicked 1 times.').should('exist')
})
