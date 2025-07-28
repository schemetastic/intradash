<script>
    import { IconDotsVertical } from "@tabler/icons-svelte";
    import { core, bentos } from "../../stores.svelte";
    import SelectWidget from "./widgets/SelectWidget.svelte";
    import TextNotesWidget from "./widgets/TextNotesWidget.svelte";
    import CalendarWidget from "./widgets/CalendarWidget.svelte";
    import SelectTeamWidget from "./widgets/SelectTeamWidget.svelte";
    let { widgetId } = $props();
    let currentWidget = $derived(
        bentos["bento-" + core.currentBento].widgets[widgetId]
    );

    const colors = [
        "--col-bg",
        "--col-fg",
        "--col-main-lighter",
        "--col-main-light",
        "--col-main",
        "--col-main-dark",
        "--col-main-darker",
    ];

    const theme = $derived(
        [1, 5, 6].includes(currentWidget.color) ? "dark" : "light"
    );
    let menuOpen = $state(false);

    function resetWidget() {
        currentWidget.type = "select";
        currentWidget.props = structuredClone({});
        menuOpen = false;
    }
</script>

<section
    class="widgetBox"
    data-widget-theme={theme}
    style="--widget-color: var({colors[currentWidget.color]})"
>
    <div class="widgetHeader">
        <input class="widgetTitle" bind:value={currentWidget.title} />
        <div class="menuContainer">
            <button
                class="menuBtn"
                aria-label="menu"
                onclick={() => {
                    menuOpen = !menuOpen;
                }}><IconDotsVertical /></button
            >
            {#if menuOpen}
                <div class="menu">
                    <div class="menuGroup">
                        <h4>Select a color</h4>
                        <div class="selectColorsContainer">
                            {#each colors as color, index}
                                <button
                                    class="selectColorBtn"
                                    style="--btn-color: var({color})"
                                    onclick={() => {
                                        currentWidget.color = index;
                                        menuOpen = false;
                                    }}
                                    aria-label="select color"
                                ></button>
                            {/each}
                        </div>
                    </div>
                    <div class="menuGroup">
                        <button
                            class="resetBtn"
                            onclick={() => {
                                resetWidget();
                            }}>Reset Widget Space</button
                        >
                    </div>
                </div>
            {/if}
        </div>
    </div>
    <div class="widgetContainer">
        {#if currentWidget.type == "select"}
            <SelectWidget {widgetId} />
        {:else if currentWidget.type == "text-note"}
            <TextNotesWidget {widgetId} />
        {:else if currentWidget.type == "calendar"}
            <CalendarWidget {widgetId} />
        {:else if currentWidget.type == "select-team"}
            <SelectTeamWidget {widgetId} />
        {/if}
    </div>
</section>

<style>
    .widgetBox {
        background-color: var(--widget-color);
        border: 1px solid var(--col-fg);
        height: 100%;
        border-radius: 1rem;
    }
    .widgetHeader {
        display: flex;
        justify-content: space-between;
    }
    .widgetTitle {
        width: calc(100% - 2.5rem);
        border-radius: 1rem 0 0 0;
        padding: 0 1rem;
        height: 2.5rem;
        border: none;
        background-color: transparent;
        color: inherit;
        font-weight: 500;
        font-size: 1.5rem;
    }
    .menuContainer {
        height: 2.5rem;
        position: relative;
        width: 2.5rem;
        overflow: visible;
    }
    .menuBtn {
        width: 2.25rem;
        height: 2.25rem;
        position: relative;
        left: 0.125rem;
        top: 0.125rem;
        border: none;
        background-color: transparent;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: inherit;
        cursor: pointer;
        border-radius: 50%;
    }
    .menuBtn:hover {
        background-color: color-mix(
            in srgb,
            var(--col-main) 60%,
            rgba(115, 115, 115, 0.5)
        );
        border: 1px solid var(--col-fg);
    }
    .menu {
        background-color: var(--col-bg);
        padding: 1rem;
        border: 1px solid var(--col-fg-tone-50);
        display: inline-flex;
        gap: 1.5rem;
        position: absolute;
        color: var(--col-fg);
        top: 3rem;
        width: 275px;
        text-align: center;
        flex-direction: column;
        align-items: center;
        border-radius: 0.5rem;
        right: 0;
        z-index: 5;
    }
    .menuGroup {
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
    }
    .selectColorsContainer {
        display: flex;
        gap: 0.25rem;
    }
    .selectColorBtn {
        width: 2rem;
        height: 2rem;
        cursor: pointer;
        flex-wrap: wrap;
        border-radius: 50%;
        background-color: var(--btn-color);
        border: 1px solid var(--col-fg);
    }
    .selectColorBtn:hover {
        scale: 1.1;
    }
    .widgetContainer {
        height: 100%;
    }
    .resetBtn {
        background-color: var(--col-main-lighter);
        border: 1px solid var(--col-fg);
        padding: 0.75rem;
        font-size: 16px;
        border-radius: 0.5rem;
        cursor: pointer;
    }
    .resetBtn:hover {
        background-color: var(--col-main-light);
    }
</style>
