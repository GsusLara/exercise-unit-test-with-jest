const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

//// one euro is:
let oneEuroIs = {
    JPY: 127.9, // japan yen
    USD: 1.2, // us dollar
    GBP: 0.8, // british pound
}

const fromDollarToYen=(monto)=>{
    return (monto/oneEuroIs.USD)*oneEuroIs.JPY
}
const fromEuroToDollar=(monto)=>{
    return (monto*oneEuroIs.USD)
}
const fromYenToPound=(monto)=>{
    return (monto/oneEuroIs.JPY)*oneEuroIs.GBP
}

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum,  fromEuroToDollar};