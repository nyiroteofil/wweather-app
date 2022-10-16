"use strict";
(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["app"],{

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


async function fetchWeather() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Budapest&units=metric&cnt=5&APPID=a280ad62e485531769c9814cbc6bdfc8', {mode: 'cors'})
        .then(response => {
            console.log(response.json());
        })
}

window.addEventListener('DOMContentLoaded', fetchWeather);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/app.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLndlYXRoZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7O0FDQXFCOztBQUVyQjtBQUNBLG1JQUFtSSxhQUFhO0FBQ2hKO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoV2VhdGhlcigpIHtcbiAgICBmZXRjaCgnaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/cT1CdWRhcGVzdCZ1bml0cz1tZXRyaWMmY250PTUmQVBQSUQ9YTI4MGFkNjJlNDg1NTMxNzY5Yzk4MTRjYmM2YmRmYzgnLCB7bW9kZTogJ2NvcnMnfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuanNvbigpKTtcbiAgICAgICAgfSlcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmZXRjaFdlYXRoZXIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==