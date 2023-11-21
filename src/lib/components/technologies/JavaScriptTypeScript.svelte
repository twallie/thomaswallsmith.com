<script lang="ts">
	import Collapsible from '../Collapsible.svelte';
	import { fly } from 'svelte/transition';

	export let opened = false;
</script>

<Collapsible title="JavaScript & TypeScript" bind:opened />
{#if opened}
	<div in:fly={{ x: -200, duration: 200 }} out:fly={{ x: -200, duration: 200 }} class="mb-5 ml-2">
		<span>
			<p class="text-right">
				TypeScript (and it's subset JavaScript) are my preferred languages for all things web dev.
			</p>
		</span>
		<div class="flex flex-row justify-around mr-3">
			<div class="mt-2">
				<span class="text-xl underline font-bol"> Runtimes </span>
				<ul>
					<li>
						<span> - Node.js </span>
					</li>
					<li>
						<span> - Bun </span>
					</li>
					<li>
						<span> - V8 </span>
					</li>
				</ul>
			</div>
			<div class="mt-2">
				<span class="text-xl underline font-bol"> Backend </span>
				<ul>
					<li>
						<span> - SvelteKit </span>
					</li>
					<li>
						<span> - Express.js </span>
					</li>
					<li>
						<span> - Next.js </span>
					</li>
				</ul>
			</div>
		</div>
		<div class="flex flex-row justify-around">
			<div class="mt-4">
				<span class="text-xl underline font-bol"> Frontend </span>
				<ul>
					<li>
						<span> - Svelte </span>
					</li>
					<li>
						<span> - React </span>
					</li>
				</ul>
			</div>
			<div class="mt-4">
				<span class="text-xl underline font-bol"> APIs/SDKs </span>
				<ul>
					<li>
						<span> - OpenAI JavaScript API </span>
					</li>
					<li>
						<span> - Firebase JavaScript SDK </span>
					</li>
					<li>
						<span> - supabase-js </span>
					</li>
				</ul>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	span {
		@apply bg-black;
	}
</style>
