const numeros = [1,2,3,4,5,6,7,8,9,10];

for (let numero of numeros) {
    if (numero === 1000000000){
        break;
    }

    console.log(numero)
}