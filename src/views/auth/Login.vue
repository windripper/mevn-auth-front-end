<template>
    <div class="container h-12 mx-auto">
        <div class="max-w-xs mx-auto h-12 mt-20">
            <h1 class="text-center text-orange-600 text-2xl font-bold">Login</h1>
            <ValidatorObserver slim v-slot="{ handleSubmit }">
                <form class="w-full bg-white-100 shadow mt-5 rounded-sm p-12"
                      @submit.prevent="handleSubmit(login)"
                >
                    <label class="block">Email
                        <ValidationProvider rules="required|email" v-slot="{ errors }" name="E-mail">
                            <text-input
                                    :value="model.email"
                                    v-model="model.email"
                                    placeholder="Enter Your email"
                                    name="email"
                                    type="email"
                            />
                            <span class="text-red-500 text-xs">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </label>
                    <label class="block">Password
                        <ValidationProvider rules="required|min:6" v-slot="{ errors }" name="Password">
                            <text-input
                                    :value="model.password"
                                    v-model="model.password"
                                    placeholder="Enter Your password"
                                    name="password"
                                    type="password"
                            />
                            <span class="text-red-500 text-xs">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </label>
                    <btn
                            label="Sign In"
                            :disabled="loading"
                            :loading="loading"
                    />
                    <div class="mt-3 w-full">
                        <router-link to="/auth/password/email"
                                     class="inline-block no-underline w-full p-3 text-white bg-teal-400 text-center
                                     rounded-sm outline-none hover:bg-teal-300"
                        >Forgot Password</router-link>
                    </div>
                </form>
            </ValidatorObserver>
        </div>
    </div>

</template>

<script>

import TextInput from '@/components/TextInput';
import Btn from '@/components/Button';
import auth from '@/utils/api/auth/apiCalls';
import { mapActions } from 'vuex';

export default {
    name: 'Register',
    components: {
        TextInput,
        Btn
    },
    data: () => {
        return {
            model: {
                email: '',
                password: ''
            },
            loading: false
        };
    },
    methods: {
        ...mapActions('auth', ['setAuth']),
        login() {
            this.toggleLoading();

            auth.login(this.model)
                .then(response => {
                    this.toggleLoading();
                    this.setAuth(response.data);

                    // TODO cannot read property '$router' of undefined if in actions
                    this.$router.push('/');
                })
                .catch(error => {
                    // TODO server validate error render
                    this.toggleLoading();

                    throw new Error(`Something went wrong: ${error}`);
                });
        },
        toggleLoading() {
            this.loading = !this.loading;
        }
    }
};
</script>

<style scoped>

</style>
