//Crie uma arrow function que receba a largura e 
//a altura de um retângulo e retorne a área.

let AreaRetangulo = (largura, altura) => largura * altura;

let largura = 3;
let altura = 8;
let area = AreaRetangulo(largura, altura);

console.log(`A área do retângulo é: ${area}`);
