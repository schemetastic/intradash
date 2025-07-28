<script>
    import { core, bentos, modals } from "../../../stores.svelte";
    import { coworkersList } from "../../static/coworkers";
    import Coworker from "../../misc/Coworker.svelte";
    import IconUserEdit from "../../custom-icons/IconUserEdit.svelte";
    let { widgetId } = $props();
    let currentWidget = $derived(
        bentos["bento-" + core.currentBento].widgets[widgetId]
    );

    function openModal() {
        core.selectedWidget = widgetId;
        modals.renderChildren = "selectTeam";
        modals.parentWindow = true;
    }
</script>

<div class="container">
    <button onclick={openModal}
        ><IconUserEdit size="2rem" /><span>Select Team</span></button
    >
    <div class="teamContainer">
        {#each currentWidget.props.team as member}
            <Coworker
                coworkerName={coworkersList[member].coworkerName}
                img={coworkersList[member].img}
                position={coworkersList[member].position}
            />
        {/each}
    </div>
</div>

<style>
    .container {
        display: flex;
        padding: 0.5rem;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
    }
    .teamContainer {
        display: flex;
        flex-wrap: wrap;
        padding: 0.75rem 0.5rem;
        justify-content: center;
        gap: 0.5rem;
        width: 100%;
        min-height: 120px;
        border-radius: 1rem;
    }
    button {
        display: flex;
        background-color: var(--col-fg-tone-90);
        border: 1px solid var(--col-fg);
        cursor: pointer;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding: 0.5rem 1.25rem;
        border-radius: 1rem;
        font-size: 20px;
        font-weight: 500;
    }
    button:hover {
        background-color: var(--col-main-lighter);
    }
</style>
