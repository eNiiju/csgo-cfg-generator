<script lang="ts">
    import { base } from '$app/paths';
    import SettingsGroup from '../components/layout/SettingsGroup.svelte';
    import Setting from '../components/layout/Setting.svelte';
    import SettingSeparator from '../components/layout/SettingSeparator.svelte';

    import LinkedSliderAndPercentage from '../components/customInputs/LinkedSliderAndPercentage.svelte';
    import Select from '../components/customInputs/Select.svelte';

    function handleBackgroundChange(e) {
        const value = e.detail.value;
        let backgroundName: string;

        if (value === 'random') {
            const backgroundNames = ['ancient', 'anubis', 'blacksite', 'cbble', 'frostbite', 'nuke', 'sirocco_night', 'vertigo'];
            backgroundName = backgroundNames[Math.floor(Math.random() * backgroundNames.length)];
        } else backgroundName = value;

        document.body.style.backgroundImage = `url(${base}/images/backgrounds/background_${backgroundName}.jpg)`;
    }
</script>

<SettingsGroup id="video" title="Video">
    <Setting name="Main Menu Background Scenery">
        <Select
            on:valueChange={handleBackgroundChange}
            settingInfos={{ menu: 'video', submenu: 'video', settingName: 'main_menu_background_scenery' }}
            options={[
                {
                    name: 'Ancient',
                    value: 'ancient'
                },
                {
                    name: 'Anubis',
                    value: 'anubis'
                },
                {
                    name: 'Blacksite',
                    value: 'blacksite'
                },
                {
                    name: 'Cobblestone',
                    value: 'cbble'
                },
                {
                    name: 'Frostbite',
                    value: 'frostbite'
                },
                {
                    name: 'Nuke',
                    value: 'nuke'
                },
                {
                    name: 'Phoenix Facility',
                    value: 'sirocco_night'
                },
                {
                    name: 'Vertigo',
                    value: 'vertigo'
                },
                {
                    name: 'Random',
                    value: 'random'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Color Mode">
        <Select
            settingInfos={{ menu: 'video', submenu: 'video', settingName: 'color_mode' }}
            options={[
                {
                    name: 'Computer Monitor',
                    value: '0'
                },
                {
                    name: 'Television',
                    value: '1'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Brightness">
        <LinkedSliderAndPercentage settingInfos={{ menu: 'video', submenu: 'video', settingName: 'brightness' }} min={80} max={130} />
    </Setting>

    <SettingSeparator />

    <Setting name="Laptop Power Savings">
        <Select
            settingInfos={{ menu: 'video', submenu: 'video', settingName: 'laptop_power_savings' }}
            options={[
                {
                    name: 'Disabled',
                    value: '0'
                },
                {
                    name: 'Enabled',
                    value: '1'
                }
            ]}
        />
    </Setting>
</SettingsGroup>

<SettingsGroup id="advanced-video" title="Advanced Video">
    <Setting name="Boost Player Contrast">
        <Select
            settingInfos={{ menu: 'video', submenu: 'advanced_video', settingName: 'boost_player_contrast' }}
            options={[
                {
                    name: 'Disabled',
                    value: '0'
                },
                {
                    name: 'Enabled',
                    value: '1'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Triple-Monitor Mode">
        <Select
            settingInfos={{ menu: 'video', submenu: 'advanced_video', settingName: 'triple_monitor_mode' }}
            options={[
                {
                    name: 'Disabled',
                    value: '0'
                },
                {
                    name: 'Enabled',
                    value: '1'
                }
            ]}
        />
    </Setting>
</SettingsGroup>
