describe('Sign Up', () => {
  // eslint-disable-next-line jest/expect-expect
  it('sign-up as user', () => {
    cy.visit('https://localhost:3000');
    cy.get('#userModal').click();
  });
});
