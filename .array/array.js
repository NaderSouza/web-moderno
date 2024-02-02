console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Nader', 'Bia','Jardo')
console.log(aprovados)

aprovados = ['Nader', 'Bia','Jardo']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados [3] = 'Jorge'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados [9] = 'Luis'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Nader', 'Bia','Jardo']
aprovados.splice(1, 2, 'pessoa1', 'pessoa2')
console.log(aprovados)