const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
  console.log(`O número na posição ${i} é ${numeros[i]}`);
}

const frutas = ["Maçã", "Banana", "Laranja"];
let i = 0;

while (i < frutas.length) {
  console.log(`Fruta: ${frutas[i]}`);
  i++;
}

const cores = ["Azul", "Verde", "Amarelo"];
i = 0;

do {
  console.log(`Cor: ${cores[i]}`);
  i++;
} while (i < cores.length);

const animais = ["Cachorro", "Gato", 1];

for (let animal of animais) {
  console.log(`Animal: ${animal}`);
}

const carros = ["Fusca", "Gol", "Civic"];

carros.forEach(function (carro, index) {
  console.log(`Carro ${index + 1}: ${carro}`);
});
