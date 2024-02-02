const produtos = [
    {nome: 'PS5', preco: 4699, fragil: true},
    {nome: 'iPhone', preco: 2699, fragil: true},
    {nome: 'Copo Vidro', preco: 29.99, fragil: true},
    {nome: 'Copo Plastico', preco: 29.99, fragil: false},
]
console.log(produtos.filter(function(p){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))