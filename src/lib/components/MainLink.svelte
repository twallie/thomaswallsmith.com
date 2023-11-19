<script lang="ts">
	import type { MainComponents } from '$lib/types';

	export let goesTo: MainComponents;
	export let shown: MainComponents;

	const setShown = () => {
		shown = goesTo;
	};
</script>

<button on:click={setShown}><h1><span>{goesTo}</span></h1></button>

<style lang="postcss">
	@property --size {
		syntax: '<length>';
		initial-value: 10px;
	}
	@keyframes increaseSize {
		from {
			--size: 10px;
		}
		to {
			--size: 200px;
		}
	}
	span {
		@apply bg-black;
	}
	h1 {
		/* animation css */
		transition: font-size ease-in-out 0.3s;
	}
	h1:hover {
		@apply text-2xl;
	}
</style>
