function burger() {
	let burger = document.querySelector('.burger'),
		burgerButton = document.querySelector('.burger-menu'),
		header = document.querySelector('.header'),
		MainBody = document.getElementsByTagName("body")[0],
		a = 0;


	function checkBurger() {
		if (window.innerWidth <= 768) {
			if (a % 2 == 0) {
				burgerButton.style.display = 'block';
				burgerButton.classList.add('animated', 'fadeInDown');
				a++;
			} else {
				burgerButton.classList.add('animated', 'fadeOutUp');
				a++;
				setTimeout(function() {
					burgerButton.style.display = 'none';
					burgerButton.classList.remove('animated', 'fadeOutUp');
				}, 500);			
			}
		}

	}

	burger.addEventListener('click', checkBurger);
}

module.exports = burger;