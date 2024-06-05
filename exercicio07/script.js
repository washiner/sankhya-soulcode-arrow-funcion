//Crie uma arrow function que receba um array de
//números e retorne a média dos números.


let calcularMedia = (numeros) => {
    let soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return soma / numeros.length;
};

let arrayDeNumeros = [1, 2, 3, 4];
let media = calcularMedia(arrayDeNumeros);

console.log(`A média dos números é: ${media}`);
