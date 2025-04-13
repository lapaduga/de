export const closeOnBackdropClick = event => {
	const dialog = event.target.closest('dialog');
	const dialogDimensions = dialog.getBoundingClientRect();

	if (
		event.clientX < dialogDimensions.left ||
		event.clientX > dialogDimensions.right ||
		event.clientY < dialogDimensions.top ||
		event.clientY > dialogDimensions.bottom
	) {
		dialog.close();
	}
}