<script context="module">
	export async function load() {
		const muck = import.meta.glob('./*.{svelte,svx}');
		const navItems = [];
		console.log(muck);
		Object.keys(muck).map((item) => {
			console.log({ item });
			navItems.push(item.substring(1, item.lastIndexOf('.')));
		});
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
		width: 100%;
		position: fixed;
		top: 0;
		/* height: 2em; */
		z-index: 999999999;
		background-color: white;
		border-bottom: 1px grey solid;
	}
	nav > ul {
		list-style-type: none;
		display: flexbox;
	}
	nav > ul > li {
		display: inline-block;
	}
	main {
		padding-top: 2em;
	}
</style>
