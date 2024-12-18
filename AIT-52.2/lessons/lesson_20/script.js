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
  const card = document.createElement("div");
  card.className = "weather-card";
  const { city, latitude, longitude } = data;
  //console.log(city, latitude, longitude);
  // сделайте fetch запрос по адресу:
  // https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true
  // вам нужно заменить координаты в строке на данные выше
  // получите данные погоды: температуру, скорость ветра и.т.д
  // также заберите weathercode - он вам понадобится
  const heading = document.createElement("h2");
  heading.textContent = city;
  const currentWeatherRes = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  );
  const weatherData = await currentWeatherRes.json();
  //console.log(weatherData);
  const { temperature, windspeed, weathercode } = weatherData.current_weather;
  //деструктуризация current_weather_units с переименованием переменных
  const { temperature: temperatureUnit, windspeed: windspeedUnit } =
    weatherData.current_weather_units;
  const temperatureHtml = document.createElement("p");
  temperatureHtml.textContent = `Temperature: ${temperature} ${temperatureUnit}`;
  const windSpeedHtml = document.createElement("p");
  windSpeedHtml.textContent = `Windspeed: ${windspeed} ${windspeedUnit}`;
  const weatherCodeHtml = document.createElement("p");

  let weatherDescription = "";
  if (weathercode === 0) {
    weatherDescription = "Clear sky";
  } else if (weathercode === 1) {
    weatherDescription = "Mainly clear";
  } else if (weathercode === 2) {
    weatherDescription = "Partly cloudy";
  } else if (weathercode === 3) {
    weatherDescription = "Overcast";
  } else if (weathercode === 45) {
    weatherDescription = "Fog";
  } else if (weathercode === 48) {
    weatherDescription = "Depositing rime fog";
  } else if (weathercode === 51) {
    weatherDescription = "Light drizzle";
  } else if (weathercode === 53) {
    weatherDescription = "Moderate drizzle";
  } else if (weathercode === 55) {
    weatherDescription = "Heavy drizzle";
  } else if (weathercode === 56) {
    weatherDescription = "Light freezing drizzle";
  } else if (weathercode === 57) {
    weatherDescription = "Heavy freezing drizzle";
  } else if (weathercode === 61) {
    weatherDescription = "Light rain";
  } else if (weathercode === 63) {
    weatherDescription = "Moderate rain";
  } else if (weathercode === 65) {
    weatherDescription = "Heavy rain";
  } else if (weathercode === 66) {
    weatherDescription = "Light freezing rain";
  } else if (weathercode === 67) {
    weatherDescription = "Heavy freezing rain";
  } else if (weathercode === 71) {
    weatherDescription = "Light snow";
  } else if (weathercode === 73) {
    weatherDescription = "Moderate snow";
  } else if (weathercode === 75) {
    weatherDescription = "Heavy snow";
  } else if (weathercode === 77) {
    weatherDescription = "Snow grains";
  } else if (weathercode === 80) {
    weatherDescription = "Light rain showers";
  } else if (weathercode === 81) {
    weatherDescription = "Moderate rain showers";
  } else if (weathercode === 82) {
    weatherDescription = "Heavy rain showers";
  } else if (weathercode === 85) {
    weatherDescription = "Light snow showers";
  } else if (weathercode === 86) {
    weatherDescription = "Heavy snow showers";
  } else if (weathercode === 95) {
    weatherDescription = "Thunderstorm";
  } else if (weathercode === 96) {
    weatherDescription = "Thunderstorm with light hail";
  } else if (weathercode === 99) {
    weatherDescription = "Thunderstorm with heavy hail";
  } else {
    weatherDescription = "Unknown weather condition";
  }

  weatherCodeHtml.textContent = `Weather description: ${weatherDescription}`;
  console.log(
    `Temperature: ${temperature} ${temperatureUnit}, Windspeed: ${windspeed} ${windspeedUnit}, Weathercode: ${weathercode}`
  );
  document.body.append(card);
  card.append(heading, temperatureHtml, windSpeedHtml, weatherCodeHtml);
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
