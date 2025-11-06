it('should get Chrome CPU from table as array and compare with yellow label', () => {
  cy.visit('https://uitestingplayground.com/dynamictable')

  // نجيب كل الصفوف
  cy.get('[role="row"]').each(($row) => {
    // حول كل صف إلى array من النصوص
    cy.wrap($row).find('[role="cell"]').then(($cells) => {
      const rowValues = Cypress._.map($cells, 'innerText') // array of cell texts

      // نبحث عن الصف اللي فيه Chrome
      if (rowValues.includes('Chrome')) {
        const cpuValue = rowValues[1] // نفترض العمود الثاني هو CPU

        cy.log('CPU of Chrome:', cpuValue)

        // نجيب النص من label الأصفر
        cy.contains('Chrome CPU:').invoke('text').then((labelText) => {
          const labelValue = labelText.split(':')[1].trim()
          expect(labelValue).to.eq(cpuValue)
        })
      }
    })
  })
})
