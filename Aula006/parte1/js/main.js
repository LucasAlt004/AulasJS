import { navigateToSecondPage } from "./utils.js";

document.getElementById("navigate-button").addEventListener("click", () => {
  const name = "João";
  const age = 25;
  navigateToSecondPage(name, age);
});
