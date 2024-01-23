const notas = [7.5, 5.8, 9.4, 1.7, 6.7, 8.2];

//* sem callback
let notasBaixas1 = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i])
  }
}

console.log(notasBaixas1);

//* com callback
notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
})
console.log(notasBaixas2);

//* com arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3);
