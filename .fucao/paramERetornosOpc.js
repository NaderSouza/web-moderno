function area ( largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`valor acima: ${area}m2` )
    }else{
        return area
    }
}
console.log(area(2,8))
console.log(area(2))
console.log(area())
console.log(area(2,5,8,55,44))
console.log(area(2,11))
