const sdds = 'Oi' //cntx lexico 1 

function exec() {
    const sdds = 'te amo!!' //cntx lexico 2 
    return sdds
}
const cliente = {
    nome: 'Nader',
    idade: '21',
    peso: '73kg',
    endereco: {
        rua: 'Coronel Oscar Porto',
        numero: '1081'
    }
}

console.log(sdds)
console.log(exec())
console.log(cliente)