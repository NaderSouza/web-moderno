const notas = [6.7, 9.4, 8.5, 7.7, 6.6, 3.5]

for(let i in notas){
    console.log (i,notas[i])
}

const pessoa = {
    Nome: 'Nader',
    Sobrenome: 'Souza',
    Idade: 21,
    Peso: 75
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(atributo)