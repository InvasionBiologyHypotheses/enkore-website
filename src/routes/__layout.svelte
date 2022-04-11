<script>
	import '../app.css';
	export let navItems = [];
</script>

<svelte:head>
	<title>enKORE</title>
</svelte:head>

<header>
	<li>enKORE</li>

	<nav>
		<ul>
			{#each navItems as item}
				<li>
					<a href={item}>{item}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<main>
	<slot />
</main>

<footer />

<style>
	nav {
		position: sticky;
		top: 0;
		/* height: 2em; */
		background-color: white;
		width: 100%;
		border-bottom: 1px solid grey;
	}
	nav > ul {
		list-style-type: none;
		display: flexbox;
	}
	main {
		width: fit-content;
		margin-inline: auto;
		padding: 2ch;
	}
	:global(p, h1, h2, h3, h4, h5, h6, blockquote) {
		margin-block: 2ch;
	}
</style>
