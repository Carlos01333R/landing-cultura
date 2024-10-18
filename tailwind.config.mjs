/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				playfair: ['"Playfair Display Black"', 'serif'], // Define la fuente personalizada
				playfairRegular: ['"playfair display regular"', 'serif'], // Define la fuente personalizada
			  },
		},
	},
	darkMode: "class",
	plugins: [nextui()],
}
