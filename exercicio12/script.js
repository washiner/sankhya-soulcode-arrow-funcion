//Crie uma arrow function que receba um array
//e retorne um novo array sem elementos duplicados.


let removerDuplicatas = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
};

let arrayOriginal = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9, 9, 10];
let arraySemDuplicatas = removerDuplicatas(arrayOriginal);

console.log("Array Original:");
console.log(arrayOriginal);
console.log("Array Sem Duplicatas:");
console.log(arraySemDuplicatas);
