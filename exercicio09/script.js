//Crie uma arrow function que receba um array de 
//números e retorne um novo array com cada valor dobrado.

let dobrarValores = (numeros) => numeros.map(numero => numero * 2);

let arrayDeNumeros = [1, 2, 3, 4];
let valoresDobrados = dobrarValores(arrayDeNumeros);

console.log(`Original: ${arrayDeNumeros}`);
console.log(`Dobrados: ${valoresDobrados}`);
