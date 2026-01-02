function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',{hour12 : false});
}

console.log(mostraHora());

///function funcaoDoInterval(){
///    console.log(mostraHora());
///}

///setInterval(funcaoDoInterval, 1000);

const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000);


//só executa uma vez
setTimeout (function() {
    clearInterval(timer);
}, 10000)