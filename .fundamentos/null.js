let valor;
console.log(valor); // undefined

valor = null;
console.log(valor); // null
// console.log(valor.toString()); // TypeError: Cannot read property 'toString' of null

const produto = {};
console.log(produto.preco); // undefined
console.log(produto); // {}

produto.preco = 3.80;
console.log(produto); // { preco: 3.8 }

produto.preco = undefined;
console.log(!!produto.preco); // false
// delete produto.preco; // remove a propriedade preco do objeto
console.log(produto); // {}

produto.preco = null;
console.log(!!produto.preco); // false
console.log(produto); // { preco: null }
