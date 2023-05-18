<!-- This is a component, we can have the functionality of the image hovering etc. in one component to replicate -->

<script lang="ts">
	import type { PostMetadata } from '../lib/types';

	import { rebalance } from '../lib/rebalance';
	export let post: PostMetadata;

	let isHovering = false;
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<article on:mouseenter={() => (isHovering = true)} on:mouseleave={() => (isHovering = false)}>
	<img src={`content/image/${post.image}`} alt={post.title} />
	{#if isHovering}
		<a class="overlay" href="/{post.slug}">
			<h1 use:rebalance>{post.title.toUpperCase()}</h1>
		</a>
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
		background: rgb(220, 0, 0);
		display: flex;
		justify-content: center;
		align-items: center;
		color: rgb(255, 201, 240);
		font-size: 3vw;
		text-align: center;
		text-decoration: none;
	}
</style>
