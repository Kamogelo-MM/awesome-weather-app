function getDate(date) {
  let dayIndex = date.getDay();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  let day = days[dayIndex];
  let monthIndex = date.getMonth();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Nov",
    "Dec",
  ];
  let month = months[monthIndex];
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${days[dayIndex]}/${months[monthIndex]} ${hours}:${minutes}`;
}
function getDate(datentime) {
  let dayIndex = datentime.getDay();
  let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  let day = days[dayIndex];
  let monthIndex = datentime.getMonth();
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Nov",
    "Dec",
  ];
  let month = months[monthIndex];
  let minutes = datentime.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = datentime.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${days[dayIndex]}/${months[monthIndex]} ${hours}:${minutes}`;
}

let currentDate = new Date();
let theDate = document.querySelector("#datentime");
theDate.innerHTML = getDate(currentDate);

function displayWeather(response) {
  console.log(response.data);
  document.querySelector("#location").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;

  document.querySelector("#humidity").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
}

function searchCity(city) {
  let apiKey = "9fc74ee844c3def648338cc86ea0665b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#exampleDataList").value;
  searchCity(city);
}
function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}
function searchLocation(position) {
  let apiKey = "9fc74ee844c3def648338cc86ea0665b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayWeather);
}

let searchResult = document.querySelector("#form");
searchResult.addEventListener("submit", handleSubmit);

searchCity("Johannesburg");

let currentLocation = document.querySelector("#button2");
currentLocation.innerHTML = addEventListener("click", searchLocation);
