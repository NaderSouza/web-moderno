//* Factory
function criarProd(nome,preco,indice){
    return {
        nome,
        preco,
        indice,
        desconto: 0.1
    }
}

console.log(criarProd('PS5', 2888.55,'eletronico'))
console.log(criarProd('iPhone', 1888.55,'eletronico'))
console.log(criarProd('Armario', 758.55,'mobilia'))