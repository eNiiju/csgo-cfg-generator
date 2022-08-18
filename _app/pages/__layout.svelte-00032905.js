import{S as ce,i as me,s as X,D as Se,e as m,c as d,a as y,d as u,b as s,f as z,E as Ce,F as Ae,G as Te,x as P,H as He,I as qe,u as V,J as Ze,K as Ie,t as ae,k as j,g as te,n as W,L as H,M as c,N as Q,O as pe,A as ye,P as Ge,h as Pe,Q as Je,R as Ve,T as Qe,j as oe,m as ne,o as se,v as re,U as Xe,w as Re,V as Ye,r as De}from"../chunks/vendor-aaf572ad.js";import{b as T}from"../chunks/paths-28a87002.js";import{s as Ke,a as Le,c as xe,b as ea,d as Ne,e as a}from"../chunks/stores-f06c7b98.js";function aa(i){let e,o,n,t;const l=i[1].default,r=Se(l,i,i[0],null);return{c(){e=m("div"),r&&r.c(),this.h()},l(_){e=d(_,"DIV",{class:!0});var p=y(e);r&&r.l(p),p.forEach(u),this.h()},h(){s(e,"class","page-transition-container svelte-1lvsk0e")},m(_,p){z(_,e,p),r&&r.m(e,null),t=!0},p(_,[p]){r&&r.p&&(!t||p&1)&&Ce(r,l,_,_[0],t?Te(l,_[0],p,null):Ae(_[0]),null)},i(_){t||(P(r,_),He(()=>{n&&n.end(1),o=qe(e,Ie,{duration:200,delay:200}),o.start()}),t=!0)},o(_){V(r,_),o&&o.invalidate(),n=Ze(e,Ie,{duration:0}),t=!1},d(_){_&&u(e),r&&r.d(_),_&&n&&n.end()}}}function ta(i,e,o){let{$$slots:n={},$$scope:t}=e;return i.$$set=l=>{"$$scope"in l&&o(0,t=l.$$scope)},[t,n]}class je extends ce{constructor(e){super();me(this,e,ta,aa,X,{})}}function oa(i){let e,o,n,t,l,r,_,p,h,$,I,k,b,E,O,L,R,S,A,F,N;return{c(){e=m("nav"),o=m("ul"),n=m("li"),t=m("a"),l=ae("Video"),_=j(),p=m("li"),h=m("a"),$=ae("Audio"),k=j(),b=m("li"),E=m("a"),O=ae("Game"),R=j(),S=m("li"),A=m("a"),F=ae("Keyboard / Mouse"),this.h()},l(w){e=d(w,"NAV",{class:!0});var C=y(e);o=d(C,"UL",{class:!0});var G=y(o);n=d(G,"LI",{class:!0});var M=y(n);t=d(M,"A",{class:!0,href:!0});var q=y(t);l=te(q,"Video"),q.forEach(u),M.forEach(u),_=W(G),p=d(G,"LI",{class:!0});var Z=y(p);h=d(Z,"A",{class:!0,href:!0});var ie=y(h);$=te(ie,"Audio"),ie.forEach(u),Z.forEach(u),k=W(G),b=d(G,"LI",{class:!0});var le=y(b);E=d(le,"A",{class:!0,href:!0});var J=y(E);O=te(J,"Game"),J.forEach(u),le.forEach(u),R=W(G),S=d(G,"LI",{class:!0});var B=y(S);A=d(B,"A",{class:!0,href:!0});var _e=y(A);F=te(_e,"Keyboard / Mouse"),_e.forEach(u),B.forEach(u),G.forEach(u),C.forEach(u),this.h()},h(){s(t,"class","noselect nodrag svelte-118t13j"),s(t,"href",`${T}/video`),s(n,"class",r=""+(H(i[0]==="video"?"active":"")+" svelte-118t13j")),s(h,"class","noselect nodrag svelte-118t13j"),s(h,"href",`${T}/audio`),s(p,"class",I=""+(H(i[0]==="audio"?"active":"")+" svelte-118t13j")),s(E,"class","noselect nodrag svelte-118t13j"),s(E,"href",`${T}/game`),s(b,"class",L=""+(H(i[0]==="game"?"active":"")+" svelte-118t13j")),s(A,"class","noselect nodrag svelte-118t13j"),s(A,"href",`${T}/keyboard-mouse`),s(S,"class",N=""+(H(i[0]==="keyboard-mouse"?"active":"")+" svelte-118t13j")),s(o,"class","svelte-118t13j"),s(e,"class","menu-navigation svelte-118t13j")},m(w,C){z(w,e,C),c(e,o),c(o,n),c(n,t),c(t,l),c(o,_),c(o,p),c(p,h),c(h,$),c(o,k),c(o,b),c(b,E),c(E,O),c(o,R),c(o,S),c(S,A),c(A,F)},p(w,[C]){C&1&&r!==(r=""+(H(w[0]==="video"?"active":"")+" svelte-118t13j"))&&s(n,"class",r),C&1&&I!==(I=""+(H(w[0]==="audio"?"active":"")+" svelte-118t13j"))&&s(p,"class",I),C&1&&L!==(L=""+(H(w[0]==="game"?"active":"")+" svelte-118t13j"))&&s(b,"class",L),C&1&&N!==(N=""+(H(w[0]==="keyboard-mouse"?"active":"")+" svelte-118t13j"))&&s(S,"class",N)},i:Q,o:Q,d(w){w&&u(e)}}}function na(i,e,o){let n;return pe(i,Ke,t=>o(0,n=t)),ye(()=>{Le(window.location.pathname.split("/")[1]);const t=Array.from(document.querySelectorAll(".menu-navigation a"));for(const l of t)l.addEventListener("click",()=>{const r=l.getAttribute("href").split("/");Le(r[r.length-1])})}),[n]}class sa extends ce{constructor(e){super();me(this,e,na,oa,X,{})}}function We(i,e,o){const n=i.slice();return n[3]=e[o],n}function Oe(i){let e,o,n=i[3].name+"",t,l,r,_,p,h,$;function I(){return i[2](i[3])}return{c(){e=m("li"),o=m("a"),t=ae(n),_=j(),this.h()},l(k){e=d(k,"LI",{class:!0});var b=y(e);o=d(b,"A",{class:!0,href:!0});var E=y(o);t=te(E,n),E.forEach(u),_=W(b),b.forEach(u),this.h()},h(){s(o,"class",l="submenu-link-"+i[3].path+" noselect nodrag svelte-1cd8u2r"),s(o,"href",r="#"+i[3].path),s(e,"class",p=""+(H(i[1]===i[3].path?"active":"")+" svelte-1cd8u2r"))},m(k,b){z(k,e,b),c(e,o),c(o,t),c(e,_),h||($=Ge(o,"click",I),h=!0)},p(k,b){i=k,b&1&&n!==(n=i[3].name+"")&&Pe(t,n),b&1&&l!==(l="submenu-link-"+i[3].path+" noselect nodrag svelte-1cd8u2r")&&s(o,"class",l),b&1&&r!==(r="#"+i[3].path)&&s(o,"href",r),b&3&&p!==(p=""+(H(i[1]===i[3].path?"active":"")+" svelte-1cd8u2r"))&&s(e,"class",p)},d(k){k&&u(e),h=!1,$()}}}function ra(i){var l;let e,o,n=(l=i[0])!=null?l:[],t=[];for(let r=0;r<n.length;r+=1)t[r]=Oe(We(i,n,r));return{c(){e=m("nav"),o=m("ul");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=d(r,"NAV",{class:!0});var _=y(e);o=d(_,"UL",{class:!0});var p=y(o);for(let h=0;h<t.length;h+=1)t[h].l(p);p.forEach(u),_.forEach(u),this.h()},h(){s(o,"class","svelte-1cd8u2r"),s(e,"class","submenu-navigation svelte-1cd8u2r")},m(r,_){z(r,e,_),c(e,o);for(let p=0;p<t.length;p+=1)t[p].m(o,null)},p(r,[_]){var p;if(_&3){n=(p=r[0])!=null?p:[];let h;for(h=0;h<n.length;h+=1){const $=We(r,n,h);t[h]?t[h].p($,_):(t[h]=Oe($),t[h].c(),t[h].m(o,null))}for(;h<t.length;h+=1)t[h].d(1);t.length=n.length}},i:Q,o:Q,d(r){r&&u(e),Je(t,r)}}}function ia(i,e,o){let n,t;return pe(i,xe,r=>o(0,n=r)),pe(i,ea,r=>o(1,t=r)),ye(()=>{Ne(window.location.href.split("#")[1])}),[n,t,r=>{Ne(r.path)}]}class la extends ce{constructor(e){super();me(this,e,ia,ra,X,{})}}function _a(){const i=`// ------------------------------------------------------------------------- //
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

    `;ua("autoexec.cfg",i)}function ua(i,e){let o=document.createElement("a");o.setAttribute("href",`data:text/plain;charset=utf-8,${encodeURIComponent(e)}`),o.setAttribute("download",i),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)}function Fe(i){let e,o,n;return{c(){e=m("img"),this.h()},l(t){e=d(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Ve(e.src,o=i[1])||s(e,"src",o),s(e,"alt",n=""+(i[0]+" button icon")),s(e,"class","nodrag svelte-1o5gy7t")},m(t,l){z(t,e,l)},p(t,l){l&2&&!Ve(e.src,o=t[1])&&s(e,"src",o),l&1&&n!==(n=""+(t[0]+" button icon"))&&s(e,"alt",n)},d(t){t&&u(e)}}}function ca(i){let e,o,n,t,l,r,_=i[1]&&Fe(i);return{c(){e=m("button"),_&&_.c(),o=j(),n=m("span"),t=ae(i[0]),this.h()},l(p){e=d(p,"BUTTON",{class:!0});var h=y(e);_&&_.l(h),o=W(h),n=d(h,"SPAN",{class:!0});var $=y(n);t=te($,i[0]),$.forEach(u),h.forEach(u),this.h()},h(){s(n,"class","svelte-1o5gy7t"),s(e,"class","csgo-button noselect svelte-1o5gy7t")},m(p,h){z(p,e,h),_&&_.m(e,null),c(e,o),c(e,n),c(n,t),l||(r=Ge(e,"click",i[3]),l=!0)},p(p,[h]){p[1]?_?_.p(p,h):(_=Fe(p),_.c(),_.m(e,o)):_&&(_.d(1),_=null),h&1&&Pe(t,p[0])},i:Q,o:Q,d(p){p&&u(e),_&&_.d(),l=!1,r()}}}function ma(i,e,o){let{text:n}=e,{iconPath:t=""}=e;const l=Qe(),r=()=>l("buttonClick");return i.$$set=_=>{"text"in _&&o(0,n=_.text),"iconPath"in _&&o(1,t=_.iconPath)},[n,t,l,r]}class Be extends ce{constructor(e){super();me(this,e,ma,ca,X,{text:0,iconPath:1})}}function da(i){let e,o,n,t,l;return o=new Be({props:{text:"Download .cfg",iconPath:`${T}/images/icons/download-icon.svg`}}),o.$on("buttonClick",_a),t=new Be({props:{text:"Reset Defaults",iconPath:`${T}/images/icons/reset-icon.svg`}}),t.$on("buttonClick",i[0]),{c(){e=m("div"),oe(o.$$.fragment),n=j(),oe(t.$$.fragment),this.h()},l(r){e=d(r,"DIV",{class:!0});var _=y(e);ne(o.$$.fragment,_),n=W(_),ne(t.$$.fragment,_),_.forEach(u),this.h()},h(){s(e,"class","footer-content svelte-1jadr31")},m(r,_){z(r,e,_),se(o,e,null),c(e,n),se(t,e,null),l=!0},p:Q,i(r){l||(P(o.$$.fragment,r),P(t.$$.fragment,r),l=!0)},o(r){V(o.$$.fragment,r),V(t.$$.fragment,r),l=!1},d(r){r&&u(e),re(o),re(t)}}}function pa(i){return[()=>window.location.reload()]}class ha extends ce{constructor(e){super();me(this,e,pa,da,X,{})}}const{document:f}=Ye;function ga(i){let e,o;return e=new la({}),{c(){oe(e.$$.fragment)},l(n){ne(e.$$.fragment,n)},m(n,t){se(e,n,t),o=!0},i(n){o||(P(e.$$.fragment,n),o=!0)},o(n){V(e.$$.fragment,n),o=!1},d(n){re(e,n)}}}function Ue(i){let e,o;return e=new je({props:{$$slots:{default:[ga]},$$scope:{ctx:i}}}),{c(){oe(e.$$.fragment)},l(n){ne(e.$$.fragment,n)},m(n,t){se(e,n,t),o=!0},p(n,t){const l={};t&4&&(l.$$scope={dirty:t,ctx:n}),e.$set(l)},i(n){o||(P(e.$$.fragment,n),o=!0)},o(n){V(e.$$.fragment,n),o=!1},d(n){re(e,n)}}}function ya(i){let e,o;const n=i[1].default,t=Se(n,i,i[2],null);return{c(){e=m("main"),t&&t.c(),this.h()},l(l){e=d(l,"MAIN",{class:!0});var r=y(e);t&&t.l(r),r.forEach(u),this.h()},h(){s(e,"class","svelte-1g0w16e")},m(l,r){z(l,e,r),t&&t.m(e,null),o=!0},p(l,r){t&&t.p&&(!o||r&4)&&Ce(t,n,l,l[2],o?Te(n,l[2],r,null):Ae(l[2]),null)},i(l){o||(P(t,l),o=!0)},o(l){V(t,l),o=!1},d(l){l&&u(e),t&&t.d(l)}}}function ze(i){let e,o;return e=new je({props:{$$slots:{default:[ya]},$$scope:{ctx:i}}}),{c(){oe(e.$$.fragment)},l(n){ne(e.$$.fragment,n)},m(n,t){se(e,n,t),o=!0},p(n,t){const l={};t&4&&(l.$$scope={dirty:t,ctx:n}),e.$set(l)},i(n){o||(P(e.$$.fragment,n),o=!0)},o(n){V(e.$$.fragment,n),o=!1},d(n){re(e,n)}}}function ba(i){let e,o,n,t,l,r,_,p,h,$,I,k,b,E,O,L,R,S,A,F,N,w,C,G,M,q,Z,ie,le,J,B,_e,Y,be=i[0],he,x,fe=i[0],ge,ue,ee,de;B=new sa({});let D=Ue(i),K=ze(i);return ee=new ha({}),{c(){e=m("meta"),o=m("meta"),n=m("meta"),t=m("meta"),l=m("meta"),r=m("meta"),_=m("meta"),p=m("meta"),h=m("meta"),$=m("meta"),I=m("meta"),k=m("meta"),b=m("meta"),E=m("meta"),O=m("link"),L=m("link"),R=m("link"),S=m("link"),A=m("link"),F=m("meta"),N=m("link"),w=m("link"),C=m("link"),G=j(),M=m("div"),q=m("div"),Z=m("h1"),ie=ae("CS:GO CONFIG FILE GENERATOR"),le=j(),J=m("div"),oe(B.$$.fragment),_e=j(),Y=m("div"),D.c(),he=j(),x=m("div"),K.c(),ge=j(),ue=m("footer"),oe(ee.$$.fragment),this.h()},l(v){const g=Xe('[data-svelte="svelte-1xrjaix"]',f.head);e=d(g,"META",{charset:!0}),o=d(g,"META",{name:!0,content:!0}),n=d(g,"META",{name:!0,content:!0}),t=d(g,"META",{name:!0,content:!0}),l=d(g,"META",{name:!0,content:!0}),r=d(g,"META",{property:!0,content:!0}),_=d(g,"META",{property:!0,content:!0}),p=d(g,"META",{property:!0,content:!0}),h=d(g,"META",{property:!0,content:!0}),$=d(g,"META",{property:!0,content:!0}),I=d(g,"META",{property:!0,content:!0}),k=d(g,"META",{name:!0,content:!0}),b=d(g,"META",{name:!0,content:!0}),E=d(g,"META",{name:!0,content:!0}),O=d(g,"LINK",{rel:!0,href:!0}),L=d(g,"LINK",{rel:!0,href:!0}),R=d(g,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),S=d(g,"LINK",{rel:!0,type:!0,sizes:!0,href:!0}),A=d(g,"LINK",{rel:!0,sizes:!0,href:!0}),F=d(g,"META",{name:!0,content:!0}),N=d(g,"LINK",{rel:!0,href:!0}),w=d(g,"LINK",{rel:!0,href:!0,crossorigin:!0}),C=d(g,"LINK",{href:!0,rel:!0}),g.forEach(u),G=W(v),M=d(v,"DIV",{class:!0});var U=y(M);q=d(U,"DIV",{class:!0});var ve=y(q);Z=d(ve,"H1",{class:!0});var $e=y(Z);ie=te($e,"CS:GO CONFIG FILE GENERATOR"),$e.forEach(u),ve.forEach(u),le=W(U),J=d(U,"DIV",{class:!0});var ke=y(J);ne(B.$$.fragment,ke),ke.forEach(u),_e=W(U),Y=d(U,"DIV",{class:!0});var we=y(Y);D.l(we),we.forEach(u),he=W(U),x=d(U,"DIV",{class:!0});var Me=y(x);K.l(Me),Me.forEach(u),ge=W(U),ue=d(U,"FOOTER",{class:!0});var Ee=y(ue);ne(ee.$$.fragment,Ee),Ee.forEach(u),U.forEach(u),this.h()},h(){s(e,"charset","utf-8"),s(o,"name","viewport"),s(o,"content","width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0"),s(n,"name","theme-color"),s(n,"content","#1d2c49"),s(t,"name","color-scheme"),s(t,"content","light"),s(l,"name","description"),s(l,"content","Create an autoexec config file from your CS:GO settings."),s(r,"property","og:site_name"),s(r,"content","CS:GO Config Generator"),s(_,"property","og:image"),s(_,"content",`${T}/images/thumbnail.jpg`),s(p,"property","og:type"),s(p,"content","website"),s(h,"property","og:locale"),s(h,"content","fr_FR"),s($,"property","twitter:card"),s($,"content","summary_large_image"),s(I,"property","twitter:image"),s(I,"content",`${T}/images/thumbnail.jpg`),s(k,"name","apple-mobile-web-app-title"),s(k,"content","CS:GO Config Generator"),s(b,"name","application-name"),s(b,"content","CS:GO Config Generator"),s(E,"name","msapplication-TileColor"),s(E,"content","#1d2c49"),s(O,"rel","stylesheet"),s(O,"href",`${T}/global.css`),s(L,"rel","shortcut icon"),s(L,"href",`${T}/icons/favicon.ico`),s(R,"rel","icon"),s(R,"type","image/png"),s(R,"sizes","16x16"),s(R,"href",`${T}/icons/favicon-16x16.png`),s(S,"rel","icon"),s(S,"type","image/png"),s(S,"sizes","32x32"),s(S,"href",`${T}/icons/favicon-32x32.png`),s(A,"rel","apple-touch-icon"),s(A,"sizes","180x180"),s(A,"href",`${T}/icons/apple-touch-icon.png`),s(F,"name","msapplication-TileImage"),s(F,"content",`${T}/icons/mstile-144x144.png`),s(N,"rel","preconnect"),s(N,"href","https://fonts.googleapis.com"),s(w,"rel","preconnect"),s(w,"href","https://fonts.gstatic.com"),s(w,"crossorigin",""),s(C,"href","https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"),s(C,"rel","stylesheet"),s(Z,"class","title noselect svelte-1g0w16e"),s(q,"class","title-container svelte-1g0w16e"),s(J,"class","menu-navigation-container svelte-1g0w16e"),s(Y,"class","submenu-navigation-container svelte-1g0w16e"),s(x,"class","main-content-wrapper svelte-1g0w16e"),s(ue,"class","svelte-1g0w16e"),s(M,"class","main-container svelte-1g0w16e")},m(v,g){c(f.head,e),c(f.head,o),c(f.head,n),c(f.head,t),c(f.head,l),c(f.head,r),c(f.head,_),c(f.head,p),c(f.head,h),c(f.head,$),c(f.head,I),c(f.head,k),c(f.head,b),c(f.head,E),c(f.head,O),c(f.head,L),c(f.head,R),c(f.head,S),c(f.head,A),c(f.head,F),c(f.head,N),c(f.head,w),c(f.head,C),z(v,G,g),z(v,M,g),c(M,q),c(q,Z),c(Z,ie),c(M,le),c(M,J),se(B,J,null),c(M,_e),c(M,Y),D.m(Y,null),c(M,he),c(M,x),K.m(x,null),c(M,ge),c(M,ue),se(ee,ue,null),de=!0},p(v,[g]){g&1&&X(be,be=v[0])?(De(),V(D,1,1,Q),Re(),D=Ue(v),D.c(),P(D),D.m(Y,null)):D.p(v,g),g&1&&X(fe,fe=v[0])?(De(),V(K,1,1,Q),Re(),K=ze(v),K.c(),P(K),K.m(x,null)):K.p(v,g)},i(v){de||(P(B.$$.fragment,v),P(D),P(K),P(ee.$$.fragment,v),de=!0)},o(v){V(B.$$.fragment,v),V(D),V(K),V(ee.$$.fragment,v),de=!1},d(v){u(e),u(o),u(n),u(t),u(l),u(r),u(_),u(p),u(h),u($),u(I),u(k),u(b),u(E),u(O),u(L),u(R),u(S),u(A),u(F),u(N),u(w),u(C),v&&u(G),v&&u(M),re(B),D.d(v),K.d(v),re(ee)}}}function fa(i,e,o){let n;pe(i,Ke,r=>o(0,n=r));let{$$slots:t={},$$scope:l}=e;return ye(()=>{window.onbeforeunload=()=>"",document.querySelector("body").style.setProperty("background-image",`url(${T}/images/backgrounds/background_nuke.jpg)`)}),i.$$set=r=>{"$$scope"in r&&o(2,l=r.$$scope)},[n,t,l]}class wa extends ce{constructor(e){super();me(this,e,fa,ba,X,{})}}export{wa as default};
