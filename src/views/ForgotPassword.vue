<template>
    <div class="container h-12 mx-auto">
        <div class="max-w-xs mx-auto h-12 mt-20">
            <h1 class="text-center text-orange-600 text-2xl font-bold">Forgot Password</h1>
            <ValidatorObserver slim v-slot="{ handleSubmit }">
                <form class="w-full bg-white-100 shadow mt-5 rounded-sm p-12"
                      @submit.prevent="handleSubmit(forgotPassword)"
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
                    <btn
                            label="Send password reset link"
                            :disabled="loading"
                            :loading="loading"
                    />
                </form>
            </ValidatorObserver>
            <ul v-show="errors.length">
                <li v-for="error in errors" :key="error.id">
                    Field: {{ error.field }}, message: {{ error.msg }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

import TextInput from '@/components/TextInput';
import Btn from '@/components/Button';
import auth from '@/utils/api/auth/apiCalls';

export default {
    name: 'ForgotPassword',
    components: {
        TextInput,
        Btn
    },
    data: () => {
        return {
            model: {
                email: ''
            },
            loading: false
        };
    },
    methods: {
        forgotPassword() {
            this.toggleLoading();

            auth.forgotPassword(this.mode)
                .then(() => {
                    this.toggleLoading();


                    this.router.push('/');
                })
                .catch(error => {
                    this.toggleLoading();

                    // TODO server validate error render
                    this.toggleLoading();
                    console.log(error);
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
