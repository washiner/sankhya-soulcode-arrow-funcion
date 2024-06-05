//Crie uma arrow function que receba uma
//idade e retorne `"Maior de Idade"` se a
//idade for maior ou igual a 18 e `"Menor de Idade"` caso contrário.


let age = 44;

const checkAge = age => age >= 18 ? "Maior de Idade" : "Menor de Idade";

let result = checkAge(age);

console.log(`A pessoa com ${age} anos é: ${result}`);
