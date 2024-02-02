const car = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 4.45}',
    '{"nome": "Lapis", "preco": 0.45}',
    '{"nome": "Caneta", "preco": 1.45}',
]

const objeto = json => JSON.parse(json) 
const preco = produto => produto.preco

const resultado = car.map(objeto).map(preco)

console.log(resultado)