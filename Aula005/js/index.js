document.querySelector("button").addEventListener("click", () => {
  const valor = localStorage.getItem("nome");

  document.querySelector("p").textContent = valor;
})