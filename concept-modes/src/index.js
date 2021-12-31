import Calc from './components';


const calc = new Calc();
const y = calc.sum(1,2);
const p = calc.sum(10,25);
const x = calc.sum(13,11);

console.log(y);
console.log("o valor de 10 + 25 é: " + p);
console.log("o valor de 13 + 11 é: " + x);