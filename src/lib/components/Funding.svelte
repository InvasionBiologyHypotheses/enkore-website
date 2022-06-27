<div class="baseGrid">
	<div class="logo">
		<a href="https://www.volkswagenstiftung.de/"
			><img
				src="https://www.volkswagenstiftung.de/profiles/vwst/theme/volkswagen/images/logo.svg"
				alt="Volkswagen Foundation"
			/></a
		>
	</div>
	<div class="description">
		Financial support for this project has been received from the VolkswagenStiftung (97 863).
	</div>
</div>

<style>
	.baseGrid {
		display: grid;
		gap: var(--size-3);
		grid-template-columns: 300px 1fr;
		grid-template-rows: 1fr;
		grid-template-areas: 'logo description';
		align-items: center;
	}
	.logo {
		grid-area: logo;
		background-color: white;
		padding-inline: var(--size-3);
	}
	.description {
		grid-area: description;
	}
	@media (max-width: 600px) {
		.baseGrid {
			grid-template-columns: 1fr;
			grid-template-areas:
				'logo'
				'description';
		}
		.logo {
			grid-area: logo;
			background-color: white;
			padding-inline: var(--size-3);
		}
		.description {
			grid-area: description;
		}
	}
</style>
