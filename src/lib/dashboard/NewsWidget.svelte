<script>
    import WidgetBody from "./WidgetBody.svelte";
    import NewsItem from "../misc/NewsItem.svelte";
    import { newsList } from "../static/news-list";
</script>

<WidgetBody title="News">
    <div class="widgetBodyContainer">
        <section>
            <h3>Today</h3>
            {#each newsList as item}
                {#if item.date === "today"}
                    <NewsItem title={item.title} type={item.type} />
                {/if}
            {/each}
        </section>
        <section>
            <h3>Yesterday</h3>
            {#each newsList as item}
                {#if item.date === "yesterday"}
                    <NewsItem title={item.title} type={item.type} />
                {/if}
            {/each}
        </section>
        <section>
            <h3>Older</h3>
            {#each newsList as item}
                {#if item.date === "older"}
                    <NewsItem title={item.title} type={item.type} />
                {/if}
            {/each}
        </section>
    </div>
</WidgetBody>

<style>
    .widgetBodyContainer {
        height: 100%;
        max-width: 720px;
        margin: 0 auto;
    }
    :global([data-maximized="true"] .widgetBodyContainer) {
        max-height: calc(97dvh - 4rem);
    }
    section:first-child {
        padding-top: 0;
    }
    section {
        display: flex;
        gap: 0.75rem;
        flex-direction: column;
        padding: 1rem;
    }
    h3 {
        font-size: 1.25rem;
        font-weight: 500;
    }
</style>
