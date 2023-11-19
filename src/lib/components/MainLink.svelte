<script lang="ts">
	export let text: string;
</script>

<h1><span>{text}</span></h1>

<style lang="postcss">
	@property --size {
		syntax: '<length>';
		initial-value: 10px;
	}
	@keyframes increaseSize {
		from {
			--size: 10px;
		}
		to {
			--size: 200px;
		}
	}
	span {
		@apply bg-black;
	}
	h1 {
		/* animation css */
		transition: font-size ease-in-out 0.5s;
	}
	h1:hover {
		@apply text-2xl;
	}
</style>
