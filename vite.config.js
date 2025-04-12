import { defineConfig } from "vite";
import pugPlugin from "vite-plugin-pug";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig({
	plugins: [
		pugPlugin(),
		viteSingleFile()
	],
})