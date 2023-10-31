const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(valueInDollar) {
    let valueInYen = valueInDollar * oneEuroIs["JPY"] / oneEuroIs["USD"];
    return valueInYen
}


function fromYenToPound(jpy) {
    return jpy * oneEuroIs["GBP"] / oneEuroIs["JPY"];
}

module.exports = { sum, fromEuroToDollar }
module.exports = { sum, fromDollarToYen }
module.exports = { sum, fromYenToPound }