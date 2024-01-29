//* usando a notacäo I Literal
const obj1 = {}
console.log(obj1)

//* Object em JS
console. log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//* Funcöes construtoras
function produto(nome,preco,desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}
const p1 = new produto ('PS5', 4888.80,0.40)
const p2 = new produto ('PSP', 500.80,0.40)
const p3 = new produto ('Switch', 2500.80,0.40)

// console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto(),p3.getPrecoComDesconto())

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())
console.log(p3.getPrecoComDesconto())

//* Fungäo Factory
function criarFuncionario(nome,salarioBase,faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario( 'Joäo' ,7980, 4)
const f2 = criarFuncionario( 'Maria' ,11400, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)


