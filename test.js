// Importar la función sum del archivo app.js
const { sum, fromDollarToYen } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One dollar should to 156.5 Yen", ()=>{

    const {fromDollarToYen} = require ('./app.js')
    const Yen = fromDollarToYen(4);

    //const expected = 4 * 156.5 ;
    expect(fromDollarToYen(4)).toBe(626)
})

test("One Yen should to 0.87", ()=>{
    //importo la funcion
    const {fromYenToPound} = require('./app.js')
   // declaro un variable que llamara la funcion 

    const ToPound = fromYenToPound(5);

    // hago mi comparacion 
    expect(ToPound).toBe(4.35);

})