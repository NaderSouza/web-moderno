function compras(trab1, trab2){
    const comprarCS  = trab1 || trab2
    const comprarR6  = trab1 && trab2
    // const comprarCOD = !!(trab1 ^ trab2)
    const comprarCOD = trab1 != trab2
    const maoDeVaca  = !comprarCOD
    
    return{comprarCS, comprarR6, comprarCOD, maoDeVaca}
}
    
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
    