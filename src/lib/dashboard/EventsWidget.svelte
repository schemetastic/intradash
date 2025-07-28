<script>
    import WidgetBody from "./WidgetBody.svelte";
    import EventItem from "../misc/EventItem.svelte";
    import { eventsList } from "../static/events-list";
</script>

<WidgetBody title="Events">
    <div class="widgetBodyContainer">
        <div class="container">
            {#each eventsList as singleEvent}
                <EventItem
                    title={singleEvent.title}
                    details={singleEvent.details}
                    month={singleEvent.month}
                    day={singleEvent.day}
                />
            {/each}
        </div>
    </div>
</WidgetBody>

<style>
    .widgetBodyContainer {
        height: 100%;
        max-width: 720px;
        margin: 0 auto;
    }
    :global([data-maximized="true"] .widgetBodyContainer) {
        max-height: calc(97dvh - 4rem);
    }
    .container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
