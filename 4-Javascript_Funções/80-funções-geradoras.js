//a função geradora funciona com um sistema de pause, toda vezx que ela é chamada ela executa uma poarte da função
//Para retorna valores na função geradora, usa-se o yield, ao invés de return
function* geradora1(){
    //Código qulaquer ...
    yield 'valor 1';
    //Código qulaquer ...
    yield 'valor 2';
    //Código qulaquer ...
    yield 'valor 3';
}


const g1 = geradora1();
//O metodo .next faz com que seja possivel acessar os partes dentro de uma função geradora
console.log(g1.next());
//Caso contrário, o console irá retornar o valor [Generator], que é o tipo de função 
console.log(g1)
//Ao chamar a função gerdora com o metodo .next várias vezes, é possivel acessar as partes posteriores
console.log(g1.next());
console.log(g1.next());
//Logo, o a função executa uma parte do código toda vez que é ativada

function* geradora2(){
    let i = 0;

    while(true){
        yield i;
        i++
    }
}

const g2 = geradora2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4(){
    //uma das funções da função geradora 4 é ativar a função 3
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 =geradora4();
    for(let valor of g4){
        console.log(valor);
    }


function* geradora5(){
    yield function(){
        console.log('vim do y1');
    };

    //Quando se usa o return, o código entende que nada mais vai ser executado para baixo
    return function() {
        console.log('O código morre aqui')
    }

    yield function(){
        console.log('Vim do y2');
    };
}

const g5 = geradora5();

const func1 = g5.next().value;
const func2 = g5.next().value;

func1()
func2()