//Crie uma arrow function que receba múltiplos
//arrays e retorne um novo array concatenando todos os elementos.


let concatenarArrays = (...arrays) => {
    return arrays.reduce((resultado, array) => resultado.concat(array), []);
};

let array1 = [3, 4, 7];
let array2 = [6, 7, 8];
let array3 = [9, 10, 11];
let arrayConcatenado = concatenarArrays(array1, array2, array3);

console.log("Array Concatenado:", arrayConcatenado);
