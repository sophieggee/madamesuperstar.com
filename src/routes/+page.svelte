<script lang="ts">
	import type { PageServerData } from './$types';
	import PostCard from './PostCard.svelte';
	import MarqueHeader from '../lib/components/MarqueHeader.svelte';

	export let data: PageServerData;
</script>

<svelte:head>
	<title>Madame Superstar</title>
</svelte:head>

<MarqueHeader />
{#each data.posts as post}
	<PostCard {post} />
{/each}
