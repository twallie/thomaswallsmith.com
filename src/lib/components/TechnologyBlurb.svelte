<script lang="ts">
	import type { Bulletpoint } from '$lib/types';
	import Collapsible from './Collapsible.svelte';
	import { fly } from 'svelte/transition';
	import CollapsibleContentTechnology from './CollapsibleContentTechnology.svelte';

	export let title: string;
	export let description: string;
	export let bulletpoints: Bulletpoint[];

	export let opened: boolean;
	export let onOpen: () => void = () => {};

	const onOpenWIthShake = () => {
		if (opened && !shaking) {
			shaking = true;
			setTimeout(() => {
				shaking = false;
			}, 260);
		} else {
			onOpen();
		}
	};

	let shaking = false;
</script>

<div class={shaking ? 'animate-shake' : ''}>
	<Collapsible {title} bind:opened onOpen={onOpenWIthShake} />
	{#if opened}
		<div in:fly={{ x: -200, duration: 400 }} class="mb-4 ml-1">
			<CollapsibleContentTechnology {description} {bulletpoints} />
		</div>
	{/if}
</div>
