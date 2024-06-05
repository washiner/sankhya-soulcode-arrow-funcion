//Crie uma arrow function que receba uma string e 
//retorne a string invertida.

let inverterString = (str) => {
    return str.split('').reverse().join('');
};

let stringOriginal = "Washiner, Takeuchi!";
let stringInvertida = inverterString(stringOriginal);

console.log("String Original:", stringOriginal);
console.log("String Invertida:", stringInvertida);
