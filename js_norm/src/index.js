window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	let calc = require('./parts/calc.js'),
		modal = require('./parts/modal.js'),
		slider = require('./parts/slider.js'),
		form = require('./parts/form.js'),
		accordion = require('./parts/accordion.js'),
		filter = require('./parts/filter.js'),
		extra = require('./parts/extra.js'),
		load = require('./parts/load.js'),
		burger = require('./parts/burger.js');

	calc();
	modal();
	slider();
	form();
	accordion();
	filter();
	extra();
	load();
	burger();
});

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}