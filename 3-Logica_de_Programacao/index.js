function retornahora(data) {
    if (!(data instanceof Date)) {
        console.log(`${data} Não é instância de date`)
    } else {
        console.log(`${data} é instância de date`)
    }
}

retornahora(new Date());
retornahora(55);
