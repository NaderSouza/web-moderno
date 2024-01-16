Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
  };
  
  const impResu = function (nota) {
    if (nota.entre(8, 10)) {
      console.log("Passou Gay");
    } else if (nota.entre(7, 8.99)) {
      console.log("Passou meio Gay");
    } else if (nota.entre(5, 5.99)) {
      console.log("Quase não passou Gay");
    } else if (nota.entre(0, 3.99)) {
      console.log("Não passou Gay");
    } else {
      console.log("Nota inválida");
    }
    console.log('----------------');
  };
  
impResu(10);
impResu(8.9)
impResu(6.55)
impResu(2.3)
impResu(-1)
impResu(11)
  