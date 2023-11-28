<script lang="ts">
	import type { Bulletpoint } from '$lib/types';

	export let description: string;
	export let bulletpoints: Bulletpoint[];
</script>

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
