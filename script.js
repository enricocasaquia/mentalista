//Inicializando a variável como um valor aleatório de 0 a 10 (tido como o escolhido pela máquina)
var númeroSecreto = parseInt(Math.random()*11);

//Função que confirma o valor inserido e dá uma resposta ao usuário
function Chutar() {

    //Variável que busca o valor inserido pelo usuário
    var chute = parseFloat(document.getElementById("valor").value); 

    //Variável utilizada para definir um conteúdo a ser exibido com "innerHTML"
    var respostaExibida = document.getElementById("resultado");
  
    //Condicional caso o valor inserido for equivalente ao número sorteado
    if(chute == númeroSecreto) {
        respostaExibida.innerHTML = "Você acertou!";
    }
    //Condicional coso o valor inserido não respeite as exigências (estar entre 0 e 10), o que indica nesse caso não desejado, que a variável "chute" seja maior que 10 ou menor que 0 
    else if(chute>10 || chute<0) {
        respostaExibida.innerHTML = "Insira um valor entre 0 e 10";
    }
    //Condicional caso o valor inserido seja um número decimal
    else if(chute % 1 != 0) {
        respostaExibida.innerHTML = "Insira um número inteiro";
    }
    //Condicional caso nenhuma das condicionais acima sejam atendidas
    else {
        respostaExibida.innerHTML = "Você errou, o número secreto era " + númeroSecreto;
    }

} 
