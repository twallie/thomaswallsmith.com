<script lang="ts">
	import '../app.css';
</script>

<slot />

<style>
	:global(body) {
		background: black;
		background-image: radial-gradient(white 1px, transparent 0);
		background-size: 40px 40px;
	}
</style>
