function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function createProductDetail(product) {
  const detail = document.createElement("div");
  detail.classList.add("product-detail");

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.name;
  img.width = 300;

  const title = document.createElement("h1");
  title.textContent = product.name;

  const description = document.createElement("p");
  description.textContent = product.description;

  const price = document.createElement("p");
  price.textContent = `R$ ${product.price.toFixed(2)}`;

  detail.appendChild(img);
  detail.appendChild(title);
  detail.appendChild(description);
  detail.appendChild(price);

  return detail;
}

const productId = getProductIdFromUrl();

fetch("../src/products.json")
  .then((response) => response.json())
  .then((products) => {
    const product = products.find((p) => p.id === parseInt(productId));
    if (product) {
      const container = document.getElementById("product-details");
      const productDetail = createProductDetail(product);
      container.appendChild(productDetail);
    } else {
      alert("Produto não encontrado!");
    }
  })
  .catch((error) => console.error("Erro ao carregar produto:", error));
