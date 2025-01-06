export function navigateToSecondPage(name, age) {
  const url = `index2.html?name=${encodeURIComponent(
    name
  )}&age=${encodeURIComponent(age)}`;
  window.location.href = url;
}

export function imprimeAlgo(algo) {
  console.log(algo);
}
