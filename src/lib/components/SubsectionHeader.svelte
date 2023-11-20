<script lang="ts">
	import { goto } from '$app/navigation';
	import BackArrow from '$lib/images/backarrow.svg';
	const goHome = () => {
		goto('/');
	};
	export let pageTitle: string;
</script>

<div class="flex flex-row ml-5 align-middle">
	<button on:click={goHome}>
		<img src={BackArrow} class="h-[50px] w-auto invert" alt="Back" />
	</button>
	<h1 class="ml-auto mr-5 text-2xl font-mono mt-1">
		<span>{pageTitle}</span>
	</h1>
</div>

<style lang="postcss">
	span {
		@apply bg-black;
	}
</style>
