//Factory Function (função fábrica)
//Constructor function (Função)
function criaPessoa(nome, sobrenome,altura, peso) {
    return {
        nome,
         sobrenome,
         get nomeCompleto (){
            //usa-se o this. para puxar o nome (variável) de onde a função está sendo chamada
            return `${this.nome} ${this.sobrenome}`
         },
         fala(assunto = 'Está falando sobre nada'){
            // o this. se refere ao metodo que está chamando a função
            return `${this.nome} está ${assunto}.`
        },
        altura,
        peso,
        //Getter -> Cria uma função que se passa por uma instância de objeto
        get imc(){
            const indice =this.peso/ (this.altura ** 2);
            return indice.toFixed(2);
        },

        //Setter -> Muda o valor de uma determinada
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
            console.log(valor);
        }
    };
}


const p1  = criaPessoa('Otávio', 'Luiz', 1.80, 80);

p1.nomeCompleto = 'Maria Aparecida Silva';

console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala());
//O imc não precisa de (), embora seja uma function, pois ela foi criada utilizando o get
console.log(p1.imc);

