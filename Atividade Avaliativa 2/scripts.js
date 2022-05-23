function atividade1(){
    var v1 = Number(window.prompt("Digite um valor inteiro: "));
    var v2 = Number(window.prompt("Digite outro valor inteiro: "));

    if(v1 > v2){
        document.getElementById("resultado").innerHTML = v2 + " " + v1;
    }
    else{
        document.getElementById("resultado").innerHTML = v1 + " " + v2;
    }
}

function atividade2(){
    var gen = Number(window.prompt("Digite o gênero da pessoa: (1)Homem (2)Mulher"));
    var altura = Number(window.prompt("Digite a altura da pessoa: "));

    if(gen == 1){
        document.getElementById("resultado").innerHTML = `O peso ideal é: ${(72.7 * altura) - 58}.`;
    }
    else if(gen == 2){
        document.getElementById("resultado").innerHTML = `O peso ideal é: ${(62.1 * altura) - 44.7}.`;
    }
}