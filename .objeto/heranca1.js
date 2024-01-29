const lamborghini = {
    modelo: 'Aventador',
    velMax: '500'
}

const BMW = {
    modelo: 'A4',
    velMax: '350'
}

console.log(lamborghini.__proto__)
console.log(lamborghini.__proto__ === Object.prototype)
console.log(BMW.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObj() {}
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObj.prototype)