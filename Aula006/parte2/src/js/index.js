function createProductCard(product) {
  const card = document.createElement("div");
  card.classList.add("product-card");

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.width = 200;

  const title = document.createElement("h2");
  title.textContent = product.name;

  const price = document.createElement("p");
  price.textContent = `R$ ${product.price.toFixed(2)}`;

  const button = document.createElement("button");
  button.textContent = "Ver mais";
  button.onclick = () => goToProduct(product.id);

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(price);
  card.appendChild(button);

  return card;
}

function goToProduct(productId) {
  window.location.href = `product.html?id=${productId}`;
}

fetch("../src/products.json")
  .then((response) => response.json())
  .then((products) => {
    const container = document.getElementById("product-list");
    products.forEach((product) => {
      const productCard = createProductCard(product);
      container.appendChild(productCard);
    });
  })
  .catch((error) => console.error("Erro ao carregar produtos:", error));
