const soma = function (x, y) {
  return x + y;
};

const imprimirResu = function (a, b, opercacao = soma) {
  console.log(opercacao(a, b));
}
imprimirResu(3,4)
imprimirResu(3,4, soma)
imprimirResu(3,4, function (x,y){
    
    return x - y 
})
imprimirResu(3,4, (x,y) => x * y)

const pessoa = {
    falar: function(){
        console.log('opa')
    }
}
pessoa.falar()
