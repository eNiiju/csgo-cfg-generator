<script lang="ts">
    import { onMount } from 'svelte';
    import { base } from '$app/paths';
    import { selectedMenu } from '../stores';
    import MenuTransition from '../components/transitions/MenuTransition.svelte';

    import MenuNavigation from '../components/layout/MenuNavigation.svelte';
    import SubmenuNavigation from '../components/layout/SubmenuNavigation.svelte';
    import FooterContent from '../components/layout/FooterContent.svelte';

    onMount(() => {
        // Reload confirmation
        window.onbeforeunload = () => {
            return '';
        };
    });
</script>

<svelte:head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=0" />
    <meta name="theme-color" content="#1d2c49" />
    <meta name="color-scheme" content="light" />
    <meta name="description" content="Create an autoexec config file from your CS:GO settings." />
    <meta property="og:site_name" content="CS:GO Config Generator" />
    <meta property="og:image" content="/images/thumbnail.jpg" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:image" content={`${base}/images/thumbnail.jpg`} />
    <meta name="apple-mobile-web-app-title" content="CS:GO Config Generator" />
    <meta name="application-name" content="CS:GO Config Generator" />
    <meta name="msapplication-TileColor" content="#1d2c49" />
    <meta name="msapplication-config" content={`${base}/browserconfig.xml`} />
    <link rel="manifest" href={`${base}/manifest.json`} />

    <!-- Global stylesheet -->
    <link rel="stylesheet" href={`${base}/global.css`} />

    <!-- Icons -->
    <link rel="shortcut icon" href="/icons/favicon.ico" />
    <link rel="icon" type="image/png" sizes="16x16" href={`${base}/icons/favicon-16x16.png`} />
    <link rel="icon" type="image/png" sizes="32x32" href={`${base}/icons/favicon-32x32.png`} />
    <link rel="apple-touch-icon" sizes="180x180" href={`${base}/icons/apple-touch-icon.png`} />
    <meta name="msapplication-TileImage" content={`${base}/icons/mstile-144x144.png`} />
</svelte:head>

<div class="main-container">
    <div class="title-container">
        <h1 class="title noselect">CS:GO CONFIG FILE GENERATOR</h1>
    </div>

    <div class="menu-navigation-container">
        <MenuNavigation />
    </div>

    <div class="submenu-navigation-container">
        <!-- Refresh when seleced menu changes -->
        {#key $selectedMenu}
            <MenuTransition>
                <SubmenuNavigation />
            </MenuTransition>
        {/key}
    </div>

    <div class="main-content-wrapper">
        <!-- Refresh when seleced menu changes -->
        {#key $selectedMenu}
            <MenuTransition>
                <main>
                    <slot />
                </main>
            </MenuTransition>
        {/key}
    </div>

    <footer>
        <FooterContent />
    </footer>
</div>

<style>
    /* ------------------------------------------------------------------------- */
    /*                                Containers                                 */
    /* ------------------------------------------------------------------------- */

    .main-container {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .title-container,
    .menu-navigation-container,
    .submenu-navigation-container {
        opacity: 80%;
        background-color: #00000030;
    }

    .title-container {
        min-height: var(--title-container-height);
        border-bottom: 1px solid var(--layout-separator);
        display: flex;
        align-items: center;
    }

    .menu-navigation-container {
        min-height: var(--menu-navigation-container-height);
        border-bottom: 1px solid var(--layout-separator);
    }

    .submenu-navigation-container {
        position: relative;
        min-height: var(--submenu-navigation-container-height);
        border-bottom: 1px solid var(--layout-separator);
    }

    .main-content-wrapper,
    footer {
        background-color: #00000050;
    }

    .main-content-wrapper {
        position: relative;
        flex: 1;
        overflow: hidden;
    }

    main {
        height: 100%;
        width: 98.5%;
        margin: 0 auto;
        overflow-y: auto;
        scroll-behavior: smooth;
    }

    footer {
        min-height: var(--footer-height);
        border-top: 1px solid var(--layout-separator);
    }

    /* ------------------------------------------------------------------------- */
    /*                                   Title                                   */
    /* ------------------------------------------------------------------------- */

    h1.title {
        margin: 0;
        margin-left: 30px;
        font-weight: 600;
        font-size: 3.3rem;
        white-space: nowrap;
    }
</style>
