<script lang="ts">
    import BaseHeaderModel from "../components/atoms/typography/header/BaseHeaderModel";
    import BaseHeader from "../components/atoms/typography/header/BaseHeader.svelte";

    import {_} from 'svelte-i18n';
    import BaseButtonModel from "../components/atoms/button/BaseButtonModel";
    import BaseButton from "../components/atoms/button/BaseButton.svelte";
    import BaseInputModele from "../components/atoms/input/BaseInputModel";
    import BaseInput from "../components/atoms/input/BaseInput.svelte";

    const title = $_('layout_index.page_signin.title')

    const header: BaseHeaderModel = new BaseHeaderModel($_('layout_index.page_signin.header'), 1, 'light')
    const emailInput: BaseInputModele = new BaseInputModele('email', 'email', 'email', $_('layout_index.page_signin.input_email'), true, null, 'dark')
    const passwordInput: BaseInputModele = new BaseInputModele('password', 'password', 'password', $_('layout_index.page_signin.input_password'), true, null, 'dark')

    const inputs = [
        emailInput,
        passwordInput
    ]

    const buttonSubmit: BaseButtonModel = new BaseButtonModel($_('layout_index.page_signin.button'), 'primary', 'button', 'normal', '', false, true)

</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<section>
    <div class="container">
        <BaseHeader baseHeaderModel="{header}" />
        <div class="flex-column">
            <form action="">
                <div class="flex-column">
                    <ul>
                        {#each inputs as input}
                            <BaseInput baseInputModel="{input}" />
                        {/each}
                    </ul>
                    <BaseButton baseButtonModel="{buttonSubmit}" />
                </div>
            </form>
        </div>
    </div>
</section>

<style>

    section {
        background-color: var(--primary_bg);
        height: 100vh;
    }

    section > div.container {
        margin-left: 10vw;
        height: 100%;
    }

    section > div.container > :global(h1){
        padding: 96px 0
    }

    section > div.container > div.flex-column {
        width: 100%;
    }

    form {
        background-color: black;
        border: black solid 1px;
        border-radius: 7px;
        padding: 24px 0;
    }

    form > div.flex-column > :global(p) {
        padding: 12px 0;
        text-align: center;
    }

    @media only screen and (min-width: 1024px) {
        form {
            width: 50vw;
            height: 33vh;
        }
    }

    @media only screen and (max-width: 1024px) {
        form {
            width: 80vw;
            height: 80vh;
        }
    }
</style>
