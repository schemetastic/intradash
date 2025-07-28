<script>
    import FileIcon from "./FileIcon.svelte";
    import { IconDotsVertical } from "@tabler/icons-svelte";
    const labelColors = {
        pdf: ["#FFD5D5", "#AA0000"],
        xls: ["#E5FFD5", "#338000"],
        png: ["#E6E6E6", "#333333"],
        jpg: ["#E6E6E6", "#333333"],
        txt: ["#FFFFFF", "#333333"],
        md: ["#FFFFFF", "#333333"],
    };
    let {
        fileType = "default",
        size = 65,
        unit = "px",
        fileName = "super long file name",
        extension = "txt",
        recentlyUpdated = false,
    } = $props();
</script>

<div class="fileBox">
    <div class="fileHead">
        <span
            class="fileLabel"
            style="--file-label-bg: {labelColors[
                extension
            ][0]}; --file-label-border: {labelColors[extension][1]}"
        >
            {extension.toUpperCase()}
        </span>
        <button class="fileMenuBtn"><IconDotsVertical /></button>
    </div>
    <FileIcon {fileType} {size} {unit} />
    <span class="fileName">
        {fileName.slice(0, 20)}{fileName.length > 20 ? "..." : "." + extension}
    </span>
</div>

<style>
    .fileBox {
        display: inline-flex;
        border-radius: 0.5rem;
        flex-direction: column;
        gap: 0.75rem;
        padding: 0.75rem;
        border: 1px solid var(--col-fg);
        background-color: var(--col-bg);
        text-align: center;
        width: 8.1rem;
        justify-content: center;
        align-items: center;
        cursor: default;
    }
    .fileHead {
        display: flex;
        gap: 0.5rem;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .fileMenuBtn {
        background-color: transparent;
        border: none;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .fileMenuBtn:hover {
        background-color: var(--col-main-light);
    }
    .fileLabel {
        display: inline-block;
        background-color: var(--file-label-bg);
        border: 2px solid var(--file-label-border);
        padding: 0.25rem;
        border-radius: 0.25rem;
        font-weight: 500;
    }
    .fileName {
        font-size: 16px;
        font-weight: 400;
        display: inline-block;
        max-width: 80px;
    }
    .fileBox:hover {
        background-color: var(--col-main-lighter);
    }
</style>
