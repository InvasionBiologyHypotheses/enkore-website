<div class="card">
	<div class="image">
		<slot name="image" />
	</div>
	<div class="body">
		<div class="title">
			<slot name="title" />
		</div>
		<div class="subtitle">
			<slot name="subtitle" />
		</div>
		<div class="additional">
			<slot name="additional" />
		</div>
	</div>
</div>

<style>
	.card {
		display: grid;
		grid-template-columns: 120px 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: 'image body';
		border: 1px solid pink;
	}
	.image {
		grid-area: image;
		/* background-color: white; */
		padding: var(--size-3);
	}
	.body {
		grid-area: body;
	}
	.title {
		font-size: var(--font-size-fluid-2);
	}
	.subtitle {
		font-size: var(--font-size-fluid-3);
	}
</style>
