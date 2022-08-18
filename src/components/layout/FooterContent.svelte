<script lang="ts">
    import { base } from '$app/paths';
    import { downloadConfig } from '../../lib/download';
    import Button from '../customInputs/Button.svelte';
</script>

<div class="footer-content">
    <Button text="Download .cfg" iconPath={`${base}/images/icons/download-icon.svg`} on:buttonClick={downloadConfig} />
    <Button text="Reset Defaults" iconPath={`${base}/images/icons/reset-icon.svg`} on:buttonClick={() => window.location.reload()} />
</div>

<style>
    .footer-content {
        height: 100%;
        width: 100%;
        padding-right: 68px;
        display: flex;
        gap: 10px;
        align-items: center;
        flex-direction: row-reverse;
        overflow-y: auto;
    }
</style>
