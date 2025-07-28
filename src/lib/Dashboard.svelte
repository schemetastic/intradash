<script>
    import { profile } from "../stores.svelte";
    import NewsWidget from "./dashboard/NewsWidget.svelte";
    import FilesWidget from "./dashboard/FilesWidget.svelte";
    import EventsWidget from "./dashboard/EventsWidget.svelte";
    import BentosWidget from "./dashboard/BentosWidget.svelte";
    import CoworkersWidget from "./dashboard/CoworkersWidget.svelte";
</script>

<section id="dashboard" aria-label="Dashboard">
    <header>
        <h1 class="title">Welcome {profile.firstName}!</h1>
    </header>
    <div class="widgetsGrid">
        <div class="widgetContainer">
            <NewsWidget />
        </div>
        <div class="widgetContainer">
            <BentosWidget />
        </div>
        <div class="widgetContainer">
            <EventsWidget />
        </div>
        <div class="widgetContainer">
            <CoworkersWidget />
        </div>
        <div class="widgetContainer">
            <FilesWidget />
        </div>
    </div>
</section>

<style>
    #dashboard {
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 1440px;
        padding: 2rem 1rem;
        position: relative;
        z-index: 0;
    }
    .title {
        font-size: 2rem;
        font-weight: 600;
    }
    .widgetsGrid {
        display: grid;
        grid-template-columns: 0.35fr repeat(2, 0.325fr);
        grid-template-rows: repeat(3, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        min-height: 70rem;
    }
    .widgetContainer {
        padding: 0.75rem;
    }

    .widgetsGrid div:nth-child(1) {
        grid-area: 1 / 1 / 2 / 2;
        max-height: 60dvh;
    }
    .widgetsGrid div:nth-child(2) {
        grid-area: 1 / 2 / 3 / 4;
        max-height: 120dvh;
    }
    .widgetsGrid div:nth-child(3) {
        grid-area: 2 / 1 / 3 / 2;
        max-height: 60dvh;
    }
    .widgetsGrid div:nth-child(4) {
        grid-area: 3 / 1 / 4 / 2;
        max-height: 60dvh;
    }
    .widgetsGrid div:nth-child(5) {
        grid-area: 3 / 2 / 4 / 4;
        max-height: 60dvh;
    }
</style>
