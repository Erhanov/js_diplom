function calc() {
	console.log('2');

	let sizePicture = document.getElementById('size'),
		materialPicture = document.getElementById('material'),
		optionsPicture = document.getElementById('options'),
		promocodePicture = document.querySelector('.promocode'),
		pricePicture = document.querySelector('.calc-price');


	let startValue = 0;

	sizePicture.addEventListener('change', function() {

		startValue = 4000 * materialPicture.options[materialPicture.selectedIndex].value
		 			* sizePicture.options[sizePicture.selectedIndex].value
		 			* optionsPicture.options[optionsPicture.selectedIndex].value;

		if (materialPicture.options[materialPicture.selectedIndex].value == '' &&
		 	sizePicture.options[sizePicture.selectedIndex].value == '') {
			pricePicture.innerHTML = 0;
		} 

		pricePicture.innerHTML = startValue;

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

		pricePicture.innerHTML = startValue;
	});

	optionsPicture.addEventListener('change', function() {
		startValue = 4000 * materialPicture.options[materialPicture.selectedIndex].value
		 			* sizePicture.options[sizePicture.selectedIndex].value
		 			* optionsPicture.options[optionsPicture.selectedIndex].value;

		if (materialPicture.options[materialPicture.selectedIndex].value == '' &&
		 	sizePicture.options[sizePicture.selectedIndex].value == '') {
			pricePicture.innerHTML = 0;
		} 

		pricePicture.innerHTML = startValue;
	});

	promocodePicture.addEventListener('input', () => {

		startValue = 4000 * materialPicture.options[materialPicture.selectedIndex].value
		 			* sizePicture.options[sizePicture.selectedIndex].value
		 			* optionsPicture.options[optionsPicture.selectedIndex].value;

		if (promocodePicture.value == 'IWANTPOPART') {
			let a = startValue * 0.7;
			pricePicture.innerHTML = a;
		}
	});
}

module.exports = calc;