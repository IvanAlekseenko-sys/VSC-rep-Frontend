// https://get.geojs.io/v1/ip/geo.json
// киньте fetch по адресу и получите данные по широте (latitude), долготе (longitude) и городу
// сделайте используя async / await асинхронные функции
// cсылки на api в чате zoom

// ! до 10-10

async function getWeather() {
  const res = await fetch("https://get.geojs.io/v1/ip/geo.json");
  const data = await res.json();
  //console.log(data);
  //* работа с данными из объекта без деструктуризации
  // объявили переменные и присвоили им значения из объекта
  //   const city = data.city
  //   const latitude = data.latitude
  //   const longitude = data.longitude
  //* работа с данными из объекта с деструктуризацией
  //мы в одну строчку объявляем переменные с именами совпадающими с именем нужных нам ключей и передаем им соответствующие значения
  const { city, latitude, longitude } = data;
  //console.log(city, latitude, longitude);
  // сделайте fetch запрос по адресу:
  // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
  // вам нужно заменить координаты в строке на данные выше
  // получите данные погоды: температуру, скорость ветра и.т.д
  // также заберите weathercode - он вам понадобится
  const currentWeatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const weatherData = await currentWeatherRes.json();
  //console.log(weatherData);
  const { temperature, windspeed, weathercode } = weatherData.current_weather;
  //деструктуризация current_weather_units с переименованием переменных
  const { temperature: temperatureUnit, windspeed: windspeedUnit } =
    weatherData.current_weather_units;
  console.log(
    `Temperature: ${temperature} ${temperatureUnit}, Windspeed: ${windspeed} ${windspeedUnit}, Weathercode: ${weathercode}`
  );
}

getWeather();

//*кусок функции getWeather()
// const latitude = document.createElement("p");
//   latitude.textContent = `Latitude: ${data.latitude}`;
//   document.body.append(latitude);
//   const longitude = document.createElement("p");
//   longitude.textContent = `Longitude: ${data.longitude}`;
//   document.body.append(longitude);
//   const city = document.createElement("p");
//   city.textContent = `City: ${data.city}`;
//   document.body.append(city);
