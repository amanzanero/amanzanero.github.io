<!-- +layout.svelte -->
<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import Spacer from '$lib/components/Spacer.svelte';
</script>

<svelte:head>
	<title>Andrew Manzanero - Home</title>
</svelte:head>
<Header />
<main class="w-full pt-5 grow">
	<Spacer>
		<div class="prose w-full">
			<slot />
		</div>
	</Spacer>
</main>
<Footer />
