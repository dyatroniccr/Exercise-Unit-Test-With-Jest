// importar la función sum del archivo app.js
const { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    //const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    //const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    //const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("Five point Five should be 586.2083 yens", function(){
    // if 1 euro are 127.9 yens
    const expectedYen = 5.5/1.2 * 127.9; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(5.5)).toBe(expectedYen); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("Three thousand five hundred should be 21.89 pounds", function(){
    // if 1 euro are 0.8 pounds
    const expectedGBP = 3500/127.9 * 0.8; 
    
    // this is the comparison for the unit test
     expect(fromYenToPound(3500)).toBe(expectedGBP); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

