//! теория
// * делаем fetch запрос за данными  к API (частный случай работы с сервером)

// * в ответ на fetch запрос приходит объект Promise в состоянии <Pending>
// его не получится обработать синхронно - нужно использовать методы работы с асинхронными данными
//const data = fetch("https://dog.ceo/api/breeds/image/random");
//console.log(data)

// * ответ от сервера получаем в формате JSON
//JSON - JavaScript Object Notation

//! делаем запрос

//находим пустой элемент img, чтобы добавить в него данные из API
const img = document.querySelector("#dog-img");
//нашли кнопку
const btnUpd = document.querySelector("#btn-update");

//создаем функцию с fetch запросом, которую можно переиспользовать
function getDog() {
  fetch("https://dog.ceo/api/breeds/image/random")
    //первым .then() дожидаемся сырых данных и преобразуем их в JS объект с помощью метода .json`
    .then((res) => res.json())
    //тут уже придут обработанные данные, готовые к использованию
    .then((data) => {
      img.src = data.message;
    });
}

//вызов функции
getDog();

//!вешаем на кнопку слушатель событий

//по событию click будет вызываться функция getDog, которая объявлена выше и она вызовется в момент события click
btnUpd.addEventListener("click", getDog);

//тоже самое, что и выше, но через стрелочную анонимную функцию, которая вызовется в момент события click, эту функцию не получится переиспользовать
//btnUpd.addEventListener("click", () => { getDog(); });

//еще один вариант
//btnUpd.onclick = getDog
