describe('UI Testing Playground - Comprehensive Test Suite', () => {
  beforeEach(() => {
    cy.visit('https://uitestingplayground.com/')
  })

  describe('1. Dynamic ID Test', () => {
    it('should click button with dynamic ID', () => {
      cy.contains('Dynamic ID', { timeout: 20000 }).click()
      cy.url().should('include', '/dynamicid')
      cy.get('button.btn-primary').click()
      cy.get('button.btn-primary').should('be.visible')
    })

    it('should verify dynamic ID changes on page reload', () => {
      cy.contains('Dynamic ID', { timeout: 20000 }).click()
      let firstId
      cy.get('button.btn-primary').invoke('attr', 'id').then((id1) => {
        firstId = id1
        cy.reload()
        cy.get('button.btn-primary').invoke('attr', 'id').should('not.equal', firstId)
      })
    })
  })


  describe('2. Class Attribute Test', () => {
    it('should click primary button successfully', () => {
      cy.contains('Class Attribute', { timeout: 20000 }).click()
      cy.url().should('include', '/classattr')
      cy.get('button.btn-primary').first().click()
      cy.on('window:alert', (text) => {
        expect(text).to.equal('Primary button pressed')
      })
    })

    it('should verify multiple buttons with same class', () => {
      cy.contains('Class Attribute', { timeout: 20000 }).click()
      cy.get('.btn').should('have.length.at.least', 1)
    })
  })



  describe('3. Hidden Layers Test', () => {
    it('should handle hidden layers', () => {
      cy.contains('Hidden Layers', { timeout: 20000 }).click()
      cy.url().should('include', '/hiddenlayers')
      cy.get('#greenButton').click()
      cy.get('#blueButton').should('be.visible')
    })

    it('should verify button interaction behavior', () => {
      cy.contains('Hidden Layers', { timeout: 20000 }).click()
      cy.get('#greenButton').click()
      cy.wait(1000)
      cy.get('#blueButton').should('be.visible')
      cy.get('#blueButton').click({ force: true })
      cy.get('#greenButton').should('be.visible')
    })
  })



  describe('4. Load Delay Test', () => {
    it('should wait for page to load completely', () => {
      cy.contains('Load Delay', { timeout: 20000 }).click()
      cy.url().should('include', '/loaddelay')
      cy.get('button.btn-primary', { timeout: 20000 })
        .should('be.visible')
        .and('not.be.disabled')
        .click()
    })

    it('should verify button loading behavior', () => { 
      cy.contains('Load Delay', { timeout: 20000 }).click()
      cy.get('body').should('contain', 'Load Delay')
      cy.get('button.btn-primary', { timeout: 10000 })
        .should('be.visible')
        .and('contain.text', 'Button Appearing After Delay')
        .and('be.enabled')
    })
  })


  describe('5. AJAX Data Test', () => {
    it('should wait for AJAX response', () => {
      cy.contains('AJAX Data', { timeout: 20000 }).click()
      cy.url().should('include', '/ajax')
      cy.get('#ajaxButton', { timeout: 20000 }).click()
      cy.contains('Data loaded with AJAX get request.', { timeout: 20000 })
        .should('be.visible')
    })

    it('should verify initial state before AJAX', () => {
      cy.contains('AJAX Data', { timeout: 20000 }).click()
      cy.get('#ajaxButton').click()
      cy.contains('Data loaded with AJAX get request.').should('not.exist')
      cy.contains('Data loaded with AJAX get request.', { timeout: 20000 }).should('be.visible')
    })
  })



  describe('6. Client Side Delay Test', () => {
    it('should handle client-side processing delay', () => {
      cy.contains('Client Side Delay', { timeout: 20000 }).click()
      cy.url().should('include', '/clientdelay')
      cy.get('#ajaxButton', { timeout: 15000 }).click()
      cy.contains('Data calculated on the client side.', { timeout: 15000 })
        .should('be.visible')
    })

    it('should verify processing delay behavior', () => { 
      cy.contains('Client Side Delay', { timeout: 20000 }).click()
      cy.get('#ajaxButton').click()
      cy.get('#ajaxButton').should('be.enabled')
      cy.contains('Data calculated on the client side.').should('not.exist')
      cy.contains('Data calculated on the client side.', { timeout: 15000 })
        .should('be.visible')
      cy.get('#ajaxButton').should('be.enabled')
    })
  })


  describe('7. Click Test', () => {
    it('should handle normal click', () => {
      cy.contains('Click', { timeout: 20000 }).click()
      cy.url().should('include', '/click')
      cy.get('#badButton').click().should('have.class', 'btn-success')
    })

    it('should verify button color change', () => {
      cy.contains('Click', { timeout: 20000 }).click()
      cy.get('#badButton').should('have.class', 'btn-primary')
      cy.get('#badButton').click()
      cy.get('#badButton').should('have.class', 'btn-success')
    })
  })


  describe('8. Text Input Test', () => {
    it('should input text and verify button text changes', () => {
      cy.contains('Text Input', { timeout: 20000 }).click()
      cy.url().should('include', '/textinput')
      const testText = 'Hello Cypress!'
      cy.get('#newButtonName').type(testText)
      cy.get('#updatingButton').click()
      cy.get('#updatingButton').should('have.text', testText)
    })

    it('should handle empty input', () => {
      cy.contains('Text Input', { timeout: 20000 }).click()
      cy.get('#updatingButton').click()
      cy.get('#updatingButton').should('not.have.text', '')
    })
  })


  describe('9. Scrollbars Test', () => {
    it('should handle scrollbar interaction', () => {
      cy.contains('Scrollbars', { timeout: 20000 }).click()
      cy.url().should('include', '/scrollbars')
      cy.get('#hidingButton').scrollIntoView().click()
    })

    it('should verify button visibility after scroll', () => {
      cy.contains('Scrollbars', { timeout: 20000 }).click()
      cy.get('#hidingButton').should('exist')
      cy.get('#hidingButton').scrollIntoView().should('be.visible')
    })
  })


  describe('10. Dynamic Table Test', () => {
    it('should verify CPU load values match', () => {
      cy.contains('Dynamic Table', { timeout: 20000 }).click()
      cy.url().should('include', '/dynamictable')
      cy.get('.bg-warning').invoke('text').then((warningText) => {
        const expectedValue = warningText.match(/(\d+)%/)[0]
        cy.contains('span', 'Chrome').parent().within(() => {
          cy.contains('span', expectedValue).should('exist')
        })
      })
    })

    it('should handle table structure changes', () => {
      cy.contains('Dynamic Table', { timeout: 20000 }).click()
      cy.get('div[role="table"]').should('exist')
      cy.get('div[role="row"]').should('have.length.at.least', 2)
    })
  })


  describe('11. Verify Text Test', () => {
    it('should find text with special spacing', () => {
      cy.contains('Verify Text', { timeout: 20000 }).click()
      cy.url().should('include', '/verifytext')
      cy.contains('Welcome UserName!').should('be.visible')
    })

    it('should handle text visibility scenarios', () => {
      cy.contains('Verify Text', { timeout: 20000 }).click()
      cy.get('body').then(($body) => {
        expect($body.text()).to.include('Welcome UserName!')
      })
    })
  })

describe('12. Progress Bar Test', () => {
  it('should stop progress bar at 75%', () => {
    cy.contains('Progress Bar', { timeout: 20000 }).click()
    cy.url().should('include', '/progressbar')
    cy.get('#startButton').click()
    
    cy.get('#progressBar', { timeout: 30000 }).should(($progress) => {
      const value = parseInt($progress.attr('aria-valuenow'))
      expect(value).to.be.within(70, 80)
    })
    
    cy.get('#stopButton').click()
    cy.get('#result').should('contain', 'Result: ')
  })

  it('should complete progress bar and show results', () => { 
    cy.contains('Progress Bar', { timeout: 20000 }).click()
    cy.get('#startButton').click()
    
    cy.get('#progressBar[aria-valuenow="100"]', { timeout: 60000 })
    cy.get('#stopButton').click()
    
    cy.get('#result').should(($result) => {
      const text = $result.text()
      expect(text).to.include('Result:')
      expect(text).to.include('duration:')
      expect(text).not.to.include('n/a')
    })
  })
})
})