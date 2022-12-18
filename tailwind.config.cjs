/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						maxWidth: '100%'
					}
				}
			})
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
