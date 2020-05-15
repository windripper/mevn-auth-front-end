<template>
    <div class="container h-12 mx-auto">
        <div class="max-w-xs mx-auto h-12 mt-20">
            <h1 class="text-center text-orange-600 text-2xl font-bold">Register</h1>
            <ValidatorObserver slim v-slot="{ handleSubmit }">
                <form class="w-full bg-white-100 shadow mt-5 rounded-sm p-12"
                      @submit.prevent="handleSubmit(register)"
                >
                    <label class="block">Name
                        <ValidationProvider rules="required" v-slot="{ errors }" name="Name">
                            <text-input
                                    :value="model.name"
                                    v-model="model.name"
                                    placeholder="Enter Your name"
                                    name="name"
                                    type="text"
                            />
                            <span class="text-red-500 text-xs">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </label>
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
                            label="Sign Up"
                            :disabled="loading"
                            :loading="loading"
                    />
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
                name: '',
                email: '',
                password: ''
            },
            loading: false
        };
    },
    methods: {
        ...mapActions('auth', ['setAuth']),
        register() {
            this.toggleLoading();

            auth.register(this.model)
                .then(response => {
                    this.toggleLoading();

                    this.setAuth(response.data);
                    this.$router.push('/');
                })
                .catch(error => {
                    // TODO server validate error render
                    this.toggleLoading();
                    console.log(error);
                });


            console.log(`submitted with name: ${this.model.name}, email: ${this.model.email}, password: ${this.model.password}`);
        },
        toggleLoading() {
            this.loading = !this.loading;
        }
    }
};
</script>

<style scoped>

</style>
