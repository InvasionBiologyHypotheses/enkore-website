<script>
	import '../app.css';
	import Logo from '$lib/components/Logo.svelte';
</script>

<svelte:head>
	<title>enKORE</title>
</svelte:head>

<header>
	<Logo />

	<nav>
		<ul>
			<a href="/">Home</a>
		</ul>
		<ul>
			<a href="/workshops">Workshops</a>
		</ul>
	</nav>
</header>

<main>
	<slot />
</main>

<footer />

<style>
	header {
		position: sticky;
		top: 0;
		background-color: var(--surface-1);
		width: 100%;
		padding-block: var(--size-3);
		margin-block-end: var(--size-3);
		box-shadow: var(--shadow-3);
		display: flex;
	}
	nav > ul {
		list-style-type: none;
	}
	main {
		display: grid;
		gap: var(--size-3);
		width: min(100% - 2rem, var(--content-size-3));
		margin-inline: auto;
		padding: 2ch;
	}
</style>
