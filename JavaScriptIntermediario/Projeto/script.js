// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml 
// Refrigereante/agua - 1000 ml por pessoa + 6 horas 1500ml 

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let saida = document.getElementById("saida")

function calcular(){
    console.log("calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value; 
    let duracao = inputDuracao.value;
    
    let quantidadeTotal = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao)/2 * criancas)
    console.log(quantidadeTotal)
}

function carnePorPessoa(duracao){
              // 6 horas  + de 6 horas 650gr
    if(duracao >= 6) {
        return 650;
    }else{
        return 400
    }
}

function carnePorPessoa(duracao){
    // 6 horas + de 6 horas 2000ml
if(duracao >= 6) {
return 1200;
}else{
return 2000
}
}