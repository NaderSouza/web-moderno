function soBom(nota) {
  if (nota >= 7) {
    console.log("deu bom " + nota);
  }
}

soBom(8.3);
soBom(6.2);

function seForTrue(valor) {
  if (valor) {
    console.log("É True " + valor);
  }
}

// * Os que não aparecem no terminal são falsos
seForTrue();
seForTrue(null);
seForTrue(undefined);
seForTrue(NaN);
seForTrue(1);
seForTrue(0);
seForTrue(-1);
seForTrue('oi');
seForTrue(' ');
seForTrue('?');
seForTrue([]);
seForTrue([1, 2]);
seForTrue({});

