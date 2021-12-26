import { settings } from '../stores';

export function downloadConfig() {
    const config = `\
// ------------------------------------------------------------------------- //
//                              Initialization                               //
// ------------------------------------------------------------------------- //

// Unbind all keys
unbindall



// ------------------------------------------------------------------------- //
//                               Video - Video                               //
// ------------------------------------------------------------------------- //

// Color Mode
mat_monitorgamma_tv_enabled "${settings.video.video.color_mode}"

// Brightness
mat_monitorgamma "${(-1 / 50) * parseInt(settings.video.video.brightness) + 4.2}"

// Laptop Power Savings
mat_powersavingsmode "${settings.video.video.laptop_power_savings}"



// ------------------------------------------------------------------------- //
//                          Video - Advanced Video                           //
// ------------------------------------------------------------------------- //

// Boost Player Contrast
r_player_visibility_mode "${settings.video.advanced_video.boost_player_contrast}"

// Triple-Monitor Mode
triple_monitor_mode "${settings.video.advanced_video.triple_monitor_mode}"



// ------------------------------------------------------------------------- //
//                               Audio - Audio                               //
// ------------------------------------------------------------------------- //

// Master Volume
volume "${settings.audio.audio.master_volume / 100}"

// Music Volume In Steam Overlay
snd_musicvolume_multiplier_inoverlay "${settings.audio.audio.music_volume_in_steam_overlay / 100}"

// GOTV Caster Volume
voice_caster_scale "${settings.audio.audio.gotv_caster_volume / 100}"

// Audio Output Configuration
snd_surround_speakers "${settings.audio.audio.audio_output_configuration}"

// Advanced 3D Audio Processing
snd_hwcompat "${settings.audio.audio.advanced_3d_audio_processing}"

// Enable Voice
voice_enable "${settings.audio.audio.enable_voice}"

// VOIP Volume
voice_scale "${settings.audio.audio.voip_volume / 100}"

// VOIP Positional
voice_positional "${settings.audio.audio.voip_positional}"

// Play Audio When Game In Background
snd_mute_losefocus "${settings.audio.audio.play_audio_when_game_in_background}"



// ------------------------------------------------------------------------- //
//                               Audio - Music                               //
// ------------------------------------------------------------------------- //

// Main Menu Volume
snd_menumusic_volume "${(settings.audio.music.main_menu_volume * 60) / 10000}"

// Round Start Volume
snd_roundstart_volume "${(settings.audio.music.round_start_volume * 60) / 10000}"

// Round End Volume
snd_roundend_volume "${(settings.audio.music.round_end_volume * 60) / 10000}"

// Bomb/Hostage Volume
snd_mapobjective_volume "${(settings.audio.music.bomb_hostage_volume * 60) / 10000}"

// Ten Second Warning Volume
snd_tensecondwarning_volume "${(settings.audio.music.ten_second_warning_volume * 60) / 10000}"

// Death Camera Volume
snd_deathcamera_volume "${(settings.audio.music.death_camera_volume * 60) / 10000}"

// MVP Volume
snd_mvp_volume "${(settings.audio.music.mvp_volume * 60) / 10000}"

// Mute MVP Music when players on both teams are alive
snd_mute_mvp_music_live_players "${settings.audio.music.mute_mvp_music_when_players_on_both_teams_are_alive}"

// Danger Zone Music Volume
snd_dzmusic_volume "${(settings.audio.music.danger_zone_music_volume * 60) / 10000}"



// ------------------------------------------------------------------------- //
//                                Game - Game                                //
// ------------------------------------------------------------------------- //

// Enable Game Instructor Messages
gameinstructor_enable "${settings.game.game.enable_game_instructor_messages}"

// Max Acceptable Matchmaking Ping
mm_dedicated_search_maxping "${settings.game.game.max_acceptable_matchmaking_ping}"

// Max Acceptable Game Traffic Bandwidth
rate "${settings.game.game.max_acceptable_game_traffic_bandwidth}"

// Community Notification Location
ui_steam_overlay_notification_position "${settings.game.game.community_notification_location}"

// Enable Developer Console (~)
con_enable "${settings.game.game.enable_developer_console}"



// ------------------------------------------------------------------------- //
//                                Game - Hud                                 //
// ------------------------------------------------------------------------- //

// Friendly Fire Reticle Warning
cl_crosshair_friendly_warning "${settings.game.hud.friendly_fire_reticle_warning}"

// HUD Scale
hud_scaling "${settings.game.hud.hud_scale}"

// HUD Color
cl_hud_color "${settings.game.hud.hud_color}"

// HUD Background Alpha
cl_hud_background_alpha "${settings.game.hud.hud_background_alpha}"

// Health/Ammo Style
cl_hud_healthammo_style "${settings.game.hud.health_ammo_style}"

// Bomb Hud Position
cl_hud_bomb_under_radar "${settings.game.hud.bomb_hud_position}"

// Mini-Scoreboard Position
cl_hud_playercount_pos "${settings.game.hud.mini_scoreboard_position}"

// Mini-Scoreboard Style
cl_hud_playercount_showcount "${settings.game.hud.mini_scoreboard_style}"



// ------------------------------------------------------------------------- //
//                                Game - Team                                //
// ------------------------------------------------------------------------- //

// Display Team Tags In Death Notices
cl_show_clan_in_death_notice "${settings.game.team.display_team_tags_in_death_notices}"

// Show Team Positions In HUD
cl_teamid_overhead_mode "${settings.game.team.show_team_positions_in_hud}"

// Show Teammate Colors in Competitive
cl_teammate_colors_show "${settings.game.team.show_teammate_colors_in_competitive}"

// Friends Lobby Default Permissions
lobby_default_privacy_bits2 "${settings.game.team.friends_lobby_default_permissions}"

// Looking to Play when CS:GO Starts
ui_setting_advertiseforhire_auto "${settings.game.team.looking_to_play_when_csgo_starts}"



// ------------------------------------------------------------------------- //
//                           Game - Communication                            //
// ------------------------------------------------------------------------- //

// Player Pings
cl_player_ping_mute "${settings.game.communication.player_pings}"

// Mute Enemy Team
cl_mute_enemy_team "${settings.game.communication.mute_enemy_team}"

// Mute All But Friends
cl_mute_all_but_friends_and_party "${settings.game.communication.mute_all_but_friends}"

// Hide Avatar Images
cl_hide_avatar_images "${settings.game.communication.hide_avatar_images}"

// Clean Player Names
cl_sanitize_player_names "${settings.game.communication.clean_player_names}"



// ------------------------------------------------------------------------- //
//                       Game - Spectator / Scoreboard                       //
// ------------------------------------------------------------------------- //

// Spectator/Map Vote Number Selection Method
spec_usenumberkeys_nobinds "${settings.game.spectator_scoreboard.spectator_map_vote_number_selection_method}"

// Spectator Mouse Enable / End of Match Scoreboard Toggle
cl_scoreboard_mouse_enable_binding "${settings.game.spectator_scoreboard.spectator_mouse_enable_end_of_match_scoreboard_toggle}"

// Survivors Always On
cl_scoreboard_survivors_always_on "${settings.game.spectator_scoreboard.survivors_always_on}"

// Smooth Spectator Camera
cl_obs_interp_enable "${settings.game.spectator_scoreboard.smooth_spectator_camera}"

// Follow Grenade Key 
cl_spec_follow_grenade_key "${settings.game.spectator_scoreboard.follow_grenade_key}"

// Automatic Killer Replay
spec_replay_autostart "${settings.game.spectator_scoreboard.automatic_killer_replay}"



// ------------------------------------------------------------------------- //
//                                Game - Item                                //
// ------------------------------------------------------------------------- //

// Quick Graffiti (Apply With Key Release)
cl_playerspray_auto_apply "${settings.game.item.quick_graffiti_apply_with_key_release}"

// Switch Weapon on Pick Up
cl_autowepswitch "${settings.game.item.switch_weapon_on_pick_up}"

// Delay sniper rifle un-scope after shot
cl_sniper_delay_unscope "${settings.game.item.delay_sniper_rifle_un_scope_after_shot}"

// Viewmodel Position
viewmodel_presetpos "${settings.game.item.viewmodel_position}"

// Always Show Inventory
cl_showloadout "${settings.game.item.always_show_inventory}"

// Close Buy Menu After Purchase
closeonbuy "${settings.game.item.close_buy_menu_after_purchase}"

// Open Buy Menu With Use Key
cl_use_opens_buy_menu "${settings.game.item.open_buy_menu_with_use_key}"

// Buy Menu Starting Mouse Position
cl_buywheel_nomousecentering "${settings.game.item.buy_menu_starting_mouse_position}"

// Buy Menu Number Keys
cl_buywheel_nonumberpurchasing "${settings.game.item.buy_menu_number_keys}"

// Buy Menu Donation Key
cl_buywheel_donate_key "${settings.game.item.buy_menu_donation_key}"

// Last Weapon on Radial Weapon Tap
cl_quickinventory_lastinv "${settings.game.item.last_weapon_on_radial_weapon_tap}"



// ------------------------------------------------------------------------- //
//                           Game - Radar / Tablet                           //
// ------------------------------------------------------------------------- //

// Tablet Map Orientation
cl_tablet_mapmode "${settings.game.radar_tablet.tablet_map_orientation}"

// Radar Centers The Player
cl_radar_always_centered "${settings.game.radar_tablet.radar_centers_the_player}"

// Radar Is Rotating
cl_radar_rotate "${settings.game.radar_tablet.radar_is_rotating}"

// Radar Hud Size
cl_hud_radar_scale "${settings.game.radar_tablet.radar_hud_size}"

// Radar Map Zoom
cl_radar_scale "${settings.game.radar_tablet.radar_map_zoom}"	

// Toggle Shape With Scoreboard
cl_radar_square_with_scoreboard "${settings.game.radar_tablet.toggle_shape_with_scoreboard}"



// ------------------------------------------------------------------------- //
//                             Game - Crosshair                              //
// ------------------------------------------------------------------------- //

// Deployed Weapon Gap
cl_crosshairgap_useweaponvalue "${settings.game.crosshair.deployed_weapon_gap}"

// Show Player Crosshairs
cl_show_observer_crosshair "${settings.game.crosshair.show_player_crosshairs}"



// ------------------------------------------------------------------------- //
//                             Game - Twitch.tv                              //
// ------------------------------------------------------------------------- //

// CS:GO Profile Sharing
cl_accountprivacysetting1 "${settings.game.twitch_tv.csgo_profile_sharing}"



// ------------------------------------------------------------------------- //
//               Keyboard / Mouse - Keyboard & Mouse Settings                //
// ------------------------------------------------------------------------- //

// Duck Mode
option_duck_method "${settings.keyboard_mouse.keyboard_mouse_settings.duck_mode}"

// Walk Mode
option_speed_method "${settings.keyboard_mouse.keyboard_mouse_settings.walk_mode}"

// Mouse Sensitivity
sensitivity "${settings.keyboard_mouse.keyboard_mouse_settings.mouse_sensitivity}"

// Zoom Sensitivity
zoom_sensitivity_ratio_mouse "${settings.keyboard_mouse.keyboard_mouse_settings.zoom_sensitivity}"

// Raw Input
m_rawinput "${settings.keyboard_mouse.keyboard_mouse_settings.raw_input}"

// Mouse Acceleration
m_customaccel "${settings.keyboard_mouse.keyboard_mouse_settings.mouse_acceleration}"



// ------------------------------------------------------------------------- //
//                     Keyboard / Mouse - Movement Keys                      //
// ------------------------------------------------------------------------- //

// Toggle Inventory Display
bind "${settings.keyboard_mouse.movement_keys.toggle_inventory_display}" "show_loadout_toggle"

// Move Forward
bind "${settings.keyboard_mouse.movement_keys.move_forward}" "+forward"

// Move Backward
bind "${settings.keyboard_mouse.movement_keys.move_backward}" "+back"

// Move Left (Strafe)
bind "${settings.keyboard_mouse.movement_keys.move_left_strafe}" "+moveleft"

// Move Right (Strafe)
bind "${settings.keyboard_mouse.movement_keys.move_right_strafe}" "+moveright"

// Walk
bind "${settings.keyboard_mouse.movement_keys.walk}" "+speed"

// Jump
bind "${settings.keyboard_mouse.movement_keys.jump}" "+jump"

// Duck
bind "${settings.keyboard_mouse.movement_keys.duck}" "+duck"



// ------------------------------------------------------------------------- //
//                      Keyboard / Mouse - Weapon Keys                       //
// ------------------------------------------------------------------------- //

// Use
bind "${settings.keyboard_mouse.weapon_keys.use}" "+use"

// Fire
bind "${settings.keyboard_mouse.weapon_keys.fire}" "+attack"

// Secondary Fire
bind "${settings.keyboard_mouse.weapon_keys.secondary_fire}" "+attack2"

// Reload
bind "${settings.keyboard_mouse.weapon_keys.reload}" "+reload"

// Radial Weapon Menu
bind "${settings.keyboard_mouse.weapon_keys.radial_weapon_menu}" "+quickinv"

// Select Previous Weapon
bind "${settings.keyboard_mouse.weapon_keys.select_previous_weapon}" "invprev"

// Select Next Weapon
bind "${settings.keyboard_mouse.weapon_keys.select_next_weapon}" "invnext"

// Last Weapon Used
bind "${settings.keyboard_mouse.weapon_keys.last_weapon_used}" "lastinv"

// Drop Weapon
bind "${settings.keyboard_mouse.weapon_keys.drop_weapon}" "drop"

// Inspect Weapon
bind "${settings.keyboard_mouse.weapon_keys.inspect_weapon}" "+lookatweapon"

// Buy Menu
bind "${settings.keyboard_mouse.weapon_keys.buy_menu}" "buymenu"

// Autobuy
bind "${settings.keyboard_mouse.weapon_keys.autobuy}" "autobuy"

// Rebuy
bind "${settings.keyboard_mouse.weapon_keys.rebuy}" "rebuy"

// Primary Weapon
bind "${settings.keyboard_mouse.weapon_keys.primary_weapon}" "slot1"

// Secondary Weapon
bind "${settings.keyboard_mouse.weapon_keys.secondary_weapon}" "slot2"

// Melee Weapons
bind "${settings.keyboard_mouse.weapon_keys.melee_weapons}" "slot3"

// Cycle Grenades
bind "${settings.keyboard_mouse.weapon_keys.cycle_grenades}" "slot4"

// Explosives & Traps
bind "${settings.keyboard_mouse.weapon_keys.explosives_traps}" "slot5"

// HE Grenade
bind "${settings.keyboard_mouse.weapon_keys.he_grenade}" "slot6"

// Flashbang
bind "${settings.keyboard_mouse.weapon_keys.flashbang}" "slot7"

// Smoke Grenade
bind "${settings.keyboard_mouse.weapon_keys.smoke_grenade}" "slot8"

// Decoy Grenade
bind "${settings.keyboard_mouse.weapon_keys.decoy_grenade}" "slot9"

// Molotov Grenade
bind "${settings.keyboard_mouse.weapon_keys.molotov_grenade}" "slot10"

// Zeus x27
bind "${settings.keyboard_mouse.weapon_keys.zeus_x27}" "slot11"

// Healthshot
bind "${settings.keyboard_mouse.weapon_keys.healthshot}" "slot12"

// Utility Items
bind "${settings.keyboard_mouse.weapon_keys.utility_items}" "slot13"

// Graffiti Menu
bind "${settings.keyboard_mouse.weapon_keys.graffiti_menu}" "+spray_menu"



// ------------------------------------------------------------------------- //
//                        Keyboard / Mouse - UI Keys                         //
// ------------------------------------------------------------------------- //

// Scoreboard
bind "${settings.keyboard_mouse.ui_keys.scoreboard}" "+showscores"

// Show Team Equipment
bind "${settings.keyboard_mouse.ui_keys.show_team_equipment}" "+cl_show_team_equipment"

// Call Vote
bind "${settings.keyboard_mouse.ui_keys.call_vote}" "callvote"

// Choose Team
bind "${settings.keyboard_mouse.ui_keys.choose_team}" "teammenu"

// Toggle Console
bind "${settings.keyboard_mouse.ui_keys.toggle_console}" "toggleconsole"



// ------------------------------------------------------------------------- //
//                 Keyboard / Mouse - Communication Options                  //
// ------------------------------------------------------------------------- //

// Player Ping
bind "${settings.keyboard_mouse.communication_options.player_ping}" "player_ping"

// Radio Message
bind "${settings.keyboard_mouse.communication_options.radio_message}" "radio"

// Command Radio Message
bind "${settings.keyboard_mouse.communication_options.command_radio_message}" "radio1"

// Standard Radio Message
bind "${settings.keyboard_mouse.communication_options.standard_radio_message}" "radio2"

// Report Radio Message
bind "${settings.keyboard_mouse.communication_options.report_radio_message}" "radio3"

// Team Message
bind "${settings.keyboard_mouse.communication_options.team_message}" "messagemode2"

// Chat Message
bind "${settings.keyboard_mouse.communication_options.chat_message}" "messagemode"

// Use Mic
bind "${settings.keyboard_mouse.communication_options.use_mic}" "+voicerecord"

// Temporarily Disabled Incoming Chat
bind "${settings.keyboard_mouse.communication_options.temporarily_disable_incoming_chat}" "clutch_mode_toggle"



// ------------------------------------------------------------------------- //
//                    Keyboard / Mouse - Chat Wheel Keys                     //
// ------------------------------------------------------------------------- //

// Chat Wheel 1
bind "${settings.keyboard_mouse.chat_wheel_keys.chat_wheel_1}" "+radialradio"

// Chat Wheel 2
bind "${settings.keyboard_mouse.chat_wheel_keys.chat_wheel_2}" "+radialradio2"

// Chat Wheel 3
bind "${settings.keyboard_mouse.chat_wheel_keys.chat_wheel_3}" "+radialradio3"

    `;

    downloadFile('autoexec.cfg', config);
}

function downloadFile(filename: string, content: string) {
    let element = document.createElement('a');
    element.setAttribute('href', `data:text/plain;charset=utf-8,${encodeURIComponent(content)}`);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
