<template>
    <h1 class="text-center my-16">
        Confirming email...
    </h1>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    name: 'EmailConfirm',
    methods: {
        ...mapActions('auth', ['confirmEmail'])
    },
    mounted() {
        this.$store.dispatch(POST_CONFIRM_EMAIL, {
            token: this.$route.params.token
        })
            .then(response => this.setAuth(response.data))
            // TODO flash message to the user
            .catch(this.$router.push('/'));
    }
};
</script>

<style scoped>

</style>
