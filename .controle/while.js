Number.prototype.getIntero = function (inicio, fim) {
    return this >= inicio && this <= fim;
  };
function getIntero(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0

while (opcao != -1) {
  opcao = getIntero(-1, 10);
  console.log(`Numero sorteado ${opcao}.`)
  console.log('-------------------');
}

console.log("Gay")
