const fabricantes = ['BMW', 'Maserati', 'Lamborghini']

function impri(nome,indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(impri)
fabricantes.forEach(function(marca){
    console.log(marca)
})

//* Fazer em Arrow também
// fabricantes.forEach (impri)
// fabricantes.forEach(marca => console.log(marca))