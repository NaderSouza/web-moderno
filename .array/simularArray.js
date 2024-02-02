const quaseArray = {0: 'Nader', 1:'Leo', 2:'Kadu'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

const meuArray = ['Nadin', 'Leo', 'Bruno']
console.log(quaseArray.toString(), meuArray)