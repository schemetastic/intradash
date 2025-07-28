<script>
    import { modals } from "../../stores.svelte";
    import { IconX } from "@tabler/icons-svelte";
    let { children, title = "Modal" } = $props();
</script>

<div class="modalOverlay">
    <div class="modalBox" role="dialog">
        <div class="modalBox-header">
            <h2 class="modalTitle">{title}</h2>
            <button
                class="modalBox-closeBtn"
                onclick={() => {
                    modals.parentWindow = false;
                }}><IconX size="1.5rem" /></button
            >
        </div>
        <div class="modalContent">{@render children()}</div>
    </div>
</div>

<style>
    .modalOverlay {
        background-color: rgba(0, 0, 0, 0.35);
        backdrop-filter: blur(7px);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: auto;
        z-index: 50;
    }
    .modalBox {
        background-color: var(--col-bg);
        border-radius: 1rem;
        border: 1px solid var(--col-fg);
        padding: 1.25rem;
        max-height: 95dvh;
        width: 95%;
        max-width: 860px;
        min-height: 15rem;
    }
    .modalBox-header {
        display: flex;
        width: 100%;
        gap: 1rem;
        justify-content: space-between;
        align-items: center;
    }
    .modalTitle {
        font-weight: 600;
        font-size: 2rem;
    }
    .modalBox-closeBtn {
        background-color: var(--col-bg);
        width: 2.25rem;
        height: 2.25rem;
        border: 1px solid var(--col-fg);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        border-radius: 50%;
    }
    .modalBox-closeBtn:hover {
        background-color: var(--col-main-lighter);
    }
    .modalContent {
        max-height: 70dvh;
        overflow: auto;
        width: 100%;
        padding: 1rem 0;
    }
</style>
