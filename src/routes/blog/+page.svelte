<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<div class="prose">
	<h1>Blog</h1>
	{#if data.posts.length === 0}
		<p>No posts yet!</p>
	{:else}
		{#each data.posts as { title, date }, i}
			<div>
				{i + 1}.&nbsp;&nbsp;<a href={`/blog/articles/${i + 1}`}>{title}</a>
			</div>
			{#if i !== data.posts.length - 1}
				<hr />
			{/if}
		{/each}
	{/if}
</div>
