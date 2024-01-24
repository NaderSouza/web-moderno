class Pessoa {
    constructor (nome){
        this.nome = nome
    }
    falar(){
        console.log(`meu nome e ${this.nome}`)
    }
}

const p1 = new Pessoa('Nader')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`nome e ${nome}`)
    }
}
const p2 = criarPessoa('nader')
p2.falar()
