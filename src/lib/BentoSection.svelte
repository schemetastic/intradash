<script>
    import { core, bentos } from "../stores.svelte";
    import Bento from "./bento/Bento.svelte";
    import { IconTrash } from "@tabler/icons-svelte";
    import IconBento from "./custom-icons/IconBento.svelte";

    function setBento(num) {
        core.currentBento = num;
    }
    let bentosAmount = $derived(Object.keys(bentos).length);
    let firstBento = $derived(parseInt(Object.keys(bentos)[0].slice(-1)));

    function removeBento(num) {
        if (bentosAmount > 1) {
            if (num === firstBento) {
                core.currentBento = parseInt(Object.keys(bentos)[1].slice(-1));
            } else if (num === core.currentBento) {
                core.currentBento = parseInt(Object.keys(bentos)[0].slice(-1));
            }
            delete bentos["bento-" + num];
        }
    }
</script>

<section>
    <div class="container sidebarContainer">
        <h1><IconBento size="2rem" /> <span>Bentos</span></h1>
        <nav>
            <ul>
                {#each Object.keys(bentos) as bento}
                    <li class="item">
                        <button
                            class="selectBentoBtn {parseInt(bento.slice(-1)) ===
                            core.currentBento
                                ? 'active'
                                : ''}"
                            onclick={() => {
                                setBento(parseInt(bento.slice(-1)));
                            }}
                            >{#if bentos[bento].title.trim().length}
                                {bentos[bento].title}
                            {:else}
                                Untitled
                            {/if}</button
                        >
                        <button
                            class="removeBtn"
                            aria-label="Remove bento"
                            onclick={() => {
                                removeBento(parseInt(bento.slice(-1)));
                            }}><IconTrash /></button
                        >
                    </li>
                {/each}
            </ul>
        </nav>
    </div>
    <div class="container bentoContainer">
        <Bento />
    </div>
</section>

<style>
    section {
        display: flex;
        gap: 1rem;
        max-width: 1440px;
        margin: 0 auto;
        padding: 4rem 1rem 5rem 1rem;
    }

    .container {
        background-image: radial-gradient(
            ellipse 70% 90% at bottom,
            color-mix(in srgb, var(--col-fg-tone-90) 90%, transparent),
            color-mix(in srgb, var(--col-bg) 90%, transparent)
        );
        padding: 1rem;
        border: 1px solid var(--col-fg);
        border-radius: 1rem;
    }
    .sidebarContainer {
        width: 27.5%;
    }
    .bentoContainer {
        width: 72.5%;
    }
    h1 {
        font-size: 2rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    h1 span {
        display: block;
    }

    nav {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .selectBentoBtn {
        padding: 1rem;
        border-radius: 1rem;
        font-size: 16px;
        border: none;
        background-color: transparent;
        width: 20rem;
        text-align: left;
        cursor: pointer;
    }
    .selectBentoBtn:hover {
        background-color: var(--col-main-lighter);
    }
    .selectBentoBtn.active {
        background-color: var(--col-main-light);
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 2rem 0;
    }
    .item {
        display: flex;
        justify-content: stretch;
        align-items: center;
        gap: 0.25rem;
    }
    .removeBtn {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        cursor: pointer;
        background-color: var(--col-bg);
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid var(--col-fg);
    }
    .removeBtn:hover {
        background-color: var(--col-main-lighter);
    }
</style>
