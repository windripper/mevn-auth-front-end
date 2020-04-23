import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';
import Register from '@/views/auth/Register';
import Login from '@/views/auth/Login';
import ForgotPassword from '@/views/auth/ForgotPassword';
import ResetPassword from '@/views/auth/ResetPassword';
import EmailConfirm from '@/views/auth/EmailConfirm';
import NotFound from '@/views/NotFound';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/auth/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/auth/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/auth/password/email',
        name: 'Forgot Password',
        component: ForgotPassword
    },
    {
        path: '/auth/password/reset/:token',
        name: 'Reset Password',
        component: ResetPassword
    },
    {
        path: '/auth/email/confirm/:token',
        name: 'Email Confirm',
        component: EmailConfirm
    },
    {
        path: '/404',
        name: 'Not Found',
        component: NotFound
    },
    {
        path: '*',
        redirect: '/404'
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
