describe('Inicio de sesión en UITestingPlayground', () => {
    it('Iniciar sesión con éxito', () => {
      // Visita la página de inicio de sesión
      cy.visit('http://uitestingplayground.com/sampleapp')

      cy.get('input[type=text]').type('Luis')

      cy.get('input[type=password]').type('pwd')

      

      cy.get('#login').click()

      cy.contains('Welcome, Luis!').should('be.visible')
  
    
    })
  })