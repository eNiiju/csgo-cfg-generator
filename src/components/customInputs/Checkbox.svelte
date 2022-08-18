<script>
    import { base } from '$app/paths';
    export let checked = false;

    function handleClick() {
        const originalCheckbox = this.querySelector("input[type='checkbox']");
        const oldState = originalCheckbox.checked;

        // Toggle state
        originalCheckbox.checked = !oldState;
        this.classList.toggle('checked');
    }
</script>

<div class="csgo-checkbox{checked ? ' checked' : ''}" on:click={handleClick} style={`--url-checkbox-checked: '${base}/images/icons/checked-icon.svg'`}>
    <input type="checkbox" {checked} />
</div>

<style>
    .csgo-checkbox {
        width: 20px;
        height: 20px;
        margin-right: 8px;
        border: 2px solid #fff;
        border-radius: 3px;
        background-size: 16px 16px;
        user-select: none;
        display: inline-block;
    }

    .csgo-checkbox.checked {
        background-image: url(--url-checkbox-checked);
    }

    .csgo-checkbox input[type='checkbox'] {
        display: none;
    }
</style>
