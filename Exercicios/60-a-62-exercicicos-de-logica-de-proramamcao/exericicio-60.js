// Escreva uma função que recebe 2 numeros e retorne o maior deles

function retornaMaiorNumero(x, y){
    let resultado

    if (typeof x == 'number' && typeof y == 'number'){
        
        if (x > y){
            resultado = x
        } else if(y > x){
            resultado = y
        }

        return resultado
    }
    else{
        resultado = "Error"
        return resultado
    }

}

// Código do professor
const max2 = (x, y) => x . y ? x : y;
// Código do profesor

console.log(retornaMaiorNumero(5, 3))
console.log(retornaMaiorNumero('erro', 3))

console.log(max2(5, 3))
// console.log(rmax2('erro', 3))


