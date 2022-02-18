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
</script>

<script>
	export let navItems = [];
</script>

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
	nav {
		position: fixed;
		top: 0;
		/* height: 2em; */
	}
	nav > ul {
		list-style-type: none;
		display: flexbox;
	}
	main {
		padding-top: 2em;
	}
</style>
