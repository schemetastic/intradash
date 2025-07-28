<script>
    import { bentos, core } from "../../stores.svelte";
    import { IconArrowsMaximize, IconX, IconMenu } from "@tabler/icons-svelte";

    let {
        title = "Widget",
        widgetState = "minimized",
        children,
        showBentoMenu = false,
    } = $props();

    let isBentoMenuOpen = $state(false);

    function toggleState() {
        widgetState = widgetState === "minimized" ? "maximized" : "minimized";
    }
</script>

<section class={widgetState}>
    <div class="header">
        <h2>{title}</h2>
        <div class="buttonsContainer">
            {#if showBentoMenu === true}
                <div class="bentoMenuContainer">
                    <button
                        class="btn bentoMenuBtn"
                        onclick={() => {
                            isBentoMenuOpen = !isBentoMenuOpen;
                        }}
                    >
                        <IconMenu size="1.5rem" />
                    </button>
                    {#if isBentoMenuOpen}
                        <div class="bentoMenuBox">
                            {#if Object.keys(bentos).length}
                                <h3>Select Bento</h3>
                                <ul class="bentoMenu">
                                    {#each Object.keys(bentos) as bento}
                                        <li>
                                            <button
                                                onclick={() => {
                                                    core.currentBento =
                                                        parseInt(
                                                            bento.slice(-1)
                                                        );
                                                    isBentoMenuOpen = false;
                                                }}
                                                class="bentoMenuItem"
                                            >
                                                {#if !bentos[bento].title.trim().length}
                                                    Untitled
                                                {:else}
                                                    {bentos[bento].title}
                                                {/if}
                                            </button>
                                        </li>
                                    {/each}
                                </ul>
                            {:else}
                                <div class="noBento">
                                    <p>
                                        There aren't bentos created, press the +
                                        button to create a new one
                                    </p>
                                </div>
                            {/if}
                        </div>
                    {/if}
                </div>
            {/if}
            <button
                class="btn maximizeBtn"
                onclick={toggleState}
                aria-label="Maximize Widget"
            >
                {#if widgetState === "minimized"}
                    <IconArrowsMaximize size="1.5rem" />
                {:else}
                    <IconX size="2.25rem" />
                {/if}
            </button>
        </div>
    </div>
    <div class="content" data-maximized={widgetState === "maximized"}>
        {@render children()}
    </div>
</section>

<style>
    section {
        width: 100%;
        height: 100%;
        position: relative;
        top: 0;
        left: 0;
        background-image: radial-gradient(
            ellipse 70% 90% at bottom,
            color-mix(in srgb, var(--col-fg-tone-90) 40%, transparent),
            color-mix(in srgb, var(--col-bg) 50%, transparent)
        );
        border-radius: 1rem;
        padding: 1rem;
        border: 1px solid var(--col-fg);
        z-index: 0;
    }
    section.maximized {
        position: fixed;
        z-index: 10;
        background-image: radial-gradient(
            ellipse 70% 90% at bottom,
            color-mix(in srgb, var(--col-fg-tone-90) 90%, transparent),
            color-mix(in srgb, var(--col-bg) 90%, transparent)
        );
        backdrop-filter: blur(7px);
        border: none;
        border-radius: 0;
    }
    .content {
        position: relative;
        padding: 1rem 0.5rem;
        overflow: auto;
        margin: 0 auto;
        max-width: 1280px;
        height: calc(100% - 2.25rem);
        scrollbar-color: transparent transparent;
        scrollbar-width: thin;
    }
    .content:hover {
        scrollbar-color: auto;
    }
    .header {
        display: flex;
        gap: 1rem;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;
        max-width: 1280px;
    }
    .buttonsContainer {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }
    .bentoMenuContainer {
        width: 2.25rem;
        height: 2.25rem;
        position: relative;
    }
    .bentoMenuBox {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding: 1rem;
        background-color: var(--col-bg);
        border-radius: 1rem;
        border: 1px solid var(--col-fg);
        position: absolute;
        top: 2.25rem;
        width: 280px;
        right: 0;
        z-index: 15;
        max-height: 300px;
        overflow: auto;
    }
    .bentoMenu {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        list-style: none;
        padding: 0;
        width: 100%;
        margin: 0;
    }
    .bentoMenuItem {
        width: 100%;
    }
    .btn {
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 50%;
        background-color: transparent;
        border: 1px solid var(--col-fg);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        color: var(--col-fg);
        transition: all ease-in-out 150ms;
        cursor: pointer;
    }
    .btn:hover {
        background-color: var(--col-main-lighter);
    }
    .maximized .maximizeBtn {
        position: absolute;
        top: 1rem;
        right: 1rem;
        width: 3.25rem;
        height: 3.25rem;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: 600;
    }
    .maximized h2 {
        font-size: 2rem;
    }
</style>
