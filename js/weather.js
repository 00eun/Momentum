function onGeoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // console.log(lat, lon);
  const API_KEY = confing.API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((date) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      weather.innerText = `${date.weather[0].main} / ${date.main.temp}`;
      city.innerText = date.name;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
