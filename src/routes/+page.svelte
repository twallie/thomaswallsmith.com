<script lang="ts">
	import MainLink from '$lib/components/MainLink.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
	import type { MainComponents } from '$lib/types';

	import BackArrow from '$lib/images/backarrow.svg';

	import { fade } from 'svelte/transition';

	let shown: MainComponents = 'menu';

	$: console.log(shown);
</script>

<div class="flex flex-col mt-20 h-[100%] justify-center align-middle">
	<SiteHeader />
	{#if shown === 'menu'}
		<ul
			class="flex flex-col mt-5 text-xl font-mono justify-center text-center"
			in:fade={{ delay: 300 }}
			out:fade={{ duration: 300 }}
		>
			<li>
				<MainLink goesTo={'portfolio'} bind:shown />
			</li>
			<li>
				<MainLink goesTo={'technologies'} bind:shown />
			</li>
			<li>
				<MainLink goesTo={'about'} bind:shown />
			</li>
			<li>
				<MainLink goesTo={'contact'} bind:shown />
			</li>
		</ul>
	{:else if shown === 'portfolio'}
		<div in:fade={{ delay: 300 }} class="flex mt-5 ml-5 font-mono">
			<img src={BackArrow} class="h-[50px] w-auto invert" alt="Back" />
			<h1 class="ml-auto mr-10 text-2xl"><span>portfolio</span></h1>
		</div>
	{:else if shown === 'technologies'}
		<div in:fade={{ delay: 300 }}>
			<h1>technologies</h1>
		</div>
	{:else if shown === 'about'}
		<div in:fade={{ delay: 300 }}>
			<h1>about</h1>
		</div>
	{:else if shown === 'contact'}
		<div in:fade={{ delay: 300 }}>
			<h1>contact</h1>
		</div>
	{/if}
</div>

<style lang="postcss">
	* {
		@apply text-white;
	}
	li {
		padding: 0;
		margin: 30px;
		height: 20px;
		list-style-type: none;
	}
	span {
		@apply bg-black;
	}
</style>
