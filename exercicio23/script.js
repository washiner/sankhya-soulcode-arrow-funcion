//Crie uma arrow function que receba uma string
//e retorne o número de palavras na string.

let contarPalavras = (str) => {
    return str.split(' ').length;
};

let frase = "Washiner Takeuchi programador";
let numeroDePalavras = contarPalavras(frase);

console.log("Frase:", frase);
console.log("Numero de Palavras:", numeroDePalavras);
