<script>
    let {
        title = "event",
        details = "details",
        month = "JAN",
        day = 10,
    } = $props();
</script>

<div class="container">
    <div class="calendarContainer">
        <figure class="calendar" aria-label="calendar">
            <span class="calendarMonth">{month}</span>
            <span class="calendarDay">{day}</span>
        </figure>
    </div>
    <div class="textContainer">
        <h3>{title}</h3>
        <p>{details}</p>
    </div>
</div>

<style>
    .container {
        background-color: var(--col-bg);
        border: 1px solid var(--col-fg);
        display: flex;
        min-height: 7rem;
        align-items: stretch;
        border-radius: 1rem;
    }

    .calendarContainer {
        display: flex;
        width: 7.75rem;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .calendar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0;
        border-radius: 1rem;
        border: 1px solid var(--col-fg);
        font-size: 16px;
        font-weight: 500;
        width: 4.5rem;
    }
    .calendarMonth {
        display: inline-block;
        width: 100%;
        color: var(--col-bg);
        background-color: var(--col-main-darker);
        border-radius: 1rem 1rem 0 0;
        text-align: center;
        padding: 0.5rem;
    }
    .calendarDay {
        display: inline-block;
        text-align: center;
        padding: 0.5rem;
        font-size: 18px;
        font-weight: 600;
    }
    .textContainer {
        display: flex;
        gap: 0.5rem;
        flex-direction: column;
        justify-content: center;
    }
    .textContainer h3 {
        font-size: 18px;
    }
    .textContainer p {
        margin: 0;
    }
</style>
