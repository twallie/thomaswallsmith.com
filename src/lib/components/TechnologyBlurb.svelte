<script lang="ts">
	import type { Bulletpoint } from '$lib/types';
	import Collapsible from './Collapsible.svelte';
	import { fly } from 'svelte/transition';
	import CollapsibleContentTechnology from './CollapsibleContentTechnology.svelte';

	export let title: string;
	export let description: string;
	export let bulletpoints: Bulletpoint[];

	export let opened = false;
	export let onOpen: () => void = () => {};
</script>

<Collapsible {title} bind:opened {onOpen} />
{#if opened}
	<div in:fly={{ x: -200, duration: 400 }} class="mb-4 ml-1 mr-2 p-1">
		<CollapsibleContentTechnology {description} {bulletpoints} />
	</div>
{/if}
