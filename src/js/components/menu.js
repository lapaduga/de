export function handleMenuClick(action) {
	const menu = document.getElementById('menu');

	if (!menu) return

	menu[action]();
}