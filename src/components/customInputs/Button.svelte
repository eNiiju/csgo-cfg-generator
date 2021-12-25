<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let text: string;
    export let iconPath = '';

    const dispatch = createEventDispatcher();
</script>

<button class="csgo-button noselect" on:click={() => dispatch('buttonClick')} >
    {#if iconPath}
        <img src={iconPath} alt="{text} button icon" class="nodrag" />
    {/if}

    <span>{text}</span>
</button>

<style>
    .csgo-button {
        height: 51px;
        width: fit-content;
        border-radius: 2px;
        padding: 5px 10px;
        outline: none;
        border: 0;
        background: none;
        color: #fff;
        font-weight: 400;
        font-size: 2rem;
        font-family: Rajdhani, Helvetica, Arial, sans-serif;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: background 200ms;
        white-space: nowrap;
    }

    .csgo-button > img,
    .csgo-button > span {
        vertical-align: middle;
        margin-top: 2px;
    }

    .csgo-button > img {
        height: 25px;
        width: 25px;
        margin-right: 5px;
    }

    .csgo-button:hover {
        background: #0d0d0e;
    }
</style>
