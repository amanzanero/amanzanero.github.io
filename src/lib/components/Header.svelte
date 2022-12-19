<script>
	import Spacer from './Spacer.svelte';
</script>

<header class="bg-neutral py-2 sm:py-4">
	<Spacer>
		<div
			class="flex flex-col sm:flex-row flex-wrap items-center justify-start sm:justify-between w-full text-neutral-content"
		>
			<a class="normal-case text-2xl" href="/">Andrew Manzanero</a>
			<nav>
				<ul class="m-0 flex sm:flex-row flex-col sm:gap-4 text-xl text-center sm:text-left">
					<li>
						<a href="/blog">Blog</a>
					</li>
					<li>
						<a href="/contact">Contact</a>
					</li>
				</ul>
			</nav>
		</div>
	</Spacer>
</header>
