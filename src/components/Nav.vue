<template>
    <div class="w-full h-12 flex flex-col px-6">
        <div v-if="isUserConfirmEmail"
             class="w-full mb-3 text-orange-900 bg-orange-300 flex items-center justify-center">
            Please confirm your account. Didn't receive an email?
            <span
                    class="underline ml-2 cursor-pointer"
                    @click="resendEmailConfirm"
            >Click here to resend the confirmation email</span>
        </div>
        <div class="w-full flex justify-between mt-3">
            <router-link to="/" class="text-orange-600">Mevn</router-link>
            <div v-if="!getUser">
                <router-link class="no-underline text-brown-400 font-primary" to="/auth/login">Sign in</router-link>
                <router-link
                        class="no-underline text-brown-400 border-2 border-orange-900 px-2 py-1 rounded-full
                        ml-3 hover:text-indigo-900 hover:border-indigo-900"
                        to="/auth/register">Join
                    Now
                </router-link>
            </div>
            <div v-else>
                <span class="cursor-pointer text-orange-400 :hover:text-orange-700"
                      @click="unsetUserAuth"
                >Logout</span>
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import auth from '@/utils/api/auth/apiCalls';

export default {
    name: 'Nav',
    computed: {
        ...mapGetters('auth', ['isUserConfirmEmail', 'getUser']),
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

        },
        resendEmailConfirm() {
            auth.resendEmailConfirm()
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
};
</script>

<style scoped>

</style>
