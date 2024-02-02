const alunos = [
    {nome: 'Nader', nota: 9.8, bolsista: false},
    {nome: 'Kadu', nota: 6.8, bolsista: false},
    {nome: 'Jorge', nota: 7.4, bolsista: true},
    {nome: 'Luis', nota: 9.7, bolsista: false}
]

const TodosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(TodosBolsista))

const AlgumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(AlgumBolsista))