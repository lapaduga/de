import '/src/styles/style.scss';

const init = async () => {
  const hero = document.getElementById('hero');

  if (hero) {
    const { applyParallaxStyle } = await import(`./components/hero.js`);
    applyParallaxStyle();

    hero.addEventListener('mouseover', async event => {
      const { handleMouseOverEvent } = await import(`./handlers/mouseover-handler.js`);
      handleMouseOverEvent(event, hero);
    });
  }

  document.addEventListener('click', async event => {
    const { handleClick } = await import(`./handlers/click-handler.js`);
    handleClick(event);
  });
}

document.addEventListener('DOMContentLoaded', init);