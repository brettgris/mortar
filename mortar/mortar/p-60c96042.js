var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function f(e,n){return e(n={exports:{}},n.exports),n.exports}var o=f((function(e){
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){var n={}.hasOwnProperty;function f(){for(var e=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=f.apply(null,r);a&&e.push(a)}else if("object"===i)for(var t in r)n.call(r,t)&&r[t]&&e.push(t)}}return e.join(" ")}e.exports?(f.default=f,e.exports=f):window.classNames=f}()}));export{e as a,o as b,f as c,n as u}