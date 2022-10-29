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

document.querySelector('#today-feel-icon').src = feelsLike;

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
