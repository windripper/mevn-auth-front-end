<template>
    <h1 class="text-center my-16">
        Confirming email...
    </h1>
</template>

<script>

import auth from '@/utils/api/auth/apiCalls';
import { mapActions } from 'vuex';

export default {
    name: 'EmailConfirm',
    methods: {
        ...mapActions('auth', ['setAuth'])
    },
    mounted() {
        // TODO flash message to the user
        auth.confirmEmail({
            token: this.$route.params.token
        })
            .then(response => {
                this.setAuth(response.data);
                this.$router.push('/');
            })
            .catch(() => this.$router.push('/'));
    }
};
</script>

<style scoped>

</style>
