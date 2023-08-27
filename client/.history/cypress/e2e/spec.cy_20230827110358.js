describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});

describe("test automation buttons", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("clicks on cypress button and runs cypress test suite", () => {
    cy.get("button").should("have.id", "test-button-cypress-menu").click();
  });
});
