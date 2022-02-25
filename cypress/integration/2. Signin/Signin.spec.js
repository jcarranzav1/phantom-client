describe('Sign In', () => {
  // eslint-disable-next-line jest/expect-expect
  it('sign-in as user', () => {
    cy.visit('https://pc-phantom.netlify.app/');
    cy.get('#userModal').click();
    cy.get('form').within(() => {
      cy.get('input[name="email"]').type('jcarranzav1@upao.edu.pe');
      cy.get('input[name="password"]').type('Juandiego#02');
      cy.get('#loginUser').click();
    });
    cy.wait(3000);
  });
});
