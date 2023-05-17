<!-- This is a component, we can have the functionality of the image hovering etc. in one component to replicate -->

<script lang="ts">
	import type { PostMetadata } from '../lib/types';
	export let post: PostMetadata;

	let isHovering = false;
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<article on:mouseenter={() => (isHovering = true)} on:mouseleave={() => (isHovering = false)}>
	<img src={`content/image/${post.image}`} alt={post.title} />
	{#if isHovering}
		<div class="overlay">
			<h1>{post.title}</h1>
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
		text-align: center;
	}
</style>
