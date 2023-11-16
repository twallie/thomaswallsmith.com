<script lang="ts">
	let innerHeight: number;

	import '../app.css';
</script>

<slot />

<style>
	:global(body) {
		background: black;
		background-image: radial-gradient(white 1px, transparent 0);
		background-size: 40px 40px;
		background-position: -19px -19px;
	}
</style>
