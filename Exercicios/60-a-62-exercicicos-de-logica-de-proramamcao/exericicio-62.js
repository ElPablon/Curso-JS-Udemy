// escreva ma função que recebe um numero e retoran o seguinte:
// numero é divisilve por 3 = Fizz
// numero é divisivel por 5 Buzz
// numero é divisivel por 3 e 5 FizzbBuzz
// Numero não é divisivel por 3 e 5 = Retorna o próprio numero
// checar se realmente é um numero
//use a funçãpo com números de 0 a 100

function validaNumero(x){
    let resultado = [];
    if (x % 5 == 0 && x % 3 == 0){resultado +="FizzBuzz"}
    else if (x % 3 == 0){resultado += "Fizz"}
    else if (x % 5 == 0){resultado += "Buzz"}
    else {resultado += x}

    const checaNumero = typeof x =="number" ? resultado +=`, ${x} é um numero` : resultado +=`, ${x} é um numero`;

    return resultado


}


let numero = 0
do {
    console.log(validaNumero(numero));
    numero++
} while (100 >= numero)
