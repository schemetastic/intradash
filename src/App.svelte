<script>
    import { onMount } from "svelte";
    import { core, modals } from "./stores.svelte";
    import Nav from "./lib/Nav.svelte";
    import Footer from "./lib/Footer.svelte";
    import Dashboard from "./lib/Dashboard.svelte";
    import BentoSection from "./lib/BentoSection.svelte";
    import ModalParent from "./lib/modals/ModalParent.svelte";
    import ModalNewBento from "./lib/modals/ModalNewBento.svelte";
    import ModalSelectBentoWidget from "./lib/modals/ModalSelectBentoWidget.svelte";
    import ModalSelectTeam from "./lib/modals/ModalSelectTeam.svelte";
    onMount(() => {
        const mobileMediaQuery = window.matchMedia("(max-width: 960px)");

        core.isMobile = mobileMediaQuery.matches;

        mobileMediaQuery.addEventListener("change", () => {
            core.isMobile = mobileMediaQuery.matches;
        });
    });
</script>

<main>
    <Nav />
    {#if core.mode === "dashboard"}
        <Dashboard />
    {:else}
        <BentoSection />
    {/if}
    <Footer />
</main>

{#if modals.parentWindow}
    <ModalParent title={modals[modals.renderChildren].title}>
        {#if modals.renderChildren == "newBento"}
            <ModalNewBento />
        {:else if modals.renderChildren == "selectWidget"}
            <ModalSelectBentoWidget />
        {:else if modals.renderChildren == "selectTeam"}
            <ModalSelectTeam />
        {/if}
    </ModalParent>
{/if}

<style>
    main {
        min-height: 100vh;
        min-height: 100dvh;
        background-image: radial-gradient(
            ellipse 70% 90% at bottom,
            var(--col-main-lighter),
            var(--col-fg-tone-95)
        );
        background-attachment: fixed;
    }
</style>
