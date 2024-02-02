const aprovados = ['Nader', 'Bia','Jardo', 'Kadu']

aprovados.forEach(function(nome, indice, array, x){
    console.log(`${indice + 1}) ${nome}`)
    console.log(x);
})

console.log("-------------------");

aprovados.forEach(nome => console.log(nome))

console.log("-------------------");

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)

