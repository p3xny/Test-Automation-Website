describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://example.cypress.io");
  });
});

describe("test automation buttons", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
});
