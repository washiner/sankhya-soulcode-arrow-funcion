//Crie uma arrow function que receba um número
//e retorne o seu fatorial.

let calcularFatorial = (numero) => {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let fatorial = 1;
        for (let i = 2; i <= numero; i++) {
            fatorial *= i;
        }
        return fatorial;
    }
};

console.log(calcularFatorial(3));
console.log(calcularFatorial(0)); 

