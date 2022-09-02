//Inicializando a variável como um valor aleatório de 0 a 10 (tido como o escolhido pela máquina)
var numeroSecreto = parseInt(Math.random()*11);

//Função que confirma o valor inserido e dá uma resposta ao usuário
function Chutar1() {

    //Variável que busca o valor inserido pelo usuário
    var chute = parseFloat(document.getElementById("valor").value); 

    //Variável utilizada para definir um conteúdo a ser exibido posteriormente com "innerHTML"
    var respostaExibida = document.getElementById("resultado");
    var respostaExibida2 = document.getElementById("resultado2");
  
    //Condicional caso o valor inserido for equivalente ao número sorteado
    if(chute == numeroSecreto) {
        
        //Habilita a exibição da caixa de texto na tela
        document.getElementById("resultado").hidden = false;
        
        respostaExibida.innerHTML = "Você acertou!";

        //Desabilita  e habilita os botões na tela
        document.getElementById("botao").disabled = true;
        document.getElementById("btnJogarNovamente").disabled = false;
    }
    //Condicional coso o valor inserido não respeite as exigências (estar entre 0 e 10), o que indica nesse caso não desejado, que a variável "chute" seja maior que 10 ou menor que 0 
    else if(chute>10 || chute<0) {
        //Exibe um alerta na tela
        alert("Insira um valor entre 0 e 10");
    }
    //Condicional caso o valor inserido seja um número decimal
    else if(chute % 1 != 0) {
        alert("Insira um número inteiro");
    }
    //Condicional caso nenhuma das condicionais acima sejam atendidas
    else {
        if(numeroSecreto <= 5) {
            document.getElementById("resultado").hidden = false;
            document.getElementById("resultado2").hidden = false;

            //Exibe a mensagem na tela
            respostaExibida.innerHTML = "<span style='color:#008000'>Você errou mas ainda tem mais 2 chances</span>";
            respostaExibida2.innerHTML = "<span style='color:#008000'>O número é menor ou igual a 5</span>";
        }
        else {
            document.getElementById("resultado").hidden = false;
            document.getElementById("resultado2").hidden = false;
            
            respostaExibida.innerHTML = "<span style='color:#008000'>Você errou mas ainda tem mais 2 chances</span>";
            respostaExibida2.innerHTML = "<span style='color:#008000'>O número é maior que 5</span>";
        }
        //Chama a próxima função ao apertar o botão novamente
        document.getElementById("botao").onclick = Chutar2;
    }
} 

function Chutar2() {
    
    var chute = parseFloat(document.getElementById("valor").value);

    var respostaExibida = document.getElementById("resultado");
    var respostaExibida2 = document.getElementById("resultado2");

    if(chute == numeroSecreto) {
        document.getElementById("resultado2").hidden = true;

        respostaExibida.innerHTML = "Você acertou!";

        document.getElementById("botao").disabled = true;
        document.getElementById("btnJogarNovamente").disabled = false;
    }
     
    else if(chute>10 || chute<0) {
        alert("Insira um valor entre 0 e 10");
    }
    
    else if(chute % 1 != 0) {
        alert("Insira um número inteiro");
    }

    else {
        if(numeroSecreto <= 2) {
            document.getElementById("resultado").hidden = false;
            document.getElementById("resultado2").hidden = false;

            respostaExibida.innerHTML = "<span style='color:#FF8C00'>Você errou mas ainda tem mais 1 chance</span>";
            respostaExibida2.innerHTML = "<span style='color:#FF8C00'>O número é menor ou igual a 2</span>";
        }
        else if(numeroSecreto <= 5) {
            document.getElementById("resultado").hidden = false;
            document.getElementById("resultado2").hidden = false;

            respostaExibida.innerHTML = "<span style='color:#FF8C00'>Você errou mas ainda tem mais 1 chance</span>";
            respostaExibida2.innerHTML = "<span style='color:#FF8C00'>O número é maior que 2 e menor que 6</span>";
        }
        else if(numeroSecreto <= 8) {
            document.getElementById("resultado").hidden = false;
            document.getElementById("resultado2").hidden = false;

            respostaExibida.innerHTML = "<span style='color:#FF8C00'>Você errou mas ainda tem mais 1 chance</span>";
            respostaExibida2.innerHTML = "<span style='color:#FF8C00'>O número é maior que 5 e menor que 9</span>";
        }
        else if(numeroSecreto >=9) {
            document.getElementById("resultado").hidden = false;
            document.getElementById("resultado2").hidden = false;

            respostaExibida.innerHTML = "<span style='color:#FF8C00'>Você errou mas ainda tem mais 1 chance</span>";
            respostaExibida2.innerHTML = "<span style='color:#FF8C00'>O número é maior maior ou igual a 9</span>";
        }
        document.getElementById("botao").onclick = Chutar3;
    }
}

function Chutar3() {
    
    var chute = parseFloat(document.getElementById("valor").value);

    var respostaExibida = document.getElementById("resultado");
    var respostaExibida2 = document.getElementById("resultado2");

    if(chute == numeroSecreto) {
        document.getElementById("resultado2").hidden = true;

        respostaExibida.innerHTML = "Você acertou!";

        document.getElementById("botao").disabled = true;
        document.getElementById("btnJogarNovamente").disabled = false;
    }
     
    else if(chute>10 || chute<0) {
        alert("Insira um valor entre 0 e 10");
    }
    
    else if(chute % 1 != 0) {
        alert("Insira um número inteiro");
    }

    else {
        document.getElementById("resultado2").hidden = true;

        respostaExibida.innerHTML = "<span style='color:#FF0000'>Você errou!! O número secreto era: </span>" + numeroSecreto;

        document.getElementById("botao").disabled = true;
        document.getElementById("btnJogarNovamente").disabled = false;
    }
}
