<script lang="ts">
	import type { Bulletpoint } from '$lib/types';
	import Collapsible from './Collapsible.svelte';
	import { fly } from 'svelte/transition';

	export let title: string;
	export let description: string;
	export let bulletpoints: Bulletpoint[];

	export let opened = false;
	export let onOpen: () => void = () => {};
</script>

<Collapsible {title} bind:opened {onOpen} />
{#if opened}
	<div
		in:fly={{ x: -200, duration: 400 }}
		out:fly={{ x: 0, duration: 200 }}
		class="mb-4 ml-1 mr-2 p-1"
	>
		<p class="text-right">
			<span>
				{description}
			</span>
		</p>
		<div class="flex flex-row flex-wrap justify-around xl:ml-[50%] space-x-3 mt-4 mb-4">
			{#each bulletpoints as bulletpoint}
				<div class="mt-2">
					<span class="text-xl underline font-bold">{bulletpoint.title}</span>
					<ul>
						{#each bulletpoint.points as point}
							<li>
								<span> - {point}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
{/if}

<style lang="postcss">
	span {
		@apply bg-black;
	}
</style>
