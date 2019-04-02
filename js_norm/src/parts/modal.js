function modal() {
	let buttonConsultation = document.querySelectorAll('.button-consultation'),
		buttonDesign = document.querySelectorAll('.button-design'),
		buttonGift = document.querySelector('.fixed-gift'),
		popupConsultation = document.querySelector('.popup-consultation'),
		popupDesign = document.querySelector('.popup-design'),
		popupGift = document.querySelector('.popup-gift'),
		close = document.querySelectorAll('.popup-close'),
		MainBody = document.getElementsByTagName("body")[0];


	let showModal = (modal) => {
		modal.classList.add('show');
		document.body.style.overflow = 'hidden';
		counter60sec++;
	}

	let closeModal = (modal) => {
		modal.classList.remove("show");
		document.body.style.overflow = '';
	}
	let counterBottom = 0,
		counter60sec = 0;

	close.forEach(function(item) {
		item.addEventListener('click', () => {
			closeModal(popupConsultation);
			closeModal(popupDesign);
			closeModal(popupGift);
			counterBottom++;
			counter60sec--;
		});	
	});	

	buttonConsultation.forEach(function(item) {
		item.addEventListener('click', () => {
			showModal(popupConsultation);
		});
	});

	buttonDesign.forEach(function(item) {
		item.addEventListener('click', () => {
			showModal(popupDesign);
		});
	});

	buttonGift.addEventListener('click', () => {
		showModal(popupGift);
		buttonGift.style.display = 'none';
	});

	MainBody.addEventListener("click", event => {
        let target = event.target;
        if (target && target.classList.contains("show")) {
            target.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

	window.onscroll = function(ev) {
	    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight
	    	&& counterBottom == 0) {
	        showModal(popupGift);
	        buttonGift.style.display = 'none';
	    }
	};

	let timer = setTimeout( () => {
		if (counter60sec == 1) {
			clearTimeout(timer);
		} else {
			showModal(popupConsultation);
		}
	}, 60000);


}

module.exports = modal;