import '../../support/commands';

describe('Create New Product', () => {
  // eslint-disable-next-line jest/expect-expect
  it('create product', () => {
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
    cy.get('#addProduct').click({ force: true });
    cy.get('form').within(() => {
      cy.get('input[name="model"]').type('Asus TUF Gaming GeForce RTX 3070 Ti');
      cy.get('input[name="price"]').type('979');
      cy.get('#react-select-2-input').type('Graphics Card', { force: true }).type('{enter}');
      cy.get('#photo').attachFile('AsusGeForceRTX3070Ti.jpg', { subjectType: 'input' });
      cy.get('textarea[name="description"]').type(`
Procesador
    CUDA: Si
    Núcleos CUDA: 6144
    `);

      cy.get('#createProduct').click();
    });
    cy.get('#nextArrow').click({ force: true });
    cy.get('#nextArrow').click({ force: true });
    cy.get('#nextArrow').click({ force: true });
    cy.get('#nextArrow').click({ force: true });
    cy.wait(3000);
  });
});
