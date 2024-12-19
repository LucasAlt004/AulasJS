let pessoa = {
  nome: "Mario",
  idade: 53,
  materiasFavoritas: ["Matematica", "Portugues"],
  falar: (mensagem) => console.log(mensagem),
  amigo: {
    nome: "Luigi",
    idade: 32,
  },
};

pessoa.profissao = "Encanador";

const endereco = {
  rua: "Avenida das flores",
  numero: 12,
};

// spread operator
var pessoa2 = {
  ...pessoa,
  andar: () => {
    return "andando";
  },
};

const pessoa3 = {
  ...pessoa2,
  ...endereco,
};

const pessoa4 = {
  nome: "Jonas",
  idade: 22,
  materiasFavoritas: ["Matematica", "Portugues"],
  falar: (mensagem) => console.log(mensagem),
  amigo: {
    nome: "Moises",
    idade: 33,
  },
};

pessoa4.idade = 88;

console.log(pessoa4);
