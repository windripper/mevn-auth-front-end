<template>
    <div class="my-32">
        <h1 v-if="!getUser" class="text-center text-brown-400">Mevn Auth</h1>
        <h1 v-else class="text-center text-brown-400">Welcome, {{ getUserName }}</h1>
    </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: 'Home',
    computed: {
        // TODO when user just login it doesn't show his name
        ...mapGetters('auth', ['getUser', 'getUserName'])
    }
};
</script>

<style scoped>

</style>
