<template>
    <button type="submit"
            class="w-full p-3 text-white rounded-sm outline-none hover:bg-teal-300"
            :class="{ 'bg-teal-400': !loading, 'bg-teal-200 cursor-not-allowed': loading }"
            :disabled="disabled"
            @click="$emit('click')"
    >


        <loader v-if="loading" class="mx-auto"/>
        <span v-else>{{ label }}</span>
    </button>
</template>

<script>

import Loader from '@/components/Loader';

export default {
    name: 'Button',
    components: { Loader },
    props: {
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        label: {
            type: String,
            required: true
        },
        loading: {
            type: Boolean,
            required: false,
            default: false
        }
    }
};
</script>

<style scoped>

</style>
