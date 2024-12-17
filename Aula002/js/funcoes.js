function imprimeAlgo(mensagem = "olá mundo") {
  console.log(mensagem);
}

/* express functions */
const funcaoImprime = function (mensagem = "estou dentro de uma variavel") {
  console.log(mensagem);
};

/* arrow function */
const funcaoArrow = (mensagem = "agora eu sou uma arrow function") => {
  console.log(mensagem);
};

const elemento = document.querySelector("p");

elemento.addEventListener("click", () => {
  console.log("clicou");
});

function callbackTeste(funcaoExecutada, mensagem) {
  funcaoExecutada(mensagem);
  console.log("executou a callback");
}

//callbackTeste(funcaoArrow, "mensagem teste");

const button = document.querySelector("button");

const funcaoClique = (element, teste) => {
  console.log("element", element);
  console.log("teste", teste);
};

/* callback */

function buttonClique(funcaoClique) {
  funcaoClique("teste", 1232);
}

buttonClique(funcaoClique);

button.addEventListener("click", funcaoClique);
