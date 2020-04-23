import axios from '../axios';

const register = data => {
    return axios.post('/auth/register', data);
};

const login = data => {
    return axios.post('/auth/login', data);
};

const forgotPassword = data => {
    return axios.post('/auth/password/email', data);
};

const resetPassword = data => {
    return axios.post('/auth/password/reset', data);
};

const confirmEmail = data => {
    return axios.post('/auth/email/confirm', data);
};

const resendEmailConfirm = () => {
    return axios.post('/auth/emails/resend');
};

export default {
    register,
    login,
    forgotPassword,
    resetPassword,
    confirmEmail,
    resendEmailConfirm
};
