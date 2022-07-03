let usuarios = ["Adriano", "Marcia", "José"];

function inserirUsuario(nome, callback) {

   setTimeout(()=>{usuarios.push(nome); callback();}, 1000);

}

function listarUsuario() {

    console.log(usuarios);

}

inserirUsuario("Igor", listarUsuario);


