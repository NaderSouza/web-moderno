const alunos = [
    {nome: 'Nader', nota: 9.8, bolsista: false},
    {nome: 'Kadu', nota: 6.8, bolsista: false},
    {nome: 'Jorge', nota: 7.4, bolsista: false},
    {nome: 'Luis', nota: 9.7, bolsista: false}
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)