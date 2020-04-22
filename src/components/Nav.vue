<template>
    <div class="w-full h-12 flex items-center justify-between px-6">
        <router-link to="/" class="text-orange-600">Mevn</router-link>
        <div v-if="!getUser">
            <router-link class="no-underline text-brown-400 font-primary" to="/login">Sign in</router-link>
            <router-link
                    class="no-underline text-brown-400 border-2 border-orange-900 px-2 py-1 rounded-full
                        ml-3 hover:text-indigo-900 hover:border-indigo-900"
                    to="/register">Join
                Now
            </router-link>
        </div>
        <div v-else>
                <span class="cursor-pointer text-orange-400 :hover:text-orange-700"
                      @click="unsetUserAuth"
                >Logout</span>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Nav',
    computed: {
        ...mapGetters('auth', ['getUser'])
    },
    methods: {
        ...mapActions('auth', ['unsetAuth']),
        unsetUserAuth() {
            this.unsetAuth();

            if (this.$route.path === '/') {
                this.$forceUpdate();

            } else {
                this.$router.push('/');
            }

        }
    }
};
</script>

<style scoped>

</style>
