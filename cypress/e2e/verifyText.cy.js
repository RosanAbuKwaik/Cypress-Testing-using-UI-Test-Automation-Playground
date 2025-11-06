it('should find element with Welcome text using normalize-space', () => {
  cy.visit('https://uitestingplayground.com/verifytext')
  cy.xpath("//span[normalize-space(.)='Welcome UserName!']")
    .should('be.visible')
})

