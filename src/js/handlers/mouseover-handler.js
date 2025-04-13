import { sharedCoordinatesState } from "../helpers/shared-coordinates-state.js";

export const handleMouseOverEvent = (event, hero) => {
	const heroWidth = hero.offsetWidth;
	const heroHeight = hero.offsetHeight;

	const coordX = event.pageX - heroWidth / 2;
	const coordY = event.pageY - heroHeight / 2;

	sharedCoordinatesState.coordXPercent = coordX / heroWidth * 100;
	sharedCoordinatesState.coordYPercent = coordY / heroHeight * 100;
}