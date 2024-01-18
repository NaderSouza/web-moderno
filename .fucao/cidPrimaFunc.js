// Funcäo em JS é First-Class Object (Citizens)
// Higher—order function

// criar de forma literal
function fun1() { }
// Armazenar em uma variåvel

const fun2 = function() { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](6,3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function ( ) { return 'gay'}
console. log (obj.falar())

// Passar funcäo como param
function run(fun) {
    fun()

}

run(function () { console.log('Executando...') })

// Um funqäo pode retornar/conter um funcäo
function soma(a, b,) {
    return function (c) {
    console. log(a + b + c)

    }
}

soma (2, 3)(4*5/8)
soma(2, 3,)(7)

console.log('-------------------');

const cincoMais = soma(2, 3)
cincoMais(4)