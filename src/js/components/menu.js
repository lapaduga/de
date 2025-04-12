export function toggleMenuState(action) {
	const menu = document.getElementById('menu');

	if (!menu) return

	menu[action]();
}