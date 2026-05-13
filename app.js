const calculadora = require("./calculadora")

console.log(calculadora.soma(10,5))
console.log(calculadora.divisao(10, 5))
let resultado = calculadora.multi(30, 30) - calculadora.divisao(100, 3)
console.log(resultado)