const API_KEY = "a8fd7a465c5ffe67641819dcbb1ef904";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=kr&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      // const icoUrl = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
      const icoImg = document.createElement("img");
      // icoImg.src = icoUrl;
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
      // weather.prepend(icoImg);
    });
}
function onGeoErr() {
  alert(`Can't find you. No weather for you`);
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
