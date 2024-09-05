/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			base: '#EFF1F3',
			altbase: '#D8B4A0',
			primary: '#5E3023',
			secondary: '#133C55',
			accent: '#D8B4A0'
		},
		extend: {
			fontFamily: {
				krona: ['Krona One', 'sans-serif']
			}
		}
	},
	plugins: []
};
