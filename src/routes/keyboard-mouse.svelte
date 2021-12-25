<script lang="ts">
    import SettingsGroup from '../components/layout/SettingsGroup.svelte';
    import Setting from '../components/layout/Setting.svelte';
    import SettingSeparator from '../components/layout/SettingSeparator.svelte';

    import LinkedSliderAndNumberr from '../components/customInputs/LinkedSliderAndNumber.svelte';
    import Select from '../components/customInputs/Select.svelte';
    import Keybind from '../components/customInputs/Keybind.svelte';
</script>

<SettingsGroup id="keyboard-mouse-settings" title="Keyboard & Mouse Settings">
    <Setting name="Duck Mode">
        <Select
            settingInfos={{ menu: 'keyboard_mouse', submenu: 'keyboard_mouse_settings', settingName: 'duck_mode' }}
            options={[
                {
                    name: 'Hold',
                    value: '0'
                },
                {
                    name: 'Toggle',
                    value: '1'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Walk Mode">
        <Select
            settingInfos={{ menu: 'keyboard_mouse', submenu: 'keyboard_mouse_settings', settingName: 'walk_mode' }}
            options={[
                {
                    name: 'Hold',
                    value: '0'
                },
                {
                    name: 'Toggle',
                    value: '1'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Mouse Sensitivity">
        <LinkedSliderAndNumberr
            settingInfos={{ menu: 'keyboard_mouse', submenu: 'keyboard_mouse_settings', settingName: 'mouse_sensitivity' }}
            step={0.01}
            min={0.05}
            max={8.0}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Zoom Sensitivity">
        <LinkedSliderAndNumberr
            settingInfos={{ menu: 'keyboard_mouse', submenu: 'keyboard_mouse_settings', settingName: 'zoom_sensitivity' }}
            step={0.01}
            min={0.1}
            max={1.5}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Raw Input">
        <Select
            settingInfos={{ menu: 'keyboard_mouse', submenu: 'keyboard_mouse_settings', settingName: 'raw_input' }}
            options={[
                {
                    name: 'Off',
                    value: '0'
                },
                {
                    name: 'On',
                    value: '1'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Mouse Acceleration">
        <Select
            settingInfos={{ menu: 'keyboard_mouse', submenu: 'keyboard_mouse_settings', settingName: 'mouse_acceleration' }}
            options={[
                {
                    name: 'Off',
                    value: '0'
                },
                {
                    name: 'On',
                    value: '1'
                }
            ]}
        />
    </Setting>
</SettingsGroup>

<SettingsGroup id="movement-keys" title="Movement Keys">
    <Setting name="Toggle Inventory Display">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'movement_keys', settingName: 'toggle_inventory_display' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Move Forward">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'movement_keys', settingName: 'move_forward' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Move Backward">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'movement_keys', settingName: 'move_backward' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Move Left (strafe)">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'movement_keys', settingName: 'move_left_strafe' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Move Right (strafe)">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'movement_keys', settingName: 'move_right_strafe' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Walk">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'movement_keys', settingName: 'walk' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Jump">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'movement_keys', settingName: 'jump' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Duck">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'movement_keys', settingName: 'duck' }} />
    </Setting>
</SettingsGroup>

<SettingsGroup id="weapon-keys" title="Weapon Keys">
    <Setting name="Use">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'use' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Fire">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'fire' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Secondary Fire">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'secondary_fire' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Reload">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'reload' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Radial Weapon Menu">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'radial_weapon_menu' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Select Previous Weapon">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'select_previous_weapon' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Select Next Weapon">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'select_next_weapon' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Last Weapon Used">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'last_weapon_used' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Drop Weapon">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'drop_weapon' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Inspect Weapon">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'inspect_weapon' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Buy Menu">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'buy_menu' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Autobuy">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'autobuy' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Rebuy">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'rebuy' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Primary Weapon">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'primary_weapon' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Secondary Weapon">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'secondary_weapon' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Melee Weapons">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'melee_weapons' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Cycle Grenades">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'cycle_grenades' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Explosives & Traps">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'explosives_traps' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="HE Grenade">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'he_grenade' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Flashbang">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'flashbang' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Smoke Grenade">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'smoke_grenade' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Decoy Grenade">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'decoy_grenade' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Molotov Grenade">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'molotov_grenade' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Zeus x27">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'zeus_x27' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Healthshot">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'healthshot' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Utility Items">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'utility_items' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Graffiti Menu">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'weapon_keys', settingName: 'graffiti_menu' }} />
    </Setting>
</SettingsGroup>

<SettingsGroup id="ui-keys" title="UI Keys">
    <Setting name="Scoreboard">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'ui_keys', settingName: 'scoreboard' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Show Team Equipment">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'ui_keys', settingName: 'show_team_equipment' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Call Vote">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'ui_keys', settingName: 'call_vote' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Choose Team">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'ui_keys', settingName: 'choose_team' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Toggle Console">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'ui_keys', settingName: 'toggle_console' }} />
    </Setting>
</SettingsGroup>

<SettingsGroup id="communication-options" title="Communication Options">
    <Setting name="Player Ping">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'communication_options', settingName: 'player_ping' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Radio Message">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'communication_options', settingName: 'radio_message' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Command Radio Message">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'communication_options', settingName: 'command_radio_message' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Standard Radio Message">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'communication_options', settingName: 'standard_radio_message' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Report Radio Message">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'communication_options', settingName: 'report_radio_message' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Team Message">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'communication_options', settingName: 'team_message' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Chat Message">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'communication_options', settingName: 'chat_message' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Use Mic">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'communication_options', settingName: 'use_mic' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Temporarily Disable Incoming Chat">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'communication_options', settingName: 'temporarily_disable_incoming_chat' }} />
    </Setting>
</SettingsGroup>

<SettingsGroup id="chat-wheel-keys" title="Chat Wheel Keys">
    <Setting name="Chat Wheel 1">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'chat_wheel_keys', settingName: 'chat_wheel_1' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Chat Wheel 2">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'chat_wheel_keys', settingName: 'chat_wheel_2' }} />
    </Setting>

    <SettingSeparator />

    <Setting name="Chat Wheel 3">
        <Keybind settingInfos={{ menu: 'keyboard_mouse', submenu: 'chat_wheel_keys', settingName: 'chat_wheel_3' }} />
    </Setting>
</SettingsGroup>
