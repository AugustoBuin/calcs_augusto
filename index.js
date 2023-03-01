const divisao = (valor1, valor2) => {
    console.log(`Resultado: ${valor1 / valor2}`)
}

const multiplicacao = (valor1, valor2) => {
    console.log(`Resultado: ${valor1 * valor2}`)
}

const subtracao = (valor1, valor2) => {
    console.log(`Resultado: ${valor1 - valor2}`)
}

const somar = (valor1, valor2) => {
    console.log(`Resultado: ${valor1 + valor2}`)
}


exports.calculo = divisao
exports.calculo = multiplicacao
exports.calculo = somar
exports.calculo = subtracao

