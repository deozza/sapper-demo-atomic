<script lang="ts">
    import BaseParagraphModel from "./BaseParagraphModel";

    export let baseParagraphModel: BaseParagraphModel;
</script>

<p class="{baseParagraphModel.style} {baseParagraphModel.additionalClass}">{baseParagraphModel.content}</p>

<style>
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