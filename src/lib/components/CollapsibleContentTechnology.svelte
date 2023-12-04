<script lang="ts">
	import type { Bulletpoint } from '$lib/types';

	export let description: string;
	export let bulletpoints: Bulletpoint[];
</script>

<div class="ml-[40%]">
	<p class="text-right text-sm mt-1">
		<span>
			{description}
		</span>
	</p>
	<div class="flex flex-row flex-wrap justify-around space-x-3 mb-4">
		{#each bulletpoints as bulletpoint}
			<div class="mt-2">
				<span class="text-lg underline font-bold">{bulletpoint.title}</span>
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
