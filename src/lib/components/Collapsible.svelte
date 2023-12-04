<script lang="ts">
	import Triangle from '$lib/images/triangle.svg';

	export let title: string;
	export let opened = false;

	export let onOpen: () => void = () => {};
</script>

<button class="flex flex-row ml-auto" on:click={onOpen}>
	<span>
		<h1 class="font-bold text-lg font-mono">{title}</h1>
	</span>
	<img
		class="
            w-[12px]
            invert
            {opened ? 'rotate-180' : '-rotate-90'} 
            ml-2
            my-auto
        "
		src={Triangle}
		alt="Open/close section"
	/>
</button>
