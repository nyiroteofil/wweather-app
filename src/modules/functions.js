import {
    clearBG,
    fewCloudsBG,
    scatteredCloudsBG,
    brokenCloudsBG,
    showerRainBG,
    rainBG,
    thunderstormBG,
    snowBG,
    mistBG
} from '../app.js';

async function fetchWeatherMain(city) {
    try {
        let weather = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=5&APPID=a280ad62e485531769c9814cbc6bdfc8`, {mode: 'cors'});
        let weatherJSON = await weather.json();
        setBackgrounds(weatherJSON.list[0].weather[0].main, ".weather-area")
    } catch (error) {
        console.log(error);
    };
}

const setBackgrounds = (weather, domElement) => {
    let element = document.querySelector(`${domElement}`);
    console.log(element, weather)

    switch (weather) {
        case "Clear":
            element.style.backgroundImage = clearBG;
            break;
        case "Clouds":
            element.style.backgroundImage = `url(${brokenCloudsBG})`;
            break;
        case "Drizzle":
            element.style.backgroundImage = showerRainBG;
            break;
        case "Rain":
            element.style.backgroundImage = rainBG;
            break;
        case "Thunderstorm":
            element.style.backgroundImage = thunderstormBG;
            break;
        case "Snow":
            element.style.backgroundImage = snowBG;
            break;
        case "Mist":
            element.style.backgroundImage = mistBG;
            break;
        case "Fog":
            element.style.backgroundImage = mistBG;
            break;
        default:
            console.log('error while setting the background');
            break;
    }
}

export {
    fetchWeatherMain,
    setBackgrounds
}