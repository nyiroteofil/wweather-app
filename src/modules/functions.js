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
        let dailyWeather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&cnt=5&APPID=a280ad62e485531769c9814cbc6bdfc8`, {mode: 'cors'});
        let dailyWeatherJSON = await dailyWeather.json();

        document.querySelector('#current-city').textContent = dailyWeatherJSON.name;

        setBackgrounds(dailyWeatherJSON.weather[0].main, ".weather-area")

        document.querySelector('#humidity').textContent = dailyWeatherJSON.main.humidity + '%';
    
        document.querySelector('#pressure').textContent = dailyWeatherJSON.main.pressure + ' hPa'

        console.log(dailyWeatherJSON);

        setForecastIcons(weatherJSON);

        setForecastValues(weatherJSON);

        setTodayValues(weatherJSON);
    } catch (error) {
        console.log(error);
    };
}

const setForecastIcons = (Obj) => {
    setIcon(Obj.list[0].weather[0].main, '#forecast-weather-1');
    setIcon(Obj.list[1].weather[0].main, '#forecast-weather-2');
    setIcon(Obj.list[2].weather[0].main, '#forecast-weather-3');
    setIcon(Obj.list[3].weather[0].main, '#forecast-weather-4');
    setIcon(Obj.list[4].weather[0].main, '#forecast-weather-5');
}

/**assigning the forecasted teperatures */
const setForecastValues = Obj => {
    document.querySelector('#day-1-max').textContent = `${Math.round(Obj.list[0].main.temp_max)}` + "°" ;
    document.querySelector('#day-1-avg').textContent = Math.round(Obj.list[0].main.temp) + "°";
    document.querySelector('#day-1-min').textContent = Math.round(Obj.list[0].main.temp_min) + "°"; 

    document.querySelector('#day-2-max').textContent = Math.round(Obj.list[1].main.temp_max) + "°"; 
    document.querySelector('#day-2-avg').textContent = Math.round(Obj.list[1].main.temp) + "°";
    document.querySelector('#day-2-min').textContent = Math.round(Obj.list[1].main.temp_min) + "°"; 

    document.querySelector('#day-3-max').textContent = Math.round(Obj.list[2].main.temp_max) + "°"; 
    document.querySelector('#day-3-avg').textContent = Math.round(Obj.list[2].main.temp) + "°";
    document.querySelector('#day-3-min').textContent = Math.round(Obj.list[2].main.temp_min) + "°"; 

    document.querySelector('#day-4-max').textContent = Math.round(Obj.list[3].main.temp_max) + "°"; 
    document.querySelector('#day-4-avg').textContent = Math.round(Obj.list[3].main.temp) + "°";
    document.querySelector('#day-4-min').textContent = Math.round(Obj.list[3].main.temp_min) + "°"; 

    document.querySelector('#day-5-max').textContent = Math.round(Obj.list[4].main.temp_max) + "°"; 
    document.querySelector('#day-5-avg').textContent = Math.round(Obj.list[4].main.temp) + "°";
    document.querySelector('#day-5-min').textContent = Math.round(Obj.list[4].main.temp_min) + "°"; 
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

const setTodayValues = (weatherObj) => {  
    document.querySelector('#today-temp-1').textContent = `${Math.round(weatherObj.list[0].main.temp)}°`;
    setIcon(weatherObj.list[0].weather[0].main, "#today-temp-icon")
    document.querySelector('#today-feel-1').textContent = `${Math.round(weatherObj.list[0].main.feels_like)}°`
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