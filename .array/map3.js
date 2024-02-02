Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const car = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 4.45}',
    '{"nome": "Lapis", "preco": 0.45}',
    '{"nome": "Caneta", "preco": 1.45}',
]

const objeto = json => JSON.parse(json) 
const preco = produto => produto.preco

const resultado = car.map2(objeto).map2(preco)

console.log(resultado)