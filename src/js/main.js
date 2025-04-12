import '/src/styles/style.scss';

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', async event => {
    const item = event.target.closest('[data-action]');

    if (!item) return;

    let action = item.dataset.action;
    let component = item.dataset.component;

    const { toggleMenuState } = await import(`./components/${component}.js`);
    toggleMenuState(action);
  });
});