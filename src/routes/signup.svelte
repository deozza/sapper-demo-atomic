<script lang="ts">

    import BaseHeaderModel from "../components/atoms/typography/header/BaseHeaderModel";
    import BaseHeader from "../components/atoms/typography/header/BaseHeader.svelte";

    import {_} from 'svelte-i18n';
    import BaseButtonModel from "../components/atoms/button/BaseButtonModel";
    import BaseButton from "../components/atoms/button/BaseButton.svelte";
    import BaseInputModele from "../components/atoms/input/BaseInputModel";
    import BaseInput from "../components/atoms/input/BaseInput.svelte";
    import BaseParagraphModel from "../components/atoms/typography/paragraph/BaseParagraphModel";
    import BaseParagraph from "../components/atoms/typography/paragraph/BaseParagraph.svelte";
    import BaseLinkModel from "../components/atoms/link/BaseLinkModel"
    import BaseLink from "../components/atoms/link/BaseLink.svelte"

    const title = $_('layout_index.page_signup.title')

    const header: BaseHeaderModel = new BaseHeaderModel($_('layout_index.page_signup.header'), 1, 'light')
    const emailInput: BaseInputModele = new BaseInputModele('email', 'email', 'email', $_('layout_index.page_signup.input_email'), true, null, 'dark')
    const usernameInput: BaseInputModele = new BaseInputModele('text', 'username', 'username', $_('layout_index.page_signup.input_username'), true, null, 'dark')
    const passwordInput: BaseInputModele = new BaseInputModele('password', 'password', 'password', $_('layout_index.page_signup.input_password'), true, null, 'dark')
    const repeatPasswordInput: BaseInputModele = new BaseInputModele('password', 'repeatPassword', 'repeatPassword', $_('layout_index.page_signup.input_repeat_password'), true, null, 'dark')

    const inputs = [
        emailInput,
        usernameInput,
        passwordInput,
        repeatPasswordInput
    ]

    const buttonSubmit: BaseButtonModel = new BaseButtonModel($_('layout_index.page_signup.button'), 'primary', 'submit', 'normal', '', false, true)
    const paragraphSignup: BaseParagraphModel = new BaseParagraphModel($_('layout_index.page_signup.paragraph_signin'), 'dark')
    const linkToSignup: BaseLinkModel = new BaseLinkModel($_('layout_index.page_signup.link_to_signin'), 'primary', './signin')

    function createAccount(){
        console.log('ouais')
        console.log(inputs)
    }

</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<section>
    <div class="container">
        <BaseHeader baseHeaderModel="{header}" />
        <div class="flex-column">
            <form on:submit|preventDefault={createAccount}>
                <div class="flex-column">
                    <ul>
                        {#each inputs as input}
                            <BaseInput baseInputModel="{input}" bind:value={input.value}/>
                        {/each}
                    </ul>
                    <BaseButton baseButtonModel="{buttonSubmit}" />

                    <BaseParagraph baseParagraphModel="{paragraphSignup}" />
                    <BaseLink baseLinkModel="{linkToSignup}" />
                </div>
            </form>
        </div>
    </div>
</section>

<style>

    section {
        background-color: var(--primary_bg);
        min-height: 100vh;
    }

    section > div.container {
        margin-left: 10vw;
        margin-right: 10vw;
        min-height: 100%;

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

    form > div.flex-column > ul {
        width: 90%;
    }

    @media only screen and (min-width: 1024px) {
        form {
            width: 50vw;
            min-height: 33vh;
        }
    }

    @media only screen and (max-width: 1024px) {
        form {
            width: 80vw;
            height: 80vh;
        }
    }
</style>