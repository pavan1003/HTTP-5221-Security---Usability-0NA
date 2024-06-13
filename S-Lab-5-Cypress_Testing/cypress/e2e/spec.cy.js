describe("Testing Login Page Load", () => {
  it("should load the page", () => {
    cy.visit("./S-Lab-5-codestandards.html");
  });
});
describe("Test to PASS", () => {
  it("should accept username and password", () => {
    cy.get(".login__username").type("Pavan").should("have.value", "Pavan");
    cy.get(".login__password").type("secretPavan").should("have.value", "secretPavan");
  });
});
describe("Test to Submit the form", () => {
  it("should submit the form", () => {
    cy.get(".login").submit();
  });
  it("should display the output with username and password", () => {
    cy.get(".output").should("be.visible");
    cy.get(".output__user").should("contain", "Pavan");
    cy.get(".output__pass").should("contain", "secretPavan");
  });
});
describe("Test to FAIL", () => {
  it("No text input for name box", () => {
    cy.visit("./S-Lab-5-codestandards.html");
    cy.get(".login__username").should("contain", "");
    cy.get(".login__password").should("contain", "");
    cy.get(".login").submit();
    cy.get(".login__username").should("have.focus");
    cy.get(".login__username").should('have.class', 'login__txtbox_error');
  });
  it("Name box has input text, with empty password box", () => {
    cy.visit("./S-Lab-5-codestandards.html");
    cy.get(".login__username").type("Pavan").should("have.value", "Pavan");
    cy.get(".login__password").should("contain", "");
    cy.get(".login").submit();
    cy.get(".login__password").should("have.focus");
    cy.get(".login__password").should('have.class', 'login__txtbox_error');
  });
});
