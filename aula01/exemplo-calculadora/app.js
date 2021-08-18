const calculadora = require('./calculadora');

let n1 = 9;
let n2 = 18;

console.log(calculadora.nome)
console.log(`${n1} + ${n2} =`, calculadora.soma(n1, n2));
console.log(`${n1} - ${n2} =`, calculadora.sub(n1, n2));
console.log(`${n1} x ${n2} =`, calculadora.mult(n1, n2));
console.log(`${n1} / ${n2} =`, calculadora.div(n1, n2));
