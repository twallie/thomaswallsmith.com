<div class="mx-auto text-center">
	<h1 class="box text-3xl mr-auto"><span>thomaswallsmith.com</span></h1>
	<p class="text-sm"><span>the fullstack developer of your dreams</span></p>
</div>

<style lang="postcss">
	@keyframes cursor-blink {
		0% {
			opacity: 0;
		}
	}
	.box::after {
		translate: 0 5px;
		margin-left: 2px;
		content: '';
		width: 3px;
		height: 1em;
		background: #ffffff;
		display: inline-block;
		animation: cursor-blink 1.5s steps(2) infinite;
	}
	h1,
	p {
		@apply font-mono;
	}
	span {
		@apply bg-black;
	}
</style>
