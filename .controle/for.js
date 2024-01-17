Number.prototype.contador = function (inicio, fim) {
    return this >= s && this <= fim;
};

let contador = 1;
while (contador <= 10){
    console.log(`contador = ${contador}`);
    contador++;
}
console.log('-------------------');

for(let i = 1; i <= 10; i++){
    console.log(`i = ${i}`);
}
console.log('-------------------');

const notas = [6.7, 9.4, 8.5, 7.7, 6.6, 3.5];
for (let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`);
    // console.log('-------------------');
}
console.log('-------------------');
console.log(`${notas.length} notas`);
