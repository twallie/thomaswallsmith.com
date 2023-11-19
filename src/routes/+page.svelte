<script lang="ts">
	import SiteHeader from "$lib/components/SiteHeader.svelte";
</script>

<div class="flex flex-col mt-20 h-[100%] justify-center align-middle">
	<SiteHeader />
	<div class="flex flex-col mt-5 mx-10 text-center">
		<p class="">
			<span> This website is currently under construction </span>
		</p>
		<p class="">
			<span> If you'd like to reach me, email me at thomaswallsmith@gmail.com </span>
		</p>
	</div>
</div>

<style lang="postcss">
	* {
		@apply text-white;
	}
	p {
		@apply font-mono;
	}
	span {
		@apply bg-black;
	}
</style>
