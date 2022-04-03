// Objetos -Métodos
function calcMedia (n1, n2) {
    return (n1 + n2) / 2;
}


var aluno = {
    nome: "Igor",
    notas: [8, 7],

    media: calcMedia
}

var aluno1 = {
    nome: "João",
    notas: [6, 7],

    media: calcMedia
}

console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]));


console.log(aluno1.nome)
console.log(aluno1.media(aluno1.notas[0], aluno1.notas[1]));