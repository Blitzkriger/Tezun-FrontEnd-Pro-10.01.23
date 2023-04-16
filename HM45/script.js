function getWeather() {
  const city = document.getElementById('city').value;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const weatherInfo = document.getElementById('weather-info');
      const description = data.weather[0].description;
      const icon = data.weather[0].icon;
      const temp = data.main.temp;
      const pressure = data.main.pressure;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const windDeg = data.wind.deg;

      weatherInfo.innerHTML = `
        <h2>${city}</h2>
        <img src="http://openweathermap.org/img/w/${icon}.png" alt="Weather icon">
        <p>Описание: ${description}</p>
        <p>Температура: ${temp}°C</p>
        <p>Давление: ${pressure} hPa</p>
        <p>Влажность: ${humidity}%</p>
        <p>Скорость ветра: ${windSpeed} м/с</p>
        <p>Направление ветра: ${windDeg}°</p>
      `;
    })
    .catch(error => {
      console.error(error);
      alert('Ошибка данных по погоде');
    });
}

const getWeatherButton = document.getElementById('getWeatherButton');
getWeatherButton.addEventListener('click', getWeather);
