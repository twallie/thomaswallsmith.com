<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import '../app.css';
	import type { LayoutData } from './$types';
	import SiteHeader from '$lib/components/SiteHeader.svelte';

	export let data: LayoutData;
</script>

<div class="flex flex-col mt-20 h-[100%] justify-center align-middle md:mx-40">
	<SiteHeader />
	<div class="flex flex-col mt-5">
		{#key data.url}
			<div in:fly={{ x: -500, duration: 200, delay: 200 }} out:fly={{ x: -500, duration: 200 }}>
				<slot />
			</div>
		{/key}
	</div>
</div>

<style lang="postcss">
	* {
		@apply text-white;
	}
	@property --a {
		syntax: '<length>';
		inherits: false;
		initial-value: 0px;
	}
	@property --b {
		syntax: '<length>';
		inherits: false;
		initial-value: 0px;
	}

	:global(body) {
		background: black;
		animation-name: move;
		background-image: radial-gradient(white 2px, transparent 0);
		background-size: 50px 50px;
		background-position: var(--a) var(--a);
		animation-direction: forward;
		animation-iteration-count: infinite;
		animation-duration: 2s;
		animation-timing-function: linear;
	}

	@keyframes move {
		0% {
			--a: 0px;
		}
		100% {
			--a: 100px;
		}
	}
</style>
