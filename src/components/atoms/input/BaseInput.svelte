<script lang="ts">
    import BaseInputModele from "./BaseInputModel";

    export let baseInputModel: BaseInputModele;

    function handleInput(e) {
        baseInputModel.value = e.target.value
    }

</script>

<li class="flex-column">
    <div class="flex-row input-row">
        <label class="{baseInputModel.style}" for="{baseInputModel.id}">{baseInputModel.label} {#if baseInputModel.required}<span class="required-field">*</span>{/if}</label>
        <input type="{baseInputModel.type}" id="{baseInputModel.id}" name="{baseInputModel.name}" required="{baseInputModel.required}" value="{baseInputModel.value}" on:input={handleInput}>
    </div>
</li>


<li class="error">{baseInputModel.error}</li>

<style>
    li {
        margin: 12px 0;
    }

    li > div.input-row {
        padding: 0.5em;
        align-items: normal;
        width: 98%;
    }

    li > div.input-row > label {
        flex: 1;
        padding: 0.5em 1em 0.5em 0;
    }

    li > div.input-row >  label > span.required-field {
        margin-left: 6px;
        color: var(--danger_text);
    }

    li > div.input-row > input{
        flex: 2;
    }

    li.error {
        color: var(--danger_text);
    }

    label.light {
        color: black;
    }
    label.dark {
        color: white;
    }
    label.primary {
        color: var(--primary_text);
    }

    label.secondary {
        color: var(--secondary_text);
    }

    label.success {
        color: var(--success_text);
    }

    label.danger {
        color: var(--danger_text);
    }

    label.warning {
        color: var(--warning_text);
    }

    label.info {
        color: var(--info_text);
    }

    @media screen and (max-width: 760px) {
        li .flex-row {
            flex-direction: column;
        }
    }
</style>
