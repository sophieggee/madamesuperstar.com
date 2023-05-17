<script lang="ts">
	import geraniumImg from '../assets/img/geranium.jpeg';
	let isHovering = false;
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<article on:mouseenter={() => (isHovering = true)} on:mouseleave={() => (isHovering = false)}>
	<img src={geraniumImg} alt="geranium" />
	{#if isHovering}
		<div class="overlay">
			<h1>A CASE FOR WILD</h1>
		</div>
	{/if}
</article>

<style>
	img {
		width: 100%;
	}
	article {
		position: relative;
		margin: 1rem 0;
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgb(255, 47, 0);
		display: flex;
		justify-content: center;
		align-items: center;
		color: rgb(251, 208, 239);
		font-size: 4rem;
	}
</style>
