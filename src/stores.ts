import { writable } from 'svelte/store';
import type { SettingInfos } from 'src/types';

const submenus = {
    video: [
        {
            name: 'Video',
            path: 'video'
        },
        {
            name: 'Advanced Video',
            path: 'advanced-video'
        }
        // {
        //     name: 'HUD Edge Positions',
        //     path: 'hud-edge-positions'
        // }
    ],
    audio: [
        {
            name: 'Audio',
            path: 'audio'
        },
        {
            name: 'Music',
            path: 'music'
        }
    ],
    game: [
        {
            name: 'Game',
            path: 'game'
        },
        {
            name: 'Hud',
            path: 'hud'
        },
        {
            name: 'Team',
            path: 'team'
        },
        {
            name: 'Communication',
            path: 'communication'
        },
        {
            name: 'Spectator / Scoreboard',
            path: 'spectator-scoreboard'
        },
        {
            name: 'Item',
            path: 'item'
        },
        {
            name: 'Radar / Tablet',
            path: 'radar-tablet'
        },
        {
            name: 'Crosshair',
            path: 'crosshair'
        },
        {
            name: 'Twitch.tv',
            path: 'twitch-tv'
        }
    ],
    'keyboard-mouse': [
        {
            name: 'Keyboard & Mouse Settings',
            path: 'keyboard-mouse-settings'
        },
        {
            name: 'Movement Keys',
            path: 'movement-keys'
        },
        {
            name: 'Weapon Keys',
            path: 'weapon-keys'
        },
        {
            name: 'UI Keys',
            path: 'ui-keys'
        },
        {
            name: 'Communication Options',
            path: 'communication-options'
        },
        {
            name: 'Chat Wheel Keys',
            path: 'chat-wheel-keys'
        }
    ]
    // controller: [
    //     {
    //         name: 'Controller',
    //         path: 'controller'
    //     },
    //     {
    //         name: 'Controller Bindings',
    //         path: 'controller-bindings'
    //     }
    // ]
};

const defaultSettings = {
    video: {
        video: {
            main_menu_background_scenery: 'nuke',
            color_mode: '0',
            brightness: '110',
            laptop_power_savings: '0'
        },
        advanced_video: {
            boost_player_contrast: '1',
            triple_monitor_mode: '0'
        }
    },
    audio: {
        audio: {
            master_volume: '100',
            music_volume_in_steam_overlay: '10',
            gotv_caster_volume: '100',
            audio_output_configuration: '0',
            advanced_3d_audio_processing: '0',
            enable_voice: '1',
            voip_volume: '100',
            voip_positional: '0',
            play_audio_when_game_in_background: '0'
        },
        music: {
            main_menu_volume: '100',
            round_start_volume: '100',
            round_end_volume: '100',
            bomb_hostage_volume: '100',
            ten_second_warning_volume: '100',
            death_camera_volume: '100',
            mvp_volume: '100',
            mute_mvp_music_when_players_on_both_teams_are_alive: '0',
            danger_zone_music_volume: '33'
        }
    },
    game: {
        game: {
            enable_game_instructor_messages: '1',
            max_acceptable_matchmaking_ping: '150',
            max_acceptable_game_traffic_bandwidth: '196608',
            community_notification_location: 'topright',
            enable_developer_console: '0'
        },
        hud: {
            friendly_fire_reticle_warning: '1',
            hud_scale: '0.85',
            hud_color: '0',
            hud_background_alpha: '0.5',
            health_ammo_style: '0',
            bomb_hud_position: '1',
            mini_scoreboard_position: '0',
            mini_scoreboard_style: '0'
        },
        team: {
            display_team_tags_in_death_notices: '1',
            show_team_positions_in_hud: '2',
            show_teammate_colors_in_competitive: '1',
            friends_lobby_default_permissions: '1',
            looking_to_play_when_csgo_starts: '1'
        },
        communication: {
            player_pings: '0',
            mute_enemy_team: '0',
            mute_all_but_friends: '0',
            hide_avatar_images: '0',
            clean_player_names: '0'
        },
        spectator_scoreboard: {
            spectator_map_vote_number_selection_method: '1',
            spectator_mouse_enable_end_of_match_scoreboard_toggle: '+attack2',
            survivors_always_on: '0',
            smooth_spectator_camera: '1',
            follow_grenade_key: '0',
            automatic_killer_replay: '1'
        },
        item: {
            quick_graffiti_apply_with_key_release: '1',
            switch_weapon_on_pick_up: '0',
            delay_sniper_rifle_un_scope_after_shot: '0',
            viewmodel_position: '1',
            always_show_inventory: '1',
            close_buy_menu_after_purchase: '0',
            open_buy_menu_with_use_key: '1',
            buy_menu_starting_mouse_position: '0',
            buy_menu_number_keys: '0',
            buy_menu_donation_key: '0',
            last_weapon_on_radial_weapon_tap: '1'
        },
        radar_tablet: {
            tablet_map_orientation: '1',
            radar_centers_the_player: '1',
            radar_is_rotating: '1',
            radar_hud_size: '1.0',
            radar_map_zoom: '0.7',
            toggle_shape_with_scoreboard: '1'
        },
        crosshair: {
            deployed_weapon_gap: '0',
            show_player_crosshairs: '1'
        },
        twitch_tv: {
            csgo_profile_sharing: '1'
        }
    },
    keyboard_mouse: {
        keyboard_mouse_settings: {
            duck_mode: '0',
            walk_mode: '0',
            mouse_sensitivity: '2.50',
            zoom_sensitivity: '1.00',
            raw_input: '1',
            mouse_acceleration: '0'
        },
        movement_keys: {
            toggle_inventory_display: 'i',
            move_forward: 'w',
            move_backward: 's',
            move_left_strafe: 'a',
            move_right_strafe: 'd',
            walk: 'shift',
            jump: 'space',
            duck: 'ctrl'
        },
        weapon_keys: {
            use: 'e',
            fire: 'mouse1',
            secondary_fire: 'mouse2',
            reload: 'r',
            radial_weapon_menu: '',
            select_previous_weapon: 'mwheelup',
            select_next_weapon: 'mwheeldown',
            last_weapon_used: 'q',
            drop_weapon: 'g',
            inspect_weapon: 'f',
            buy_menu: 'b',
            autobuy: 'f3',
            rebuy: 'f4',
            primary_weapon: '1',
            secondary_weapon: '2',
            melee_weapons: '3',
            cycle_grenades: '4',
            explosives_traps: '5',
            he_grenade: '6',
            flashbang: '7',
            smoke_grenade: '8',
            decoy_grenade: '9',
            molotov_grenade: '0',
            zeus_x27: '',
            healthshot: 'x',
            utility_items: '',
            graffiti_menu: 'n'
        },
        ui_keys: {
            scoreboard: 'tab',
            show_team_equipment: 'mouse4',
            call_vote: 'kp_minus',
            choose_team: 'm',
            toggle_console: 'kp_ins'
        },
        communication_options: {
            player_ping: '',
            radio_message: '',
            command_radio_message: '',
            standard_radio_message: '',
            report_radio_message: '',
            team_message: 'u',
            chat_message: 'y',
            use_mic: 'k',
            temporarily_disable_incoming_chat: 'kp_del'
        },
        chat_wheel_keys: {
            chat_wheel_1: '',
            chat_wheel_2: 'z',
            chat_wheel_3: ''
        }
    }
};

export const selectedMenu = writable('');
export const selectedSubmenu = writable('');
export const currentSubmenus = writable([]);

export const selectMenu = (menuPath: string) => {
    selectedMenu.set(menuPath);
    selectedSubmenu.set('');
    currentSubmenus.set(submenus[menuPath]);
};

export const selectSubmenu = (submenuPath: string) => {
    selectedSubmenu.set(submenuPath);
};

export let settings = JSON.parse(JSON.stringify(defaultSettings));

export const getSettingValue = (settingInfos: SettingInfos) => {
    return settings[settingInfos.menu][settingInfos.submenu][settingInfos.settingName];
};

export const setSettingValue = (settingInfos: SettingInfos, value: string) => {
    settings[settingInfos.menu][settingInfos.submenu][settingInfos.settingName] = value;
};
