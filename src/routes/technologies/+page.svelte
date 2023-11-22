<script lang="ts">
	import Collapsible from '$lib/components/Collapsible.svelte';
	import SubsectionHeader from '$lib/components/SubsectionHeader.svelte';
	import TechnologyBlurb from '$lib/components/TechnologyBlurb.svelte';

	import type { Bulletpoint } from '$lib/types';

	const jsTsBulletpoints: Bulletpoint[] = [
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
			title: 'APIs/SDKs',
			points: ['OpenAI JavaScript API', 'Firebase JavaScript SDK', 'supabase-js']
		}
	];

	const pythonBulletpoints: Bulletpoint[] = [
		{
			title: 'WebDev',
			points: ['Django', 'Flask']
		},
		{
			title: 'APIs/SDKs',
			points: ['OpenAI Python API', 'Firebase Python SDK']
		}
	];

	const dbBulletpoints: Bulletpoint[] = [
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
	];
</script>

<SubsectionHeader pageTitle="technologies" />
<div class="flex flex-col mt-4 font-mono">
	<TechnologyBlurb
		title="JavaScript & TypeScript"
		description="TypeScript and it's subset JavaScript are my preferred languages for all things web dev."
		bulletpoints={jsTsBulletpoints}
	/>
	<TechnologyBlurb
		title="Python"
		description="Proficient in Python, leveraging its versatility and readability to develop robust web applications."
		bulletpoints={pythonBulletpoints}
	/>
	<TechnologyBlurb
		title="Databases"
		description="Proficient in SQL and NoSQL databases, I design efficient solutions for seamless data management and retrieval, ensuring optimal application interaction."
		bulletpoints={dbBulletpoints}
	/>
</div>
