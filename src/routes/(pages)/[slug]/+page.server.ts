import { getPost, getPosts } from '../../../lib/blog.server.ts';
import { error } from '@sveltejs/kit';

export const prerender = true;

export async function load({ params }) {
    const post = getPost(params.slug);

    if (!post) {
        throw error(404);
    }

    return {
        post
    };
}

export function entries() {
    const posts = getPosts();
    return posts.map((post) => ({
        slug: post.slug
    }));
}
