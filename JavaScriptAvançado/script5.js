let usuarios = ["Adriano", "Marcia", "José"];

function inserirUsuario(nome) {

    let promise = new Promise(function (resolve, reject){
        
        setTimeout(() => {
            usuarios.push(nome);
            let error = true;
    
            if (!error) {
                resolve();
            } else {
                reject({ msg: "Erro de qualquer coisa"})
            }
        }, 1000);
    })
    return promise;

}

function listarUsuario() {

    console.log(usuarios);

}

// aqui estou disparando a primeira função nome fazendo com que o item Igor seja adcionado.
inserirUsuario("Igor")
// aqui estou disparando a função listarUsuario() e imprimido o resultado final chamando pelo .then o resolve.    
.then(listarUsuario)
// aqui estou criando uma função chamando dentro da variavel error a msg e chamando pelo .catch o reject .    
.catch((error) => {
    console.log(error.msg)

});

// não se ajuste quando vc estudou entendeu tudo, realmente é embarasozo mas vc so presisa se esforçar Mateus, VOCÊ consegue bora, pra cima.
