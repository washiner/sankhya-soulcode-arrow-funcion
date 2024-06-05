//Crie uma arrow function que receba um array e 
//retorne um novo array sem elementos 
//"falsos" (`false`, `null`, `0`, `""`, `undefined`, `NaN`).

let removerElementosFalsos = (array) => {
    return array.filter(elemento => !!elemento);
};

let arrayOriginal = [0, false, "", null, undefined, NaN, "washiner", 44];
let arraySemFalsos = removerElementosFalsos(arrayOriginal);

console.log("Array Original:", arrayOriginal);
console.log("Array Sem Falsos:", arraySemFalsos);
