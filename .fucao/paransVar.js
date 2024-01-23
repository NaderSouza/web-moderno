function soma(){
    let soma = 0
    for (i in arguments){
        soma += arguments [i]
    }
    return soma
}
// *Foi suav
console.log(soma())
console.log(soma(1))
console.log(soma(1.1,2.2,3.3,` Teste`))

// *Não tanto suav
console.log(soma(1.1,2.2,` Teste`))
console.log(soma(`a`,`b`,`c`))