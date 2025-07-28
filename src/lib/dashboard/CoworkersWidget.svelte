<script>
    import WidgetBody from "./WidgetBody.svelte";
    import { coworkersList } from "../static/coworkers";
    import Coworker from "../misc/Coworker.svelte";
</script>

<WidgetBody title="Coworkers">
    <div class="widgetBodyContainer">
        <div class="coworkersContainer">
            {#each coworkersList as coworker}
                <Coworker
                    coworkerName={coworker.coworkerName}
                    position={coworker.position}
                    img={coworker.img}
                />
            {/each}
        </div>
    </div>
</WidgetBody>

<style>
    .widgetBodyContainer {
        height: 100%;
    }
    :global([data-maximized="true"] .widgetBodyContainer) {
        max-height: calc(97dvh - 4rem);
    }
    .coworkersContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 1.25rem;
        justify-content: center;
    }
</style>
