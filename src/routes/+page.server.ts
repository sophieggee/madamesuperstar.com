import type { PageServerLoad } from './$types';
import { getPosts } from '../lib/blog.server';
import fs from 'fs';

export const prerender = true;

export const load = (async () => {
    return {
        posts: getPosts()
    }
}) satisfies PageServerLoad;
