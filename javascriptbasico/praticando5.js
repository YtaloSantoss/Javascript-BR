var nota1 = 8.2;

var nota2 = 6.0;

var media = (nota1 + nota2) / 2;

var conceito = " "

if(media >= 8){

    conceito = "Ótimo";

}
else if (media >= 6.5 ) {
    
    conceito = "Bom";

} else {

    conceito = "Regular";
}
console.log(media);
console.log(conceito);

switch(conceito){

    case "Ótimo":
        console.log("Você é um ótimo aluno")
        break
    case "Bom":
        console.log("Você está quase perto")
        break
    case "Regular":
        console.log("Você precisa estudar mais")
        break
    default:
        console.log("Houve algum erro")
}