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
		background-image: radial-gradient(white 2px, transparent 0);
		background-size: 50px 50px;
		background-position: var(--a) var(--a);
		animation-direction: alternate;
		animation-iteration-count: infinite;
		animation-duration: 3600s;
	}

	@keyframes move {
		from {
			--a: 0px;
		}
		to {
			--a: 100000px;
		}
	}
</style>
