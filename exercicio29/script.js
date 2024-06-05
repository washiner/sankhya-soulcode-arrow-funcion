//Crie uma arrow function que receba um array de números
//e retorne um novo array contendo apenas os números ímpares.

let filtrarNumerosImpares = (numeros) => {
    return numeros.filter(numero => numero % 2 !== 0);
};

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let impares = filtrarNumerosImpares(numeros);

console.log("Array Original:", numeros);
console.log("Números Ímpares:", impares);
