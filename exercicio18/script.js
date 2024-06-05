//Crie uma arrow function que receba um array
//de números e retorne o maior número encontrado no array.

let encontrarMaximo = (numeros) => {
    let maximo = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }

    return maximo;
};

let numeros = [1, 3, 4, 8, 7];
let maximo = encontrarMaximo(numeros);

console.log("Array de Números:", numeros);
console.log("Maximo Encontrado:", maximo);
