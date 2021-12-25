<script lang="ts">
    import { onMount } from 'svelte';
    import type { SettingInfos } from 'src/types';
    import { getSettingValue, setSettingValue } from '../../stores';
    import Slider from './Slider.svelte';
    import Percentage from './Percentage.svelte';

    export let min = 0;
    export let max = 100;
    export let settingInfos: SettingInfos;
    
    let value = getSettingValue(settingInfos);
    let container, slider, percentage;

    onMount(() => {
        slider = container.querySelector('.csgo-slider');
        percentage = container.querySelector('.csgo-percentage');

        slider.addEventListener('input', () => {
            // Set new value
            setSettingValue(settingInfos, slider.value.toString());
            value = slider.value;

            // Sync with percentage
            percentage.value = `${slider.value}%`;
        });

        percentage.addEventListener('input', () => {
            // Set new value
            setSettingValue(settingInfos, percentage.value.toString());
            value = percentage.value;

            // Sync with slider
            slider.value = percentage.value.replace('%', '');

            // Style the slider based on the current value after each input change
            const max = slider.getAttribute('max');
            const min = slider.getAttribute('min');
            const _percentage = ((slider.value - min) / (max - min)) * 100;
            slider.style.backgroundImage =
                `-webkit-gradient(linear, left top, right top, ` + `color-stop(${_percentage / 100}, #a0a0a1), color-stop(${_percentage / 100}, #55575a))`;
        });
    });
</script>

<div class="link-slider-percentage" bind:this={container}>
    <Slider value={value} {min} {max} step={1} />
    <Percentage value={`${value}%`} {min} {max} />
</div>

<style>
    .link-slider-percentage {
        height: fit-content;
        width: fit-content;
    }
</style>
