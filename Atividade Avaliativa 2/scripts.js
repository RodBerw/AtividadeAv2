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

function atividade3(){
    var v = [];
    v[0] = Number(window.prompt("Digite o 1º valor inteiro: "));
    v[1] = Number(window.prompt("Digite 0 2º valor inteiro: "));
    v[2] = Number(window.prompt("Digite 0 3º valor inteiro: "));
    var menor = v[0];

    for(var i = 0; i < 3; i++){
        if(v[i] < menor){
            menor = v[i];
        }
    }

    document.getElementById("resultado").innerHTML = `O menor dos valores é: ${menor}.`;
}

function atividade4(){
    var n = Number(window.prompt("Digite um valor inteiro: "));

    if(n >= 0){
        if(n % 2 == 0){
            document.getElementById("resultado").innerHTML = `O número ${n} é par.`;
        }
        else{
            document.getElementById("resultado").innerHTML = `O número ${n} é ímpar.`;
        }
    }
    else{
        document.getElementById("resultado").innerHTML = `O valor absoluto do número ${n} é ${-n}`;
    }
}