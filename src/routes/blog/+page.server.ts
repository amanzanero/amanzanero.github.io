import type { PageServerLoad } from './$types';

type Metadata = {
	title: string;
	date: string;
};

const fetchLocalPosts = async () => {
	const posts = import.meta.glob('./articles/**/+page.md');
	const getters = Object.entries(posts).map(([, value]) => value);
	return await Promise.all(
		getters.map((getter) => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			return getter().then((resolved: any) => resolved.metadata as Metadata);
		})
	);
};

export const load: PageServerLoad = async () => {
	return {
		posts: fetchLocalPosts()
	};
};
