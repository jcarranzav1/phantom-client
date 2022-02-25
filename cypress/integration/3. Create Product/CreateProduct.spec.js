import '../../support/commands';

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
    cy.get('#addProduct').click({ force: true });
    cy.get('form').within(() => {
      cy.get('input[name="model"]').type('Asus TUF Gaming GeForce RTX 3070 Ti');
      cy.get('input[name="price"]').type('979');
      cy.get('#react-select-2-input').type('Graphics Card').type('{enter}');
      cy.get('#photo').attachFile('AsusGeForceRTX3070Ti.jpg', { subjectType: 'input' });
      cy.get('textarea[name="description"]').type(`
Procesador
    CUDA: Si
    Núcleos CUDA: 6144
    Familia de procesadores de gráficos: NVIDIA
    Procesador gráfico: GeForce RTX 3070 Ti
    Máxima resolución: 7680 x 4320 Pixeles
    Soporte para proceso paralelo: No compatible
    Máximas pantallas por tarjeta de video: 4
    FireStream: No
Memoria
    Capacidad memoria de adaptador gráfico: 8 GB
    Tipo de memoria de adaptador gráfico: GDDR6X
    Ancho de datos: 256 bit
Puertos e Interfaces
    Tipo de interfaz: PCI Express 4.0
    Número de puertos HDMI: 2
    Versión HDMI: 2.1
    Cantidad de DisplayPorts: 3
    Versión de DisplayPort: 1.4a
Desempeño
    Sintonizador de TV integrado: No
    Versión DirectX: 1?2 Ultimate
    Versión OpenGL: 4.6
    HDCP: Si
    Dual Link DVI: No
    NVIDIA G-SYNC: Si
Diseño
    Tipo de enfriamiento: Activo
    Tecnología de enfriamiento: ASUS Axial-tech
    Número de ventiladores: 3 Ventilador(es)
    Factor de forma: Full-Height/Full-Length (FH/FL)
    Altura del soporte: Full-Height (FH)
    Número de ranuras: 2,7
    Iluminación: Si
    Iluminación de color: Multi
    Color del producto: Negro
Control de energía
    Conectores de energia suplementario: 2x 8-pin
Peso y dimensiones
    Profundidad: 299,9 mm
    Altura: 126,9 mm
    Ancho: 51,7 mm
Empaquetado
    Manual de usuario: Si
    Tipo de embalaje: Caja`);

      // cy.get('#loginUser').click();
    });
  });
});
