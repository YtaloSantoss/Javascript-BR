
var aluno = {
    nome: "Igor",
    notas: [8, 7],

    media: function (n1, n2) {
        return (n1 + n2) / 2;
    }
}

console.log(aluno.nome)
console.log(aluno.media(aluno.notas[0], aluno.notas[1]))