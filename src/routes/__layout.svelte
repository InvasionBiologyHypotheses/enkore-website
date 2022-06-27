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
	footer {
		min-height: var(--size-10);
	}
</style>
