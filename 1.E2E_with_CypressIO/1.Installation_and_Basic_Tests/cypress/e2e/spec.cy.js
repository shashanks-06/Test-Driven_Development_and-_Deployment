describe("My First Test", () => {
  it("Visits the Kitchen Sink ", () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");

    cy.get(".action-email")
      .type("shashank@email.com")
      .should("have.value", "shashank@email.com");
  });
});
