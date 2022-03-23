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
    <div class="gridrow">
        <div class="gridcolumn">
            <label :for="id">{{name}}: </label>
        </div>
        <div class="gridcolumn stretchy-flex">
            <input :type="type" :id="id" :name="name" :value="value" @input="updateValue"/>
        </div>
    </div>
</template>


<style>
    .stretchy-flex {
        flex: 1;
    }
</style>