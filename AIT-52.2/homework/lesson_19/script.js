// Задание
// Создайте веб-страницу, которая будет получать данные из API: https://dummyjson.com/ по запросу https://dummyjson.com/products

// Описание задачи
// Отобразите карточки продуктов в виде сетки (grid-контейнер).
// В каждой карточке должны отображаться:
// Название продукта
// Описание продукта
// Цена
// Изображение продукта

const gridProducts = document.querySelector("#grid-products");

async function fetchDummyProducts() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();
  const products = data.products;
  console.log(products);
  products.map((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    const title = document.createElement("h3");
    title.textContent = product.title;
    const description = document.createElement("p");
    description.textContent = product.description;
    const price = document.createElement("p");
    price.textContent = `Price: ${product.price} $`;
    const img = document.createElement("img");
    //обертка для картинки и добавляем картинку
    const wrapper = document.createElement("div");
    wrapper.className = "img-wrapper";
    wrapper.append(img);
    img.src = product.images[0];
    card.append(title, description, price, wrapper);
    gridProducts.append(card);
  });
}

fetchDummyProducts();
