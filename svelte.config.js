import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: ['.md'],
			layout: {
				articles: 'src/routes/blog/articles/posts.svelte'
			}
		})
	],
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		})
	},
	extensions: ['.svelte', '.md']
};

export default config;
