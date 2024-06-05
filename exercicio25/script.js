//Crie uma arrow function que receba dois objetos e 
//retorne um novo objeto combinando todas as propriedades
//dos dois objetos.

let combinarObjetos = (objeto1, objeto2) => {
    let novoObjeto = {};

    for (let propriedade in objeto1) {
        novoObjeto[propriedade] = objeto1[propriedade];
    }

    for (let propriedade in objeto2) {
        novoObjeto[propriedade] = objeto2[propriedade];
    }

    return novoObjeto;
};

let objeto1 = { a: 1, b: 2 };
let objeto2 = { b: 3, c: 4 };
let objetoCombinado = combinarObjetos(objeto1, objeto2);

console.log("Objeto 1:", objeto1);
console.log("Objeto 2:", objeto2);
console.log("Objeto Combinado:", objetoCombinado);
