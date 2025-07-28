<script>
    import { bentos, core } from "../../stores.svelte";
    import { coworkersList } from "../static/coworkers";
    import { IconCheck } from "@tabler/icons-svelte";

    let currentWidget = $derived(
        bentos["bento-" + core.currentBento].widgets[core.selectedWidget]
    );

    let items = $derived(currentWidget.props.team);

    function toggleItem(itemNum) {
        if (items.includes(itemNum)) {
            items.splice(items.indexOf(itemNum), 1);
        } else {
            items.push(itemNum);
        }
    }
</script>

<div class="container">
    {#each coworkersList as coworker, index}
        <button
            onclick={() => {
                toggleItem(index);
            }}
        >
            <img alt="coworker" src={coworker.img} />
            <span>{coworker.coworkerName}</span>
            {#if items.includes(index)}
                <span class="checkmark"><IconCheck size="20px" /></span>
            {/if}
        </button>
    {/each}
</div>

<style>
    .container {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        justify-content: center;
    }
    button {
        height: 160px;
        width: 145px;
        background-color: var(--col-fg);
        color: var(--col-bg);
        border-radius: 0.5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        border: 2px solid var(--col-bg);
        padding: 1rem;
        text-align: center;
        cursor: pointer;
        justify-content: space-around;
        position: relative;
    }
    button:hover {
        border: 2px solid var(--col-main);
    }
    button img {
        width: 70px;
        height: auto;
        border-radius: 50%;
    }
    button span {
        font-size: 16px;
        font-weight: 500;
    }
    .checkmark {
        background-color: var(--col-main);
        border: 1px solid var(--col-fg);
        color: var(--col-fg);
        border-radius: 1px solid;
        width: 28px;
        height: 28px;
        position: absolute;
        top: -14px;
        right: -14px;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
    }
</style>
