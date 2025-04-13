import { closeOnBackdropClick } from "../helpers/close-dialogs.js";

export const toggleMenuState = action => {
	const menu = document.getElementById('menu');

	if (!menu) return

	menu.addEventListener('click', closeOnBackdropClick);

	menu[action]();
}