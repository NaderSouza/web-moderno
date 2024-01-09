const escola = `Cornolandia`

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(5))
console.log(escola.indexOf('5'))

console.log(escola.substring(5))
console.log(escola.substring(0, 5))

console.log("Escola ".concat(escola).concat("!"))
console.log(escola.replace(/\c/g, 'e'))

console.log('Nader, Guigo, Kadu'.split(','))
console.log('Nader, Guigo, Kadu'.split(/,/))