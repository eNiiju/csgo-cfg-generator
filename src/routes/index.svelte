<script>
    import { onMount } from 'svelte';
    import { base } from '$app/paths';

    onMount(() => {
        window.location.href = `${base}/video`;
    });
</script>
