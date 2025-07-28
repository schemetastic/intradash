<script>
    import Logo from "./Logo.svelte";
    import { core } from "../stores.svelte";
    import MiddleNavButtons from "./nav-widgets/MiddleNavButtons.svelte";
    import ProfileDropdown from "./nav-widgets/ProfileDropdown.svelte";
</script>

<nav>
    <figure class="logo" aria-label="Intradash Logo">
        <Logo size="2.25rem" />
        <h1>Intradash</h1>
    </figure>
    <MiddleNavButtons />
    <div class="navWidgetsContainer">
        <ProfileDropdown />
    </div>
</nav>

<style>
    nav {
        display: flex;
        gap: 16px;
        justify-content: space-between;
        padding: 1.2rem;
        height: 6.15rem;
        overflow: visible;
        margin: 0 auto;
        max-width: 1440px;
    }
    .logo {
        display: flex;
        gap: 8px;
        align-items: center;
        margin: 0;
        padding: 0;
        cursor: default;
    }
    .logo h1 {
        font-size: 1.5rem;
        margin: 0;
        font-weight: 600;
    }
    .navWidgetsContainer {
        display: flex;
        gap: 1rem;
    }
</style>
