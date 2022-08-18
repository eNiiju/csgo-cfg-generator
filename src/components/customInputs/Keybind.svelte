<script lang="ts">
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import type { SettingInfos } from 'src/types';
    import { getSettingValue, setSettingValue } from '../../stores';

    export let settingInfos: SettingInfos;

    let value = getSettingValue(settingInfos);
    let inputText, crossIcon;

    function handleInputTextFocus() {
        crossIcon.classList.add('active');
    }

    function handleInput() {
        // Set new value
        setSettingValue(settingInfos, this.value);
        console.log(getSettingValue(settingInfos));
    }

    onMount(() => {
        crossIcon.addEventListener('mousedown', () => {
            // Set new value
            setSettingValue(settingInfos, '');

            inputText.value = '';
        });

        inputText.addEventListener('focusout', () => {
            crossIcon.classList.remove('active');
        });
    });
</script>

<div class="csgo-keybind">
    <input type="text" {value} bind:this={inputText} on:focus={handleInputTextFocus} on:input={handleInput} />
    <img bind:this={crossIcon} src={`${base}/images/icons/cross-icon.svg`} alt="Cross icon" class="noselect nodrag" />
</div>

<style>
    .csgo-keybind {
        position: relative;
    }

    .csgo-keybind > input[type='text'] {
        height: 48px;
        width: 224px;
        border-radius: 2px;
        background-color: rgba(0, 0, 0, 0.1);
        border: 0;
        outline: none;
        color: rgba(255, 255, 255, 0.5);
        text-align: center;
        font-size: 2rem;
        font-family: Rajdhani, Helvetica, Arial, sans-serif;
        font-weight: 400;
        letter-spacing: 1px;
        text-transform: uppercase;
    }

    .csgo-keybind > input[type='text']::selection {
        color: #7e838a;
        background-color: #183443;
    }

    .csgo-keybind > img {
        display: none;
        position: absolute;
        height: 18px;
        width: 18px;
        top: 5px;
        right: 5px;
    }

    .csgo-keybind > img:hover {
        opacity: 0.5;
    }

    .csgo-keybind > input[type='text']:not(:focus-visible):hover {
        color: #fff;
    }

    :global(.csgo-keybind > img.active) {
        display: block !important;
    }

    .csgo-keybind > input[type='text']:focus-visible {
        width: 222px;
        height: 46px;
        border-radius: 4px;
        border: 1px solid #fff;
        animation: blinkingBackground 1.5s infinite;
    }

    @keyframes blinkingBackground {
        from {
            background-color: rgba(0, 0, 0, 0.1);
        }
        50% {
            background-color: rgba(0, 0, 0, 0.6);
        }
        to {
            background-color: rgba(0, 0, 0, 0.1);
        }
    }
</style>
