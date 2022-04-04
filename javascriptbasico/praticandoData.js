/* Em JavaScript, "instância" não tem esse significado técnico
porque JavaScript não tem essa diferença entre classes e instâncias.
No entanto, falando sobre JavaScript, "instância" pode ser usada informalmente para significar
um objeto criado usando uma função construtora particular */

var d = new Date();
var dias = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab",]

console.log(d);
console.log(dias[d.getDay()]);