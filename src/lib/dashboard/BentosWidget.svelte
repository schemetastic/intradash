<script>
    import WidgetBody from "./WidgetBody.svelte";
    import Bento from "../bento/Bento.svelte";
    import NoBentos from "../bento/NoBentos.svelte";
    import { bentos } from "../../stores.svelte";
</script>

<WidgetBody title="Bentos" showBentoMenu={true}>
    <div class="widgetBodyContainer">
        {#if Object.keys(bentos).length}
            <Bento />
        {:else}
            <NoBentos />
        {/if}
    </div>
</WidgetBody>

<style>
    .widgetBodyContainer {
        height: 100%;
    }
    :global([data-maximized="true"] .widgetBodyContainer) {
        max-height: calc(97dvh - 4rem);
    }
</style>
