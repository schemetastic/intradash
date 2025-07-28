<script>
    import { core, modals } from "../../stores.svelte";
    import IconDashboard from "../custom-icons/IconDashboard.svelte";
    import IconBento from "../custom-icons/IconBento.svelte";
    import { IconPlus } from "@tabler/icons-svelte";
</script>

<div class="buttonsContainer">
    <button
        onclick={() => {
            core.mode = "dashboard";
        }}
        class="{!core.isMobile ? 'longBtn' : 'roundBtn'} {core.mode ==
        'dashboard'
            ? 'active'
            : ''}"
    >
        <IconDashboard size="2rem" />
        {#if !core.isMobile}
            <span>Dashboard</span>
        {/if}
    </button>
    <div class="bentoBtns">
        <button
            onclick={() => {
                core.mode = "bento";
            }}
            class="{!core.isMobile ? 'longBtn' : 'roundBtn'} {core.mode ==
            'bento'
                ? 'active'
                : ''}"
        >
            <IconBento size="2rem" />
            {#if !core.isMobile}
                <span>Bentos</span>
            {/if}
        </button>
        <div class="line"></div>
        <button
            onclick={() => {
                modals.renderChildren = "newBento";
                modals.parentWindow = true;
            }}
            class="roundBtn ctaBtn"
        >
            <IconPlus />
        </button>
    </div>
</div>

<style>
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--col-fg);
        background-color: var(--col-bg);
        cursor: pointer;
    }
    button:hover {
        background-color: var(--col-main-lighter);
    }
    .longBtn {
        height: 2.75rem;
        gap: 0.5rem;
        font-size: 18px;
        padding: 0 1.25rem 0 0.75rem;
        border-radius: 2rem;
        border: 1px solid var(--col-fg);
    }
    .longBtn.active {
        background-color: var(--col-main-light);
    }
    .roundBtn {
        height: 2.75rem;
        width: 2.75rem;
        border-radius: 50%;
    }
    .ctaBtn {
        background-color: var(--col-main);
    }
    .ctaBtn:hover {
        background-color: var(--col-main-light);
    }
    .buttonsContainer {
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .bentoBtns {
        display: flex;
        align-items: center;
    }
    .line {
        width: 1rem;
        height: 1px;
        background-color: var(--col-fg);
    }
</style>
