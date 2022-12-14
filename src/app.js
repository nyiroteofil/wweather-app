import './style.css';
import clearBG from './assets/clearSky.jpg';
import fewCloudsBG from './assets/fewClouds.jpg';
import scatteredCloudsBG from './assets/scatteredClouds.jpg'
import brokenCloudsBG from './assets/brokenClouds.jpg';
import showerRainBG from './assets/showerRain.jpg';
import rainBG from './assets/rain.jpg';
import thunderstormBG from './assets/thunderstorm.jpg';
import snowBG from './assets/snow.jpg';
import mistBG from './assets/mist.jpg';

import sunnySVG from './assets/sunny.svg';
import cloudySVG from './assets/cloudy.svg';
import drizzleSVG from './assets/drizzle.svg';
import rainSVG from './assets/rain.svg';
import snowSVG from './assets/snow.svg';
import thunderstormSVG from './assets/thunderstorm.svg';
import fogSVG from './assets/fog.svg';
import feelsLike from './assets/temp-feels-like.svg';
import humiditySVG from './assets/humidity.svg';
import pressureSVG from './assets/pressure.svg';
import minTempSVG from './assets/min-temp.svg';
import maxTempSVG from './assets/max-temp.svg'


document.querySelector('#today-feel-icon').src = feelsLike;
document.querySelector('#humidity-icon').src = humiditySVG;
document.querySelector('#pressure-icon').src = pressureSVG;

let maxTempIcons = document.querySelectorAll('.max-temp')
let minTempIcons = document.querySelectorAll('.min-temp')

maxTempIcons.forEach(i => {
    i.src = maxTempSVG;
})

minTempIcons.forEach(i => {
    i.src = minTempSVG;
})


import {
    fetchWeatherMain,
} from './modules/functions.js'

window.addEventListener('DOMContentLoaded', () => {fetchWeatherMain("Berhida")});

document.getElementById('search').addEventListener('click', () => {fetchWeatherMain(document.getElementById('search-bar').value)})

export {
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
    feelsLike
}
