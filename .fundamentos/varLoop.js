/*
* Exemplo 1 de Loop com var
*/
for (var i = 0; i < 10; i++){
    console.log(i);
} 
console.log('i=', i);

/*
* Exemplo 2 de Loop com var
*/

const funcs = [];

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);

    })
}

funcs[2]()
funcs[8]()