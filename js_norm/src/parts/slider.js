function slider() {
	let smallSlider = () => {
		let slideIndex = 1,
			slides = document.querySelectorAll('.main-slider-item');

		let showSlides = (n) => {
	   		if (n > slides.length) {
	    		slideIndex = 1;
	    	}

		    if (n < 1) {
		    	slideIndex = slides.length;
		    }

	    	slides.forEach(item => item.style.display = 'none');
	    	slides[slideIndex - 1].style.display = 'block';
	    	slides[slideIndex - 1].classList.add('animated', 'fadeInUp');
	    	
		}

		let plusSlides = n => {
			showSlides(slideIndex += n);
		};

		setInterval(function(n) {
	    	plusSlides(1);
	    }, 5000);

	}

	smallSlider();

	let bigSlider = () => {
		let slideIndex = 1,
			slides = document.querySelectorAll('.feedback-slider-item'),
			prev = document.querySelector('.main-prev-btn'),
			next = document.querySelector('.main-next-btn');


		let showSlides = (n) => {
	   		if (n > slides.length) {
	    		slideIndex = 1;
	    	}

		    if (n < 1) {
		    	slideIndex = slides.length;
		    }

			console.log(slides[slideIndex - 1]);
	    	slides.forEach(item => item.style.display = 'none');
	    	slides[slideIndex - 1].style.display = 'block';
	    	slides[slideIndex - 1].classList.add('animated', 'fadeInRight');
		}

		let plusSlides = n => {
			showSlides(slideIndex += n);
		};

		prev.addEventListener('click', () => {
			plusSlides(-1);
		});

		next.addEventListener('click', () => {
			plusSlides(1);
		});

		showSlides(slideIndex);
	}

	bigSlider();

}

module.exports = slider;