it('should click the Ajex button', () => {
  cy.visit('https://uitestingplayground.com/ajax')

  cy.get('.btn-primary').click()

  cy.get('#content', { timeout: 15500 })
    .should('be.visible')
    .and('contain.text', 'Data loaded with AJAX get request.')
})
