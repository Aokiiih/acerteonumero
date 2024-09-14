var numeroAleatorio = Math.floor(Math.random() * 100) + 1;

var palpites = document.querySelector(".palpites");
var ultimoResultado = document.querySelector(".ultimoResultado")
var baixoOuAlto = document.querySelector(".baixoOuAlto")

var envioPalpite = document.querySelector(".envioPalpite")
var campPalpite = document.querySelector(".campoPalpite")

var contagemPalpites = 1;
var botaoReinicio;

envioPalpite.addEventListener("click", conferirPalpite);

function conferirPalpite() {
    var palpiteUsuario = Number(campoPalpite.value);

    if (palpiteUsuario > 100 ) {
      baixoOuAlto.textContent = "Use palpites iguais ou menores que 100!";
      campoPalpite.value = "";
      campPalpite.focus();
      return;
    }

    if (palpiteUsuario < 0) {
      baixoOuAlto.textContent ="Use palpites iguais ou maiores que 0!"
      campoPalpite.value = "";
      campoPalpite.focus();
      return;
    }

    if (isNaN(palpiteUsuario) || palpiteUsuario === "") {
      baixoOuAlto.textContent = "Use apenas números!"
      campoPalpite.value = "";
      campoPalpite.focus();
      return;
    }

    if (contagemPalpites === 1) {
      palpites.textContent = "Palpites anteriores: ";
    }
    palpites.textContent += palpiteUsuario + " ";
  
    if (palpiteUsuario === numeroAleatorio) {
      ultimoResultado.textContent = "Parabéns! Você acertou!";
      ultimoResultado.style.backgroundColor = "green";
      baixoOuAlto.textContent = "";
      configFimDeJogo();
    } else if (contagemPalpites === 10) {
      ultimoResultado.textContent = "!!!FIM DE JOGO!!!";
      baixoOuAlto.textContent = "";
      configFimDeJogo();
    } else {
      ultimoResultado.textContent = "Errado!";
      ultimoResultado.style.backgroundColor = "red";
      if (palpiteUsuario < numeroAleatorio) {
        baixoOuAlto.textContent = "Seu palpite está muito baixo!";
      } else if (palpiteUsuario > numeroAleatorio) {
        baixoOuAlto.textContent = "Seu palpite está muito alto!";
      } 
        
    }
  
    contagemPalpites++;
    campoPalpite.value = "";
    campoPalpite.focus();
  }

  function configFimDeJogo() {
    campoPalpite.disabled = true;
    envioPalpite.disabled = true;
    botaoReinicio = document.createElement("button");
    botaoReinicio.textContent = "Iniciar novo jogo";
    document.body.appendChild(botaoReinicio);
    botaoReinicio.addEventListener("click", reiniciarJogo)
  }

  function reiniciarJogo() {
    contagemPalpites = 1;

    var reiniciarParas = document.querySelectorAll(".resuldoParas p");
    for (var i = 0; i < reiniciarParas.length; i++) {
        reiniciarParas[i].textContent = "";
    }

    botaoReinicio.parentNode.removeChild(botaoReinicio);
  
    campoPalpite.disabled = false;
    envioPalpite.disabled = false;
    campoPalpite.value = "";
  
    campoPalpite.focus();
  
    ultimoResultado.style.backgroundColor = "white";
    ultimoResultado.textContent = "";
    palpites.textContent = "Palpites anteriores: ";
  
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  }