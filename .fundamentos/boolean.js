let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

console.log('\nos de verdade...')

console.log(!!3)
console.log(!!-1)
console.log(!!' teste')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('\nos falsos...')

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('\npra finalizar...')
console.log( !!('' || null || 0 || ' '))

let nome = 'Nader'
console.log(nome || 'Desconhecido')