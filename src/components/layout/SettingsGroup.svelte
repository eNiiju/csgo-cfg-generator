<script lang="ts">
    import { onMount } from 'svelte';

    export let id: string;
    export let title: string;

    onMount(() => {
        // Highlight the settings group when clicking on the submenu link
        document.querySelector(`.submenu-link-${id}`)?.addEventListener('click', () => {
            const settingsGroup = document.querySelector(`.settings-group#${id}`) as HTMLElement;
            if (!settingsGroup) return;

            settingsGroup.classList.add('highlighted');
            settingsGroup.getAnimations().forEach(animation => {
                animation.cancel();
                animation.play();
            });
            setTimeout(() => settingsGroup.classList.remove('highlighted'), 0);
        });
    });
</script>

<section {id} class="settings-group">
    <h2 class="settings-group-title noselect">{title}</h2>

    <div class="settings">
        <slot />
    </div>
</section>

<style>
    section.settings-group {
        padding: 32px 64px;
        border-radius: 5px;
        width: 818px;
        margin: 0 auto;
    }
    :global(.settings-group.highlighted) {
        animation: highlightingFade 2.5s ease-in;
    }

    @keyframes highlightingFade {
        0% {
            background-color: rgba(255, 255, 255, 0.25);
        }
        100% {
            background-color: rgba(255, 255, 255, 0);
        }
    }

    h2.settings-group-title {
        color: #cccccc;
        font-weight: 700;
        font-size: 1.9rem;
        letter-spacing: 1px;
        margin: 0 0 26px 0;
    }
</style>
