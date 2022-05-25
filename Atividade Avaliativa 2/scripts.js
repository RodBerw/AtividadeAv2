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
        document.getElementById("resultado").innerHTML = `O valor absoluto do número ${n} é ${Math.abs(n)}`;
    }
}

function atividade5(){
    var n = Number(window.prompt("Digite um valor inteiro: "));

    if(n % 2 == 0){
        if(n % 3 == 0){
            document.getElementById("resultado").innerHTML = `O número ${n} é divisível por 2 e 3.`;
        }
        else{
            document.getElementById("resultado").innerHTML = `O número ${n} é divisível somente por 2.`;
        }
    }
    else{
        if(n % 3 == 0){
            document.getElementById("resultado").innerHTML = `O número ${n} é divisível somente por 3.`;
        }
    }
}

function atividade6(){
    var n = Number(window.prompt("Digite um valor inteiro: "));

    if(n % 2 == 0){
        document.getElementById("resultado").innerHTML = `O número ${n} é divisível por 2.`;
    }
    else if(n % 7 == 0){
        document.getElementById("resultado").innerHTML = `O número ${n} é divisível por 7.`;
    }
}

function atividade7(){

    var nd = Number(window.prompt("Informe um número entre 1 e 7: "));
    var resultado;

    if(nd >= 1 && nd <=7){
        switch(nd){
            case 1:
                resultado = "Domingo";
                break;
            case 2:
                resultado = "Segunda";
                break;
            case 3:
                resultado = "Terça";
                break;
            case 4:
                resultado = "Quarta";
                break;
            case 5:
                resultado = "Quinta";
                break;
            case 6:
                resultado = "Sexta";
                break; 
            case 7:
                resultado = "Sábado";
                break;           
        }
    }

    document.getElementById("resultado").innerHTML = resultado;
}

function atividade8(){

    var soma = 0;

    for(var i = 1; i <= 20; i++){
        if(i % 2 == 0){
            soma += i;
        }
    }

    document.getElementById("resultado").innerHTML = "A soma dos valores pares entre 1 e 20 é: " + soma;

}

function atividade9(){

    var n = Number(window.prompt("Informe um número: "));

    document.getElementById("resultado").innerHTML = `
        ${n} x 1 = ${n*1},
        ${n} x 2 = ${n*2},
        ${n} x 3 = ${n*3},
        ${n} x 4 = ${n*4},
        ${n} x 5 = ${n*5},
        ${n} x 6 = ${n*6},
        ${n} x 7 = ${n*7},
        ${n} x 8 = ${n*8},
        ${n} x 9 = ${n*9},
        ${n} x 10 = ${n*10}.
    `;

}

function atividade10(){

    var n = Number(window.prompt("Informe um número: "));
    var resultado = n;

    for(var i=n; i>1; i--){
        resultado *= i-1;
    }

    document.getElementById("resultado").innerHTML = `O resultado fatorial do número ${n} é: ${resultado}.`;
}
