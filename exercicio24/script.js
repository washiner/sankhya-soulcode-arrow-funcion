//Crie uma arrow function que receba um array de números
//e retorne o produto de todos os números.

let calcularProduto = (numeros) => {
    let produto = 1;

    for (let numero of numeros) {
        produto *= numero;
    }

    return produto;
};

let numeros = [2, 3, 4];
let produto = calcularProduto(numeros);

console.log("Array de Números:", numeros);
console.log("Produto dos Números:", produto);
