<script lang="ts">
	import type { PageServerData } from './$types';
	import { rebalance } from '../../../lib/rebalance';

	export let data: PageServerData;

	console.log(data);
</script>

<svelte:head>
	<title>{data.post.title}</title>
</svelte:head>

<article class="post">
	<h1 use:rebalance>
		{data.post.title.toUpperCase()}
	</h1>
	<p class="post-date">{data.post.date}</p>

	<img src={`/content/image/${data.post.image}`} alt={data.post.title} />
	<div class="content">
		{@html data.post.content}
	</div>
</article>

<style>
	article {
		max-width: 700px;
		margin: 0 auto;
		padding: 0 1rem;
		color: rgb(0, 0, 0);
		font-weight: 380;
	}

	.post .content {
		margin: 4rem 0;
	}

	.post :global(h1) {
		font-size: 5vw;
		font-weight: 600;
		text-align: center;
		margin: 3rem auto;
		color: rgb(220, 0, 0);
	}

	.post-date {
		font-size: 1.2rem;
		text-align: center;
		color: rgb(50, 50, 50);
		margin-top: -2rem;
		margin-bottom: 2rem;
	}

	.post :global(a) {
		color: rgb(0, 0, 0);
	}

	.post :global(img) {
		width: 100%;
		display: block;
		margin: 4rem auto;
	}
</style>
