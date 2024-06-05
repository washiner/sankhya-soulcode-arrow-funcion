//Crie uma arrow function que receba uma string
//e retorne um objeto com a contagem de cada caractere na string.

let contarOcorrencias = (str) => {
    let contagem = {};

    for (let char of str) {
        if (contagem[char]) {
            contagem[char]++;
        } else {
            contagem[char] = 1;
        }
    }
    return contagem;
};

let stringExemplo = "tuiuiu";
let ocorrencias = contarOcorrencias(stringExemplo);

console.log("Ocorrências de cada string:");
console.log(ocorrencias);
