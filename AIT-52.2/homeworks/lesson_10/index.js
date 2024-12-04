// найдем первую кнопку по id
const btn = document.getElementById("magic-btn");
// скопируем ее - получилась вторая кнопка. Ее можно использовать.
const clonedBtn = btn.cloneNode(true);
// задали id
clonedBtn.id = "magic-btn-2";

btn.addEventListener("click", () => {
  // при нажатии на первую кнопку
  // работайте с clonedBtn
  // ваш код начинается здесь
  document.body.append(clonedBtn);
  let newElement = document.createElement("p");
  newElement.innerText = "Я изменю тебя";
  newElement.style.backgroundColor = "#a78b71";
  newElement.style.color = "white";
  document.body.append(newElement);
});

// здесь можете создать EventListener для второй кнопки

clonedBtn.addEventListener("click", () => {
  btn.style.backgroundColor = "#9c4a1a";
  btn.style.color = "black";
});
