<script lang="ts">
	import { goto } from '$app/navigation';
	import type { MainComponents } from '$lib/types';

	export let goesTo: MainComponents;

	const doGoTo = () => {
		goto(goesTo);
	};
</script>

<button on:click={doGoTo} class="w-full">
	<h1 class="text-2xl font-mono mx-auto">
		<span>{goesTo}</span>
	</h1>
</button>

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
