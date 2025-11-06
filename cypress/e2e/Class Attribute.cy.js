  it('should find and click the button with class attribute', () => {
    cy.visit('https://uitestingplayground.com/classattr')
    cy.get(".btn-primary").click();
    cy.on('window:alert',(text)=>{
      expect(text).to.include('Primary button pressed');
    })
  });



