const data = new Date()

dia = data.getDate()
diaSemana = data.getDay()
mes= data.getMonth()
ano = data.getFullYear()

hora = data.getHours()
minuto = data.getMinutes()



function getSemanaNome(x){

    let diaSemanaNome;

    switch (diaSemana){
    case 0:
        diaSemanaNome = "Domingo";
        break;

    case 1:
        diaSemanaNome = "Segunda-Feira";
        break;

    case 2:
        diaSemanaNome = "Terça-Feira";
        break;

    case 3:
        diaSemanaNome = "Quarta-Feira";
        break;

    case 4:
        diaSemanaNome = "Quinta-Feira";
        break;

    case 5:
        diaSemanaNome = "Sexta-Feira";
        break;

    case 6:
        diaSemanaNome = "Sábado";
        break;
    }

    return diaSemanaNome
}


function getMesNome(x){
    
    let mesNome;

    switch(mes){

        case 0:
            mesNome = "Janeiro";
            break;

        case 1:
            mesNome= "Fevereiro";
            break;

        case 2:
            mesNome = "Março";
            break;

        case 3:
            mesNome = "Abril";
            break;

        case 4:
            mesNome = "Maio";
            break;

        case 5:
            mesNome = "Junho";
            break;

        case 6:
            mesNome = "Julho";
            break;

        case 7:
            mesNome = "Agosto";
            break;

        case 8:
            mesNome = "Setembro";
            break;

        case 9:
            mesNome = "Outubro";
            break;

        case 10:
            mesNome = "Novembro";
            break;

        case 11:
            mesNome = "Dezembro";
            break;
        }
    
    return mesNome;

}


const mostrarData = `${getSemanaNome(diaSemana)}, ${dia} de ${getMesNome(mes)} de ${ano}  ${hora}:${minuto}`
console.log(mostrarData)

document.getElementById("saida").textContent = mostrarData;