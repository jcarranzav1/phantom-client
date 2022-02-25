describe('Sign Up', () => {
  // eslint-disable-next-line jest/expect-expect
  it('sign-up as user', () => {
    cy.visit('https://pc-phantom.netlify.app/');
    cy.get('#userModal').click();
    cy.get('form').within(() => {
      cy.get('input[name="email"]').type('jcarranzav98@gmail.com');
      cy.get('input[name="password"]').type('Juandiego#02');
      cy.get('#loginUser').click();
    });
    cy.wait(3000);

    cy.get('#userDropdown').click();
    cy.get('#userProfile').click();
    cy.get('a[href*="signup"]').click();
  });
});
