//Escreva uma funçaõ chamada ePaisagem que recebe dois argummentos, largura e altura da imagem (number).
//Retorne true se a imagem estiver no modo paisagem

function ePaisagem(largura, altura){
    if (largura > altura){return true} else {return false};
}


//codigo do professor 
function ePaisagem2(largura, altura){
    return largura > altura;
}

// ou 

const ePaisagem3 = (largura, altura) => largura > altura;

//codigo do professor 



console.log(ePaisagem(1080, 1920))
console.log(ePaisagem2(1080, 1920))
console.log(ePaisagem3(1080, 1920))