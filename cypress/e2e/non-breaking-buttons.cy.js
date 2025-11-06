describe('UI Testing Playground - Non-Breaking Space Test', () => {

  beforeEach(() => {
    cy.visit('https://uitestingplayground.com/')
    cy.contains('Non-Breaking Space').click()
  })

  it('should find and click the button with non-breaking space', () => {
    cy.xpath("//button[text()='My\u00A0Button']")
      .should('be.visible')
      .click()
    
    cy.xpath("//button[text()='My\u00A0Button']")
      .should('exist') 
  })
})