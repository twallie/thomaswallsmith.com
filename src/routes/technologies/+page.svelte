<script lang="ts">
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import TechnologyBlurb from '$lib/components/TechnologyBlurb.svelte';

	import type { Section } from '$lib/types';

	const jsTsSection: Section = {
		title: 'JavaScript & TypeScript',
		description:
			"TypeScript and it's subset JavaScript are my preferred languages for all things web dev.",
		bulletpoints: [
			{
				title: 'Runtimes',
				points: ['Node.js', 'Bun', 'V8']
			},
			{
				title: 'Frontend',
				points: ['Svelte', 'React']
			},
			{
				title: 'Backend',
				points: ['SvelteKit', 'Express.js', 'Next.js']
			},
			{
				title: 'Libraries',
				points: ['OpenAI', 'Firebase', 'Supabase']
			}
		]
	};

	const pythonSection: Section = {
		title: 'Python',
		description:
			'Proficient in Python, leveraging its versatility and readability to develop robust web applications.',
		bulletpoints: [
			{
				title: 'WebDev',
				points: ['Django', 'Flask']
			},
			{
				title: 'APIs/SDKs',
				points: ['OpenAI Python API', 'Firebase Python SDK']
			}
		]
	};

	const dbSection: Section = {
		title: 'Databases',
		description:
			'Proficient in SQL and NoSQL databases, I design efficient solutions for seamless data management and retrieval, ensuring optimal application interaction.',
		bulletpoints: [
			{
				title: 'Relational',
				points: ['MySQL', 'PostgreSQL']
			},
			{
				title: 'NoSQL',
				points: ['MongoDB', 'Firestore']
			},
			{
				title: 'BaaS',
				points: ['Supabase', 'Firebase']
			}
		]
	};

	const sections = [jsTsSection, pythonSection, dbSection];

	const closeOthers = (i: number) => {
		switch (i) {
			case 0: {
				openedArray[1] = false;
				openedArray[2] = false;
			}
			case 1: {
				openedArray[0] = false;
				openedArray[2] = false;
			}
			case 2: {
				openedArray[0] = false;
				openedArray[1] = false;
			}
		}
	};

	const openedArray: boolean[] = new Array(3).fill(false);
	openedArray[0] = true;
</script>

<SubsectionHeader pageTitle="technologies" />
<div class="flex flex-col font-mono">
	{#each sections as section, i}
		<TechnologyBlurb
			title={section.title}
			description={section.description}
			bulletpoints={section.bulletpoints}
			bind:opened={openedArray[i]}
			onOpen={() => closeOthers(i)}
		/>
	{/each}
</div>
