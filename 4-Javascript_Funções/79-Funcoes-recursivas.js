//Função recursiva é uma função que tem como uma das atividades chamar a si mesmo
function recursiva(max){
    if (max >= 500) return; //Caso base
    max++;
    console.log(max);
    recursiva(max); //cahamada recursiva
}

recursiva(0);