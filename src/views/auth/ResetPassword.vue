<template>
    <div class="container h-12 mx-auto">
        <div class="max-w-xs mx-auto h-12 mt-20">
            <h1 class="text-center text-orange-600 text-2xl font-bold">Reset Your password</h1>
            <ValidatorObserver slim v-slot="{ handleSubmit }">
                <form class="w-full bg-white-100 shadow mt-5 rounded-sm p-12"
                      @submit.prevent="handleSubmit(resetPassword)"
                >

                    <label class="block">New Password
                        <ValidationProvider rules="required|min:6" v-slot="{ errors }" name="Password">
                            <text-input
                                    :value="model.password"
                                    v-model="model.password"
                                    placeholder="Enter Your new password"
                                    name="password"
                                    type="password"
                            />
                            <span class="text-red-500 text-xs">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </label>
                    <btn
                            label="Reset password"
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

export default {
    name: 'ResetPassword',
    components: {
        TextInput,
        Btn
    },
    data: () => {
        return {
            model: {
                password: ''
            },
            loading: false
        };
    },
    methods: {
        resetPassword() {
            this.toggleLoading();

            auth.resetPassword({
                ...this.model,
                token: this.$route.params.token
            })
                .then(() => {
                    this.toggleLoading();

                    this.$router.push('/');
                })
                .catch(error => {

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
