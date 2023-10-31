const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar.toFixed(2);
}

const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3))


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromDollarToYen(valueInDollar) {
    let valueInYen = valueInDollar * oneEuroIs["JPY"] / oneEuroIs["USD"];
    return valueInYen.toFixed(2);
}


function fromYenToPound(valueInYen) {
    let valueInPound = valueInYen * oneEuroIs["GBP"] / oneEuroIs["JPY"]
    return valueInPound.toFixed(2);
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
