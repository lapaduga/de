export const createObserver = (header) => {
	const scrollWatcher = document.createElement('div');

	scrollWatcher.setAttribute('data-scroll-watcher', '');
	header.before(scrollWatcher);

	const observer = new IntersectionObserver(entries => {
		header.classList.toggle('_sticking', !entries[0].isIntersecting);
	});

	observer.observe(scrollWatcher);
}