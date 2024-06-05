//Crie uma arrow function que receba um objeto e
//retorne um array contendo todas as suas chaves.

let obterChaves = (objeto) => {
    return Object.keys(objeto);
};

let pessoa = {
    nome: 'Washiner',
    idade: 44,
    cidade: 'Cuiabá'
};
let chaves = obterChaves(pessoa);

console.log("Objeto:", pessoa);
console.log("Chaves:", chaves);
