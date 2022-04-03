
function criarAluno(nome, n1, n2) {

        return {
            nome: nome,
            nota1: n1,
            nota2: n2,
            media: function () {
                return (this.nota1 + this.nota2) / 2;
            }
        }
}

var turma = [ 
            criarAluno("Igor", 9, 6),
            criarAluno("Joao", 7, 4),
            criarAluno("Ytalo", 9, 10)
            ]

var aluno = turma[2];

for (var aluno of turma) {
    console.log(aluno.nome + "-" + aluno.media())
}

// aqui outro jeito de mostrar os elementos da lista de alunos
//       \/  \/  \/  \/  \/
// turma.forEach( function(elemento) {

//    console.log(elemento);
// })