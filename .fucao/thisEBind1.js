const pessoa = {
    sau: 'bom dia',
    falar(){
        console.log(this.sau)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() // *conflito entre paradigmas: funcional e 00

const falarDpessoa = pessoa.falar.bind(pessoa)
falarDpessoa()

const falar2 = pessoa.falar.bind(pessoa)
falarDpessoa()

