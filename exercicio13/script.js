//Crie uma arrow function que receba dois arrays
//e retorne um novo array contendo todos os elementos
//dos dois arrays, sem duplicatas.

let mesclarArrays = (arr1, arr2) => {
    let conjunto = new Set([...arr1, ...arr2]);
    return [...conjunto];
};

let array1 = [1, 2, 3];
let array2 = [3, 4, 5];
let arrayMesclado = mesclarArrays(array1, array2);

console.log("Array 1:", array1);
console.log("Array 2:", array2);
console.log("Array Mesclado:", arrayMesclado);
