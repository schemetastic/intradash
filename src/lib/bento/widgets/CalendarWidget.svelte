<script>
    import { DatePicker } from "@svelte-plugins/datepicker";
    import { core, bentos } from "../../../stores.svelte";
    let { widgetId } = $props();
    let currentWidget = $derived(
        bentos["bento-" + core.currentBento].widgets[widgetId]
    );
</script>

<div class="container">
    <div>
        <DatePicker
            bind:startDate={currentWidget.props.date}
            alwaysShow
            isOpen
            enableFutureDates
            includeFont={false}
        />
    </div>
</div>

<style>
    .container {
        display: flex;
        height: calc(100% - 2.75rem);
        width: 100%;
        padding: 1rem;
        justify-content: center;
        align-items: center;
    }
</style>
