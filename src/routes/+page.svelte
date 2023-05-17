<script lang="ts">
	import type { PageServerData } from './$types';
	import PostCard from './PostCard.svelte';

	export let data: PageServerData;
</script>

{#each data.posts as post}
	<PostCard {post} />
{/each}
