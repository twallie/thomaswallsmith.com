<script lang="ts">
	import { goto } from '$app/navigation';

	export let atHome = false;

	const onClick = () => {
		if (atHome && !shaking) {
			shaking = true;
			setTimeout(() => {
				shaking = false;
			}, 250);
		}
		if (!atHome) {
			goto('/');
		}
	};

	let shaking = false;
</script>

<button on:click={onClick} class="{shaking ? 'shaking' : ''} text-center">
	<h1 class="text-2xl sm:text-3xl"><span class="afterme">thomaswallsmith.com</span></h1>
	<p class="text-sm"><span>the fullstack developer of your dreams</span></p>
</button>

<style lang="postcss">
	@keyframes shaking {
		0% {
			transform: translateX(0);
		}
		25% {
			transform: translateX(5px);
		}
		50% {
			transform: translateX(-5px);
		}
		75% {
			transform: translateX(5px);
		}
		100% {
			transform: translateX(0);
		}
	}

	@keyframes cursor-blink {
		0% {
			opacity: 0;
		}
	}

	.shaking {
		animation: shaking 0.25s;
	}

	.afterme::after {
		@apply translate-y-1 ml-0.5 bg-[#ffffff] w-0.5 h-[1em] inline-block;
		content: '';
		animation: cursor-blink 1.5s steps(2) infinite;
	}

	h1,
	p {
		@apply font-mono;
	}
</style>
