Number.prototype.entre = function (inicio, fim) {
    return this >= inicio && this <= fim;
  };

const impResu = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log("Passou gay")
      break 
      case 8: case 7:
        console.log("Passou meio Gay");
          break
          case 6: case 5: case 4:
            console.log("Quase não passou Gay");
              break
              case 3: case 2: case 1: case 0:
                console.log("Não passou Gay");
                  break
                  default:
                    console.log("Nota inválida");
                    
                }
                console.log('----------------');
            }
            
impResu(10);
impResu(8.9)
impResu(6.55)
impResu(2.3)
impResu(-1)
impResu(11)
