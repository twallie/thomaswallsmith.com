<script lang="ts">
	import { goto } from '$app/navigation';
	import BackArrow from '$lib/images/backarrow.svg';
	const goHome = () => {
		goto('/');
	};
	export let pageTitle: string;
</script>

<div class="flex flex-row ml-5 align-middle mt-5">
	<button on:click={goHome}>
		<img src={BackArrow} class="h-[3rem] invert" alt="Back" />
	</button>
	<h1 class="ml-auto mr-5 text-2xl font-mono mt-1 text-[30px]">
		<span>{pageTitle}</span>
	</h1>
</div>

<style lang="postcss">
	span {
		@apply bg-black;
	}
</style>
