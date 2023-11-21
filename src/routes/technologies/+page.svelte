<script lang="ts">
	import Collapsible from '$lib/components/Collapsible.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import JavaScriptTypeScript from '$lib/components/technologies/JavaScriptTypeScript.svelte';
	import Triangle from '$lib/images/triangle.svg';
</script>

<SubsectionHeader pageTitle="technologies" />
<div class="flex flex-col mx-5 mt-4 font-mono">
	<JavaScriptTypeScript />
	<Collapsible title="Python" />
	<Collapsible title="Databases" />
	<Collapsible title="Java" />
</div>

<style lang="postcss">
	span {
		@apply bg-black;
	}
</style>
