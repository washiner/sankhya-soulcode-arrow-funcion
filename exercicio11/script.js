//Crie uma arrow function que receba uma matriz
//(array de arrays) e retorne a sua transposta.

let calcularTransposta = (matriz) => {
    
    if (matriz.length === 0 || matriz[0].length === 0) {
        return [];
    }

    let linhas = matriz.length;
    let colunas = matriz[0].length;

    let modificada = [];

    for (let j = 0; j < colunas; j++) {
        modificada[j] = [];
        for (let i = 0; i < linhas; i++) {
            modificada[j][i] = matriz[i][j];
        }
    }

    return modificada;
};

const matrizOriginal = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
let modificada = calcularTransposta(matrizOriginal);

console.log("Matriz Original:");
console.log(matrizOriginal);
console.log("Matriz Transposta:");
console.log(modificada);
