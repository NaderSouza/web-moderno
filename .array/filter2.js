Array.prototype.filter2 = function(callback, thisArg){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'PS5', preco: 4699, fragil: true},
    {nome: 'iPhone', preco: 2699, fragil: true},
    {nome: 'Copo Vidro', preco: 29.99, fragil: true},
    {nome: 'Copo Plastico', preco: 29.99, fragil: false},
]


const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))