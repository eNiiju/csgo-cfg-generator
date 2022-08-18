import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

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
        }),
        paths: {
            base: dev ? '' : '/csgo-cfg-generator'
        }
    }
};
