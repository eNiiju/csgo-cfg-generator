<script lang="ts">
    import { onMount } from 'svelte';
    import type { SettingInfos } from 'src/types';
    import { getSettingValue, setSettingValue } from '../../stores';
    import Slider from './Slider.svelte';
    import Number from './Number.svelte';

    export let min = 0;
    export let max = 100;
    export let step = 1;
    export let settingInfos: SettingInfos;

    let value = getSettingValue(settingInfos);
    let container, slider, number;

    onMount(() => {
        slider = container.querySelector('.csgo-slider');
        number = container.querySelector('.csgo-number');

        slider.addEventListener('input', () => {
            // Set new value
            setSettingValue(settingInfos, slider.value.toString());
            value = slider.value;

            // Sync with number
            const step = number.getAttribute('step');
            const nbDecimalPoint = parseFloat(step) < 1 ? step.slice(2).length : 0;
            number.value = parseFloat(slider.value).toFixed(nbDecimalPoint);
        });

        number.addEventListener('input', () => {
            // Set new value
            setSettingValue(settingInfos, number.value.toString());
            value = number.value;

            // Sync with slider
            slider.value = number.value;

            // Style the slider based on the current value after each input change
            const max = slider.getAttribute('max');
            const min = slider.getAttribute('min');
            const percentage = ((slider.value - min) / (max - min)) * 100;
            slider.style.backgroundImage =
                `-webkit-gradient(linear, left top, right top, ` + `color-stop(${percentage / 100}, #a0a0a1), color-stop(${percentage / 100}, #55575a))`;
        });
    });
</script>

<div class="link-slider-number" bind:this={container}>
    <Slider {value} {min} {max} {step} />
    <Number {value} {min} {max} {step} />
</div>

<style>
    .link-slider-number {
        height: fit-content;
        width: fit-content;
    }
</style>
