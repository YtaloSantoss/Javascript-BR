// TESTE DO WHILE(ENQUANTO) COM math.random() que quer dizer um numero de 0 a 1 com ate 16 casas

var numero = Math.random() * 100;

while (numero < 90 ) {

    console.log(numero);
    numero = Math.random() * 100;

}

console.log(numero);
console.log("Acabou")