<script>
    import WidgetBody from "./WidgetBody.svelte";
    import { filesList } from "../static/filesList";
    import FileItem from "../misc/FileItem.svelte";
    import { IconSearch } from "@tabler/icons-svelte";
</script>

<WidgetBody title="Files">
    <div class="widgetBodyContainer">
        <div class="searchFile-inputContainer">
            <div class="searchFile-inputWrap">
                <button class="searchFile-btn"><IconSearch /></button>
                <input placeholder="Search a file" type="search" />
            </div>
        </div>
        <section>
            <h3>Recent</h3>
            <div class="filesContainer">
                {#each filesList as file}
                    {#if file.isRecent}
                        <FileItem
                            fileName={file.fileName}
                            fileType={file.fileType}
                            extension={file.extension}
                        />
                    {/if}
                {/each}
            </div>
        </section>
        <section>
            <h3>All Files</h3>
            <div class="filesContainer">
                {#each filesList as file}
                    <FileItem
                        fileName={file.fileName}
                        fileType={file.fileType}
                        extension={file.extension}
                    />
                {/each}
            </div>
        </section>
    </div>
</WidgetBody>

<style>
    .widgetBodyContainer {
        height: 100%;
    }
    :global([data-maximized="true"] .widgetBodyContainer) {
        max-height: calc(97dvh - 4rem);
    }
    .filesContainer {
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        gap: 1.25rem;
    }
    .searchFile-inputContainer {
        padding: 0.5rem;
        display: flex;
        justify-content: center;
    }
    .searchFile-inputWrap {
        display: flex;
        align-items: center;
        background-color: var(--col-bg);
        border: 1px solid var(--col-fg);
        height: 2.5rem;
        border-radius: 1.5rem;
        width: 50%;
        max-width: 580px;
    }
    .searchFile-btn {
        background: transparent;
        width: 2.5rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 1.5rem 0 0 1.5rem;
    }
    .searchFile-btn:hover {
        background-color: var(--col-main-lighter);
    }
    .searchFile-inputWrap input {
        width: calc(100% - 2.25rem);
        border-radius: 0 1.5rem 1.5rem 0;
        height: 100%;
        background-color: transparent;
        border: none;
        font-size: 1.25rem;
        font-weight: 400;
        padding: 0 0.5rem;
    }
    .searchFile-inputWrap input:focus {
        outline: 2px solid var(--col-main-light);
    }

    section {
        padding-top: 0.75rem;
        padding-bottom: 2rem;
        display: flex;
        gap: 1.25rem;
        flex-direction: column;
    }
    h3 {
        font-weight: 500;
        font-size: 1.25rem;
    }
</style>
