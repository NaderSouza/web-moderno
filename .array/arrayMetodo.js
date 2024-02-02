const noob = ['Nader', 'Jardo', 'Cristian', 'Rozzato']
noob.pop() //* noob pro!!
console.log(noob)

noob.push('Perma Noobs')
console.log(noob)

noob.shift() //* Remove o Primeiro
console.log(noob)

noob.unshift('Nader')
console.log(noob)

//* Splice adiciona e remove elementos

//* adicionar
noob.splice(2, 0, 'Enzo', 'Leo')
console.log(noob)

//* remover
noob.splice(0, 1)
console.log(noob)

const algunsNoobs1 = noob.slice(2) //* novo array
console.log(algunsNoobs1)

const algunsNoobs2 = noob.slice(1, 4) 
console.log(algunsNoobs2)