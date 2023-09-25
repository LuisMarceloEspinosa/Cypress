// integration/login.spec.js

describe("Pruebas de inicio de sesión", () => {
   beforeEach(() => {
     cy.visit("http://uitestingplayground.com/sampleapp");
   });

  it("Iniciar sesión con credenciales válidas", () => {
    // cy.visit("http://uitestingplayground.com/sampleapp");
    cy.fixture("credenciales.json").then((credenciales) => {
      cy.get('[name="UserName"]').type(credenciales[0].usuario);
      cy.get('[name="Password"]').type(credenciales[0].contrasena);
      cy.get("#login").click();
      cy.contains("Welcome, Luis!").should("exist");
    });
  });

   it("Iniciar sesión con credenciales inválidas", () => {
     cy.fixture("credenciales.json").then((credenciales) => {
       cy.get('[name="UserName"]').type(credenciales[2].usuario);
       cy.get('[name="Password"]').type(credenciales[2].contrasena);
       cy.get("#login").click();
       cy.contains("Invalid username/password").should("exist");
     });
   });

   it("Iniciar sesión con otro conjunto de credenciales válidas", () => {
    cy.fixture("credenciales.json").then((credenciales) => {
       cy.get('[name="UserName"]').type(credenciales[1].usuario);
      cy.get('[name="Password"]').type(credenciales[1].contrasena);
       cy.get("#login").click();
      cy.contains("Welcome, Marcelo!").should("exist");
     });
   });

  it("Intentar iniciar sesión sin ingresar credenciales", () => {
    cy.get("#login").click();
   cy.contains("Invalid username/password").should("exist");
   });
});