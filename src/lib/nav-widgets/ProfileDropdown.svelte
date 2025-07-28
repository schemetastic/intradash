<script>
    import Popover from "svelte-popover";
    import { IconUser, IconSettings2, IconLogout } from "@tabler/icons-svelte";
    import { profile } from "../../stores.svelte";
</script>

<Popover placement="bottom-end" arrowColor="var(--col-bg)">
    <button class="navBtn profileBtn" slot="target"
        ><img src="persons/person-1.webp" alt="Profile" /></button
    >
    <nav slot="content">
        <div class="profile-info">
            <h2>{profile.firstName} {profile.lastName}</h2>
            <h3>{profile.jobTitle}</h3>
        </div>
        <ul>
            <li>
                <button class="profileItemBtn">
                    <IconUser size="28px" /><span>Profile</span>
                </button>
            </li>
            <li>
                <button class="profileItemBtn">
                    <IconSettings2 size="28px" /><span>Settings</span>
                </button>
            </li>
            <li>
                <button class="profileItemBtn">
                    <IconLogout size="28px" /><span>Logout</span>
                </button>
            </li>
        </ul>
    </nav>
</Popover>

<style>
    .profileBtn:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: var(--col-main-light);
        opacity: 0;
        transition: opacity ease-in-out 150ms;
    }
    .profileBtn:hover:after {
        opacity: 0.25;
    }
    .profileBtn img {
        width: 100%;
        height: 100%;
    }
    nav {
        background-color: var(--col-bg);
        width: 17rem;
        padding: 1rem;
        border-radius: 0.5rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .profile-info {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid var(--col-fg-tone-50);
    }
    .profile-info h2 {
        font-size: 18px;
        font-weight: 500;
    }
    .profile-info h3 {
        font-size: 16px;
        font-weight: 400;
        color: var(--col-fg-tone-up-20);
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    .profileItemBtn {
        display: flex;
        width: 100%;
        background-color: var(--col-bg);
        gap: 1rem;
        text-align: left;
        align-items: center;
        border: none;
        padding: 0.5rem;
        border-radius: 0.5rem;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        transition: background-color ease-in-out 150ms;
    }
    .profileItemBtn:hover {
        background-color: var(--col-main-lighter);
    }
    .profileItemBtn span {
        display: inline-block;
        flex-basis: 1fr;
    }
</style>
