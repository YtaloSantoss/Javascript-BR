// Objetos -Métodos

var aluno = {
    nome: "Igor",
    notas: [8, 7],

    media: function () {
        return (this.notas[0] + this.notas[1]) / 2;
    }
}

var aluno1 = {
    nome: "João",
    notas: [6, 7],

    media: function () {
        return (this.notas[0] + this.notas[1]) / 2;
    }
}

console.log(aluno.nome)
console.log(aluno.media())

console.log(aluno1.nome)
console.log(aluno1.media())