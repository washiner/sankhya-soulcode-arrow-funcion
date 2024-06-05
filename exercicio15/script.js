//Crie uma arrow function que receba um array de 
//strings e um número, e retorne um novo array contendo
//apenas as strings que tenham um comprimento maior que
//o número fornecido.

let filtrarPorComprimento = (arrayDeStrings, comprimento) => {
    return arrayDeStrings.filter(string => string.length > comprimento);
};

let arrayDeStrings = ["cadeira", "porta", "bicicleta", "patins", "caminhao"];
let comprimentoMinimo = 5;
let stringsFiltradas = filtrarPorComprimento(arrayDeStrings, comprimentoMinimo);

console.log("Array de Strings:", arrayDeStrings);
console.log(`Strings com comprimento maior que ${comprimentoMinimo}:`, stringsFiltradas);
