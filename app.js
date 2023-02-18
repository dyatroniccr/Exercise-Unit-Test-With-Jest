// app.js file content
// console.log("Hello World")

// esta es mi funcion que suma dos numeros
const sum = (a, b) => {
    return a + b
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

//solo un registro en consola para nosotros
console.log(sum(7, 3))

const fromEuroToDollar = (euro) => {
    let resultado = euro * oneEuroIs.USD
    return resultado
}

const fromDollarToYen = (dollar) => {
    let resultado = dollar/oneEuroIs.USD * oneEuroIs.JPY
    return resultado
}

const fromYenToPound = (yen) => {
    let resultado = yen/oneEuroIs.JPY * oneEuroIs.GBP
    return resultado
}

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound };

