




function calculo_resultado(event) {
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);
    const nome = (document.getElementById("nome").value);

    const calculoIMC = peso / (altura * altura);
    let resposta = document.getElementById("resultado");
    let resultado = document.getElementsByClassName("resultadoIMC");

    let cor;


    if (calculoIMC < 15.99) {
        resposta = `Magreza Grave`;
        cor = "TomaCuidado";
    }
    else if (calculoIMC >= 16 && calculoIMC <= 16.99){
        resposta = `Magreza Leve`;
        cor = "MaisOuMenos";
    
    }
    else if (calculoIMC >= 17 && calculoIMC <= 18.5) {
        resposta = `Magreza Moderada`;
        cor = "QuaseDeBoa";
    }
    else if (calculoIMC > 18.5 && calculoIMC <= 24.9){
        resposta = `Saudável`;
        cor = "ComoTaDeBoa";
    }
    else if (calculoIMC >= 25 && calculoIMC <= 29.9){
        resposta = `Sobrepeso`;
        cor = "AcademiaRapá";
    }
    else if (calculoIMC >= 23 && calculoIMC <= 34.9){
        resposta = `Obesidade Grau 1`;
        cor = "IxiBoMalhar";
    }
    else if (calculoIMC >= 35 && calculoIMC <= 39.9){
        resposta = `Obesidade Grau 2`;
        cor = "MoioOPéDoMonkey";
    }
    else if (calculoIMC >= 40){
        resposta = `Obesidade Grau 3`;
        cor = "BoaSorteAmigo";
    }

    document.getElementById("resultado").innerHTML = `Caro ${nome}, Seu IMC é de ${calculoIMC.toFixed(2)}<br> Sua situação ${resposta}`;
    document.getElementById("resultado").className = cor
    
}


