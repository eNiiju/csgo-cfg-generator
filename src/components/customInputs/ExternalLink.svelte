<script lang="ts">
    export let name: string;
    export let href: string;
</script>

<a class="csgo-external-link noselect" {href} target="_blank">
    <img src="/images/icons/external-link-icon.svg" alt="External link icon" class="nodrag" />
    <span class="external-link-name">{name}</span>
</a>

<style>
    .csgo-external-link {
        display: inline-block;
        height: fit-content;
        width: fit-content;
        border-radius: 2px;
        padding: 10px 15px;
        outline: none;
        border: 0;
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        font-size: 2rem;
        font-family: Rajdhani, Helvetica, Arial, sans-serif;
        letter-spacing: 1px;
        text-transform: uppercase;
        background: none;
        transition: background 200ms;
        cursor: default;
        margin: 4px 4px 4px 0;
    }

    .csgo-external-link:hover {
        background: #0d0d0e;
    }

    .csgo-external-link > img {
        width: 30px;
        height: 30px;
        margin-right: 7px;
    }

    .csgo-external-link > img,
    .csgo-external-link > span {
        vertical-align: middle;
    }
</style>
