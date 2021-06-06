<script lang="ts">
    import BaseParagraphModel from "../components/atoms/typography/paragraph/BaseParagraphModel";
    import BaseHeaderModel from "../components/atoms/typography/header/BaseHeaderModel";
    import BaseHeader from "../components/atoms/typography/header/BaseHeader.svelte";
    import BaseParagraph from "../components/atoms/typography/paragraph/BaseParagraph.svelte";

    import {_} from 'svelte-i18n';
    import BaseButtonModel from "../components/atoms/button/BaseButtonModel";
    import BaseButton from "../components/atoms/button/BaseButton.svelte";

    const headerIntro: BaseHeaderModel = new BaseHeaderModel($_('layout_index.page_index.intro_header'), 1, 'primary')
    const paragraphIntro: BaseParagraphModel = new BaseParagraphModel($_('layout_index.page_index.intro_paragraph'), 'dark', 'p-intro')

    const headerSignin: BaseHeaderModel = new BaseHeaderModel($_('layout_index.page_index.signin_header'), 2, 'primary')
    const buttonSignin: BaseButtonModel = new BaseButtonModel($_('layout_index.page_index.signin_button'), 'primary', 'button', 'normal', '', false, true)

</script>

<svelte:head>
    <title>hey</title>
</svelte:head>

<section class="intro">
    <div class="container">
        <BaseHeader baseHeaderModel={headerIntro} />
        <BaseParagraph baseParagraphModel="{paragraphIntro}"/>
    </div>
</section>

<section class="signin">
    <div class="flex-column">
        <BaseHeader baseHeaderModel="{headerSignin}" />
        <BaseButton baseButtonModel="{buttonSignin}" />
    </div>
</section>

<style>
    section.intro {
        background:
            linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),
            url(/img/index/challenger-stands-front-spooky-castle-illustration.jpg),
            no-repeat,
            center,
            center,
            fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        min-height: 53vh;
    }

    section.intro > div.container {
        margin-left: 10vw;
    }

    section.intro > div.container > :global(h1){
        margin-bottom: 7vh
    }

    :global(.p-intro) {
        font-size: 2rem;
        line-height: 3rem;
    }

    section.signin {
        background-color: black;
        height: 47vh;
    }

    section.signin > div.flex-column {
        height: 100%;
        text-align: center;
    }

    @media only screen and (min-width: 1024px) {
        section.intro {
            padding-top: 20vh;
        }
        section.intro > div.container {
            width: 65vw;
        }
    }

    @media only screen and (max-width: 1024px) {
        section.intro {
            padding-top: 2vh;
            padding-bottom: 4vh;
        }
        section.signin > div.flex-column {
            margin-left: 2%;
            width: 96%;
        }
    }
</style>
