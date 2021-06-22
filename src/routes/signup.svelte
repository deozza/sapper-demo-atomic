<script lang="ts">
    import BaseParagraphModel from "../components/atoms/typography/paragraph/BaseParagraphModel";
    import BaseHeaderModel from "../components/atoms/typography/header/BaseHeaderModel";
    import BaseHeader from "../components/atoms/typography/header/BaseHeader.svelte";
    import BaseParagraph from "../components/atoms/typography/paragraph/BaseParagraph.svelte";

    import {_} from 'svelte-i18n';
    import BaseButtonModel from "../components/atoms/button/BaseButtonModel";
    import BaseButton from "../components/atoms/button/BaseButton.svelte";

    const title = $_('layout_index.page_signup.title')


</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<section>

</section>

<style>

    section {
        background-color: black;
        height: 100vh;
    }

    @media only screen and (min-width: 1024px) {

    }

    @media only screen and (max-width: 1024px) {

    }
</style>
