<script lang="ts">
	import MainLink from '$lib/components/MainLink.svelte';
	import SiteHeader from '$lib/components/SiteHeader.svelte';
</script>

<div class="flex flex-col mt-20 h-[100%] justify-center align-middle">
	<SiteHeader />
	<ul class="flex flex-col mt-5 text-xl font-mono justify-center text-center">
		<li>
			<MainLink text={'portfolio'} />
		</li>
		<li>
			<MainLink text={'technologies'} />
		</li>
		<li>
			<MainLink text={'about'} />
		</li>
		<li>
			<MainLink text={'contact'} />
		</li>
	</ul>
</div>

<style lang="postcss">
	* {
		@apply text-white;
	}
	span {
		@apply bg-black;
	}
	li {
		padding: 0;
		margin: 30px;
		height: 20px;
		list-style-type: none;
	}
</style>
