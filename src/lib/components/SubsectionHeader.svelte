<script lang="ts">
	import { goto } from '$app/navigation';
	import BackArrow from '$lib/images/backarrow.svg';
	const goHome = () => {
		goto('/');
	};
	export let pageTitle: string;
</script>

<div class="flex flex-row">
	<button on:click={goHome}>
		<img src={BackArrow} class="h-[3rem] invert" alt="Back" />
	</button>
	<h1 class="ml-auto text-2xl font-mono font-bold mt-2 text-[25px]">
		<span>{pageTitle}</span>
	</h1>
</div>
