<script lang="ts">
	import TextSubsection from '$lib/components/TextSubsection.svelte';
	let pageTitle = 'Contact';
	let content = `
		I am always looking for interesting projects and businesses to work with. 
		If you're interested in working with me, please reach out to me at thomaswallsmith@gmail.com
	`;
</script>

<TextSubsection {pageTitle} {content} />
