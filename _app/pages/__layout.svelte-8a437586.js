import{S as _e,i as ue,s as Q,D as Me,e as m,c as d,a as y,d as u,b as s,f as U,E as Ee,F as Se,G as Ae,x as T,H as Ue,I as ze,u as I,J as He,K as Ce,t as x,k as L,g as ee,n as N,L as z,M as c,N as J,O as me,A as he,P as Te,h as Ie,Q as qe,R as Ge,T as Ze,j as ae,m as te,o as oe,v as ne,U as Je,w as Pe,r as Ve}from"../chunks/vendor-77b4aca1.js";import{b as R}from"../chunks/paths-28a87002.js";import{s as De,a as Re,c as Qe,b as Xe,d as Ke,e as a}from"../chunks/stores-502852d7.js";function Ye(i){let e,o,n,t;const l=i[1].default,r=Me(l,i,i[0],null);return{c(){e=m("div"),r&&r.c(),this.h()},l(_){e=d(_,"DIV",{class:!0});var p=y(e);r&&r.l(p),p.forEach(u),this.h()},h(){s(e,"class","page-transition-container svelte-1lvsk0e")},m(_,p){U(_,e,p),r&&r.m(e,null),t=!0},p(_,[p]){r&&r.p&&(!t||p&1)&&Ee(r,l,_,_[0],t?Ae(l,_[0],p,null):Se(_[0]),null)},i(_){t||(T(r,_),Ue(()=>{n&&n.end(1),o=ze(e,Ce,{duration:200,delay:200}),o.start()}),t=!0)},o(_){I(r,_),o&&o.invalidate(),n=He(e,Ce,{duration:0}),t=!1},d(_){_&&u(e),r&&r.d(_),_&&n&&n.end()}}}function xe(i,e,o){let{$$slots:n={},$$scope:t}=e;return i.$$set=l=>{"$$scope"in l&&o(0,t=l.$$scope)},[t,n]}class Le extends _e{constructor(e){super();ue(this,e,xe,Ye,Q,{})}}function ea(i){let e,o,n,t,l,r,_,p,h,$,C,k,b,w,W,K,j,S,E,G,P;return{c(){e=m("nav"),o=m("ul"),n=m("li"),t=m("a"),l=x("Video"),_=L(),p=m("li"),h=m("a"),$=x("Audio"),k=L(),b=m("li"),w=m("a"),W=x("Game"),j=L(),S=m("li"),E=m("a"),G=x("Keyboard / Mouse"),this.h()},l(M){e=d(M,"NAV",{class:!0});var A=y(e);o=d(A,"UL",{class:!0});var f=y(o);n=d(f,"LI",{class:!0});var H=y(n);t=d(H,"A",{class:!0,href:!0});var q=y(t);l=ee(q,"Video"),q.forEach(u),H.forEach(u),_=N(f),p=d(f,"LI",{class:!0});var se=y(p);h=d(se,"A",{class:!0,href:!0});var re=y(h);$=ee(re,"Audio"),re.forEach(u),se.forEach(u),k=N(f),b=d(f,"LI",{class:!0});var Z=y(b);w=d(Z,"A",{class:!0,href:!0});var O=y(w);W=ee(O,"Game"),O.forEach(u),Z.forEach(u),j=N(f),S=d(f,"LI",{class:!0});var ie=y(S);E=d(ie,"A",{class:!0,href:!0});var F=y(E);G=ee(F,"Keyboard / Mouse"),F.forEach(u),ie.forEach(u),f.forEach(u),A.forEach(u),this.h()},h(){s(t,"class","noselect nodrag svelte-118t13j"),s(t,"href",`${R}/video`),s(n,"class",r=""+(z(i[0]==="video"?"active":"")+" svelte-118t13j")),s(h,"class","noselect nodrag svelte-118t13j"),s(h,"href",`${R}/audio`),s(p,"class",C=""+(z(i[0]==="audio"?"active":"")+" svelte-118t13j")),s(w,"class","noselect nodrag svelte-118t13j"),s(w,"href",`${R}/game`),s(b,"class",K=""+(z(i[0]==="game"?"active":"")+" svelte-118t13j")),s(E,"class","noselect nodrag svelte-118t13j"),s(E,"href",`${R}/keyboard-mouse`),s(S,"class",P=""+(z(i[0]==="keyboard-mouse"?"active":"")+" svelte-118t13j")),s(o,"class","svelte-118t13j"),s(e,"class","menu-navigation svelte-118t13j")},m(M,A){U(M,e,A),c(e,o),c(o,n),c(n,t),c(t,l),c(o,_),c(o,p),c(p,h),c(h,$),c(o,k),c(o,b),c(b,w),c(w,W),c(o,j),c(o,S),c(S,E),c(E,G)},p(M,[A]){A&1&&r!==(r=""+(z(M[0]==="video"?"active":"")+" svelte-118t13j"))&&s(n,"class",r),A&1&&C!==(C=""+(z(M[0]==="audio"?"active":"")+" svelte-118t13j"))&&s(p,"class",C),A&1&&K!==(K=""+(z(M[0]==="game"?"active":"")+" svelte-118t13j"))&&s(b,"class",K),A&1&&P!==(P=""+(z(M[0]==="keyboard-mouse"?"active":"")+" svelte-118t13j"))&&s(S,"class",P)},i:J,o:J,d(M){M&&u(e)}}}function aa(i,e,o){let n;return me(i,De,t=>o(0,n=t)),he(()=>{Re(window.location.pathname.split("/")[1]);const t=Array.from(document.querySelectorAll(".menu-navigation a"));for(const l of t)l.addEventListener("click",()=>{const r=l.getAttribute("href").split("/");Re(r[r.length-1])})}),[n]}class ta extends _e{constructor(e){super();ue(this,e,aa,ea,Q,{})}}function Ne(i,e,o){const n=i.slice();return n[3]=e[o],n}function We(i){let e,o,n=i[3].name+"",t,l,r,_,p,h,$;function C(){return i[2](i[3])}return{c(){e=m("li"),o=m("a"),t=x(n),_=L(),this.h()},l(k){e=d(k,"LI",{class:!0});var b=y(e);o=d(b,"A",{class:!0,href:!0});var w=y(o);t=ee(w,n),w.forEach(u),_=N(b),b.forEach(u),this.h()},h(){s(o,"class",l="submenu-link-"+i[3].path+" noselect nodrag svelte-1cd8u2r"),s(o,"href",r="#"+i[3].path),s(e,"class",p=""+(z(i[1]===i[3].path?"active":"")+" svelte-1cd8u2r"))},m(k,b){U(k,e,b),c(e,o),c(o,t),c(e,_),h||($=Te(o,"click",C),h=!0)},p(k,b){i=k,b&1&&n!==(n=i[3].name+"")&&Ie(t,n),b&1&&l!==(l="submenu-link-"+i[3].path+" noselect nodrag svelte-1cd8u2r")&&s(o,"class",l),b&1&&r!==(r="#"+i[3].path)&&s(o,"href",r),b&3&&p!==(p=""+(z(i[1]===i[3].path?"active":"")+" svelte-1cd8u2r"))&&s(e,"class",p)},d(k){k&&u(e),h=!1,$()}}}function oa(i){var l;let e,o,n=(l=i[0])!=null?l:[],t=[];for(let r=0;r<n.length;r+=1)t[r]=We(Ne(i,n,r));return{c(){e=m("nav"),o=m("ul");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=d(r,"NAV",{class:!0});var _=y(e);o=d(_,"UL",{class:!0});var p=y(o);for(let h=0;h<t.length;h+=1)t[h].l(p);p.forEach(u),_.forEach(u),this.h()},h(){s(o,"class","svelte-1cd8u2r"),s(e,"class","submenu-navigation svelte-1cd8u2r")},m(r,_){U(r,e,_),c(e,o);for(let p=0;p<t.length;p+=1)t[p].m(o,null)},p(r,[_]){var p;if(_&3){n=(p=r[0])!=null?p:[];let h;for(h=0;h<n.length;h+=1){const $=Ne(r,n,h);t[h]?t[h].p($,_):(t[h]=We($),t[h].c(),t[h].m(o,null))}for(;h<t.length;h+=1)t[h].d(1);t.length=n.length}},i:J,o:J,d(r){r&&u(e),qe(t,r)}}}function na(i,e,o){let n,t;return me(i,Qe,r=>o(0,n=r)),me(i,Xe,r=>o(1,t=r)),he(()=>{Ke(window.location.href.split("#")[1])}),[n,t,r=>{Ke(r.path)}]}class sa extends _e{constructor(e){super();ue(this,e,na,oa,Q,{})}}function ra(){const i=`// ------------------------------------------------------------------------- //
//                              Initialization                               //
// ------------------------------------------------------------------------- //

// Unbind all keys
unbindall



// ------------------------------------------------------------------------- //
//                               Video - Video                               //
// ------------------------------------------------------------------------- //

// Color Mode
mat_monitorgamma_tv_enabled "${a.video.video.color_mode}"

// Brightness
mat_monitorgamma "${-1/50*parseInt(a.video.video.brightness)+4.2}"

// Laptop Power Savings
mat_powersavingsmode "${a.video.video.laptop_power_savings}"



// ------------------------------------------------------------------------- //
//                          Video - Advanced Video                           //
// ------------------------------------------------------------------------- //

// Boost Player Contrast
r_player_visibility_mode "${a.video.advanced_video.boost_player_contrast}"

// Triple-Monitor Mode
triple_monitor_mode "${a.video.advanced_video.triple_monitor_mode}"



// ------------------------------------------------------------------------- //
//                               Audio - Audio                               //
// ------------------------------------------------------------------------- //

// Master Volume
volume "${a.audio.audio.master_volume/100}"

// Music Volume In Steam Overlay
snd_musicvolume_multiplier_inoverlay "${a.audio.audio.music_volume_in_steam_overlay/100}"

// GOTV Caster Volume
voice_caster_scale "${a.audio.audio.gotv_caster_volume/100}"

// Audio Output Configuration
snd_surround_speakers "${a.audio.audio.audio_output_configuration}"

// Advanced 3D Audio Processing
snd_hwcompat "${a.audio.audio.advanced_3d_audio_processing}"

// Enable Voice
voice_enable "${a.audio.audio.enable_voice}"

// VOIP Volume
voice_scale "${a.audio.audio.voip_volume/100}"

// VOIP Positional
voice_positional "${a.audio.audio.voip_positional}"

// Play Audio When Game In Background
snd_mute_losefocus "${a.audio.audio.play_audio_when_game_in_background}"



// ------------------------------------------------------------------------- //
//                               Audio - Music                               //
// ------------------------------------------------------------------------- //

// Main Menu Volume
snd_menumusic_volume "${a.audio.music.main_menu_volume*60/1e4}"

// Round Start Volume
snd_roundstart_volume "${a.audio.music.round_start_volume*60/1e4}"

// Round End Volume
snd_roundend_volume "${a.audio.music.round_end_volume*60/1e4}"

// Bomb/Hostage Volume
snd_mapobjective_volume "${a.audio.music.bomb_hostage_volume*60/1e4}"

// Ten Second Warning Volume
snd_tensecondwarning_volume "${a.audio.music.ten_second_warning_volume*60/1e4}"

// Death Camera Volume
snd_deathcamera_volume "${a.audio.music.death_camera_volume*60/1e4}"

// MVP Volume
snd_mvp_volume "${a.audio.music.mvp_volume*60/1e4}"

// Mute MVP Music when players on both teams are alive
snd_mute_mvp_music_live_players "${a.audio.music.mute_mvp_music_when_players_on_both_teams_are_alive}"

// Danger Zone Music Volume
snd_dzmusic_volume "${a.audio.music.danger_zone_music_volume*60/1e4}"



// ------------------------------------------------------------------------- //
//                                Game - Game                                //
// ------------------------------------------------------------------------- //

// Enable Game Instructor Messages
gameinstructor_enable "${a.game.game.enable_game_instructor_messages}"

// Max Acceptable Matchmaking Ping
mm_dedicated_search_maxping "${a.game.game.max_acceptable_matchmaking_ping}"

// Max Acceptable Game Traffic Bandwidth
rate "${a.game.game.max_acceptable_game_traffic_bandwidth}"

// Community Notification Location
ui_steam_overlay_notification_position "${a.game.game.community_notification_location}"

// Enable Developer Console (~)
con_enable "${a.game.game.enable_developer_console}"



// ------------------------------------------------------------------------- //
//                                Game - Hud                                 //
// ------------------------------------------------------------------------- //

// Friendly Fire Reticle Warning
cl_crosshair_friendly_warning "${a.game.hud.friendly_fire_reticle_warning}"

// HUD Scale
hud_scaling "${a.game.hud.hud_scale}"

// HUD Color
cl_hud_color "${a.game.hud.hud_color}"

// HUD Background Alpha
cl_hud_background_alpha "${a.game.hud.hud_background_alpha}"

// Health/Ammo Style
cl_hud_healthammo_style "${a.game.hud.health_ammo_style}"

// Bomb Hud Position
cl_hud_bomb_under_radar "${a.game.hud.bomb_hud_position}"

// Mini-Scoreboard Position
cl_hud_playercount_pos "${a.game.hud.mini_scoreboard_position}"

// Mini-Scoreboard Style
cl_hud_playercount_showcount "${a.game.hud.mini_scoreboard_style}"



// ------------------------------------------------------------------------- //
//                                Game - Team                                //
// ------------------------------------------------------------------------- //

// Display Team Tags In Death Notices
cl_show_clan_in_death_notice "${a.game.team.display_team_tags_in_death_notices}"

// Show Team Positions In HUD
cl_teamid_overhead_mode "${a.game.team.show_team_positions_in_hud}"

// Show Teammate Colors in Competitive
cl_teammate_colors_show "${a.game.team.show_teammate_colors_in_competitive}"

// Friends Lobby Default Permissions
lobby_default_privacy_bits2 "${a.game.team.friends_lobby_default_permissions}"

// Looking to Play when CS:GO Starts
ui_setting_advertiseforhire_auto "${a.game.team.looking_to_play_when_csgo_starts}"



// ------------------------------------------------------------------------- //
//                           Game - Communication                            //
// ------------------------------------------------------------------------- //

// Player Pings
cl_player_ping_mute "${a.game.communication.player_pings}"

// Mute Enemy Team
cl_mute_enemy_team "${a.game.communication.mute_enemy_team}"

// Mute All But Friends
cl_mute_all_but_friends_and_party "${a.game.communication.mute_all_but_friends}"

// Hide Avatar Images
cl_hide_avatar_images "${a.game.communication.hide_avatar_images}"

// Clean Player Names
cl_sanitize_player_names "${a.game.communication.clean_player_names}"



// ------------------------------------------------------------------------- //
//                       Game - Spectator / Scoreboard                       //
// ------------------------------------------------------------------------- //

// Spectator/Map Vote Number Selection Method
spec_usenumberkeys_nobinds "${a.game.spectator_scoreboard.spectator_map_vote_number_selection_method}"

// Spectator Mouse Enable / End of Match Scoreboard Toggle
cl_scoreboard_mouse_enable_binding "${a.game.spectator_scoreboard.spectator_mouse_enable_end_of_match_scoreboard_toggle}"

// Survivors Always On
cl_scoreboard_survivors_always_on "${a.game.spectator_scoreboard.survivors_always_on}"

// Smooth Spectator Camera
cl_obs_interp_enable "${a.game.spectator_scoreboard.smooth_spectator_camera}"

// Follow Grenade Key 
cl_spec_follow_grenade_key "${a.game.spectator_scoreboard.follow_grenade_key}"

// Automatic Killer Replay
spec_replay_autostart "${a.game.spectator_scoreboard.automatic_killer_replay}"



// ------------------------------------------------------------------------- //
//                                Game - Item                                //
// ------------------------------------------------------------------------- //

// Quick Graffiti (Apply With Key Release)
cl_playerspray_auto_apply "${a.game.item.quick_graffiti_apply_with_key_release}"

// Switch Weapon on Pick Up
cl_autowepswitch "${a.game.item.switch_weapon_on_pick_up}"

// Delay sniper rifle un-scope after shot
cl_sniper_delay_unscope "${a.game.item.delay_sniper_rifle_un_scope_after_shot}"

// Viewmodel Position
viewmodel_presetpos "${a.game.item.viewmodel_position}"

// Always Show Inventory
cl_showloadout "${a.game.item.always_show_inventory}"

// Close Buy Menu After Purchase
closeonbuy "${a.game.item.close_buy_menu_after_purchase}"

// Open Buy Menu With Use Key
cl_use_opens_buy_menu "${a.game.item.open_buy_menu_with_use_key}"

// Buy Menu Starting Mouse Position
cl_buywheel_nomousecentering "${a.game.item.buy_menu_starting_mouse_position}"

// Buy Menu Number Keys
cl_buywheel_nonumberpurchasing "${a.game.item.buy_menu_number_keys}"

// Buy Menu Donation Key
cl_buywheel_donate_key "${a.game.item.buy_menu_donation_key}"

// Last Weapon on Radial Weapon Tap
cl_quickinventory_lastinv "${a.game.item.last_weapon_on_radial_weapon_tap}"



// ------------------------------------------------------------------------- //
//                           Game - Radar / Tablet                           //
// ------------------------------------------------------------------------- //

// Tablet Map Orientation
cl_tablet_mapmode "${a.game.radar_tablet.tablet_map_orientation}"

// Radar Centers The Player
cl_radar_always_centered "${a.game.radar_tablet.radar_centers_the_player}"

// Radar Is Rotating
cl_radar_rotate "${a.game.radar_tablet.radar_is_rotating}"

// Radar Hud Size
cl_hud_radar_scale "${a.game.radar_tablet.radar_hud_size}"

// Radar Map Zoom
cl_radar_scale "${a.game.radar_tablet.radar_map_zoom}"	

// Toggle Shape With Scoreboard
cl_radar_square_with_scoreboard "${a.game.radar_tablet.toggle_shape_with_scoreboard}"



// ------------------------------------------------------------------------- //
//                             Game - Crosshair                              //
// ------------------------------------------------------------------------- //

// Deployed Weapon Gap
cl_crosshairgap_useweaponvalue "${a.game.crosshair.deployed_weapon_gap}"

// Show Player Crosshairs
cl_show_observer_crosshair "${a.game.crosshair.show_player_crosshairs}"



// ------------------------------------------------------------------------- //
//                             Game - Twitch.tv                              //
// ------------------------------------------------------------------------- //

// CS:GO Profile Sharing
cl_accountprivacysetting1 "${a.game.twitch_tv.csgo_profile_sharing}"



// ------------------------------------------------------------------------- //
//               Keyboard / Mouse - Keyboard & Mouse Settings                //
// ------------------------------------------------------------------------- //

// Duck Mode
option_duck_method "${a.keyboard_mouse.keyboard_mouse_settings.duck_mode}"

// Walk Mode
option_speed_method "${a.keyboard_mouse.keyboard_mouse_settings.walk_mode}"

// Mouse Sensitivity
sensitivity "${a.keyboard_mouse.keyboard_mouse_settings.mouse_sensitivity}"

// Zoom Sensitivity
zoom_sensitivity_ratio_mouse "${a.keyboard_mouse.keyboard_mouse_settings.zoom_sensitivity}"

// Raw Input
m_rawinput "${a.keyboard_mouse.keyboard_mouse_settings.raw_input}"

// Mouse Acceleration
m_customaccel "${a.keyboard_mouse.keyboard_mouse_settings.mouse_acceleration}"



// ------------------------------------------------------------------------- //
//                     Keyboard / Mouse - Movement Keys                      //
// ------------------------------------------------------------------------- //

// Toggle Inventory Display
bind "${a.keyboard_mouse.movement_keys.toggle_inventory_display}" "show_loadout_toggle"

// Move Forward
bind "${a.keyboard_mouse.movement_keys.move_forward}" "+forward"

// Move Backward
bind "${a.keyboard_mouse.movement_keys.move_backward}" "+back"

// Move Left (Strafe)
bind "${a.keyboard_mouse.movement_keys.move_left_strafe}" "+moveleft"

// Move Right (Strafe)
bind "${a.keyboard_mouse.movement_keys.move_right_strafe}" "+moveright"

// Walk
bind "${a.keyboard_mouse.movement_keys.walk}" "+speed"

// Jump
bind "${a.keyboard_mouse.movement_keys.jump}" "+jump"

// Duck
bind "${a.keyboard_mouse.movement_keys.duck}" "+duck"



// ------------------------------------------------------------------------- //
//                      Keyboard / Mouse - Weapon Keys                       //
// ------------------------------------------------------------------------- //

// Use
bind "${a.keyboard_mouse.weapon_keys.use}" "+use"

// Fire
bind "${a.keyboard_mouse.weapon_keys.fire}" "+attack"

// Secondary Fire
bind "${a.keyboard_mouse.weapon_keys.secondary_fire}" "+attack2"

// Reload
bind "${a.keyboard_mouse.weapon_keys.reload}" "+reload"

// Radial Weapon Menu
bind "${a.keyboard_mouse.weapon_keys.radial_weapon_menu}" "+quickinv"

// Select Previous Weapon
bind "${a.keyboard_mouse.weapon_keys.select_previous_weapon}" "invprev"

// Select Next Weapon
bind "${a.keyboard_mouse.weapon_keys.select_next_weapon}" "invnext"

// Last Weapon Used
bind "${a.keyboard_mouse.weapon_keys.last_weapon_used}" "lastinv"

// Drop Weapon
bind "${a.keyboard_mouse.weapon_keys.drop_weapon}" "drop"

// Inspect Weapon
bind "${a.keyboard_mouse.weapon_keys.inspect_weapon}" "+lookatweapon"

// Buy Menu
bind "${a.keyboard_mouse.weapon_keys.buy_menu}" "buymenu"

// Autobuy
bind "${a.keyboard_mouse.weapon_keys.autobuy}" "autobuy"

// Rebuy
bind "${a.keyboard_mouse.weapon_keys.rebuy}" "rebuy"

// Primary Weapon
bind "${a.keyboard_mouse.weapon_keys.primary_weapon}" "slot1"

// Secondary Weapon
bind "${a.keyboard_mouse.weapon_keys.secondary_weapon}" "slot2"

// Melee Weapons
bind "${a.keyboard_mouse.weapon_keys.melee_weapons}" "slot3"

// Cycle Grenades
bind "${a.keyboard_mouse.weapon_keys.cycle_grenades}" "slot4"

// Explosives & Traps
bind "${a.keyboard_mouse.weapon_keys.explosives_traps}" "slot5"

// HE Grenade
bind "${a.keyboard_mouse.weapon_keys.he_grenade}" "slot6"

// Flashbang
bind "${a.keyboard_mouse.weapon_keys.flashbang}" "slot7"

// Smoke Grenade
bind "${a.keyboard_mouse.weapon_keys.smoke_grenade}" "slot8"

// Decoy Grenade
bind "${a.keyboard_mouse.weapon_keys.decoy_grenade}" "slot9"

// Molotov Grenade
bind "${a.keyboard_mouse.weapon_keys.molotov_grenade}" "slot10"

// Zeus x27
bind "${a.keyboard_mouse.weapon_keys.zeus_x27}" "slot11"

// Healthshot
bind "${a.keyboard_mouse.weapon_keys.healthshot}" "slot12"

// Utility Items
bind "${a.keyboard_mouse.weapon_keys.utility_items}" "slot13"

// Graffiti Menu
bind "${a.keyboard_mouse.weapon_keys.graffiti_menu}" "+spray_menu"



// ------------------------------------------------------------------------- //
//                        Keyboard / Mouse - UI Keys                         //
// ------------------------------------------------------------------------- //

// Scoreboard
bind "${a.keyboard_mouse.ui_keys.scoreboard}" "+showscores"

// Show Team Equipment
bind "${a.keyboard_mouse.ui_keys.show_team_equipment}" "+cl_show_team_equipment"

// Call Vote
bind "${a.keyboard_mouse.ui_keys.call_vote}" "callvote"

// Choose Team
bind "${a.keyboard_mouse.ui_keys.choose_team}" "teammenu"

// Toggle Console
bind "${a.keyboard_mouse.ui_keys.toggle_console}" "toggleconsole"



// ------------------------------------------------------------------------- //
//                 Keyboard / Mouse - Communication Options                  //
// ------------------------------------------------------------------------- //

// Player Ping
bind "${a.keyboard_mouse.communication_options.player_ping}" "player_ping"

// Radio Message
bind "${a.keyboard_mouse.communication_options.radio_message}" "radio"

// Command Radio Message
bind "${a.keyboard_mouse.communication_options.command_radio_message}" "radio1"

// Standard Radio Message
bind "${a.keyboard_mouse.communication_options.standard_radio_message}" "radio2"

// Report Radio Message
bind "${a.keyboard_mouse.communication_options.report_radio_message}" "radio3"

// Team Message
bind "${a.keyboard_mouse.communication_options.team_message}" "messagemode2"

// Chat Message
bind "${a.keyboard_mouse.communication_options.chat_message}" "messagemode"

// Use Mic
bind "${a.keyboard_mouse.communication_options.use_mic}" "+voicerecord"

// Temporarily Disabled Incoming Chat
bind "${a.keyboard_mouse.communication_options.temporarily_disable_incoming_chat}" "clutch_mode_toggle"



// ------------------------------------------------------------------------- //
//                    Keyboard / Mouse - Chat Wheel Keys                     //
// ------------------------------------------------------------------------- //

// Chat Wheel 1
bind "${a.keyboard_mouse.chat_wheel_keys.chat_wheel_1}" "+radialradio"

// Chat Wheel 2
bind "${a.keyboard_mouse.chat_wheel_keys.chat_wheel_2}" "+radialradio2"

// Chat Wheel 3
bind "${a.keyboard_mouse.chat_wheel_keys.chat_wheel_3}" "+radialradio3"

    `;ia("autoexec.cfg",i)}function ia(i,e){let o=document.createElement("a");o.setAttribute("href",`data:text/plain;charset=utf-8,${encodeURIComponent(e)}`),o.setAttribute("download",i),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)}function je(i){let e,o,n;return{c(){e=m("img"),this.h()},l(t){e=d(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Ge(e.src,o=i[1])||s(e,"src",o),s(e,"alt",n=""+(i[0]+" button icon")),s(e,"class","nodrag svelte-1o5gy7t")},m(t,l){U(t,e,l)},p(t,l){l&2&&!Ge(e.src,o=t[1])&&s(e,"src",o),l&1&&n!==(n=""+(t[0]+" button icon"))&&s(e,"alt",n)},d(t){t&&u(e)}}}function la(i){let e,o,n,t,l,r,_=i[1]&&je(i);return{c(){e=m("button"),_&&_.c(),o=L(),n=m("span"),t=x(i[0]),this.h()},l(p){e=d(p,"BUTTON",{class:!0});var h=y(e);_&&_.l(h),o=N(h),n=d(h,"SPAN",{class:!0});var $=y(n);t=ee($,i[0]),$.forEach(u),h.forEach(u),this.h()},h(){s(n,"class","svelte-1o5gy7t"),s(e,"class","csgo-button noselect svelte-1o5gy7t")},m(p,h){U(p,e,h),_&&_.m(e,null),c(e,o),c(e,n),c(n,t),l||(r=Te(e,"click",i[3]),l=!0)},p(p,[h]){p[1]?_?_.p(p,h):(_=je(p),_.c(),_.m(e,o)):_&&(_.d(1),_=null),h&1&&Ie(t,p[0])},i:J,o:J,d(p){p&&u(e),_&&_.d(),l=!1,r()}}}function _a(i,e,o){let{text:n}=e,{iconPath:t=""}=e;const l=Ze(),r=()=>l("buttonClick");return i.$$set=_=>{"text"in _&&o(0,n=_.text),"iconPath"in _&&o(1,t=_.iconPath)},[n,t,l,r]}class Oe extends _e{constructor(e){super();ue(this,e,_a,la,Q,{text:0,iconPath:1})}}function ua(i){let e,o,n,t,l;return o=new Oe({props:{text:"Download .cfg",iconPath:"/images/icons/download-icon.svg"}}),o.$on("buttonClick",ra),t=new Oe({props:{text:"Reset Defaults",iconPath:"/images/icons/reset-icon.svg"}}),t.$on("buttonClick",i[0]),{c(){e=m("div"),ae(o.$$.fragment),n=L(),ae(t.$$.fragment),this.h()},l(r){e=d(r,"DIV",{class:!0});var _=y(e);te(o.$$.fragment,_),n=N(_),te(t.$$.fragment,_),_.forEach(u),this.h()},h(){s(e,"class","footer-content svelte-1jadr31")},m(r,_){U(r,e,_),oe(o,e,null),c(e,n),oe(t,e,null),l=!0},p:J,i(r){l||(T(o.$$.fragment,r),T(t.$$.fragment,r),l=!0)},o(r){I(o.$$.fragment,r),I(t.$$.fragment,r),l=!1},d(r){r&&u(e),ne(o),ne(t)}}}function ca(i){return[()=>window.location.reload()]}class ma extends _e{constructor(e){super();ue(this,e,ca,ua,Q,{})}}function da(i){let e,o;return e=new sa({}),{c(){ae(e.$$.fragment)},l(n){te(e.$$.fragment,n)},m(n,t){oe(e,n,t),o=!0},i(n){o||(T(e.$$.fragment,n),o=!0)},o(n){I(e.$$.fragment,n),o=!1},d(n){ne(e,n)}}}function Fe(i){let e,o;return e=new Le({props:{$$slots:{default:[da]},$$scope:{ctx:i}}}),{c(){ae(e.$$.fragment)},l(n){te(e.$$.fragment,n)},m(n,t){oe(e,n,t),o=!0},p(n,t){const l={};t&4&&(l.$$scope={dirty:t,ctx:n}),e.$set(l)},i(n){o||(T(e.$$.fragment,n),o=!0)},o(n){I(e.$$.fragment,n),o=!1},d(n){ne(e,n)}}}function pa(i){let e,o;const n=i[1].default,t=Me(n,i,i[2],null);return{c(){e=m("main"),t&&t.c(),this.h()},l(l){e=d(l,"MAIN",{class:!0});var r=y(e);t&&t.l(r),r.forEach(u),this.h()},h(){s(e,"class","svelte-1g0w16e")},m(l,r){U(l,e,r),t&&t.m(e,null),o=!0},p(l,r){t&&t.p&&(!o||r&4)&&Ee(t,n,l,l[2],o?Ae(n,l[2],r,null):Se(l[2]),null)},i(l){o||(T(t,l),o=!0)},o(l){I(t,l),o=!1},d(l){l&&u(e),t&&t.d(l)}}}function Be(i){let e,o;return e=new Le({props:{$$slots:{default:[pa]},$$scope:{ctx:i}}}),{c(){ae(e.$$.fragment)},l(n){te(e.$$.fragment,n)},m(n,t){oe(e,n,t),o=!0},p(n,t){const l={};t&4&&(l.$$scope={dirty:t,ctx:n}),e.$set(l)},i(n){o||(T(e.$$.fragment,n),o=!0)},o(n){I(e.$$.fragment,n),o=!1},d(n){ne(e,n)}}}function ha(i){let e,o,n,t,l,r,_,p,h,$,C,k,b,w,W,K,j,S,E,G,P,M,A,f,H,q,se,re,Z,O,ie,F,ge=i[0],de,X,ye=i[0],pe,le,Y,ce;O=new ta({});let V=Fe(i),D=Be(i);return Y=new ma({}),{c(){e=m("meta"),o=m("meta"),n=m("meta"),t=m("meta"),l=m("meta"),r=m("meta"),_=m("meta"),p=m("meta"),h=m("meta"),$=m("meta"),C=m("meta"),k=m("meta"),b=m("meta"),w=m("meta"),W=m("meta"),K=m("link"),j=m("link"),S=m("link"),E=m("link"),G=m("link"),P=m("link"),M=m("meta"),A=L(),f=m("div"),H=m("div"),q=m("h1"),se=x("CS:GO CONFIG FILE GENERATOR"),re=L(),Z=m("div"),ae(O.$$.fragment),ie=L(),F=m("div"),V.c(),de=L(),X=m("div"),D.c(),pe=L(),le=m("footer"),ae(Y.$$.fragment),this.h()},l(v){const g=Je('[data-svelte="svelte-1knef4b"]',document.head);e=d(g,"META",{charset:!0}),o=d(g,"META",{name:!0,content:!0}),n=d(g,"META",{name:!0,content:!0}),t=d(g,"META",{name:!0,content:!0}),l=d(g,"META",{name:!0,content:!0}),r=d(g,"META",{property:!0,content:!0}),_=d(g,"META",{property:!0,content:!0}),p=d(g,"META",{property:!0,content:!0}),h=d(g,"META",{property:!0,content:!0}),$=d(g,"META",{property:!0,content:!0}),C=d(g,"META",{property:!0,content:!0}),k=d(g,"META",{name:!0,content:!0}),b=d(g,"META",{name:!0,content:!0}),w=d(g,"META",{name:!0,content:!0}),W=d(g,"META",{name:!0,content:!0}),K=d(g,"LINK",{rel:!0,href:!0}),j=d(g,"LINK",{rel:!0,href:!0}),S=d(g,"LINK",{rel:!0,href:!0}),E=d(g,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),G=d(g,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),P=d(g,"LINK",{rel:!0,sizes:!0,href:!0}),M=d(g,"META",{name:!0,content:!0}),g.forEach(u),A=N(v),f=d(v,"DIV",{class:!0});var B=y(f);H=d(B,"DIV",{class:!0});var be=y(H);q=d(be,"H1",{class:!0});var fe=y(q);se=ee(fe,"CS:GO CONFIG FILE GENERATOR"),fe.forEach(u),be.forEach(u),re=N(B),Z=d(B,"DIV",{class:!0});var ve=y(Z);te(O.$$.fragment,ve),ve.forEach(u),ie=N(B),F=d(B,"DIV",{class:!0});var $e=y(F);V.l($e),$e.forEach(u),de=N(B),X=d(B,"DIV",{class:!0});var ke=y(X);D.l(ke),ke.forEach(u),pe=N(B),le=d(B,"FOOTER",{class:!0});var we=y(le);te(Y.$$.fragment,we),we.forEach(u),B.forEach(u),this.h()},h(){s(e,"charset","utf-8"),s(o,"name","viewport"),s(o,"content","width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0"),s(n,"name","theme-color"),s(n,"content","#1d2c49"),s(t,"name","color-scheme"),s(t,"content","light"),s(l,"name","description"),s(l,"content","Create an autoexec config file from your CS:GO settings."),s(r,"property","og:site_name"),s(r,"content","CS:GO Config Generator"),s(_,"property","og:image"),s(_,"content","/images/thumbnail.jpg"),s(p,"property","og:type"),s(p,"content","website"),s(h,"property","og:locale"),s(h,"content","fr_FR"),s($,"property","twitter:card"),s($,"content","summary_large_image"),s(C,"property","twitter:image"),s(C,"content",`${R}/images/thumbnail.jpg`),s(k,"name","apple-mobile-web-app-title"),s(k,"content","CS:GO Config Generator"),s(b,"name","application-name"),s(b,"content","CS:GO Config Generator"),s(w,"name","msapplication-TileColor"),s(w,"content","#1d2c49"),s(W,"name","msapplication-config"),s(W,"content",`${R}/browserconfig.xml`),s(K,"rel","manifest"),s(K,"href",`${R}/manifest.json`),s(j,"rel","stylesheet"),s(j,"href",`${R}/global.css`),s(S,"rel","shortcut icon"),s(S,"href","/icons/favicon.ico"),s(E,"rel","icon"),s(E,"type","image/png"),s(E,"sizes","16x16"),s(E,"href",`${R}/icons/favicon-16x16.png`),s(G,"rel","icon"),s(G,"type","image/png"),s(G,"sizes","32x32"),s(G,"href",`${R}/icons/favicon-32x32.png`),s(P,"rel","apple-touch-icon"),s(P,"sizes","180x180"),s(P,"href",`${R}/icons/apple-touch-icon.png`),s(M,"name","msapplication-TileImage"),s(M,"content",`${R}/icons/mstile-144x144.png`),s(q,"class","title noselect svelte-1g0w16e"),s(H,"class","title-container svelte-1g0w16e"),s(Z,"class","menu-navigation-container svelte-1g0w16e"),s(F,"class","submenu-navigation-container svelte-1g0w16e"),s(X,"class","main-content-wrapper svelte-1g0w16e"),s(le,"class","svelte-1g0w16e"),s(f,"class","main-container svelte-1g0w16e")},m(v,g){c(document.head,e),c(document.head,o),c(document.head,n),c(document.head,t),c(document.head,l),c(document.head,r),c(document.head,_),c(document.head,p),c(document.head,h),c(document.head,$),c(document.head,C),c(document.head,k),c(document.head,b),c(document.head,w),c(document.head,W),c(document.head,K),c(document.head,j),c(document.head,S),c(document.head,E),c(document.head,G),c(document.head,P),c(document.head,M),U(v,A,g),U(v,f,g),c(f,H),c(H,q),c(q,se),c(f,re),c(f,Z),oe(O,Z,null),c(f,ie),c(f,F),V.m(F,null),c(f,de),c(f,X),D.m(X,null),c(f,pe),c(f,le),oe(Y,le,null),ce=!0},p(v,[g]){g&1&&Q(ge,ge=v[0])?(Ve(),I(V,1,1,J),Pe(),V=Fe(v),V.c(),T(V),V.m(F,null)):V.p(v,g),g&1&&Q(ye,ye=v[0])?(Ve(),I(D,1,1,J),Pe(),D=Be(v),D.c(),T(D),D.m(X,null)):D.p(v,g)},i(v){ce||(T(O.$$.fragment,v),T(V),T(D),T(Y.$$.fragment,v),ce=!0)},o(v){I(O.$$.fragment,v),I(V),I(D),I(Y.$$.fragment,v),ce=!1},d(v){u(e),u(o),u(n),u(t),u(l),u(r),u(_),u(p),u(h),u($),u(C),u(k),u(b),u(w),u(W),u(K),u(j),u(S),u(E),u(G),u(P),u(M),v&&u(A),v&&u(f),ne(O),V.d(v),D.d(v),ne(Y)}}}function ga(i,e,o){let n;me(i,De,r=>o(0,n=r));let{$$slots:t={},$$scope:l}=e;return he(()=>{window.onbeforeunload=()=>""}),i.$$set=r=>{"$$scope"in r&&o(2,l=r.$$scope)},[n,t,l]}class va extends _e{constructor(e){super();ue(this,e,ga,ha,Q,{})}}export{va as default};
