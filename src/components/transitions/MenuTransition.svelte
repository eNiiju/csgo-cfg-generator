<script lang="ts">
    import { fade } from 'svelte/transition';
</script>

<div class="page-transition-container" in:fade={{ duration: 200, delay: 200 }} out:fade={{ duration: 0 }}>
    <slot />
</div>

<style>
    .page-transition-container {
        position: absolute;
        height: 100%;
        width: 100%;
    }
</style>
