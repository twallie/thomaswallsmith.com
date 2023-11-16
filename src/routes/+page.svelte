<div class="flex flex-col mt-20 h-[100%] justify-center align-middle">
	<div class="mx-auto text-center">
		<h1 class="box text-4xl mr-auto"><span>thomaswallsmith.com</span></h1>
		<p class=""><span>the fullstack developer of your dreams</span></p>
	</div>
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
	h1,
	p {
		@apply font-mono;
	}
	span {
		@apply bg-black;
	}
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
		height: 35px;
		background: #ffffff;
		display: inline-block;
		animation: cursor-blink 1.5s steps(2) infinite;
	}
</style>
