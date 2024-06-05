//Crie uma arrow function que receba uma string e
//retorne `true` se for um palíndromo e `false` caso contrário.

let ehPalindromo = (str) => {

    let strLimpa = str.replace(/\s+/g, '').toLowerCase();
    let strInvertida = strLimpa.split('').reverse().join('');
   
    return strLimpa === strInvertida;
};

console.log(ehPalindromo("radar")); 
console.log(ehPalindromo("Washiner")); 
