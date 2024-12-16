var num1 = document.querySelector("#numero1");
var num2 = document.querySelector("#numero2");

let button = document.querySelector("button");

var resultado = document.querySelector("span");

button.addEventListener("click", function () {
  console.log("Antes da soma", resultado);
  var resultado = parseInt(num1.value) + parseInt(num2.value);
  resultado.textContent = resultado;
  console.log("Depois da soma", resultado);
});
