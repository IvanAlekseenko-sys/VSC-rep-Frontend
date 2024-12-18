//!fetch запрос на .then()
// fetch("https://fakestoreapi.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     //все операции с данными с сервера будут происходить внутри второго then()
//     data.map((product) => {
//       const item = document.createElement("p");
//       item.textContent = product.title;
//       console.log(item);
//       document.body.append(item);
//     });
//   });
//fetchProducts()

//! fetch запрос async / await
//нашли родитель для добавления карточек
const gridProducts = document.querySelector("#grid-products");

//альтернативный популярный способ обработки асинхронных запросов javaScript
// 'под капотом' работает также как и .then(), визуально выглядит иначе
// перед объявлением асинхронной функции мы пишем слово async
//в асинхронных функциях сохраняется порядок выполнения кода для синхронных и асинхронных действий
//*обычная асинхронная функция
async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  data.map((product) => {
    //создаем карточку с данными
    const card = document.createElement("div");
    card.className = "product-card";
    card.classList.add("primary");
    //создаем заголовок
    const heading = document.createElement("h4");
    heading.textContent = product.title;
    //создаем картинку
    const img = document.createElement("img");
    img.alt = product.title;
    img.src = product.image;
    //обертка для картинки и добавляем картинку
    const wrapper = document.createElement("div");
    wrapper.className = "img-wrapper";
    wrapper.append(img);
    //добавляем параграф
    const desc = document.createElement("p");
    //обрезаем длинный текст - если это необходимо!
    let descText = product.description;
    if (descText.length > 200) {
      desc.textContent = descText.slice(0, 200) + "...";
    } else {
      desc.textContent = product.description;
    }

    //добавляем цену
    const price = document.createElement("p");
    price.textContent = `Price: ${product.price} €`;

    //добавляем элементы к карточке
    // в том порядке, в котором вы хотите их увидеть в контейнере
    card.append(heading, price, wrapper, desc);
    console.log(card);
    gridProducts.append(card);
  });
}

fetchProducts();

//*пример именной асинхронной стрелочной функции
//   const fetchProducts = async () => {
//     const res = await fetch("https://fakestoreapi.com/products")
//     const data = await res.json()
//     console.log(data)
//       }

//*поскольку в стрелочных функциях мы кладем имя функции в константу мы не сможем вызвать функцию до инициализации переменной
//fetchProducts()

//!Закрепляем fetch

// fetch('https://fakestoreapi.com/products?limit=5')
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });


// async function fetchTest() {
  
//   const res = await fetch('https://fakestoreapi.com/products?limit=5')
//   const data = await res.json()
//   console.log(data)
// }
// fetchTest()