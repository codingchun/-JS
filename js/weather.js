const API_KEY = "afed88e1c6fd5195fa4f180b52b6b2c1";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} | ${data.main.temp}°C |`;
    });
}

function onGeoError() {
    alert("위치를 찾지 못했습니다. 날씨 정보를 제공할 수 없습니다.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);