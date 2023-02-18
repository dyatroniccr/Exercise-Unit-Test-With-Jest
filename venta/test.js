// importar la función sum del archivo app.js
const { sum } = require('../app.js');
//const { sum } = require('../contabilidad');

// comienza tu primera prueba
test('adds 5 + 5 to equal 10', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(5, 5);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(10);
});