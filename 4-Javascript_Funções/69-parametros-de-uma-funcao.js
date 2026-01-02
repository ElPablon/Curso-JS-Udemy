function funcao(){
    //arguments mostra uma string com os valores colocados como argumentos
    console.log(arguments);
}

//funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)  

function funcao2(){
    // fazendo um função que listaq os argumentos, depois soma dos valores
    let total = 0;
    for (let argumento of arguments){
        total += argumento
    }

    console.log(total);
}

//funcao2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function funcao3(a, b, c){
   // É possível criar uma função que recebe parâmetros a, b, c que caso hajam mais argumentos, 
   // são armazenados na variável arguments
    let total = 0;
    for (let argumento of arguments){
        total += argumento
    }

    console.log(total, a, b, c);
}

//funcao3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function soma(a =3, b = 4){
    //serindo valores default nas variáveis
    console.log(a+b)
}

/* soma()
soma(1, 3)
soma(2) */

function funcao([valor1, valor2, valor3]){
    //inserindo um objeto dentro de uma função
    console.log(nome, sobrenome, idade);
}

funcao (['Pablo', 'Silva', 26]);
