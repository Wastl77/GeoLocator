/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/geocode.js":
/*!***************************!*\
  !*** ./src/js/geocode.js ***!
  \***************************/
/*! exports provided: geocodeLocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"geocodeLocation\", function() { return geocodeLocation; });\nfunction geocodeLocation(lat, lng) {\n  const url=\"https://maps.googleapis.com/maps/api/geocode/json?latlng=\"+lat+\",\"+lng+\"&key=AIzaSyDZhHS4OYBe0AGr1cByePHG-pz8ORJ1KtU\"\n  fetch(url)\n  .then(res => {return res.json()})\n  .then(data => {\n    let currentLocation = (data.results[0].address_components[2].long_name);\n    document.getElementById(\"currentLocation\").innerHTML = currentLocation;\n    new google.maps.Marker({position: {lat: lat, lng: lng}, map: map});\n  })\n  .catch(error => console.log(error))\n}\n\n\n//# sourceURL=webpack:///./src/js/geocode.js?");

/***/ }),

/***/ "./src/js/scripts.js":
/*!***************************!*\
  !*** ./src/js/scripts.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _geocode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geocode.js */ \"./src/js/geocode.js\");\n\n\n  // Initialisierung der Karte mit Zentrierung auf das Waldstadion\n  let map;\n  function initMap() {\n    map = new google.maps.Map(document.getElementById('map'), {\n      center: {lat: 50.068611, lng: 8.645278},\n      zoom: 12\n    });\n  };\n\n  // Standort ermitteln, Karte darauf zentrieren, mit Koordinaten Geocode aufrufen und ausgeben im Textfeld\n  function getLocation() {\n    const url=\"https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDZhHS4OYBe0AGr1cByePHG-pz8ORJ1KtU\"\n    fetch(url,{method:\"POST\"})\n    .then(res => {return res.json()})\n    .then(data => {\n      map.setCenter({lat: data.location.lat, lng: data.location.lng});\n      Object(_geocode_js__WEBPACK_IMPORTED_MODULE_0__[\"geocodeLocation\"])(data.location.lat, data.location.lng);\n    })\n    .catch(error => console.log(error))\n  }\n  // function geocodeLocation(lat, lng) {\n  //   const url=\"https://maps.googleapis.com/maps/api/geocode/json?latlng=\"+lat+\",\"+lng+\"&key=AIzaSyDZhHS4OYBe0AGr1cByePHG-pz8ORJ1KtU\"\n  //   fetch(url)\n  //   .then(res => {return res.json()})\n  //   .then(data => {\n  //     let currentLocation = (data.results[0].address_components[2].long_name);\n  //     document.getElementById(\"currentLocation\").innerHTML = currentLocation;\n  //     new google.maps.Marker({position: {lat: lat, lng: lng}, map: map});\n  //   })\n  //   .catch(error => console.log(error))\n  // }\n\n\n//# sourceURL=webpack:///./src/js/scripts.js?");

/***/ })

/******/ });