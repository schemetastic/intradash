<script>
    import { core, bentos } from "../../../stores.svelte";
    let { widgetId } = $props();
    let currentWidget = $derived(
        bentos["bento-" + core.currentBento].widgets[widgetId]
    );
</script>

<div class="container">
    <textarea bind:value={currentWidget.props.content}></textarea>
</div>

<style>
    .container {
        width: 100%;
        height: calc(100% - 2.75rem);
        display: flex;
    }
    textarea {
        width: 100%;
        height: 100%;
        padding: 1rem;
        border: none;
        background-color: transparent;
        color: inherit;
        border-radius: 0 0 1rem 1rem;
        font-size: 18px;
        resize: none;
    }
</style>
