import { closeOnBackdropClick } from "../helpers/close-dialogs.js";

export const toggleMenuState = action => {
	const modal = document.getElementById('modal');

	if (!modal) return

	modal.addEventListener('click', closeOnBackdropClick);

	modal[action]();
}

const form = document.getElementById('form');

const formAddError = input => {
	input.classList.add('_error');
}

const formRemoveError = input => {
	input.classList.remove('_error');
}

const emailTest = input => {
	return !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}

const validateForm = () => {
	let error = 0;
	let requiredFields = form.querySelectorAll('[data-required]');

	requiredFields.forEach(input => {
		formRemoveError(input);

		if (input.classList.contains('_email')) {
			if (emailTest(input)) {
				formAddError(input);
				error++;
			}
		} else {
			if (input.value.trim() === '') {
				formAddError(input);
				error++;
			}
		}
	});

	return error;
}

const sendForm = async event => {
	event.preventDefault();

	let error = validateForm();
	let formData = new FormData(form);
	const alertElement = document.getElementById('alert');
	const submitBtn = document.getElementById('submit');
	const formList = document.getElementById('form-list');

	if (error === 0) {
		alertElement.classList.remove('_error');
		form.classList.add('_sending');
		submitBtn.disabled = true;
		formList.disabled = true;

		let response = await fetch('sendmail.php', {
			method: 'POST',
			body: formData
		});

		if (response.ok) {
			const successPopup = document.getElementById('popup-thx');
			successPopup.showModal();
			setTimeout(() => successPopup.close(), 5000);
			form.reset();
			form.classList.remove('_sending');
			document.getElementById('modal').close();
			submitBtn.disabled = false;
			formList.disabled = false;
		} else {
			const failPopup = document.getElementById('popup-error');
			failPopup.showModal();
			setTimeout(() => failPopup.close(), 5000);
			form.classList.remove('_sending');
			submitBtn.disabled = false;
			formList.disabled = false;
		}
	} else {
		alertElement.classList.add('_error');
	}
}

form.addEventListener('submit', sendForm);