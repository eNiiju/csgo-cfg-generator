import{S as q,i as z,s as K,D as se,e as p,c as h,a as b,d as m,b as c,f as W,E as ne,F as ie,G as re,x as C,H as Me,I as Se,u as E,J as Ce,K as le,t as L,k as T,g as N,n as D,L as R,M as d,N as j,O as X,A as Y,P as _e,h as ue,Q as Ee,R as ce,T as Ae,j as B,m as F,o as U,v as H,w as me,r as de}from"../chunks/vendor-68caf92a.js";import{s as pe,a as he,c as Ie,b as Pe,d as be,e as a}from"../chunks/stores-e24a5853.js";function Ve(i){let e,o,t,s;const l=i[1].default,n=se(l,i,i[0],null);return{c(){e=p("div"),n&&n.c(),this.h()},l(r){e=h(r,"DIV",{class:!0});var u=b(e);n&&n.l(u),u.forEach(m),this.h()},h(){c(e,"class","page-transition-container svelte-1lvsk0e")},m(r,u){W(r,e,u),n&&n.m(e,null),s=!0},p(r,[u]){n&&n.p&&(!s||u&1)&&ne(n,l,r,r[0],s?re(l,r[0],u,null):ie(r[0]),null)},i(r){s||(C(n,r),Me(()=>{t&&t.end(1),o=Se(e,le,{duration:200,delay:200}),o.start()}),s=!0)},o(r){E(n,r),o&&o.invalidate(),t=Ce(e,le,{duration:0}),s=!1},d(r){r&&m(e),n&&n.d(r),r&&t&&t.end()}}}function Ge(i,e,o){let{$$slots:t={},$$scope:s}=e;return i.$$set=l=>{"$$scope"in l&&o(0,s=l.$$scope)},[s,t]}class ve extends q{constructor(e){super();z(this,e,Ge,Ve,K,{})}}function Te(i){let e,o,t,s,l,n,r,u,_,w,V,k,y,M,G,A,O,f,$,v,g;return{c(){e=p("nav"),o=p("ul"),t=p("li"),s=p("a"),l=L("Video"),r=T(),u=p("li"),_=p("a"),w=L("Audio"),k=T(),y=p("li"),M=p("a"),G=L("Game"),O=T(),f=p("li"),$=p("a"),v=L("Keyboard / Mouse"),this.h()},l(S){e=h(S,"NAV",{class:!0});var I=b(e);o=h(I,"UL",{class:!0});var P=b(o);t=h(P,"LI",{class:!0});var Z=b(t);s=h(Z,"A",{class:!0,href:!0});var J=b(s);l=N(J,"Video"),J.forEach(m),Z.forEach(m),r=D(P),u=h(P,"LI",{class:!0});var Q=b(u);_=h(Q,"A",{class:!0,href:!0});var x=b(_);w=N(x,"Audio"),x.forEach(m),Q.forEach(m),k=D(P),y=h(P,"LI",{class:!0});var ee=b(y);M=h(ee,"A",{class:!0,href:!0});var ae=b(M);G=N(ae,"Game"),ae.forEach(m),ee.forEach(m),O=D(P),f=h(P,"LI",{class:!0});var oe=b(f);$=h(oe,"A",{class:!0,href:!0});var te=b($);v=N(te,"Keyboard / Mouse"),te.forEach(m),oe.forEach(m),P.forEach(m),I.forEach(m),this.h()},h(){c(s,"class","noselect nodrag svelte-118t13j"),c(s,"href","/video"),c(t,"class",n=""+(R(i[0]==="video"?"active":"")+" svelte-118t13j")),c(_,"class","noselect nodrag svelte-118t13j"),c(_,"href","/audio"),c(u,"class",V=""+(R(i[0]==="audio"?"active":"")+" svelte-118t13j")),c(M,"class","noselect nodrag svelte-118t13j"),c(M,"href","/game"),c(y,"class",A=""+(R(i[0]==="game"?"active":"")+" svelte-118t13j")),c($,"class","noselect nodrag svelte-118t13j"),c($,"href","/keyboard-mouse"),c(f,"class",g=""+(R(i[0]==="keyboard-mouse"?"active":"")+" svelte-118t13j")),c(o,"class","svelte-118t13j"),c(e,"class","menu-navigation svelte-118t13j")},m(S,I){W(S,e,I),d(e,o),d(o,t),d(t,s),d(s,l),d(o,r),d(o,u),d(u,_),d(_,w),d(o,k),d(o,y),d(y,M),d(M,G),d(o,O),d(o,f),d(f,$),d($,v)},p(S,[I]){I&1&&n!==(n=""+(R(S[0]==="video"?"active":"")+" svelte-118t13j"))&&c(t,"class",n),I&1&&V!==(V=""+(R(S[0]==="audio"?"active":"")+" svelte-118t13j"))&&c(u,"class",V),I&1&&A!==(A=""+(R(S[0]==="game"?"active":"")+" svelte-118t13j"))&&c(y,"class",A),I&1&&g!==(g=""+(R(S[0]==="keyboard-mouse"?"active":"")+" svelte-118t13j"))&&c(f,"class",g)},i:j,o:j,d(S){S&&m(e)}}}function De(i,e,o){let t;return X(i,pe,s=>o(0,t=s)),Y(()=>{he(window.location.pathname.split("/")[1]);const s=Array.from(document.querySelectorAll(".menu-navigation a"));for(const l of s)l.addEventListener("click",()=>{he(l.getAttribute("href").split("/")[1])})}),[t]}class Re extends q{constructor(e){super();z(this,e,De,Te,K,{})}}function ge(i,e,o){const t=i.slice();return t[3]=e[o],t}function ye(i){let e,o,t=i[3].name+"",s,l,n,r,u,_,w;function V(){return i[2](i[3])}return{c(){e=p("li"),o=p("a"),s=L(t),r=T(),this.h()},l(k){e=h(k,"LI",{class:!0});var y=b(e);o=h(y,"A",{class:!0,href:!0});var M=b(o);s=N(M,t),M.forEach(m),r=D(y),y.forEach(m),this.h()},h(){c(o,"class",l="submenu-link-"+i[3].path+" noselect nodrag svelte-1cd8u2r"),c(o,"href",n="#"+i[3].path),c(e,"class",u=""+(R(i[1]===i[3].path?"active":"")+" svelte-1cd8u2r"))},m(k,y){W(k,e,y),d(e,o),d(o,s),d(e,r),_||(w=_e(o,"click",V),_=!0)},p(k,y){i=k,y&1&&t!==(t=i[3].name+"")&&ue(s,t),y&1&&l!==(l="submenu-link-"+i[3].path+" noselect nodrag svelte-1cd8u2r")&&c(o,"class",l),y&1&&n!==(n="#"+i[3].path)&&c(o,"href",n),y&3&&u!==(u=""+(R(i[1]===i[3].path?"active":"")+" svelte-1cd8u2r"))&&c(e,"class",u)},d(k){k&&m(e),_=!1,w()}}}function We(i){var l;let e,o,t=(l=i[0])!=null?l:[],s=[];for(let n=0;n<t.length;n+=1)s[n]=ye(ge(i,t,n));return{c(){e=p("nav"),o=p("ul");for(let n=0;n<s.length;n+=1)s[n].c();this.h()},l(n){e=h(n,"NAV",{class:!0});var r=b(e);o=h(r,"UL",{class:!0});var u=b(o);for(let _=0;_<s.length;_+=1)s[_].l(u);u.forEach(m),r.forEach(m),this.h()},h(){c(o,"class","svelte-1cd8u2r"),c(e,"class","submenu-navigation svelte-1cd8u2r")},m(n,r){W(n,e,r),d(e,o);for(let u=0;u<s.length;u+=1)s[u].m(o,null)},p(n,[r]){var u;if(r&3){t=(u=n[0])!=null?u:[];let _;for(_=0;_<t.length;_+=1){const w=ge(n,t,_);s[_]?s[_].p(w,r):(s[_]=ye(w),s[_].c(),s[_].m(o,null))}for(;_<s.length;_+=1)s[_].d(1);s.length=t.length}},i:j,o:j,d(n){n&&m(e),Ee(s,n)}}}function je(i,e,o){let t,s;return X(i,Ie,n=>o(0,t=n)),X(i,Pe,n=>o(1,s=n)),Y(()=>{be(window.location.href.split("#")[1])}),[t,s,n=>{be(n.path)}]}class Oe extends q{constructor(e){super();z(this,e,je,We,K,{})}}function Ke(){const i=`// ------------------------------------------------------------------------- //
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

    `;Le("autoexec.cfg",i)}function Le(i,e){let o=document.createElement("a");o.setAttribute("href",`data:text/plain;charset=utf-8,${encodeURIComponent(e)}`),o.setAttribute("download",i),o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)}function fe(i){let e,o,t;return{c(){e=p("img"),this.h()},l(s){e=h(s,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){ce(e.src,o=i[1])||c(e,"src",o),c(e,"alt",t=""+(i[0]+" button icon")),c(e,"class","nodrag svelte-1o5gy7t")},m(s,l){W(s,e,l)},p(s,l){l&2&&!ce(e.src,o=s[1])&&c(e,"src",o),l&1&&t!==(t=""+(s[0]+" button icon"))&&c(e,"alt",t)},d(s){s&&m(e)}}}function Ne(i){let e,o,t,s,l,n,r=i[1]&&fe(i);return{c(){e=p("button"),r&&r.c(),o=T(),t=p("span"),s=L(i[0]),this.h()},l(u){e=h(u,"BUTTON",{class:!0});var _=b(e);r&&r.l(_),o=D(_),t=h(_,"SPAN",{class:!0});var w=b(t);s=N(w,i[0]),w.forEach(m),_.forEach(m),this.h()},h(){c(t,"class","svelte-1o5gy7t"),c(e,"class","csgo-button noselect svelte-1o5gy7t")},m(u,_){W(u,e,_),r&&r.m(e,null),d(e,o),d(e,t),d(t,s),l||(n=_e(e,"click",i[3]),l=!0)},p(u,[_]){u[1]?r?r.p(u,_):(r=fe(u),r.c(),r.m(e,o)):r&&(r.d(1),r=null),_&1&&ue(s,u[0])},i:j,o:j,d(u){u&&m(e),r&&r.d(),l=!1,n()}}}function Be(i,e,o){let{text:t}=e,{iconPath:s=""}=e;const l=Ae(),n=()=>l("buttonClick");return i.$$set=r=>{"text"in r&&o(0,t=r.text),"iconPath"in r&&o(1,s=r.iconPath)},[t,s,l,n]}class $e extends q{constructor(e){super();z(this,e,Be,Ne,K,{text:0,iconPath:1})}}function Fe(i){let e,o,t,s,l;return o=new $e({props:{text:"Download .cfg",iconPath:"/images/icons/download-icon.svg"}}),o.$on("buttonClick",Ke),s=new $e({props:{text:"Reset Defaults",iconPath:"/images/icons/reset-icon.svg"}}),s.$on("buttonClick",i[0]),{c(){e=p("div"),B(o.$$.fragment),t=T(),B(s.$$.fragment),this.h()},l(n){e=h(n,"DIV",{class:!0});var r=b(e);F(o.$$.fragment,r),t=D(r),F(s.$$.fragment,r),r.forEach(m),this.h()},h(){c(e,"class","footer-content svelte-1jadr31")},m(n,r){W(n,e,r),U(o,e,null),d(e,t),U(s,e,null),l=!0},p:j,i(n){l||(C(o.$$.fragment,n),C(s.$$.fragment,n),l=!0)},o(n){E(o.$$.fragment,n),E(s.$$.fragment,n),l=!1},d(n){n&&m(e),H(o),H(s)}}}function Ue(i){return[()=>window.location.reload()]}class He extends q{constructor(e){super();z(this,e,Ue,Fe,K,{})}}function qe(i){let e,o;return e=new Oe({}),{c(){B(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,s){U(e,t,s),o=!0},i(t){o||(C(e.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),o=!1},d(t){H(e,t)}}}function ke(i){let e,o;return e=new ve({props:{$$slots:{default:[qe]},$$scope:{ctx:i}}}),{c(){B(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,s){U(e,t,s),o=!0},p(t,s){const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){o||(C(e.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),o=!1},d(t){H(e,t)}}}function ze(i){let e,o;const t=i[1].default,s=se(t,i,i[2],null);return{c(){e=p("main"),s&&s.c(),this.h()},l(l){e=h(l,"MAIN",{class:!0});var n=b(e);s&&s.l(n),n.forEach(m),this.h()},h(){c(e,"class","svelte-1g0w16e")},m(l,n){W(l,e,n),s&&s.m(e,null),o=!0},p(l,n){s&&s.p&&(!o||n&4)&&ne(s,t,l,l[2],o?re(t,l[2],n,null):ie(l[2]),null)},i(l){o||(C(s,l),o=!0)},o(l){E(s,l),o=!1},d(l){l&&m(e),s&&s.d(l)}}}function we(i){let e,o;return e=new ve({props:{$$slots:{default:[ze]},$$scope:{ctx:i}}}),{c(){B(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,s){U(e,t,s),o=!0},p(t,s){const l={};s&4&&(l.$$scope={dirty:s,ctx:t}),e.$set(l)},i(t){o||(C(e.$$.fragment,t),o=!0)},o(t){E(e.$$.fragment,t),o=!1},d(t){H(e,t)}}}function Ze(i){let e,o,t,s,l,n,r,u,_,w=i[0],V,k,y=i[0],M,G,A,O;r=new Re({});let f=ke(i),$=we(i);return A=new He({}),{c(){e=p("div"),o=p("div"),t=p("h1"),s=L("CS:GO CONFIG FILE GENERATOR"),l=T(),n=p("div"),B(r.$$.fragment),u=T(),_=p("div"),f.c(),V=T(),k=p("div"),$.c(),M=T(),G=p("footer"),B(A.$$.fragment),this.h()},l(v){e=h(v,"DIV",{class:!0});var g=b(e);o=h(g,"DIV",{class:!0});var S=b(o);t=h(S,"H1",{class:!0});var I=b(t);s=N(I,"CS:GO CONFIG FILE GENERATOR"),I.forEach(m),S.forEach(m),l=D(g),n=h(g,"DIV",{class:!0});var P=b(n);F(r.$$.fragment,P),P.forEach(m),u=D(g),_=h(g,"DIV",{class:!0});var Z=b(_);f.l(Z),Z.forEach(m),V=D(g),k=h(g,"DIV",{class:!0});var J=b(k);$.l(J),J.forEach(m),M=D(g),G=h(g,"FOOTER",{class:!0});var Q=b(G);F(A.$$.fragment,Q),Q.forEach(m),g.forEach(m),this.h()},h(){c(t,"class","title noselect svelte-1g0w16e"),c(o,"class","title-container svelte-1g0w16e"),c(n,"class","menu-navigation-container svelte-1g0w16e"),c(_,"class","submenu-navigation-container svelte-1g0w16e"),c(k,"class","main-content-wrapper svelte-1g0w16e"),c(G,"class","svelte-1g0w16e"),c(e,"class","main-container svelte-1g0w16e")},m(v,g){W(v,e,g),d(e,o),d(o,t),d(t,s),d(e,l),d(e,n),U(r,n,null),d(e,u),d(e,_),f.m(_,null),d(e,V),d(e,k),$.m(k,null),d(e,M),d(e,G),U(A,G,null),O=!0},p(v,[g]){g&1&&K(w,w=v[0])?(de(),E(f,1,1,j),me(),f=ke(v),f.c(),C(f),f.m(_,null)):f.p(v,g),g&1&&K(y,y=v[0])?(de(),E($,1,1,j),me(),$=we(v),$.c(),C($),$.m(k,null)):$.p(v,g)},i(v){O||(C(r.$$.fragment,v),C(f),C($),C(A.$$.fragment,v),O=!0)},o(v){E(r.$$.fragment,v),E(f),E($),E(A.$$.fragment,v),O=!1},d(v){v&&m(e),H(r),f.d(v),$.d(v),H(A)}}}function Je(i,e,o){let t;X(i,pe,n=>o(0,t=n));let{$$slots:s={},$$scope:l}=e;return Y(()=>{window.onbeforeunload=()=>""}),i.$$set=n=>{"$$scope"in n&&o(2,l=n.$$scope)},[t,s,l]}class Ye extends q{constructor(e){super();z(this,e,Je,Ze,K,{})}}export{Ye as default};
