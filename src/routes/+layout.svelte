<script>
	import '../app.css';
</script>

<div class="m-5">
	<slot />
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.base);
	}
</style>
