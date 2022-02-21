<script context="module">
	export async function load() {
		const navItems = import.meta.glob('./*.{svelte,svx}');
		for (const path in navItems) {
			navItems[path]().then((mod) => {
				console.log(path, mod);
			});
		}

		console.log({ navItems });
		return {
			props: {
				navItems
			}
		};
	}

	/*
	pages:
	- index / intro
	- workshop
	*/
</script>

<script>
	export let navItems = [];
</script>

<svelte:head>
	<title>enKORE</title>
</svelte:head>

<nav>
	<ul>
		<li>enKORE</li>
		{#each navItems as item}
			<li>
				<a href={item}>{item}</a>
			</li>
		{/each}
	</ul>
</nav>

<main>
	<slot />
</main>

<style>
	@import 'open-props/style';
	@import 'open-props/normalize';
	@import 'open-props/gradients';
	:global(body) {
		margin: 0;
		padding: 0;
	}
	nav {
		position: fixed;
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
		margin: 2em;
		padding-top: 2em;
	}
</style>
