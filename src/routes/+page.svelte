<script lang="ts">
	import MainLink from '$lib/components/MainLink.svelte';
	import type { MainComponents } from '$lib/types';
	let shown: MainComponents = 'menu';

	$: console.log(shown);
</script>

<div class="mt-[6rem] space-y-5">
	<MainLink goesTo="portfolio" />
	<MainLink goesTo="technologies" />
	<MainLink goesTo="contact" />
	<MainLink goesTo="about" />
</div>

<style lang="postcss">
</style>
