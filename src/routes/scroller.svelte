<script>
	import Scroller from '@sveltejs/svelte-scroller';
	import LoremIpsum from '$lib/components/LoremIpsum.svelte';
	import DraggableLabel from '$lib/components/DraggableLabel.svelte';

	let count;
	let index;
	let offset;
	let progress;
	let top = 0.1;
	let threshold = 0.5;
	let bottom = 0.9;
</script>

<div class="demo">
	<LoremIpsum />

	<Scroller {top} {threshold} {bottom} bind:count bind:index bind:offset bind:progress>
		<div slot="background">
			<p>current section: <strong>{index + 1}/{count}</strong></p>
			<progress value={count ? (index + 1) / count : 0} />

			<p>offset in current section</p>
			<progress value={offset || 0} />

			<p>total progress</p>
			<progress value={progress || 0} />
		</div>

		<div slot="foreground" style="padding: 0 0 0 50%;">
			<section>section 1</section>
			<section>section 2</section>
			<section>section 3</section>
			<section>section 4</section>
			<section>section 5</section>
		</div>
	</Scroller>

	<LoremIpsum />

	<DraggableLabel bind:value={top} label="top" />
	<DraggableLabel bind:value={threshold} label="threshold" />
	<DraggableLabel bind:value={bottom} label="bottom" />
</div>

<style>
	.demo {
		padding: 0 100px 0 0;
	}

	[slot='background'] {
		background-color: rgba(255, 62, 0, 0.05);
		border-top: 2px solid #ff3e00;
		border-bottom: 2px solid #ff3e00;
		font-size: 1.4em;
		overflow: hidden;
		padding: 1em;
	}

	[slot='background'] p {
		margin: 0;
	}

	[slot='foreground'] {
		pointer-events: none;
	}

	[slot='foreground'] section {
		pointer-events: all;
	}

	section {
		height: 80vh;
		background-color: rgba(0, 0, 0, 0.5);
		color: white;
		padding: 1em;
		margin: 0 0 2em 0;
	}
</style>
