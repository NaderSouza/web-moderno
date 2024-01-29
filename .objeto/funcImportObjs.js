const pessoa = {
    nome: 'Nader',
    idade: 21,
    tipo: 'devops'
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

console.log('-------------------');

//* Melhor metodo 
Object.entries(pessoa).forEach((chave, valor) => {
    console.log(`${chave}: ${valor}`)
})


console.log('-------------------');

Object.defineProperty(pessoa, 'dataNasci',{
    enumerable: true,
    writable: false,
    value: '01/05/2002'
})
pessoa.dataNasci = '01/05/2002'
console.log(pessoa.dataNasci)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

console.log('-------------------');

const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234

console.log(obj)