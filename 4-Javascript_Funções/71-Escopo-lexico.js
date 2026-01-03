const nome = 'Otávio'

function falaNome(){
    const nome = 'Siva'
    console.log(nome);
}

function usaNome(){
    const nome = 'Otávio';
    falaNome();
}

usaNome();

//o usaNome() retorna Silva, pois foi a iltima variávrl dentro de escopo léxico