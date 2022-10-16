import './style.css';

async function fetchWeather() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Budapest&units=metric&cnt=5&APPID=a280ad62e485531769c9814cbc6bdfc8', {mode: 'cors'})
        .then(response => {
            console.log(response.json());
        })
}

window.addEventListener('DOMContentLoaded', fetchWeather);