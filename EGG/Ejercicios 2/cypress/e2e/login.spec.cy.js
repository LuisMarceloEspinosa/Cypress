// cypress/integration/form.spec.js

describe('Formulario de Demo', () => {


  it('Llena el formulario con datos válidos', () => {
    cy.visit('https://qavalidation.com/demo-form/');
    // Rellenar el formulario con datos válidos
    cy.get('#g4072-fullname').type('Luis Espinosa');
    cy.get('#g4072-email').type('luis.espinosa@example.com');
    cy.get('#g4072-phonenumber').type('1234567890');
    cy.get('#g4072-gender-button').click();
    cy.get('#ui-id-1').click();
    cy.get(':nth-child(5) > .radio');

    // Seleccionar habilidades (por ejemplo, JavaScript y Selenium)
    cy.get(':nth-child(1) > .checkbox-multiple').click(); 
    cy.get('.grunion-checkbox-multiple-options > :nth-child(2) > .checkbox-multiple').click();

    // Seleccionar herramientas de QA (por ejemplo, Jira y Selenium)
    cy.get('#g4072-qatools-button').click();
    cy.get('#ui-id-4').click();
    

    // Escribir comentarios
    cy.get('#contact-form-comment-g4072-otherdetails').type('Estos son comentarios adicionales sobre el formulario.');

    // Enviar el formulario
    cy.get('.wp-block-jetpack-button > .wp-block-button__link').click();

    // Verificar mensaje de éxito
    cy.get('#contact-form-success-header').should('contain', 'Your message has been sent');
  });
  Cypress.on('uncaught:exception', (err, runnable) => {
    // Puedes tomar acciones personalizadas aquí, como registrar el error o manejarlo de alguna manera específica
    // Para evitar que Cypress falle automáticamente la prueba actual, devuelve false
    return false;
  });
  it('Intenta enviar el formulario con campos vacíos', () => {
    cy.visit('https://qavalidation.com/demo-form/');
    // No rellenar ningún campo
    cy.get('.wp-block-jetpack-button > .wp-block-button__link').click();
    
    cy.get('#g4072-fullname.name.grunion-field[aria-required="true"]').should('exist');
  });
    
    


});