function criaCalculadora(){
    return{
        //Metodos
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        pressionaEnter(){
            document.addEventListener('keyup', e => {
                if(e.keyCode === 13 ){
                    this.realizaConta();
                }
            });
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){
                    alert('Conta inválida');
                    return;
                }

                this.display.value = String(conta);
            } catch(e){
                alert('Cinta inválida');
                return;
            }
        },


        //Atributos
        cliqueBotoes(){
            //This -> calculadora
            //A arrow function faz com que o this. seja direcionado ao item calculadora
            document.addEventListener('click', e => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    // mandando o innertext para a variável valor <p>inner text</p>
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if (el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            });

        },
                //btnParaDisplay(valor){
        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();