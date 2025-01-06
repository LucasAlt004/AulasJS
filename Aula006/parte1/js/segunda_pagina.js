function getQueryParams() {
  const params = new URLSearchParams(window.location.search); // ?name=João&age=25
  // window.location.href -> http://127.0.0.1:5500/Aula006/parte1/public/index2.html?name=Jo%C3%A3o&age=25 
  return {
    name: params.get("name"),
    age: params.get("age"),
  };
}

const { name, age } = getQueryParams();
const userInfoElement = document.getElementById("user-info");

userInfoElement.textContent = `Nome: ${name}, Idade: ${age}`;
