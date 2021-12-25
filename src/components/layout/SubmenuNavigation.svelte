<script lang="ts">
    import { onMount } from 'svelte';
    import { currentSubmenus, selectedSubmenu, selectSubmenu } from '../../stores';

    onMount(() => {
        selectSubmenu(window.location.href.split('#')[1]);
    });
</script>

<nav class="submenu-navigation">
    <ul>
        {#each $currentSubmenus ?? [] as submenu}
            <li class={$selectedSubmenu === submenu.path ? 'active' : ''}>
                <a class="submenu-link-{submenu.path} noselect nodrag" href="#{submenu.path}" on:click={() => { selectSubmenu(submenu.path) }}>{submenu.name}</a>
            </li>
        {/each}
    </ul>
</nav>

<style>
    .submenu-navigation {
        height: 100%;
        margin-left: 30px;
        overflow-x: auto;
        animation: fadeIn 300ms;
    }

    .submenu-navigation ul {
        height: 100%;
        display: flex;
        gap: 25px;
    }

    .submenu-navigation li {
        transition: box-shadow 300ms;
    }
    .submenu-navigation li:hover {
        box-shadow: #fff 0px -1px 0px 0px inset;
    }
    .submenu-navigation li.active {
        box-shadow: #fff 0px -5px 0px 0px inset;
    }

    .submenu-navigation a {
        height: 100%;
        width: 100%;
        padding: 0 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 1.4rem;
        font-weight: 300;
        letter-spacing: 1px;
        cursor: default;
        white-space: nowrap;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
</style>
