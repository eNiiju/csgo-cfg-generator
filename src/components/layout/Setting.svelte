<script lang="ts">
    export let name: string;
</script>

<div class="setting">
    <div class="setting-left noselect">{name}</div>

    <div class="setting-right">
        <slot />
    </div>
</div>

<style>
    .setting {
        height: fit-content;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .setting:hover .setting-left {
        color: #fff;
    }

    .setting-left {
        max-width: 400px;
        margin-left: 1px;
        color: #ccc;
        font-weight: 400;
        font-size: 1.8rem;
        letter-spacing: 1px;
    }

    .setting-right {
        display: flex;
        align-items: center;
    }
</style>
