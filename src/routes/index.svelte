<script lang="ts">
    import BaseParagraphModel from "../components/atoms/typography/paragraph/BaseParagraphModel";
    import BaseHeaderModel from "../components/atoms/typography/header/BaseHeaderModel";
    import BaseHeader from "../components/atoms/typography/header/BaseHeader.svelte";

    const header: BaseHeaderModel = new BaseHeaderModel('Wesh', 1, 'primary')
    const paragraph: BaseParagraphModel = new BaseParagraphModel('hein ?')
</script>

<svelte:head>
    <title>hey</title>
</svelte:head>

<BaseHeader baseHeaderModel={header} />