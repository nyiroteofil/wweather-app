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

import {
    fetchWeatherMain,
    setBackgrounds,
} from './modules/functions.js'

window.addEventListener('DOMContentLoaded', () => {fetchWeatherMain("Berhida")});

export {
    clearBG,
    fewCloudsBG,
    scatteredCloudsBG,
    brokenCloudsBG,
    showerRainBG,
    rainBG,
    thunderstormBG,
    snowBG,
    mistBG
}
