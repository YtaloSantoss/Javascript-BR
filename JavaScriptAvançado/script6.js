 

function novoAluno(nome,idade) {
    return {nome, idade }

}

let alunos = [
     novoAluno("Mario", 23),
     novoAluno("José", 45),
     novoAluno("Marcia", 29),
    novoAluno("Joao", 35)
]

/*for ( let alu of alunos) {
    if (alu.idade < 30) {
        console.log(alu.nome)
    }
}*/




// Recebera elementos verdadeiros ou falso pelo callback do filter 
function temMenosde30(aluno) {
    return aluno.idade < 30
}

function temMaisde30(aluno) {
    return aluno.idade > 30
}

let alunosComMenosde30 = alunos.filter(temMenosde30)

let alunosComMaisde30 = alunos.filter(temMaisde30)

console.log(alunosComMenosde30)
console.log(alunosComMaisde30)