<script>
    import { core, modals, bentos } from "../../../stores.svelte";
    let { widgetId } = $props();
</script>

<div class="container">
    <div class="box">
        <button
            onclick={() => {
                core.selectedWidget = widgetId;
                modals.renderChildren = "selectWidget";
                modals.parentWindow = true;
            }}
        >
            Add a Widget
        </button>
    </div>
</div>

<style>
    .container {
        width: 100%;
        height: calc(100% - 3rem);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .box {
        position: relative;
        width: 90%;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--col-fg-tone-95);
        border: 1px solid var(--col-fg);
        border-radius: 1rem;
    }
    .box:hover {
        background-color: var(--col-fg-tone-90);
    }
    button {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        background-color: transparent;
        border: none;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
    }
</style>
