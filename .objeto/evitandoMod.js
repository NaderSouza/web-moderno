const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 8.55, tag: 'promocao'
})

console.log('Extensivel:', Object. isExtensible(produto) )
produto.nome= 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

console.log('-----------------------------------');

const pessoa = {nome: 'jardo', idade: 21}
Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)