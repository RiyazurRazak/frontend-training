const timestampNode = document.getElementById("timestamp");
const dropdownNode = document.getElementById("city-selection");
const defaultCity = "chennai";
const baseUrl = "https://api.openweathermap.org/data/2.5";

const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

timestampNode.innerText = new Date().toDateString();

const cityChangeHandller = (e) => {
  const cityName = e.target.value;
  Promise.all([
    currentWeatherHandller(cityName),
    rangeWeatherHandller(cityName),
  ]);
};

const currentWeatherHandller = (cityName) => {
  fetch(
    `${baseUrl}/weather?q=${cityName}&units=metric&appid=54863d221db85b9338b326f57a78298f`
  )
    .then((res) => res.json())
    .then((data) => renderCurrentSection(data))
    .catch((err) => console.error(err));
};

const rangeWeatherHandller = (cityName) => {
  fetch(
    `${baseUrl}/forecast?q=${cityName}&units=metric&appid=54863d221db85b9338b326f57a78298f`
  )
    .then((res) => res.json())
    .then((data) => renderRangeSection(data))
    .catch((err) => console.error(err));
};

const renderCurrentSection = (data) => {
  const imageNode = document.getElementById("current-weather-icon");
  const temperatureNode = document.getElementById("current-temp");
  const summaryNode = document.getElementById("current-weather-summary");
  const maxTempNode = document.getElementById("current-temp-high");
  const minTempNode = document.getElementById("current-temp-low");
  const windSpeedNode = document.getElementById("current-wind-speed");
  const windDirNode = document.getElementById("current-wind-deg");
  const sunriseNode = document.getElementById("sunrise");
  const sunsetNode = document.getElementById("sunset");

  imageNode.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  summaryNode.innerText = data.weather[0].description;
  temperatureNode.innerHTML = `${data.main.temp}&deg;`;
  maxTempNode.innerHTML = `${data.main.temp_max}&deg;`;
  minTempNode.innerHTML = `${data.main.temp_min}&deg;`;
  windSpeedNode.innerText = `${data.wind.speed} mph`;
  windDirNode.innerText = data.wind.deg;
  sunriseNode.innerText = `${new Date(
    data.sys.sunrise * 1000
  ).getHours()}:${new Date(data.sys.sunrise * 1000).getMinutes()}`;
  sunsetNode.innerText = `${new Date(
    data.sys.sunset * 1000
  ).getHours()}:${new Date(data.sys.sunset * 1000).getMinutes()}`;
};

const forecastHandller = (data) => {
  const returnData = { today: [], otherDays: [] };
  const today = new Date().toDateString();
  data.forEach((weather) => {
    if (today === new Date(weather.dt_txt).toDateString()) {
      returnData.today.push(weather);
    } else {
      returnData.otherDays.push(weather);
    }
  });
  return returnData;
};

const renderRangeSection = (data) => {
  const { today, otherDays } = forecastHandller(data.list ?? []);
  const todayWeatherPanel = document.getElementById("today-weather-container");
  const nextFiveDaysPanel = document.getElementById("next-5-days-container");
  const todayWeatherNodes = today.map((data) => {
    const time = new Date(data.dt_txt).getHours();
    return `<div class="weather-by-hour__item">
    <div class="weather-by-hour__hour">${time} ${time > 12 ? "pm" : "am"}</div>
    <img src="https://openweathermap.org/img/wn/${
      data.weather[0].icon
    }@2x.png" alt="${data.weather[0].description}" />
    <div>${data.main.temp}&deg;</div>
  </div>`;
  });
  todayWeatherPanel.innerHTML = todayWeatherNodes
    .toString()
    .replaceAll(",", "");
  const nextFivedaysNodes = otherDays.map((data) => {
    const date = new Date(data.dt_txt);
    return `<div class="next-5-days__row">
    <div class="next-5-days__date">
      ${days[date.getDay()]}
      <div class="next-5-days__label">${date.getDate()}/${date.getHours()}</div>
    </div>

    <div class="next-5-days__low">
      ${data.main.temp_min}&deg;
      <div class="next-5-days__label">Low</div>
    </div>

    <div class="next-5-days__high">
    ${data.main.temp_max}&deg;
      <div class="next-5-days__label">High</div>
    </div>

    <div class="next-5-days__icon">
      <img src="https://openweathermap.org/img/wn/${
        data.weather[0].icon
      }@2x.png" alt="${data.weather[0].description}" />
    </div>

    <div class="next-5-days__rain">
      ${data.main.humidity}
      <div class="next-5-days__label">Humidity</div>
    </div>

    <div class="next-5-days__wind">
      ${data.wind.speed} mph
      <div class="next-5-days__label">Wind</div>
    </div>
  </div>`;
  });
  nextFiveDaysPanel.innerHTML = nextFivedaysNodes
    .toString()
    .replaceAll(",", "");
};

const initialHandller = () => {
  Promise.all([
    currentWeatherHandller(defaultCity),
    rangeWeatherHandller(defaultCity),
  ]);
};

document.body.onload = initialHandller;
dropdownNode.addEventListener("change", cityChangeHandller);
