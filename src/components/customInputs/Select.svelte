<script lang="ts">
    import { onMount, createEventDispatcher } from 'svelte';
    import type { SettingInfos } from 'src/types';
    import { getSettingValue, setSettingValue } from '../../stores';

    export let options = [];
    export let settingInfos: SettingInfos;

    let selectedValue;

    const dispatch = createEventDispatcher();

    function handleSelectedItemClick() {
        // Show items
        this.classList.toggle('active');
    }

    function handleItemClick() {
        // Set new selected value
        setSettingValue(settingInfos, this.getAttribute('value'));
        selectedValue = this.getAttribute('value');

        // Dispatch event 'valueChange'
        dispatch('valueChange', { value: selectedValue });

        // Hide items
        this.parentElement.parentElement.querySelector('.selected').classList.remove('active');
    }

    onMount(() => {
        document.addEventListener('click', e => {
            const clickedSelect = (e as any).target.closest('.csgo-select');
            const clickedSelectSelectedItem = clickedSelect?.querySelector('.selected');

            // If clicked on a select that just switched to active
            if (clickedSelectSelectedItem?.classList.contains('active')) {
                // Close .selected of all .csgo-select except the one that was clicked
                const selected = Array.from(document.querySelectorAll('.csgo-select > .selected'));
                for (const s of selected) if (s !== clickedSelectSelectedItem) s.classList.remove('active');
            }

            // If the click is outside a .csgo-select
            else if (!clickedSelect) {
                // Close .selected of all .csgo-select
                const selected = Array.from(document.querySelectorAll('.csgo-select > .selected'));
                for (const s of selected) s.classList.remove('active');
            }
        });
    });
</script>

<div class="csgo-select noselect">
    <!-- Hidden original select -->
    {#key selectedValue}
        <select>
            {#each options as option}
                <option value={option.value} selected={getSettingValue(settingInfos) === option.value.toString()}>{option.name}</option>
            {/each}
        </select>
    {/key}

    <!-- Shown selected item -->
    {#key selectedValue}
        <div class="selected" on:click={handleSelectedItemClick}>
            {options.find(option => getSettingValue(settingInfos) === option.value.toString())?.name}
            <img src="/images/icons/dropdown-arrow-icon.svg" alt="Dropdown arrow icon" />
        </div>
    {/key}

    <!-- Hidden items -->
    <div class="items">
        {#each options as option}
            <div class="item" on:click={handleItemClick} value={option.value}>{option.name}</div>
        {/each}
    </div>
</div>

<style>
    .csgo-select {
        position: relative;
        width: fit-content;
        margin: 4px 4px 4px 0;
    }

    .csgo-select select {
        display: none;
    }

    .csgo-select > .selected {
        height: 41px;
        width: fit-content;
        right: 68px;
        border-radius: 2px;
        padding: 5px 12px;
        outline: none;
        border: 0;
        color: #fff;
        font-weight: 600;
        font-size: 2rem;
        font-family: Rajdhani, Helvetica, Arial, sans-serif;
        background: none;
        transition: background 200ms;
        display: table-cell;
        vertical-align: middle;
        letter-spacing: 2px;
        text-transform: uppercase;
        cursor: default;
    }
    :global(.csgo-select > .selected.active) {
        background-color: #0d0d0e !important;
    }

    .csgo-select > .selected > img {
        height: 15px;
        width: 15px;
        margin-left: 13px;
        margin-right: 4px;
    }

    .csgo-select > .selected:hover {
        background-color: #0d0d0e !important;
    }

    /* Show styled select items when the selected item has the .active class */
    :global(.csgo-select > .selected.active + .items) {
        display: block !important;
    }

    .csgo-select > .items {
        display: none;
        position: absolute;
        right: 0;
        padding: 16px 0;
        background-color: #2d2d2df5;
        color: #ccc;
        font-family: Rajdhani, Helvetica, Arial, sans-serif;
        border-radius: 2px;
        box-shadow: 2px 2px 15px 1px #000;
        max-height: 444px;
        overflow-y: auto;
        z-index: 10;
    }

    .csgo-select > .items > .item {
        padding: 0 25px;
        height: 40px;
        display: flex;
        align-items: center;
        letter-spacing: 1px;
        font-size: 1.7rem;
        white-space: nowrap;
    }

    .csgo-select > .items > .item:hover {
        background-image: linear-gradient(to right, #1d1d1dcc, #00000000);
    }
</style>
