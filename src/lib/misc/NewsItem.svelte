<script>
    import IconFileExclamation from "../custom-icons/IconFileExclamation.svelte";
    import IconUserExclamation from "../custom-icons/IconUserExclamation.svelte";
    import { IconCalendarClock } from "@tabler/icons-svelte";
    const { title = "news", type = "event" } = $props();
</script>

<div class="container">
    <div class="iconContainer">
        {#if type === "file-update"}
            <IconFileExclamation size="2.25rem" />
        {:else if type === "coworker"}
            <IconUserExclamation size="2.25rem" />
        {:else if type === "event"}
            <IconCalendarClock stroke="1.5" size="2.25rem" />
        {/if}
    </div>
    <div class="titleContainer">
        <p>{title}</p>
    </div>
</div>

<style>
    .container {
        width: 100%;
        min-height: 5rem;
        display: flex;
        background-color: var(--col-bg);
        border: 1px solid var(--col-fg);
        border-radius: 0.5rem;
        align-items: stretch;
    }
    .iconContainer {
        background-color: var(--col-main-lighter);
        color: var(--col-fg);
        display: flex;
        width: 4.25rem;
        border-right: 1px solid var(--col-main-dark);
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem 0 0 0.5rem;
        flex-grow: 1;
    }
    .titleContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        width: 100%;
    }
    p {
        margin: 0;
        font-size: 16px;
        font-weight: 400;
        width: 100%;
    }
</style>
