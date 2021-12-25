<script>
    import { onMount } from "svelte";

    export let value = 0;
    export let min = 0;
    export let max = 100;
    export let step = 1;

    let inputRange;

    // Used to style the slider for the provided default value
    const defaultPercentage = ((value - min) / (max - min)) * 100;

    export function handleInputChange() {
        const max = this.getAttribute('max');
        const min = this.getAttribute('min');
        const percentage = ((this.value - min) / (max - min)) * 100;

        // Style the slider based on the current value after each input change
        this.style.backgroundImage =
            `-webkit-gradient(linear, left top, right top, ` + `color-stop(${percentage / 100}, #a0a0a1), color-stop(${percentage / 100}, #55575a))`;
    }

    onMount(() => {
        inputRange.value = inputRange.getAttribute('data-value');
    });
</script>

<input type="range" class="csgo-slider" on:input={handleInputChange} {value} data-value={value} {min} {max} {step} bind:this={inputRange} style={`background-image: -webkit-gradient(linear, left top, right top, ` + `color-stop(${defaultPercentage / 100}, #a0a0a1), color-stop(${defaultPercentage / 100}, #55575a));`} />

<style>
    .csgo-slider {
        height: 8px;
        width: 209px;
        border-radius: 0;
        -webkit-appearance: none;
        -moz-apperance: none;
        outline: none;
    }

    .csgo-slider::-webkit-slider-thumb {
        height: 10px;
        width: 16px;
        border-radius: 2px;
        background-color: #ccc;
        -webkit-appearance: none;
    }

    .csgo-slider::-webkit-slider-thumb:hover {
        background-color: #fff;
    }
</style>
