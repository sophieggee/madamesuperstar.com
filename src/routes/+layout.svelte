<script lang="ts">
	import { onMount } from 'svelte';

	let title: HTMLHeadingElement;

	onMount(() => {
		const titleWidth = title.clientWidth;

		const animationDuration = (titleWidth / 100) * 2; // Adjust the division factor as needed
		title.style.animationDuration = `${animationDuration}s`;
	});
</script>

<header>
	<h1 bind:this={title}>
		MADAME SUPERSTAR MADAME SUPERSTAR MADAME SUPERSTAR MADAME SUPERSTAR MADAME SUPERSTAR MADAME
		SUPERSTAR MADAME SUPERSTAR MADAME SUPERSTAR MADAME SUPERSTAR MADAME SUPERSTAR MADAME SUPERSTAR
		MADAME SUPERSTAR MADAME SUPERSTAR MADAME SUPERSTAR MADAME SUPERSTAR MADAME SUPERSTAR MADAME
		SUPERSTAR MADAME SUPERSTAR MADAME SUPERSTAR MADAME SUPERSTAR MADAME SUPERSTAR MADAME SUPERSTAR
		MADAME SUPERSTAR
	</h1>
</header>

<svelte:head>
	<link rel="preconnect" href="https://rsms.me/" />
	<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>

<slot />

<!-- make background light pink -->
<style>
	:global(body) {
		background: rgb(251, 208, 239);
		margin: 0;
		padding: 0;
		font-family: 'Inter var', 'Inter', sans-serif;
	}
	h1 {
		color: rgb(251, 208, 239);
		padding: 0;
		margin: 0;
		font-size: 2rem;
		font-weight: 600;
		/* apply marquee */
		animation: marquee linear infinite;
		white-space: nowrap;
		/* overflow: hidden; */
	}
	header {
		background: rgb(255, 47, 0);
		padding: 0 1rem;
		overflow: hidden;
	}
	@keyframes marquee {
		0% {
			transform: translateX(-100%);
		}
		100% {
			transform: translateX(0%);
		}
	}
</style>
