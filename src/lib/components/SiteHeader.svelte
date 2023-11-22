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

<button on:click={onClick} class="{shaking ? 'shaking' : ''} mx-auto text-center">
	<h1 class="text-3xl mr-auto"><span>thomaswallsmith.com</span></h1>
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

	h1::after {
		translate: 0 5px;
		margin-left: 2px;
		content: '';
		width: 3px;
		height: 1em;
		background: #ffffff;
		display: inline-block;
		animation: cursor-blink 1.5s steps(2) infinite;
	}

	h1,
	p {
		@apply font-mono;
	}

	span {
		@apply bg-black;
	}
</style>
