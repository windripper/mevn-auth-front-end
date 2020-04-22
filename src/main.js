import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/style.css';

Vue.config.productionTip = false;

// validation
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';

// validation rules
extend('required', required);
extend('email', email);
extend('min', min);

// global components
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidatorObserver', ValidationObserver);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
