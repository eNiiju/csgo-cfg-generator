<script lang="ts">
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import { selectedMenu, selectMenu } from '../../stores';

    onMount(() => {
        const s = window.location.pathname.split('/')[1]
        selectMenu(s[s.length - 1]);

        // On menu link click : update selected menu
        const menuLinks = Array.from(document.querySelectorAll('.menu-navigation a'));
        for (const menuLink of menuLinks) {
            menuLink.addEventListener('click', () => {
                const s = menuLink.getAttribute('href').split('/')
                selectMenu(s[s.length - 1]);
            });
        }
    });
</script>

<nav class="menu-navigation">
    <ul>
        <li class={$selectedMenu === 'video' ? 'active' : ''}>
            <a class="noselect nodrag" href={`${base}/video`}>Video</a>
        </li>

        <li class={$selectedMenu === 'audio' ? 'active' : ''}>
            <a class="noselect nodrag" href={`${base}/audio`}>Audio</a>
        </li>

        <li class={$selectedMenu === 'game' ? 'active' : ''}>
            <a class="noselect nodrag" href={`${base}/game`}>Game</a>
        </li>

        <li class={$selectedMenu === 'keyboard-mouse' ? 'active' : ''}>
            <a class="noselect nodrag" href={`${base}/keyboard-mouse`}>Keyboard / Mouse</a>
        </li>
    </ul>
</nav>

<style>
    .menu-navigation {
        height: 100%;
        margin-left: 30px;
        overflow-x: auto;
    }

    .menu-navigation ul {
        height: 100%;
        display: flex;
        gap: 25px;
    }

    .menu-navigation li {
        transition: box-shadow 300ms;
    }
    .menu-navigation li:hover {
        box-shadow: #fff 0px -1px 0px 0px inset;
    }
    .menu-navigation li.active {
        box-shadow: #fff 0px -5px 0px 0px inset;
    }

    .menu-navigation a {
        height: 100%;
        width: 100%;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 1.8rem;
        font-weight: 400;
        letter-spacing: 1px;
        cursor: default;
        white-space: nowrap;
    }
</style>
