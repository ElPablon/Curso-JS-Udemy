//Declaração de função (function hoisting*)
function falaOi(){
    console.log('Olá, Mundo!');
}

// First-class objects (Objetos de primeira classe)
//Function expression -> criar uma função como variável (dado) -> permite usar uma função como parâmetro de outra função
const souUmDado =function(){
    console.log('Sou um dado.');
};

//Usando uma function como parâmetro para outra função
function executaFuncao(funcao){
    console.log('Vou executar sua função abaixo:')
    funcao();
};

executaFuncao(souUmDado);

//Arrow Function
const funcaoArrow = () => {
    console.log('Sou uma arrow function');
};

funcaoArrow();

//Dentro de um objeto
const obj = {
    falar(){
        console.log('estou falando...');
    }
};

obj.falar()