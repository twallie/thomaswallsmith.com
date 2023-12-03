<script lang="ts">
	import TextSubsection from '$lib/components/TextSubsection.svelte';
	const pageTitle = 'about';
	const content = `
		Currently, I am a undergrad college student studying Computer Science. My interests include
		music, programming, building efficient systems, and playing video games.
	`;
</script>

<TextSubsection {pageTitle} {content} />
