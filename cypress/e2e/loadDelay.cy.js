it('should click the load delay button', () => {
  cy.visit('https://uitestingplayground.com/')

  cy.contains("Load Delay").click()

  cy.waitUntil(() => 
    cy.url().then(url => url.includes('/loaddelay')),
    {
      timeout: 10000,
      interval: 500,
    }
  )

  cy.get('button.btn-primary')
    .should('be.visible')
    .click()
})
