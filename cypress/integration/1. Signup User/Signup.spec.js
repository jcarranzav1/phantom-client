describe('Sign Up', () => {
  // eslint-disable-next-line jest/expect-expect
  it('sign-up as user', () => {
    cy.visit('https://pc-phantom.netlify.app/');
    cy.get('#userModal').click();
    cy.get('a[href*="signup"]').click();

    cy.get('form').within(() => {
      cy.get('input[name="firstName"]').type('Alejandro Martín');
      cy.get('input[name="lastName"]').type('Ángeles');
      cy.get('input[name="email"]').type('jcarranzav1@upao.edu.pe');
      cy.get('input[name="password"]').type('Juandiego#02');
      cy.get('input[name="confirmPassword"]').type('Juandiego#02');
      cy.get('form').submit();
    });
  });
});
