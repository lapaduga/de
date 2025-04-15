import { closeOnBackdropClick } from "../helpers/close-dialogs.js";

export const toggleMenuState = action => {
	const modal = document.getElementById('modal');

	if (!modal) return

	modal.addEventListener('click', closeOnBackdropClick);

	modal[action]();
}

const form = document.querySelector('.form');

form.addEventListener('submit', sendForm);

async function sendForm(e) {
	e.preventDefault();

	let error = validateForm();

	let formData = new FormData(form);

	if (error === 0) {
		form.querySelector('.form__alert').classList.remove('_error');
		form.classList.add('_sending');
		let response = await fetch('sendmail.php', {
			method: 'POST',
			body: formData
		});
		if (response.ok) {
			let result = await response.json();
			document.querySelector('#popup-thx').classList.add('_open')
			setTimeout(() => document.querySelector('#popup-thx').classList.remove('_open'), 3000);
			form.reset();
			form.classList.remove('_sending');
		} else {
			document.querySelector('#popup-error').classList.add('_open')
			setTimeout(() => document.querySelector('#popup-error').classList.remove('_open'), 3000);
			form.classList.remove('_sending');
		}
	} else {
		form.querySelector('.form__alert').classList.add('_error');
	}
}

function validateForm() {
	let error = 0;
	let formReq = document.querySelectorAll('._req');

	for (let i = 0; i < formReq.length; i++) {
		const input = formReq[i];
		formRemoveError(input);

		if (input.classList.contains('_email')) {
			if (emailTest(input)) {
				formAddError(input);
				error++;
			}
		} else {
			if (input.value === '') {
				formAddError(input);
				error++;
			}
		}
	}

	return error;
}

function formAddError(input) {
	input.classList.add('_error');
}

function formRemoveError(input) {
	input.classList.remove('_error');
}

function emailTest(input) {
	return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}