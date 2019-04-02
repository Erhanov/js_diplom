function calc() {
	console.log('2');

	let sizePicture = document.getElementById('size'),
		materialPicture = document.getElementById('material'),
		optionsPicture = document.getElementById('options'),
		promocodePicture = document.querySelector('.promocode'),
		pricePicture = document.querySelector('.calc-price'),
		promo = 1;


	let startValue = 0;

	sizePicture.addEventListener('change', function() {

		startValue = 4000 * materialPicture.options[materialPicture.selectedIndex].value
		 			* sizePicture.options[sizePicture.selectedIndex].value
		 			* optionsPicture.options[optionsPicture.selectedIndex].value;

		if (materialPicture.options[materialPicture.selectedIndex].value == '' &&
		 	sizePicture.options[sizePicture.selectedIndex].value == '') {
			pricePicture.innerHTML = 0;
		} 

		pricePicture.innerHTML = startValue * promo;

		console.log(sizePicture.options[sizePicture.selectedIndex].value);
		console.log(materialPicture.options[materialPicture.selectedIndex].value);
		console.log(optionsPicture.options[optionsPicture.selectedIndex].value);
	});

	materialPicture.addEventListener('change', function() {

		startValue = 4000 * materialPicture.options[materialPicture.selectedIndex].value
		 			* sizePicture.options[sizePicture.selectedIndex].value
		 			* optionsPicture.options[optionsPicture.selectedIndex].value;

		if (materialPicture.options[materialPicture.selectedIndex].value == '' &&
		 	sizePicture.options[sizePicture.selectedIndex].value == '') {
			pricePicture.innerHTML = 0;
		} 

		pricePicture.innerHTML = startValue * promo;
	});

	optionsPicture.addEventListener('change', function() {
		startValue = 4000 * materialPicture.options[materialPicture.selectedIndex].value
		 			* sizePicture.options[sizePicture.selectedIndex].value
		 			* optionsPicture.options[optionsPicture.selectedIndex].value;

		if (materialPicture.options[materialPicture.selectedIndex].value == '' &&
		 	sizePicture.options[sizePicture.selectedIndex].value == '') {
			pricePicture.innerHTML = 0;
		} 

		pricePicture.innerHTML = startValue * promo;
	});

	promocodePicture.addEventListener('input', () => {
		startValue = 4000 * materialPicture.options[materialPicture.selectedIndex].value
		 			* sizePicture.options[sizePicture.selectedIndex].value
		 			* optionsPicture.options[optionsPicture.selectedIndex].value;

		if (promocodePicture.value == 'IWANTPOPART') {
			promo = 0.7;
			pricePicture.innerHTML = startValue * promo;
		} else {
			promo = 1;
			pricePicture.innerHTML = startValue * promo;
		}
	});
}

module.exports = calc;