describe("test automation buttons", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("clicks on cypress button and runs cypress test suite", () => {
    cy.get("button#test-button-cypress-menu").click();
    cy.get("button#test-button-cypress-menu").should("not.exist");
  });

  it("checks if the individual test buttons are visible", () => {
    cy.get("button#test-button-cypress-menu").click();

    cy.get("button").should("contain.text", "Cypress Full Test");
    cy.get("button").should("contain.text", "Cypress Buttons Test");
    cy.get("button").should("contain.text", "Cypress Terminal Test");
  });

  it("clicks on back button and returns to the default view", () => {
    cy.get("button#test-button-cypress-menu").click();

    cy.get("button#back-button").click();
    cy.get("button#back-button").should("not.exist");
  });
});
