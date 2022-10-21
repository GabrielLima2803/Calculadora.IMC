




function calculo_resultado(event) {
    const peso = Number(document.getElementById("peso").value);
    const altura = Number(document.getElementById("altura").value);
    const nome = (document.getElementById("nome").value);

    const calculoIMC = peso / (altura * altura);
    let resposta = document.getElementById("resultado");
    let respostaNome = document.getElementById("nome_Resultado");


    if (calculoIMC < 15.99) {
        resposta = `Magreza Grave`;
    }
    else if (calculoIMC >= 16 && calculoIMC <= 16.99){
        resposta = `Magreza Moderada`;
    }
    else if (calculoIMC >= 17 && calculoIMC <= 18.5) {
        resposta = `Magreza Moderada`;
    }
    else if (calculoIMC > 18.5 && calculoIMC <= 24.9){
        resposta = `Saudável`;
    }
    else if (calculoIMC >= 25 && calculoIMC <= 29.9){
        resposta = `Sobrepeso`;
    }
    else if (calculoIMC >= 23 && calculoIMC <= 34.9){
        resposta = `Obesidade Grau 1`;
    }
    else if (calculoIMC >= 35 && calculoIMC <= 39.9){
        resposta = `Obesidade Grau 2`;
    }
    else if (calculoIMC >= 40){
        resposta = `Obesidade Grau 3`;
    }

    document.getElementById("resultado").innerHTML = `Caro ${nome}, Seu IMC é de ${calculoIMC.toFixed(2)}<br> Sua situação ${resposta}`;
    
}

