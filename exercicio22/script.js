//Crie uma arrow function que receba um array de números
//e retorne um novo array contendo apenas os valores
//únicos (sem duplicatas).

let filtrarValoresUnicos = (array) => {
    return [...new Set(array)];
};

let numeros = [1, 2, 3, 4, 2, 3, 5];
let valoresUnicos = filtrarValoresUnicos(numeros);

console.log("Array Original:", numeros);
console.log("Valores Únicos:", valoresUnicos);
