<script>
	import Card from '$lib/components/Card.svelte';

	export let data;
</script>

<div class="baseGrid">
	{#each data.groups as group}
		<div class="group">
			<div>
				{#each data.organisations.filter((x) => group.organisations.includes(x.id)) as org}
					<div class="organisation">
						<div class="logo">
							<a href={org.url} target="_blank"><img src={org.logo} alt={`${org.name} logo`} /></a>
						</div>
						<div class="description">
							<p>
								{org.description}
							</p>
						</div>
					</div>
				{/each}
			</div>
			<div class="people">
				{#each data.people.filter( (x) => group.organisations.some( (y) => x.organisations.includes(y) ) ) as person}
					<Card>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Circle-icons-profile.svg"
							alt={`${person.first} ${person.last}`}
							slot="image"
						/>
						<p slot="title">
							{person.first}
							{person.last}
						</p>
						<p slot="subtitle">
							{person.position}
						</p>
					</Card>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.baseGrid {
		display: grid;
		gap: var(--size-3);
	}
	.group {
		display: grid;
		grid-template-columns: 1fr 2fr;
		grid-template-areas: 'organisation people';
	}
	.organisation {
		grid-area: organisation;
		display: grid;
		grid-template-columns: 300px 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: 'logo description';
	}
	.logo {
		grid-area: logo;
		text-align: center;
		background-color: white;
		padding: var(--size-3);
	}
	.description {
		grid-area: description;
		padding-inline: var(--size-3);
	}
	.people {
		grid-area: people;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	}
	@media (max-width: 1200px) {
		.organisation {
			grid-template-columns: 300px 1fr;
			grid-template-areas:
				'logo people'
				'description people';
		}
	}
	@media (max-width: 800px) {
		.organisation {
			grid-template-columns: 1fr;
			grid-template-areas:
				'logo'
				'description'
				'people';
		}
	}
</style>
