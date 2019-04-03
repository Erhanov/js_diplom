function form() {
	let message = {
		loading: 'Loading',
		success: 'Everything is Fine',
		failure: 'Smth got wrong'
	},
	statusMessage = document.createElement('div');

	let SendForm = (event, form) => {
		event.preventDefault();
		form.appendChild(statusMessage);
		
		let request = new XMLHttpRequest();
		
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		
		let formData = new FormData(form),
			obj = {};

		formData.forEach(function (value, key) {
			obj[key] = value;
		});

		let json = JSON.stringify(obj);
		request.send(json);
		let promise = new Promise(function (resolve, reject) {
			request.addEventListener('readystatechange', function () {
				if (request.readyState < 4) {
	    			resolve();
	    		} else if (request.readyState == 4 && request.status == 200) {
	    			resolve();
	    		} else {
	    			reject();
	    		}
			});
		});
		return promise;
	};

	let clearInputConsult = (input, input1, input2, input3) => {
		input.value = '';
		input1.value = '';
		input2.value = '';
		input3.value = '';
	};

	let clearInputModalConsult = (input, input1) => {
		input.value = '';
		input1.value = '';
	};

	let clearInputModalDesign = (input, input1, input2, input3) => {
		input.value = '';
		input1.value = '';
		input2.value = '';
		input3.value = '';
	};

	let formConsult = document.querySelector('.form-consult'),
		formModalConsult = document.querySelector('.form-modal_consult'),
		formModalDesign = document.querySelector('.form-modal_design'),
		buttonConsult = document.querySelector('.button-consult'),
		buttonModalConsult = document.querySelector('.button-modal_consult'),
		buttonModalDesign = document.querySelector('.button-modal_design'),
		nameInput = document.querySelectorAll('.name-input'),
		phoneInput = document.querySelectorAll('.phone-input'),
		emailInput = document.querySelectorAll('.email-input'),
		messageInput = document.querySelector('.input-text'),
		messageTextarea = document.querySelector('.message-textarea');


	let phoneControl = (input) => {
		let firstDigit = input.value.charCodeAt(0);

	    if (firstDigit > 57 || firstDigit < 42) {
	      input.value = '';
	    }

	    for (let i = 1; i < input.value.length; i++) {
	    	if (input.value.charCodeAt(i) > 57 || input.value.charCodeAt(i) < 48) {
	    		input.value = '+';
	    	}
	    }
		if (input.value.length > 11) {
			input.value = input.value.substring(0, 12);
		}
	}

	let textControl = (input) => {
		for (let i = 0; i < input.value.length; i++) {
			if (input.value.charCodeAt(i) > 1103 || input.value.charCodeAt(i) < 1072) {
			input.value = '';
			}
		}
	}

	let emailControl = (input) => {
		for (let i = 0; i < input.value.length; i++) {
			if (input.value.charCodeAt(i) > 122 || input.value.charCodeAt(i) < 97) {
			input.value = '';
			}
		}
	}




	formConsult.addEventListener('submit', () => {
		SendForm(event, formConsult).then(() => statusMessage.innerHTML = message.loading)
									.then(() => statusMessage.innerHTML = message.success)
									.catch(() => statusMessage.innerHTML = message.failure)
									.then(() => clearInputConsult(messageInput, nameInput[0], phoneInput[0], emailInput[0]));
	});

	formModalConsult.addEventListener('submit', () => {
		SendForm(event, formModalConsult).then(() => statusMessage.innerHTML = message.loading)
									.then(() => statusMessage.innerHTML = message.success)
									.catch(() => statusMessage.innerHTML = message.failure)
									.then(() => clearInputModalConsult(phoneInput[1], nameInput[1]));
	});

	formModalDesign.addEventListener('submit', () => {
		SendForm(event, formModalDesign).then(() => statusMessage.innerHTML = message.loading)
									.then(() => statusMessage.innerHTML = message.success)
									.catch(() => statusMessage.innerHTML = message.failure)
									.then(() => clearInputModalDesign(phoneInput[2], nameInput[2], emailInput[1], messageTextarea));
	});

	nameInput.forEach(function(item) {
		item.addEventListener('input', () => {
			textControl(item);
		});
	});

	emailInput.forEach(function(item) {
		item.addEventListener('input', () => {
			emailControl(item);
		});
	});

	phoneInput.forEach(function(item) {
		item.addEventListener('input', () => {
			phoneControl(item);
		});
	});
}

module.exports = form;