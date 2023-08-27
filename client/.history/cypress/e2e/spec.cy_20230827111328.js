describe("test automation buttons", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("clicks on cypress button and runs cypress test suite", () => {
    cy.get("button#test-button-cypress-menu").click();

    cy.get("button#test-button-cypress-menu").should("not.be.visible");
  });
});
