/**Dynamic background
 * images and svgs
 */
import {
    clearBG,
    fewCloudsBG,
    scatteredCloudsBG,
    brokenCloudsBG,
    showerRainBG,
    rainBG,
    thunderstormBG,
    snowBG,
    mistBG,
    
    sunnySVG,
    cloudySVG,
    drizzleSVG,
    rainSVG,
    snowSVG,
    thunderstormSVG,
    fogSVG,
} from '../app.js';

/**Fetching the forecast for the given location */
async function fetchWeatherMain(city) {
    try {
        let weather = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=5&APPID=a280ad62e485531769c9814cbc6bdfc8`, {mode: 'cors'});
        let weatherJSON = await weather.json();
        document.querySelector('#current-city').textContent = city;
        console.log(weatherJSON)
        setBackgrounds(weatherJSON.list[0].weather[0].main, ".weather-area")

        setDays(weatherJSON);
    } catch (error) {
        console.log(error);
    };
}

const setBackgrounds = (weather, domElement) => {
    let element = document.querySelector(`${domElement}`);

    switch (weather) {
        case "Clear":
            element.style.backgroundImage = `url(${clearBG})`;
            break;
        case "Clouds":
            element.style.backgroundImage = `url(${brokenCloudsBG})`;
            break;
        case "Drizzle":
            element.style.backgroundImage = `url(${showerRainBG})`;
            break;
        case "Rain":
            element.style.backgroundImage = `url(${rainBG})`;
            break;
        case "Thunderstorm":
            element.style.backgroundImage = `url(${thunderstormBG})`;
            break;
        case "Snow":
            element.style.backgroundImage = `url(${snowBG})`;
            break;
        case "Mist":
            element.style.backgroundImage = `url(${mistBG})`;
            break;
        case "Fog":
            element.style.backgroundImage = `url(${mistBG})`;
            break;
        default:
            console.log('error while setting the background');
            break;
    }
}

const setDays = (weatherObj) => {  
    document.querySelector('#today-temp-1').textContent = `${weatherObj.list[0].main.temp}°`;
    setIcon(weatherObj.list[0].weather[0].main, "#today-temp-icon")
    document.querySelector('#today-feel-1').textContent = `${weatherObj.list[0].main.feels_like}°`
}

const setIcon = (weather, DOMelement) => {
    let element = document.querySelector(`${DOMelement}`);

    switch (weather) {
        case "Clear":
            element.src = `${sunnySVG}`;
            break;
        case "Clouds":
            element.src = `${cloudySVG}`;
            break;
        case "Drizzle":
            element.src = `${drizzleSVG}`;
            break;
        case "Rain":
            element.src = `${rainSVG}`;
            break;
        case "Thunderstorm":
            element.src = `${thunderstormSVG}`;
            break;
        case "Snow":
            element.src = `${snowSVG}`;
            break;
        case "Mist":
            element.src = `${fogSVG}`;
            break;
        case "Fog":
            element.src = `${fogSVG}`;
            break;
        default:
            console.log('error while setting the icons');
            break;
    }
}

export {
    fetchWeatherMain,
    setBackgrounds
}