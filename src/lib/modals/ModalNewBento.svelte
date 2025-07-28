<script>
    import { IconPlus } from "@tabler/icons-svelte";
    import IconBentoBasic from "../custom-icons/IconBentoBasic.svelte";
    import IconBentoCompound from "../custom-icons/IconBentoCompound.svelte";
    import IconBento4Equal from "../custom-icons/IconBento4Equal.svelte";

    import { core, bentos, modals } from "../../stores.svelte";

    import { bentoLayouts } from "../static/bento-layouts-obj";

    let selectedLayout = $state("basic");
    let bentoName = $state("");

    function createBento() {
        bentos["bento-" + core.nextBento] = structuredClone(
            bentoLayouts[selectedLayout]
        );
        bentos["bento-" + core.nextBento].title = bentoName.trim().length
            ? bentoName
            : "New Bento";
        core.currentBento = core.nextBento;
        modals.parentWindow = false;
        core.nextBento += 1;
    }
</script>

<div>
    <div class="section">
        <h3>Name your Bento</h3>
        <input class="bentoNameInput" bind:value={bentoName} type="text" />
    </div>
    <div class="section">
        <h3>Choose a layout</h3>
        <div class="BentoBtnsContainer">
            <div class="bentoSelectBtn-box">
                <button
                    onclick={() => {
                        selectedLayout = "basic";
                    }}
                    class="bentoSelectBtn {selectedLayout === 'basic'
                        ? 'active'
                        : ''}"
                    aria-label="Bento Small"
                >
                    <IconBentoBasic />
                </button>
                <span>Basic</span>
            </div>
            <div class="bentoSelectBtn-box">
                <button
                    onclick={() => {
                        selectedLayout = "4-equal";
                    }}
                    class="bentoSelectBtn {selectedLayout === '4-equal'
                        ? 'active'
                        : ''}"
                    aria-label="Bento Medium"
                >
                    <IconBento4Equal />
                </button>
                <span>4 Equal</span>
            </div>
            <div class="bentoSelectBtn-box">
                <button
                    onclick={() => {
                        selectedLayout = "compound";
                    }}
                    class="bentoSelectBtn {selectedLayout === 'compound'
                        ? 'active'
                        : ''}"
                    aria-label="Bento Medium"
                >
                    <IconBentoCompound />
                </button>
                <span>Compound</span>
            </div>
        </div>
    </div>
    <div class="section">
        <div class="createBtnContainer">
            <button class="btn btn-primary" onclick={createBento}
                ><IconPlus /> <span>Create</span></button
            >
        </div>
    </div>
</div>

<style>
    h3 {
        font-size: 1.5rem;
        font-weight: 500;
    }
    .section {
        padding: 1rem 0 1.25rem 0;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }
    .section:last-child {
        padding: 1rem 0 0 0;
    }
    .BentoBtnsContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-left: 1.5rem;
    }
    .bentoSelectBtn-box {
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
        align-items: center;
    }
    .bentoSelectBtn {
        background-color: var(--col-bg);
        border: 1px solid var(--col-fg);
        padding: 0.5rem;
        border-radius: 0.5rem;
        cursor: pointer;
    }
    .bentoSelectBtn:hover {
        background-color: var(--col-fg-tone-90);
    }
    .bentoSelectBtn.active {
        background-color: var(--col-main-light);
    }

    .bentoSelectBtn-box span {
        display: inline-block;
        font-size: 16px;
        font-weight: 400;
    }
    .createBtnContainer {
        text-align: center;
    }
    .bentoNameInput {
        width: 90%;
        max-width: 30rem;
        height: 3rem;
        border: 1px solid var(--col-fg);
        border-radius: 2rem;
        font-size: 1.5rem;
        font-weight: 400;
        color: var(--col-main-darker);
        padding: 0 1rem;
        margin-left: 1.5rem;
    }
    button {
        display: inline-flex;
    }
</style>
