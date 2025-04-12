import '/src/styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', async event => {
    const item = event.target.closest('[data-action]');

    if (!item) return;

    let action = item.dataset.action;

    switch (action) {
      case 'close':
        await import('./components/menu').then(({ handleMenuClick }) => {
          handleMenuClick(action);
        });
        break;

      default:
        break;
    }
  });
});