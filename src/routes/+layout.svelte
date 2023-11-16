<script lang="ts">
	import '../app.css';
</script>

<slot />

<style>
	@property --a {
		syntax: '<length>';
		inherits: false;
		initial-value: 0px;
	}
	@property --b {
		syntax: '<length>';
		inherits: false;
		initial-value: 0px;
	}

	:global(body) {
		background: black;
		animation-name: move;
		background-image: radial-gradient(white 1px, transparent 0);
		background-size: 40px 40px;
		background-position: var(--a) var(--a);
		animation-direction: reverse;
		animation-iteration-count: infinite;
		animation-duration: 10s;
	}

	@keyframes move {
		from {
			--a: 0px;
			--b: 0px;
		}
		to {
			--a: 1000px;
			--b: 1000px;
		}
	}
</style>
