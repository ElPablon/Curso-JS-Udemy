//IIFE -> Immediately Invoked Function Expression
//Funções que são ativadas assim que o código começa a rodar

(function(idade, peso, altura) {
    const sobrenome = 'Silva';
    function criaNome(nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Pablo'))
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);
