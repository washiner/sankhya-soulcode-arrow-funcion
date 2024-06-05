//Crie uma arrow function que receba um objeto
//e retorne um array contendo todos os seus valores.

let obterValores = (objeto) => {
    return Object.values(objeto);
};

let pessoa = {
    nome: 'Washiner',
    idade: 40,
    cidade: 'Cuiaba'
};
let valores = obterValores(pessoa);

console.log("Objeto:", pessoa);
console.log("Valores:", valores);
