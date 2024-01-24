function carro(velocidadeMax = 200, delta = 5) {
    //* metodo privado
  let velocidadeAtual = 0

  //* metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMax) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMax
    }
  }
  //* metodo publico
  this.getVelociadeAtual = function () {
    return velocidadeAtual
  }
}

const maserati = new carro
maserati.acelerar()
maserati.acelerar()
console.log(maserati.getVelociadeAtual())

const lamborghini = new carro(750, 40)
lamborghini.acelerar()
lamborghini.acelerar()
lamborghini.acelerar()
console.log(lamborghini.getVelociadeAtual())

console.log(typeof carro)
console.log(typeof lamborghini)
