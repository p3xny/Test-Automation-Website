describe("test automation buttons", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("clicks on cypress button and runs cypress test suite", () => {
    cy.get("button").contains("TEST CYPRESS").click();
});
