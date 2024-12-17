//отобразить данные по выбранному персонажу из API
//выведите картинку, status, name, origin (откуда этот персонаж)

const img1 = document.querySelector("#rick-img");
const nameCharacter = document.querySelector("#name");
const statusCharacter = document.querySelector("#status");
const originCharacter = document.querySelector("#origin");
function getCharacter() {
  fetch("https://rickandmortyapi.com/api/character")
    //первым .then() дожидаемся сырых данных и преобразуем их в JS объект с помощью метода .json`
    .then((res) => res.json())
    //тут уже придут обработанные данные, готовые к использованию
    .then((data) => {
      console.log(data.results[0]);
      img1.src = data.results[0].image;
      nameCharacter.textContent = "Name: " + data.results[0].name;
      statusCharacter.textContent = "Status: " + data.results[0].status;
      originCharacter.textContent = "Origin: " + data.results[0].origin.name;
    });
}

getCharacter();
