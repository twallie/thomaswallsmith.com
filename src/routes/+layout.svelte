<script>
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
</script>

<div class="m-5">
	<slot />
</div>
<Footer />

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.base);
	}
</style>
