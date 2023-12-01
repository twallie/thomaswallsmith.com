<script lang="ts">
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	export let pageTitle: string;
	export let content: string;
</script>

<SubsectionHeader {pageTitle} />
<div class="flex flex-col ml-[18%] text-sm sm:text-lg xl:ml-[50%]">
	<p class="text-end font-mono">
		<span>
			{content}
		</span>
	</p>
</div>
