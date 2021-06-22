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

    const headerCards: BaseHeaderModel = new BaseHeaderModel($_('layout_index.page_index.cards_header'), 2, 'light')
    const headerCardLeft: BaseHeaderModel = new BaseHeaderModel($_('layout_index.page_index.card_left_header'), 3, 'light')
    const paragraphCardLeft: BaseParagraphModel = new BaseParagraphModel($_('layout_index.page_index.card_left_paragraph'), 'light')
    const headerCardCenter: BaseHeaderModel = new BaseHeaderModel($_('layout_index.page_index.card_center_header'), 3, 'light')
    const paragraphCardCenter: BaseParagraphModel = new BaseParagraphModel($_('layout_index.page_index.card_center_paragraph'), 'light')
    const headerCardRight: BaseHeaderModel = new BaseHeaderModel($_('layout_index.page_index.card_right_header'), 3, 'light')
    const paragraphCardRight: BaseParagraphModel = new BaseParagraphModel($_('layout_index.page_index.card_right_paragraph'), 'light')

    const title = $_('layout_index.page_index.title')
</script>

<svelte:head>
    <title>{title}</title>
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

<section class="cards">
    <div class="flex-column">
        <div class="flex-column">
            <BaseHeader baseHeaderModel="{headerCards}" />
            <div class="flex-row flex-around">
                <div class="card-container flex-column">
                    <BaseHeader baseHeaderModel="{headerCardLeft}" />
                    <i class="fas fa-file-invoice fa-5x"></i>
                    <BaseParagraph baseParagraphModel="{paragraphCardLeft}" />
                </div>
                <div class="card-container flex-column">
                    <BaseHeader baseHeaderModel="{headerCardCenter}" />
                    <i class="fas fa-dice-d20 fa-5x"></i>
                    <BaseParagraph baseParagraphModel="{paragraphCardCenter}" />
                </div>
                <div class="card-container flex-column">
                    <BaseHeader baseHeaderModel="{headerCardRight}" />
                    <i class="fas fa-globe-europe fa-5x"></i>
                    <BaseParagraph baseParagraphModel="{paragraphCardRight}" />
                </div>
            </div>

        </div>
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
        height: 36vh;
    }

    section.signin > div.flex-column {
        height: 100%;
        text-align: center;
    }

    section.cards {
        padding: 96px 0;
        background-color: var(--primary_bg);
        height: 100vh;
        min-height: 100vh;
    }

    section.cards > div.flex-column {
        height: 100%;
    }


    section.cards > div.flex-column > div.flex-column,
    section.cards > div.flex-column > div.flex-column > div.flex-row{
        width: 100%;
    }

    section.cards > div.flex-column :global(h2) {
        margin-bottom: 96px;
        text-align: center;
    }

    div.card-container {
        min-height: 33vh;
    }

    div.card-container > :global(h3),
    div.card-container > :global(p) {
        text-align: center;
    }

    div.card-container > i {
        margin: 48px 0;
    }

    @media only screen and (min-width: 1024px) {
        section.intro {
            padding-top: 20vh;
        }
        section.intro > div.container {
            width: 65vw;
        }

        div.card-container {
            max-width: 20vw;
        }
    }

    @media only screen and (max-width: 1024px) {
        section.intro {
            padding-top: 2vh;
        }
        section.signin > div.flex-column {
            margin-left: 2%;
            width: 96%;
        }
        div.card-container {
            padding: 48px 0;
            width: 90%;
        }
    }
</style>
