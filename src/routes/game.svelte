<script lang="ts">
    import SettingsGroup from '../components/layout/SettingsGroup.svelte';
    import Setting from '../components/layout/Setting.svelte';
    import SettingSeparator from '../components/layout/SettingSeparator.svelte';

    import LinkedSliderAndNumberr from '../components/customInputs/LinkedSliderAndNumber.svelte';
    import Select from '../components/customInputs/Select.svelte';
    import ExternalLink from '../components/customInputs/ExternalLink.svelte';
</script>

<SettingsGroup id="game" title="Game">
    <Setting name="Enable Game Instructor Messages">
        <Select
            settingInfos={{ menu: 'game', submenu: 'game', settingName: 'enable_game_instructor_messages' }}
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

    <Setting name="Max Acceptable Matchmaking Ping">
        <LinkedSliderAndNumberr settingInfos={{ menu: 'game', submenu: 'game', settingName: 'max_acceptable_matchmaking_ping' }} min={25} max={350} />
    </Setting>

    <SettingSeparator />

    <Setting name="Max Acceptable Game Traffic Bandwidth">
        <Select
            settingInfos={{ menu: 'game', submenu: 'game', settingName: 'max_acceptable_game_traffic_bandwidth' }}
            options={[
                {
                    name: 'Extremely restricted',
                    value: '24576'
                },
                {
                    name: 'Below 384 kbps',
                    value: '49152'
                },
                {
                    name: 'Below 512 kbps',
                    value: '65536'
                },
                {
                    name: 'Below 768 kbps',
                    value: '98304'
                },
                {
                    name: 'Below 1.0 Mbps',
                    value: '131072'
                },
                {
                    name: 'Up to 1.5 Mbps',
                    value: '196608'
                },
                {
                    name: 'Up to 2.0 Mbps',
                    value: '262144'
                },
                {
                    name: 'Up to 2.5 Mbps',
                    value: '327680'
                },
                {
                    name: '3 Mbps',
                    value: '393216'
                },
                {
                    name: '4 Mbps',
                    value: '524288'
                },
                {
                    name: 'Unrestricted',
                    value: '786432'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Community Notification Location">
        <Select
            settingInfos={{ menu: 'game', submenu: 'game', settingName: 'community_notification_location' }}
            options={[
                {
                    name: 'Top Left',
                    value: 'topleft'
                },
                {
                    name: 'Bottom Left',
                    value: 'bottomleft'
                },
                {
                    name: 'Bottom Right',
                    value: 'bottomright'
                },
                {
                    name: 'Top Right',
                    value: 'topright'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Enable Developer Console (~)">
        <Select
            settingInfos={{ menu: 'game', submenu: 'game', settingName: 'enable_developer_console' }}
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
</SettingsGroup>

<SettingsGroup id="hud" title="Hud">
    <Setting name="Friendly Fire Reticle Warning">
        <Select
            settingInfos={{ menu: 'game', submenu: 'hud', settingName: 'friendly_fire_reticle_warning' }}
            options={[
                {
                    name: 'Always Off',
                    value: '0'
                },
                {
                    name: 'Only on Default Crosshair',
                    value: '1'
                },
                {
                    name: 'Always On',
                    value: '2'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="HUD Scale">
        <LinkedSliderAndNumberr settingInfos={{ menu: 'game', submenu: 'hud', settingName: 'hud_scale' }} step={0.01} min={0.5} max={0.95} />
    </Setting>

    <SettingSeparator />

    <Setting name="HUD Color">
        <Select
            settingInfos={{ menu: 'game', submenu: 'hud', settingName: 'hud_color' }}
            options={[
                {
                    name: 'Default',
                    value: '0'
                },
                {
                    name: 'White',
                    value: '1'
                },
                {
                    name: 'Light Blue',
                    value: '2'
                },
                {
                    name: 'Blue',
                    value: '3'
                },
                {
                    name: 'Purple',
                    value: '4'
                },
                {
                    name: 'Pink',
                    value: '10'
                },
                {
                    name: 'Red',
                    value: '5'
                },
                {
                    name: 'Orange',
                    value: '6'
                },
                {
                    name: 'Yellow',
                    value: '7'
                },
                {
                    name: 'Green',
                    value: '8'
                },
                {
                    name: 'Aqua',
                    value: '9'
                },
                {
                    name: 'Classic',
                    value: '11'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="HUD Background Alpha">
        <LinkedSliderAndNumberr settingInfos={{ menu: 'game', submenu: 'hud', settingName: 'hud_background_alpha' }} step={0.01} min={0.0} max={1.0} />
    </Setting>

    <SettingSeparator />

    <Setting name="Health/Ammo Style">
        <Select
            settingInfos={{ menu: 'game', submenu: 'hud', settingName: 'health_ammo_style' }}
            options={[
                {
                    name: 'Default',
                    value: '0'
                },
                {
                    name: 'Simple',
                    value: '1'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Bomb Hud Position">
        <Select
            settingInfos={{ menu: 'game', submenu: 'hud', settingName: 'bomb_hud_position' }}
            options={[
                {
                    name: 'Show In Inventory',
                    value: '0'
                },
                {
                    name: 'Show Under Radar',
                    value: '1'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Mini-Scoreboard Position">
        <Select
            settingInfos={{ menu: 'game', submenu: 'hud', settingName: 'mini_scoreboard_position' }}
            options={[
                {
                    name: 'Top of Screen',
                    value: '0'
                },
                {
                    name: 'Bottom of Screen',
                    value: '1'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Mini-Scoreboard Style">
        <Select
            settingInfos={{ menu: 'game', submenu: 'hud', settingName: 'mini_scoreboard_style' }}
            options={[
                {
                    name: 'Show Avatars',
                    value: '0'
                },
                {
                    name: 'Just Show Player Count',
                    value: '1'
                }
            ]}
        />
    </Setting>
</SettingsGroup>

<SettingsGroup id="team" title="Team">
    <Setting name="Display Team Tags In Death Notices">
        <Select
            settingInfos={{ menu: 'game', submenu: 'team', settingName: 'display_team_tags_in_death_notices' }}
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

    <Setting name="Show Team Positions In HUD">
        <Select
            settingInfos={{ menu: 'game', submenu: 'team', settingName: 'show_team_positions_in_hud' }}
            options={[
                {
                    name: 'Show Location and Equipment',
                    value: '2'
                },
                {
                    name: 'Show Location',
                    value: '1'
                },
                {
                    name: 'Off',
                    value: '0'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Show Teammate Colors in Competitive">
        <Select
            settingInfos={{ menu: 'game', submenu: 'team', settingName: 'show_teammate_colors_in_competitive' }}
            options={[
                {
                    name: 'Show Colors',
                    value: '1'
                },
                {
                    name: 'Colors and Letters',
                    value: '2'
                },
                {
                    name: 'No',
                    value: '0'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Friends Lobby Default Permissions">
        <Select
            settingInfos={{ menu: 'game', submenu: 'team', settingName: 'friends_lobby_default_permissions' }}
            options={[
                {
                    name: 'Friends Need Invites',
                    value: '0'
                },
                {
                    name: 'All Friends Can Join',
                    value: '1'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Looking to Play when CS:GO Starts">
        <Select
            settingInfos={{ menu: 'game', submenu: 'team', settingName: 'looking_to_play_when_csgo_starts' }}
            options={[
                {
                    name: 'Disabled',
                    value: '0'
                },
                {
                    name: 'Remember Last State',
                    value: '1'
                },
                {
                    name: 'Automatic',
                    value: '2'
                }
            ]}
        />
    </Setting>
</SettingsGroup>

<SettingsGroup id="communication" title="Communication">
    <Setting name="Player Pings">
        <Select
            settingInfos={{ menu: 'game', submenu: 'communication', settingName: 'player_pings' }}
            options={[
                {
                    name: 'Display and Play Sound',
                    value: '0'
                },
                {
                    name: 'Display Without Sound',
                    value: '1'
                },
                {
                    name: 'Disabled',
                    value: '2'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Mute Enemy Team">
        <Select
            settingInfos={{ menu: 'game', submenu: 'communication', settingName: 'mute_enemy_team' }}
            options={[
                {
                    name: 'No',
                    value: '0'
                },
                {
                    name: 'Yes',
                    value: '1'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Mute All But Friends">
        <Select
            settingInfos={{ menu: 'game', submenu: 'communication', settingName: 'mute_all_but_friends' }}
            options={[
                {
                    name: 'No',
                    value: '0'
                },
                {
                    name: 'Only in non-competitive modes',
                    value: '1'
                },
                {
                    name: 'Always',
                    value: '2'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Text Filtering">
        <ExternalLink name="Account Preferences" href="https://store.steampowered.com/account/preferences#CommunityContentPreferences" />
    </Setting>

    <SettingSeparator />

    <Setting name="Hide Avatar Images">
        <Select
            settingInfos={{ menu: 'game', submenu: 'communication', settingName: 'hide_avatar_images' }}
            options={[
                {
                    name: 'Show All',
                    value: '0'
                },
                {
                    name: 'Hide all',
                    value: '1'
                },
                {
                    name: 'Show Only Friends',
                    value: '2'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Clean Player Names">
        <Select
            settingInfos={{ menu: 'game', submenu: 'communication', settingName: 'clean_player_names' }}
            options={[
                {
                    name: 'No',
                    value: '0'
                },
                {
                    name: 'Yes',
                    value: '1'
                }
            ]}
        />
    </Setting>
</SettingsGroup>

<SettingsGroup id="spectator-scoreboard" title="Spectator / Scoreboard">
    <Setting name="Spectator/Map Vote Number Selection Method">
        <Select
            settingInfos={{ menu: 'game', submenu: 'spectator_scoreboard', settingName: 'spectator_map_vote_number_selection_method' }}
            options={[
                {
                    name: 'Use Number Keys',
                    value: '1'
                },
                {
                    name: 'Use Weapon Slots',
                    value: '0'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Spectator Mouse Enable / End of Match Scoreboard Toggle">
        <Select
            settingInfos={{ menu: 'game', submenu: 'spectator_scoreboard', settingName: 'spectator_mouse_enable_end_of_match_scoreboard_toggle' }}
            options={[
                {
                    name: 'Secondary Fire',
                    value: '+attack2'
                },
                {
                    name: 'Jump',
                    value: '+jump'
                },
                {
                    name: 'Duck',
                    value: '+duck'
                },
                {
                    name: 'Drop Weapon',
                    value: 'drop'
                },
                {
                    name: 'Last Weapon Used',
                    value: 'lastinv'
                },
                {
                    name: 'Radio Message',
                    value: 'radio'
                },
                {
                    name: 'Use',
                    value: '+use'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Survivors Always On">
        <Select
            settingInfos={{ menu: 'game', submenu: 'spectator_scoreboard', settingName: 'survivors_always_on' }}
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

    <Setting name="Smooth Spectator Camera">
        <Select
            settingInfos={{ menu: 'game', submenu: 'spectator_scoreboard', settingName: 'smooth_spectator_camera' }}
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

    <Setting name="Follow Grenade Key">
        <Select
            settingInfos={{ menu: 'game', submenu: 'spectator_scoreboard', settingName: 'follow_grenade_key' }}
            options={[
                {
                    name: 'Left Alt',
                    value: '0'
                },
                {
                    name: 'Left Shift',
                    value: '1'
                },
                {
                    name: 'Reload Key',
                    value: '2'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Automatic Killer Replay">
        <Select
            settingInfos={{ menu: 'game', submenu: 'spectator_scoreboard', settingName: 'automatic_killer_replay' }}
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
</SettingsGroup>

<SettingsGroup id="item" title="Item">
    <Setting name="Quick Graffiti (Apply With Key Release)">
        <Select
            settingInfos={{ menu: 'game', submenu: 'item', settingName: 'quick_graffiti_apply_with_key_release' }}
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

    <Setting name="Switch Weapon on Pick Up">
        <Select
            settingInfos={{ menu: 'game', submenu: 'item', settingName: 'switch_weapon_on_pick_up' }}
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

    <Setting name="Delay sniper rifle un-scope after shot">
        <Select
            settingInfos={{ menu: 'game', submenu: 'item', settingName: 'delay_sniper_rifle_un_scope_after_shot' }}
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

    <Setting name="Viewmodel Position">
        <Select
            settingInfos={{ menu: 'game', submenu: 'item', settingName: 'viewmodel_position' }}
            options={[
                {
                    name: 'Desktop',
                    value: '1'
                },
                {
                    name: 'Couch',
                    value: '2'
                },
                {
                    name: 'Classic',
                    value: '3'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Always Show Inventory">
        <Select
            settingInfos={{ menu: 'game', submenu: 'item', settingName: 'always_show_inventory' }}
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

    <Setting name="Close Buy Menu After Purchase">
        <Select
            settingInfos={{ menu: 'game', submenu: 'item', settingName: 'close_buy_menu_after_purchase' }}
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

    <Setting name="Open Buy Menu With Use Key">
        <Select
            settingInfos={{ menu: 'game', submenu: 'item', settingName: 'open_buy_menu_with_use_key' }}
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

    <Setting name="Buy Menu Starting Mouse Position">
        <Select
            settingInfos={{ menu: 'game', submenu: 'item', settingName: 'buy_menu_starting_mouse_position' }}
            options={[
                {
                    name: 'Radial Buy Wheel Center',
                    value: '0'
                },
                {
                    name: 'Crosshair Position',
                    value: '1'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Buy Menu Number Keys">
        <Select
            settingInfos={{ menu: 'game', submenu: 'item', settingName: 'buy_menu_number_keys' }}
            options={[
                {
                    name: 'Number Keys Buy Items',
                    value: '0'
                },
                {
                    name: 'Ignored, Handled By Game',
                    value: '1'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Buy Menu Donation Key">
        <Select
            settingInfos={{ menu: 'game', submenu: 'item', settingName: 'buy_menu_donation_key' }}
            options={[
                {
                    name: 'Left Control',
                    value: '0'
                },
                {
                    name: 'Left Alt',
                    value: '1'
                },
                {
                    name: 'Left Shift',
                    value: '2'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Last Weapon on Radial Weapon Tap">
        <Select
            settingInfos={{ menu: 'game', submenu: 'item', settingName: 'last_weapon_on_radial_weapon_tap' }}
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
</SettingsGroup>

<SettingsGroup id="radar-tablet" title="Radar / Tablet">
    <Setting name="Tablet Map Orientation">
        <Select
            settingInfos={{ menu: 'game', submenu: 'radar_tablet', settingName: 'tablet_map_orientation' }}
            options={[
                {
                    name: 'Center Around The Player',
                    value: '0'
                },
                {
                    name: 'Show Entire Map, Rotating',
                    value: '1'
                },
                {
                    name: 'Fixed Orientation, North Up',
                    value: '2'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Radar Centers The Player">
        <Select
            settingInfos={{ menu: 'game', submenu: 'radar_tablet', settingName: 'radar_centers_the_player' }}
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

    <Setting name="Radar Is Rotating">
        <Select
            settingInfos={{ menu: 'game', submenu: 'radar_tablet', settingName: 'radar_is_rotating' }}
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

    <Setting name="Radar Hud Size">
        <LinkedSliderAndNumberr settingInfos={{ menu: 'game', submenu: 'radar_tablet', settingName: 'radar_hud_size' }} step={0.01} min={0.8} max={1.3} />
    </Setting>

    <SettingSeparator />

    <Setting name="Radar Map Zoom">
        <LinkedSliderAndNumberr settingInfos={{ menu: 'game', submenu: 'radar_tablet', settingName: 'radar_map_zoom' }} step={0.01} min={0.4} max={1.0} />
    </Setting>

    <SettingSeparator />

    <Setting name="Toggle Shape With Scoreboard">
        <Select
            settingInfos={{ menu: 'game', submenu: 'radar_tablet', settingName: 'toggle_shape_with_scoreboard' }}
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
</SettingsGroup>

<SettingsGroup id="crosshair" title="Crosshair">
    <Setting name="Deployed Weapon Gap">
        <Select
            settingInfos={{ menu: 'game', submenu: 'crosshair', settingName: 'deployed_weapon_gap' }}
            options={[
                {
                    name: 'No',
                    value: '0'
                },
                {
                    name: 'Yes',
                    value: '1'
                }
            ]}
        />
    </Setting>

    <SettingSeparator />

    <Setting name="Show Player Crosshairs">
        <Select
            settingInfos={{ menu: 'game', submenu: 'crosshair', settingName: 'show_player_crosshairs' }}
            options={[
                {
                    name: 'No',
                    value: '0'
                },
                {
                    name: 'Friends and Party',
                    value: '1'
                },
                {
                    name: 'Everyone',
                    value: '2'
                }
            ]}
        />
    </Setting>
</SettingsGroup>

<SettingsGroup id="twitch-tv" title="Twitch.tv">
    <Setting name="CS:GO Profile Sharing">
        <Select
            settingInfos={{ menu: 'game', submenu: 'twitch_tv', settingName: 'csgo_profile_sharing' }}
            options={[
                {
                    name: 'Use my Steam Profile Status',
                    value: '1'
                },
                {
                    name: 'Always Shared',
                    value: '3'
                },
                {
                    name: 'Disabled',
                    value: '2'
                }
            ]}
        />
    </Setting>
</SettingsGroup>
