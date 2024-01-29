const a = 1
const b = 2
const c = 3

const obj1 = {a, b, c}
console.log(obj1)

const nome = 'oi'
const valor = 85.5

const obj2 = {}
obj2[nome] = valor
console.log(obj2)

const obj3 = {[nome]: valor}
console.log(obj3)

const obj4 = {
    funcao1: function(){

    },
    funcao2(){

    }
}

console.log(obj4)