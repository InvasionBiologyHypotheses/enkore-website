<script>
	export let items;
</script>

<div class="baseGrid">
	{#each items as item}
		<div class="logo">
			<slot name="logo" item={item.logo}>
				<a href={item.logo.url}><img src={item.logo.image} alt={item.logo.title} /></a>
			</slot>
		</div>
		<div class="description">
			<slot name="description" item={item.description}>
				<p>
					{item.description}
				</p>
			</slot>
		</div>
	{/each}
</div>

<style>
	.baseGrid {
		display: grid;
		gap: var(--size-3);
		grid-template-columns: 300px 1fr;
		/* grid-template-rows: 1fr; */
		/* grid-template-areas: 'logo description'; */
	}
	.logo {
		/* grid-area: logo; */
		background-color: white;
		padding-inline: var(--size-3);
		grid-column-start: 1;
	}
	.description {
		/* grid-area: description; */
		grid-column-end: -1;
	}
	@media (max-width: 600px) {
		.baseGrid {
			grid-template-columns: 1fr;
		}
	}
</style>
