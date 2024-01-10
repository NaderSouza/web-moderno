// SEM RETORNO
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 3); // Imprime 5
imprimirSoma(2); // Imprime NaN (Not a Number), pois 'b' é undefined
imprimirSoma(2, 5, 3, 4); // Imprime 7, pois soma apenas os dois primeiros argumentos
imprimirSoma(); // Imprime NaN, pois 'a' e 'b' são undefined

// COM RETORNO

function plus(a, b = 1) {
    return a + b;
}
console.log(plus(9, 7)); // Imprime 16 (9 + 7)
console.log(plus(2));    // Imprime 3 (2 + 1, onde 1 é o valor padrão para 'b')
console.log(plus());      // Imprime NaN, pois 'a' é undefined e 'b' é 1 (valor padrão)

function soma(a, b = 0) {
    return a + b;
}

console.log(soma(9, 7)); // Imprime 16 (9 + 7)
console.log(soma(2));    // Imprime 2 (2 + 0, onde 0 é o valor padrão para 'b')
console.log(soma());      // Imprime 0, pois 'a' é undefined e 'b' é 0 (valor padrão)
