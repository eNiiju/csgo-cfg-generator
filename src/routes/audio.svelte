<script lang="ts">
    import SettingsGroup from '../components/layout/SettingsGroup.svelte';
    import Setting from '../components/layout/Setting.svelte';
    import SettingSeparator from '../components/layout/SettingSeparator.svelte';

    import LinkedSliderAndPercentage from '../components/customInputs/LinkedSliderAndPercentage.svelte';
    import Select from '../components/customInputs/Select.svelte';
</script>

<SettingsGroup id="audio" title="Audio">
    <Setting name="Master Volume">
        <LinkedSliderAndPercentage settingInfos={{ menu: 'audio', submenu: 'audio', settingName: 'master_volume' }} min={0} max={100} />
    </Setting>

    <SettingSeparator />

    <Setting name="Music Volume In Steam Overlay">
        <LinkedSliderAndPercentage settingInfos={{ menu: 'audio', submenu: 'audio', settingName: 'music_volume_in_steam_overlay' }} min={0} max={100} />
    </Setting>

    <SettingSeparator />

    <Setting name="GOTV Caster Volume">
        <LinkedSliderAndPercentage settingInfos={{ menu: 'audio', submenu: 'audio', settingName: 'gotv_caster_volume' }} min={0} max={100} />
    </Setting>

    <SettingSeparator />

    <Setting name="Audio Output Configuration">
        <Select
            settingInfos={{ menu: 'audio', submenu: 'audio', settingName: 'audio_output_configuration' }}
            options={[
                {
                    name: 'Stereo Headphones',
                    value: '0'
                },
                {
                    name: 'Stereo Speakers',
                    value: '2'
                },
                {
                    name: 'Quad Surround Sound',
                    value: '4'
                },
                {
                    name: '5.1 Surround Sound',
                    value: '5'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Advanced 3D Audio Processing">
        <Select
            settingInfos={{ menu: 'audio', submenu: 'audio', settingName: 'advanced_3d_audio_processing' }}
            options={[
                {
                    name: 'Yes',
                    value: '0'
                },
                {
                    name: 'No',
                    value: '1'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Enable Voice">
        <Select
            settingInfos={{ menu: 'audio', submenu: 'audio', settingName: 'enable_voice' }}
            options={[
                {
                    name: 'Disabled',
                    value: '0'
                },
                {
                    name: 'Press to Use Mic',
                    value: '1'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="VOIP Volume">
        <LinkedSliderAndPercentage settingInfos={{ menu: 'audio', submenu: 'audio', settingName: 'voip_volume' }} min={0} max={100} />
    </Setting>

    <SettingSeparator />

    <Setting name="VOIP Positional">
        <Select
            settingInfos={{ menu: 'audio', submenu: 'audio', settingName: 'voip_positional' }}
            options={[
                {
                    name: 'Yes',
                    value: '1'
                },
                {
                    name: 'No',
                    value: '0'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Play Audio When Game In Background">
        <Select
            settingInfos={{ menu: 'audio', submenu: 'audio', settingName: 'play_audio_when_game_in_background' }}
            options={[
                {
                    name: 'Yes',
                    value: '0'
                },
                {
                    name: 'No',
                    value: '1'
                }
            ]}
        />
    </Setting>
</SettingsGroup>

<SettingsGroup id="music" title="Music">
    <Setting name="Main Menu Volume">
        <LinkedSliderAndPercentage settingInfos={{ menu: 'audio', submenu: 'music', settingName: 'main_menu_volume' }} min={0} max={100} />
    </Setting>

    <SettingSeparator />

    <Setting name="Round Start Volume">
        <LinkedSliderAndPercentage settingInfos={{ menu: 'audio', submenu: 'music', settingName: 'round_start_volume' }} min={0} max={100} />
    </Setting>

    <SettingSeparator />

    <Setting name="Round End Volume">
        <LinkedSliderAndPercentage settingInfos={{ menu: 'audio', submenu: 'music', settingName: 'round_end_volume' }} min={0} max={100} />
    </Setting>

    <SettingSeparator />

    <Setting name="Bomb/Hostage Volume">
        <LinkedSliderAndPercentage settingInfos={{ menu: 'audio', submenu: 'music', settingName: 'bomb_hostage_volume' }} min={0} max={100} />
    </Setting>

    <SettingSeparator />

    <Setting name="Ten Second Warning Volume">
        <LinkedSliderAndPercentage settingInfos={{ menu: 'audio', submenu: 'music', settingName: 'ten_second_warning_volume' }} min={0} max={100} />
    </Setting>

    <SettingSeparator />

    <Setting name="Death Camera Volume">
        <LinkedSliderAndPercentage settingInfos={{ menu: 'audio', submenu: 'music', settingName: 'death_camera_volume' }} min={0} max={100} />
    </Setting>

    <SettingSeparator />

    <Setting name="MVP Volume">
        <LinkedSliderAndPercentage settingInfos={{ menu: 'audio', submenu: 'music', settingName: 'mvp_volume' }} min={0} max={100} />
    </Setting>

    <SettingSeparator />

    <Setting name="Mute MVP Music when players on both teams are alive">
        <Select
            settingInfos={{ menu: 'audio', submenu: 'music', settingName: 'mute_mvp_music_when_players_on_both_teams_are_alive' }}
            options={[
                {
                    name: 'Yes',
                    value: '1'
                },
                {
                    name: 'No',
                    value: '0'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Danger Zone Music Volume">
        <LinkedSliderAndPercentage settingInfos={{ menu: 'audio', submenu: 'music', settingName: 'danger_zone_music_volume' }} min={0} max={100} />
    </Setting>
</SettingsGroup>
