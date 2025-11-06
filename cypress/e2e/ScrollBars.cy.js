it('should check the scrollbars untill the button was viwed', () => {
  cy.visit('https://uitestingplayground.com/scrollbars')
cy.get("#hidingButton").scrollIntoView().should('be.visible').click()
})


