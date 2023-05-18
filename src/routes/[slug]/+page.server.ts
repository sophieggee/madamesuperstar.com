import { getPost } from '../../lib/blog.server.ts';
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