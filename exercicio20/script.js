//Crie uma arrow function que receba um array de objetos,
//cada um com uma propriedade `valor`, e retorne a soma
//de todos os valores.

let somarValores = (arrayDeObjetos) => {
    return arrayDeObjetos.reduce((total, objeto) => total + objeto.valor, 0);
};

let objetos = [
    { valor: 10 },
    { valor: 20 },
    { valor: 30 }
];
let soma = somarValores(objetos);

console.log("Objetos:", objetos);
console.log("Soma dos Valores:", soma);
