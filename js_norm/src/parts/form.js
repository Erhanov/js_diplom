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

	let clearInput = (input) => {
		input.value = '';
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
		messageInput = document.querySelector('.message-input');





	formConsult.addEventListener('submit', () => {
		SendForm(event, formConsult).then(() => statusMessage.innerHTML = message.loading)
									.then(() => statusMessage.innerHTML = message.success)
									.catch(() => statusMessage.innerHTML = message.failure)
									.then(() => clearInput(nameInput))
									.then(() => clearInput(phoneInput))
									.then(() => clearInput(emailInput))
									.then(() => clearInput(messageInput))
	});

	formModalConsult.addEventListener('submit', () => {
		SendForm(event, formModalConsult).then(() => statusMessage.innerHTML = message.loading)
									.then(() => statusMessage.innerHTML = message.success)
									.catch(() => statusMessage.innerHTML = message.failure)
									.then(() => clearInput(nameInput))
									.then(() => clearInput(phoneInput));
	});

	formModalDesign.addEventListener('submit', () => {
		SendForm(event, formModalDesign).then(() => statusMessage.innerHTML = message.loading)
									.then(() => statusMessage.innerHTML = message.success)
									.catch(() => statusMessage.innerHTML = message.failure)
									.then(() => clearInput(nameInput))
									.then(() => clearInput(phoneInput))
									.then(() => clearInput(emailInput));
	});
}

module.exports = form;