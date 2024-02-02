class Manda {
    constructor(nome = 'gneto', valor = 0) {
        this.nome = nome
        this.valor = valor
    }
}

class Ciclo {
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.mandaAi = []
    }

    addManda(...mandaAi) { 
        mandaAi.forEach(l => this.mandaAi.push(l)) 
    }

    sumario() {
        let valorConso = 0
        this.mandaAi.forEach(l => {
            valorConso += l.valor
        })
        return valorConso
    }
}

const salario = new Manda('Salario', 45000)
const conta = new Manda('Luz', -250)

const contas = new Ciclo(6, 2024)
contas.addManda(salario, conta) 
console.log(contas.sumario())
