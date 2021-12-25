import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/**
 * @type {import('@sveltejs/kit').Config}
 */
export default {
    preprocess: preprocess({ preserve: ['module'] }),
    kit: {
        target: '#app',
        adapter: adapter({
            pages: 'public',
            assets: 'public',
            fallback: null
        })
    }
};
