/*
 * Exemplo 1 de Loop com Let
 */

let i = 0;

for (i = 0; i < 10; i++) {
  console.log(i);
}
console.log("i=", i);

/*
 * Exemplo 2 de Loop com Let (selecionado os números)
 */

const funcs = [];

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs[2]()
funcs[8]()