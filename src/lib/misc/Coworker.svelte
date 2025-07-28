<script>
    let {
        img = "persons/person-1.webp",
        coworkerName = "Jane Doe",
        position = "Writer lead",
    } = $props();
</script>

<div class="coworkerBox">
    <img src={img} alt="coworker profile" />
    <div class="group">
        <h3>{position}</h3>
        <h4>{coworkerName}</h4>
    </div>
</div>

<style>
    .coworkerBox {
        height: 225px;
        width: 165px;
        background-color: var(--col-fg);
        border-radius: 0.75rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        border: 1px solid var(--col-bg);
        padding: 1rem;
        text-align: center;
    }
    h3 {
        font-size: 16px;
        color: var(--col-bg);
        font-weight: 400;
    }
    h4 {
        font-size: 18px;
        font-weight: 500;
        color: var(--col-main-light);
    }
    img {
        border-radius: 50%;
        width: 90px;
        height: auto;
        border: 1px solid var(--col-fg);
    }
    .group {
        height: 120px;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        align-items: center;
        justify-content: space-around;
    }
</style>
