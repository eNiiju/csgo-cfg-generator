import preprocess from 'svelte-preprocess';
import adapter from 'svelte-adapter-github';

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
            domain: null,
            jekyll: false,
            fallback: null,
            precompress: false
        }),
        paths: {
            base: dev ? '' : '/csgo-cfg-generator'
        }
    }
};
