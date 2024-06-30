//Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)

const fromEuroToDollar = (euro) => {
    return euro * 1.07;
}

const fromDollarToYen = (usd) => {
    let euroToDollar = 1/1.07;
    return (euroToDollar * 156.5) * usd;
}

const fromYenToPound = (yenes) => {
    let yenToEuro = 1/156.5;
    return (yenes * (yenToEuro * 0.87));
}

module.exports = { sum,  fromEuroToDollar, fromDollarToYen, fromYenToPound};