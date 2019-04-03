function load() {
	let hovers1 = document.querySelector('.size-1'),
		hovers2 = document.querySelector('.size-2'),
		hovers3 = document.querySelector('.size-3'),
		hovers4 = document.querySelector('.size-4'),
		sizeContainer = document.querySelector('.sizes'),
		sizeP = document.querySelectorAll('.size'),
		startPrice = document.querySelectorAll('.starting-price'),
		finalPrice = document.querySelectorAll('.final-price'),
		sizeBlock = document.querySelectorAll('.sizes-block');

	sizeContainer.addEventListener('mouseover', event => {
		let target = event.target;

		if (target && target == hovers1) {
			hovers1.src = 'img/sizes-1-1.png';
			sizeP[0].style.display = 'none';
			startPrice[0].style.display = 'none';
			finalPrice[0].style.display = 'none';
		}

		if (target && target == hovers2) {
			hovers2.src = 'img/sizes-2-1.png';
			sizeP[1].style.display = 'none';
			startPrice[1].style.display = 'none';
			finalPrice[1].style.display = 'none';
		}

		if (target && target == hovers3) {
			hovers3.src = 'img/sizes-3-1.png';
			sizeP[2].style.display = 'none';
			startPrice[2].style.display = 'none';
			finalPrice[2].style.display = 'none';
		}

		if (target && target == hovers4) {
			hovers4.src = 'img/sizes-4-1.png';
			sizeP[3].style.display = 'none';
			startPrice[3].style.display = 'none';
			finalPrice[3].style.display = 'none';
		}
	});

	sizeContainer.addEventListener('mouseout', event => {
		let target = event.target;

		if (target && target == hovers1) {
			hovers1.src = 'img/sizes-1.png';
			sizeP[0].style.display = 'block';
			startPrice[0].style.display = 'block';
			finalPrice[0].style.display = 'block';
		}

		if (target && target == hovers2) {
			hovers2.src = 'img/sizes-2.png';
			sizeP[1].style.display = 'block';
			startPrice[1].style.display = 'block';
			finalPrice[1].style.display = 'block';
		}

		if (target && target == hovers3) {
			hovers3.src = 'img/sizes-3.png';
			sizeP[2].style.display = 'block';
			startPrice[2].style.display = 'block';
			finalPrice[2].style.display = 'block';
		}

		if (target && target == hovers4) {
			hovers4.src = 'img/sizes-4.png';
			sizeP[3].style.display = 'block';
			startPrice[3].style.display = 'block';
			finalPrice[3].style.display = 'block';
		}
	});
}

module.exports = load;