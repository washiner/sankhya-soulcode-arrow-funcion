//Crie uma arrow function que receba um array de
//objetos e uma propriedade, e retorne um objeto
//agrupando os elementos por essa propriedade.

let agruparPorPropriedade = (array, propriedade) => {
    let grupos = {};

    array.forEach(objeto => {
        let valorPropriedade = objeto[propriedade];

        if (!grupos[valorPropriedade]) {
            grupos[valorPropriedade] = [];
        }

        grupos[valorPropriedade].push(objeto);
    });

    return grupos;
};

let pessoas = [
    { nome: 'Washiner', cidade: 'Cuiabá' },
    { nome: 'Paulo', cidade: 'Manaus' },
    { nome: 'Mel', cidade: 'Mato Grosso' },
    { nome: 'Ricardo', cidade: 'São Paulo' }
];
let gruposPorCidade = agruparPorPropriedade(pessoas, 'cidade');

console.log("Array de Pessoas:", pessoas);
console.log("Grupos por Cidade:", gruposPorCidade);

