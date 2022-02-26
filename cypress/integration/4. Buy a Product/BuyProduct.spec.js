describe('Create New Product', () => {
  // eslint-disable-next-line jest/expect-expect
  it('buy product', () => {
    cy.visit('https://pc-phantom.netlify.app/');
    cy.get('#userModal').click();
    cy.get('form').within(() => {
      cy.get('input[name="email"]').type('jcarranzav1@upao.edu.pe');
      cy.get('input[name="password"]').type('Juandiego#02');
      cy.get('#loginUser').click();
    });
    cy.wait(2000);
    cy.get('input[name="search"]').type('asus').type('{enter}');
    cy.wait(1000);
    cy.get('#productData')
      .children()
      .within(() => {
        cy.get('button').click({ multiple: true });
      });
    cy.get('#shopCartButton').click();
    cy.get('#cartCheckout').click();
    cy.get('form').within(() => {
      cy.get('input[name="country"]').type('Perú', { force: true });
      cy.get('input[name="city"]').type('Trujillo', { force: true });
      cy.get('input[name="line1"]').type('Javier Heraud # 541. Urbanización Palermo', {
        force: true,
      });
      cy.get('input[name="postalCode"]').type('13006', { force: true });
      cy.get('#billingPayment').click({ force: true });
    });
    cy.get('iframe')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
      .find('input[data-elements-stable-field-name="cardNumber"]')
      .type('4242424242424242');

    cy.get('iframe')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
      .find('input[data-elements-stable-field-name="cardExpiry"]')
      .type('0408');

    cy.get('iframe')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
      .find('input[data-elements-stable-field-name="cardCvc"]')
      .type('123');

    cy.get('iframe')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap)
      .find('input[data-elements-stable-field-name="postalCode"]')
      .type('12345');

    cy.get('#payNow').click();
    cy.wait(2000);
    cy.get('#successOrder').click();
  });
});
