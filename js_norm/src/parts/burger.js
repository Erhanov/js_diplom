function burger() {
	let burger = document.querySelector('.burger'),
		burgerButton = document.querySelector('.burger-menu'),
		a = 0;


	if (window.innerWidth <= 768) {
		burger.addEventListener('click', () => {
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
		});
	}




	
}

module.exports = burger;