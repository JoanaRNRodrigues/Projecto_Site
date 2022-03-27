<script>
    export default{
        props: {
            name: String,
            id: String,
            type: String,
            value: [String, Number, Boolean]
        },
        methods: {
        updateValue(event) {
            this.$emit('update:value', event.target.value);
        }
    }
    }
</script>


<template>
    <div class="input-gridrow input-section">
        <div class="input-gridcolumn">
            <label class="input-label" :for="id">{{name}}: </label>
        </div>
        <div class="input-gridcolumn stretchy-flex">
            <input :type="type" :id="id" :name="name" :value="value" @input="updateValue"/>
        </div>
    </div>
</template>


<style>
    .input-gridrow {
        width:100%;
        display: flex;
        padding: 10px 0;
    }
    .input-gridcolumn {
        min-width:25%;
    }
    .stretchy-flex {
        flex: 1;
    }
    .input-section {

    }
    .input-label {
        font-weight: bold;
        padding: 5px 10px;
        float:right;
    }
</style>