//Crie uma arrow function que receba um array de pares
//chave-valor e retorne um objeto.

let arrayParaObjeto = (array) => {
    let objeto = {};

    for (let i = 0; i < array.length; i++) {
        let chave = array[i][0];
        let valor = array[i][1];
        objeto[chave] = valor;
    }

    return objeto;
};

let array = [['a', 1], ['b', 2], ['c', 3]];
let objeto = arrayParaObjeto(array);

console.log("Array de Pares Chave-Valor:", array);
console.log("Objeto Resultante:", objeto);
