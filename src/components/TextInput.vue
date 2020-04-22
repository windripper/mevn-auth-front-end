<template>
    <input class="w-full bg-gray-300 p-2 outline-none .text-gray-700 my-3"
           :placeholder="placeholder"
           :type="type"
           :name="name"
           :value="value"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus')"
           @blur="$emit('blur')"
           @change="$emit('input', $event.target.value)"
    >
</template>

<script>
export default {
    name: 'TextInput',
    props: {
        placeholder: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: false,
            default: 'text'
        },
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: false,
            default: ''
        }
    }
};
</script>

<style scoped>

</style>
