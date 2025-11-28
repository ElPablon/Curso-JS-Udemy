function meuEscopo (){
    const form = document.querySelector('.dados');
    const resultado = document.querySelector('.resultado');

    function recebeEventoForm(evento){
        
        let imc = 0;
        let altura1;

        evento.preventDefault();

        const altura = form.querySelector('#Altura');
        const peso = form.querySelector('#Peso');

        altura1 = altura.value / 100;

        imc = peso.value/(altura1*altura1);
        console.log(imc);

        imc = imc.toFixed(1)

        let situacao;

        if (imc < 18.5){situacao = "abaixo do peso"}
            else if(imc <=24.9){situacao = "Peso ideal"}
            else if(imc <=29.9){situacao = "Sobrepeso"}
            else if(imc <=34.9){situacao = "Obesidade grau I"}
            else if(imc <=39.9){situacao = "Obesidade grau II"}
            else if(imc >=40){situacao = "Obesidade grau III"};
    
        if (imc <= 29.0){
            resultado.innerHTML = 
            `<p><strong>Seu IMC é:</strong> ${imc}</p>
            <p><strong>${situacao}</strong> </p>`
        }

        else if (imc <=39.9) {
            resultado.innerHTML = 
            `<p><strong>Seu IMC é:</strong> ${imc}</p>
            <p id="obese"><strong>${situacao}</strong> </p>`
        }

        else {
            resultado.innerHTML = 
            `<p><strong>Seu IMC é:</strong> ${imc}</p>
            <p id="obese3"><strong>${situacao}</strong> </p>`
        };
        

    }


form.addEventListener('submit', recebeEventoForm)






}

meuEscopo();

