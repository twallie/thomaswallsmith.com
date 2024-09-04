/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			base: '#EFF1F3',
			secondary: '#D8B4A0',
			primary: '#5E3023'
		},
		extend: {
			fontFamily: {
				krona: ['Krona One', 'sans-serif']
			}
		}
	},
	plugins: []
};
