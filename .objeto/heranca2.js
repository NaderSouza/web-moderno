Object.prototype.att0 = '0' //* nao fazer muito isso 

const avo = {att1: 'A'}
const pai = {__proto__: avo, att2: 'B' , att3: '3'}
const filho = {__proto__: pai, att3: 'C'}
console.log(filho.att0, filho.att1, filho.att2, filho.att3)


const carro = {
    velAtual: 0,
    veltMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.veltMax){
            this.velAtual += delta
        }else{
            this.velAtual = this.veltMax
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.veltMax}Km/h`
    }
}

const lamborghini = {
    modelo: 'Aventador',
    veltMax: 324 //* shadowing
}

const audi = {
    modelo: 'A4',
    status(){
        return `${this.modelo}: ${super.status()}`
    },
}

Object.setPrototypeOf(lamborghini, carro)
Object.setPrototypeOf(audi, carro)

console.log(lamborghini)
console.log(audi)

audi.acelerarMais(300)
console.log(audi.status())

lamborghini.acelerarMais(250)
console.log(lamborghini.status())