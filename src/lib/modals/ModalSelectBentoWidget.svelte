<script>
    import { core, bentos, modals } from "../../stores.svelte";
    import { bentoWidgetProps } from "../static/bento-widget-props";
    import {
        IconCalendarWeek,
        IconNote,
        IconUsers,
    } from "@tabler/icons-svelte";
    let currentWidget = $derived(
        bentos["bento-" + core.currentBento].widgets[core.selectedWidget]
    );

    function setWidget(widgetType) {
        currentWidget.type = widgetType;
        currentWidget.props = structuredClone(bentoWidgetProps[widgetType]);
        modals.parentWindow = false;
    }
</script>

<div class="container">
    <button
        onclick={() => {
            setWidget("text-note");
        }}
    >
        <IconNote size="2.25rem" />
        <span>Text Note</span>
    </button>

    <button
        onclick={() => {
            setWidget("calendar");
        }}
    >
        <IconCalendarWeek size="2.25rem" />
        <span>Calendar</span>
    </button>

    <button
        onclick={() => {
            setWidget("select-team");
        }}
    >
        <IconUsers size="2.25rem" />
        <span>Team List</span>
    </button>
</div>

<style>
    .container {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        justify-content: center;
        padding: 2rem 0 1rem 0;
    }
    button {
        background-color: var(--col-main-lighter);
        padding: 1rem;
        font-size: 1.25rem;
        font-weight: 500;
        border-radius: 0.5rem;
        border: 1px solid var(--col-fg);
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        cursor: pointer;
    }
    button:hover {
        background-color: var(--col-main-light);
    }
</style>
