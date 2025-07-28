<script>
    import BentoWidgetContainer from "../BentoWidgetContainer.svelte";
</script>

<div class="grid">
    <div><BentoWidgetContainer widgetId={0} /></div>
    <div><BentoWidgetContainer widgetId={1} /></div>
    <div><BentoWidgetContainer widgetId={2} /></div>
    <div><BentoWidgetContainer widgetId={3} /></div>
    <div><BentoWidgetContainer widgetId={4} /></div>
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 1rem;
        min-height: 75rem;
    }
    .grid div:nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
    }
    .grid div:nth-child(2) {
        grid-area: 2 / 1 / 3 / 2;
    }
    .grid div:nth-child(3) {
        grid-area: 1 / 2 / 3 / 3;
    }
    .grid div:nth-child(4) {
        grid-area: 3 / 1 / 4 / 2;
    }
    .grid div:nth-child(5) {
        grid-area: 3 / 2 / 4 / 3;
    }
</style>
