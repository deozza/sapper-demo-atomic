<script lang="ts">
    import BaseHeaderModel from "./BaseHeaderModel";

    export let baseHeaderModel: BaseHeaderModel;
</script>

{#if (baseHeaderModel.size === 1)}
    <h1 class="{baseHeaderModel.style}">{baseHeaderModel.content}</h1>
{:else if (baseHeaderModel.size === 2)}
    <h2 class="{baseHeaderModel.style}">{baseHeaderModel.content}</h2>
{:else if (baseHeaderModel.size === 3)}
    <h3 class="{baseHeaderModel.style}">{baseHeaderModel.content}</h3>
{:else if (baseHeaderModel.size === 4)}
    <h4 class="{baseHeaderModel.style}">{baseHeaderModel.content}</h4>
{:else if (baseHeaderModel.size === 5)}
    <h5 class="{baseHeaderModel.style}">{baseHeaderModel.content}</h5>
{:else}
    <h6 class="{baseHeaderModel.style}">{baseHeaderModel.content}</h6>
{/if}

<style>
    h1 {
        font-size: 4vw;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.75rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 20px 0 20px 0;
        font-family: 'MedievalSharp', cursive;
    }

    .light {
        color: black;
    }
    .dark {
        color: white;
    }
    .primary {
        color: var(--primary_text);
    }

    .secondary {
        color: var(--secondary_text);
    }

    .success {
        color: var(--success_text);
    }

    .danger {
        color: var(--danger_text);
    }

    .warning {
        color: var(--warning_text);
    }

    .info {
        color: var(--info_text);
    }
</style>