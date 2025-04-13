import { sharedCoordinatesState } from "../helpers/shared-coordinates-state.js";

export const applyParallaxStyle = () => {
	const woman = document.querySelector('[data-parallax-item="woman"]');
	const home = document.querySelector('[data-parallax-item="home"]');
	const platform = document.querySelector('[data-parallax-item="platform"]');
	const man = document.querySelector('[data-parallax-item="man"]');
	const womanModifer = 0.5;
	const homeModifer = 3;
	const platformModifer = 2;
	const manModifer = 1;
	const speed = 0.05;
	let positionX = 0;
	let positionY = 0;
	const amplitudeMultiplier = 4;

	const distX = (sharedCoordinatesState.coordXPercent - positionX) * amplitudeMultiplier;
	const distY = (sharedCoordinatesState.coordYPercent - positionY) * amplitudeMultiplier;

	positionX += distX * speed;
	positionY += distY * speed;

	if (woman) {
		woman.style.cssText = `transform: translate(${positionX / womanModifer}%, ${positionY / womanModifer}%);`;
	}

	if (home) {
		home.style.cssText = `transform: translate(${positionX / homeModifer}%, ${positionY / homeModifer}%);`;
	}

	if (platform) {
		platform.style.cssText = `transform: translate(${positionX / platformModifer}%, ${positionY / platformModifer}%);`;
	}

	if (man) {
		man.style.cssText = `transform: translate(${positionX / manModifer}%, ${positionY / manModifer}%);`;
	}

	requestAnimationFrame(applyParallaxStyle);
}