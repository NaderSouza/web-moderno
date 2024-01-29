// colecäo dinämica de pares chave/valor
const produto = new Object
produto.nome = 'mesa'
produto['marca '] = 'herman'
produto.preco = 225

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'A4',
    preco: 80000,
    dono: {
        nome: 'Nader',
        idade: '21',
        endereco:{
            rua: 'ceu',
            numero: '1222'
        }
    },

    condutores: [{
        nome: 'Kadu',
        idade: '21',
    },{
        nome: 'Bia',
        idade: '21',
    }],
    calcularSeguro: function(){

    }
}
carro.dono.endereco.numero = 1000
carro['dono']['endereco']['rua'] = 'Paulista'
console.log(carro)

delete carro.condutores
delete carro.dono.endereco
console.log(carro)
delete carro.calcularSeguro
console.log(carro.condutores)

