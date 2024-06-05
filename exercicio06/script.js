//Crie uma arrow function que receba um array de números
//e retorne um novo array contendo apenas os números pares.

let filtrarPares = (numeros) => numeros.filter(numero => numero % 2 === 0);


let arrayDeNumeros = [1, 2, 3, 4, 5, 6];
let numerosPares = filtrarPares(arrayDeNumeros);

console.log(`Números pares: ${numerosPares}`);
