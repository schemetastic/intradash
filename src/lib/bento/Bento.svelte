<script>
    import { core, bentos } from "../../stores.svelte";
    import BasicLayout from "./layouts/BasicLayout.svelte";
    import Equal4Layout from "./layouts/Equal4Layout.svelte";
    import CompoundLayout from "./layouts/CompoundLayout.svelte";

    let currentBento = $derived(bentos["bento-" + core.currentBento]);
</script>

<div class="bentoContainer">
    <div class="bentoContent">
        <input class="bentoTitle" bind:value={currentBento.title} />
        {#if currentBento.layout == "basic"}
            <BasicLayout />
        {:else if currentBento.layout == "4-equal"}
            <Equal4Layout />
        {:else if currentBento.layout == "compound"}
            <CompoundLayout />
        {/if}
    </div>
</div>

<style>
    .bentoTitle {
        width: 100%;
        height: 3.5rem;
        font-weight: 600;
        font-size: 2rem;
        background-color: transparent;
        border: 1px solid var(--col-fg-tone-90);
        border-radius: 0.5rem;
        padding: 0 1rem;
        max-width: 100%;
        color: var(--col-fg);
        margin: 0;
        text-align: center;
    }
    .bentoContent {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>
