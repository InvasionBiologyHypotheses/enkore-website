<script>
	import '../app.css';
	import Logo from '$lib/components/Logo.svelte';
	import HiKnowledgeLogo from '$lib/components/HiKnowledgeLogo.svelte';
	import HiKnowledgeVisualisation from '$lib/components/HiKnowledgeVisualisation.svelte';
</script>

<svelte:head>
	<title>enKORE</title>
</svelte:head>

<header>
	<div>
		<Logo />
	</div>

	<nav>
		<ul>
			<li>
				<a href="/">Home</a>
			</li>
			<li>
				<a href="/workshops">Workshops</a>
			</li>
		</ul>
	</nav>
	<div>
		<a href="https://hi-knowledge.org/"><HiKnowledgeLogo width="130px" height="none" /></a>
	</div>
</header>

<main>
	<slot />
</main>

<footer />

<style>
	header {
		box-sizing: border-box;
		position: sticky;
		top: 0;
		background-color: var(--surface-1);
		width: 100%;
		padding-block: var(--size-3);
		padding-inline-end: var(--size-3);
		margin-block-end: var(--size-3);
		box-shadow: var(--shadow-3);
		display: flex;
		max-height: var(--size-10);
		justify-content: space-between;
	}
	a {
		padding: unset;
		margin: unset;
	}
	nav > ul {
		list-style-type: none;
	}
	footer {
		min-height: var(--size-10);
	}
</style>
