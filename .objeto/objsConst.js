const pessoa = {nome: 'Nader'}
pessoa.nome = 'Bia'
console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'Jardo'
pessoa.end = 'Jardo2'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Nader2'})
    console.log(pessoaConstante)
    
