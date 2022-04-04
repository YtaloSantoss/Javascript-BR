
// Outra Forma

/* function obj(n, s){
    return { nome: n,
            Sobrenome: s
            }

}

var a = obj("Ytalo", "Mateus")
console.log(a); */


function obj(n, s) {
                    this.nome = n,
                    this.Sobrenome = s
                }


var a = new obj("Ytalo", "Mateus")
console.log(a);